<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;

use App\Models\Service;
use App\Models\TempImage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

use Intervention\Image\ImageManager;
use Intervention\Image\Drivers\Gd\Driver;

class ServiceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
       $services=Service::orderBy('created_at','DESC')->get();

       return response()->json([
        'status'=>true,
        'data' => $services
    ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required',
            'slug' => 'required|unique:services,slug',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'errors' => $validator->errors()
            ], 422);
        }
        $model = new Service();
        $model->title=$request->title;
        $model->slug=Str::slug($request->slug);
        $model->short_desc=$request->short_desc;
        $model->content=$request->content;
        $model->status=$request->status;

        $model->save();

        if ($request->imageId > 0) {
        
            $tempImage = TempImage::find($request->imageId);
            if ($tempImage != null) {
                $extArray = explode('.', $tempImage->name);
                $ext = last($extArray);
        
                $fileName = strtotime('now') . $model->id . '.' . $ext;
        
                // ✅ ইমেজ লোড করা (সরাসরি `read()` দিলে error আসবে, তাই `file_get_contents()` ব্যবহার করা হয়েছে)
                $sourcePath = public_path('uploads/temp/' . $tempImage->name);
                if (!file_exists($sourcePath)) {
                    return response()->json([
                        'status' => false,
                        'message' => 'File not found: ' . $sourcePath,
                    ], 404);
                }
        
                // ✅ ImageManager তৈরি করা
                $manager = new ImageManager(new Driver());
                $image = $manager->read(file_get_contents($sourcePath));
        
                // ✅ Small image তৈরি করা (Resize)
                $smallDestPath = public_path('uploads/services/small/');
                if (!file_exists($smallDestPath)) {
                    mkdir($smallDestPath, 0777, true);
                }
        
                $smallImg = $image->scale(width: 300);
                $smallImg->save($smallDestPath . $fileName, quality: 90); // 90% Quality Maintain
        
                // ✅ Large image তৈরি করা (Resize without crop)
                $largeDestPath = public_path('uploads/services/large/');
                if (!file_exists($largeDestPath)) {
                    mkdir($largeDestPath, 0777, true);
                }
        
                $largeImg = $image->scale(width: 600);
                $largeImg->save($largeDestPath . $fileName, quality: 90); // High quality save

                $model->image=$fileName;
                $model->save();
                
                
            }
        }

        return response()->json([
            'status'=>true,
            'message' => 'Services Added Successfully'
        ], 422);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $service=Service::find($id);
        if($service==null){
            return response()->json([
                'status'=>false,
                'message' => 'Services not found'
            ]);
        }
        return response()->json([
            'status'=>true,
            'data'=>$service,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Service $service)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $service=Service::find($id);
        if($service==null){
            return response()->json([
                'status'=>false,
                'message' => 'Services not found'
            ]);
        }
        $validator = Validator::make($request->all(), [
            'title' => 'required',
            'slug' => 'required|unique:services,slug,'.$id.',id',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'errors' => $validator->errors()
            ]);
        }
        
        $service->title=$request->title;
        $service->slug=Str::slug($request->slug);
        $service->short_desc=$request->short_desc;
        $service->content=$request->content;
        $service->status=$request->status;

        $service->save();

        // if($request->imageId>0){
        //     $tempImage=TempImage::find($request->imageId);
        //     if($tempImage != null){
        //         $extArray=explode('.',$tempImage->name);
        //         $ext=last($extArray);

        //         $fileName=strtotime('now').$service->id.'.'.$ext;

        //         //Resize image
        //         $sourcePath=public_path('uploads/temp/',$tempImage->name);
        //         $destPath=public_path('uploads/services/small',$fileName);
        //         $manager = new ImageManager(Driver::class);
        //         $image = $manager->read($sourcePath);
        //         //$image=coverDown(300,300);
        //         $img = $manager->read($image);
        //         $img=$img->resize(300,360);

        //         $image->save($destPath);

        //         //Resize image large thumb
        //         $sourcePath=public_path('uploads/temp/',$tempImage->name);
        //         $destPath=public_path('uploads/services/large',$fileName);
        //         $manager = new ImageManager(Driver::class);
        //         $image = $manager->read($sourcePath);
        //         //$image=coverDown(300,300);
        //         $img = $manager->read($image);
        //         //$img=$img->scaleDown(1200);
        //         $img = $img->scale(width: 300);

        //         $image->save($destPath);
        //     }
        // }
        if ($request->imageId > 0) {
            $oldImage=$service->image;
            $tempImage = TempImage::find($request->imageId);
            if ($tempImage != null) {
                $extArray = explode('.', $tempImage->name);
                $ext = last($extArray);
        
                $fileName = strtotime('now') . $service->id . '.' . $ext;
        
                // ✅ ইমেজ লোড করা (সরাসরি `read()` দিলে error আসবে, তাই `file_get_contents()` ব্যবহার করা হয়েছে)
                $sourcePath = public_path('uploads/temp/' . $tempImage->name);
                if (!file_exists($sourcePath)) {
                    return response()->json([
                        'status' => false,
                        'message' => 'File not found: ' . $sourcePath,
                    ], 404);
                }
        
                // ✅ ImageManager তৈরি করা
                $manager = new ImageManager(new Driver());
                $image = $manager->read(file_get_contents($sourcePath));
        
                // ✅ Small image তৈরি করা (Resize)
                $smallDestPath = public_path('uploads/services/small/');
                if (!file_exists($smallDestPath)) {
                    mkdir($smallDestPath, 0755, true);
                }
        
                $smallImg = $image->scale(width: 300);
                $smallImg->save($smallDestPath . $fileName, quality: 90); // 90% Quality Maintain
        
                // ✅ Large image তৈরি করা (Resize without crop)
                $largeDestPath = public_path('uploads/services/large/');
                if (!file_exists($largeDestPath)) {
                    mkdir($largeDestPath, 0755, true);
                }
        
                $largeImg = $image->scale(width: 600);
                $largeImg->save($largeDestPath . $fileName, quality: 90); // High quality save

                $service->image=$fileName;
                $service->save();

                if($oldImage !=''){
                    File::delete(public_path('uploads/services/small/'.$oldImage));
                    File::delete(public_path('uploads/services/large/'.$oldImage));
                }
            }
        }

        return response()->json([
            'status'=>true,
            'message' => 'Services Updated Successfully'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $service=Service::find($id);
        if($service==null){
            return response()->json([
                'status'=>false,
                'message' => 'Services not found'
            ]);
        }
        $service->delete();
        return response()->json([
            'status'=>true,
            'data'=>$service,
        ]);
    }
}
