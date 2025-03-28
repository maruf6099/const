<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\TempImage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

use Intervention\Image\ImageManager;
use Intervention\Image\Drivers\Gd\Driver;

class TempImageController extends Controller
{
    // public function store(Request $request)
    // {
    //     $validator = Validator::make($request->all(), [
    //         'image' => 'required|mimes:png,jpg,jpeg,svg,gif',
            
    //     ]);

        

    //     if ($validator->fails()) {
    //         return response()->json([
    //             'status'=>false,
    //             'errors' => $validator->errors('image')
    //         ]);
    //     }
    //     $image=$request->image;
    //     // if(!empty($image)){
    //     //     $manager = new ImageManager(new Driver());
    //     //     $ext=$image->getClientOriginalExtension();
    //     //     $imageName=strtotime('now').'.'.$ext;

    //     //     $model=new TempImage();
    //     //     $model->name=$imageName;
    //     //     $model->save();

    //     //     $image->move(public_path('uploads/temp'),$imageName);
    //     //     //$img = $manager->read(file_get_contents(public_path('uploads/temp/' . $imageName)));



    //     //     $img = $manager->read($image);
    //     //     $img=$img->resize(300,360);
    //     //     $destPath=public_path('uploads/temp/thumb/',$imageName);
    //     //     $image->save($destPath);
    //     // }
    //     if(!empty($image)){
    //         $manager = new ImageManager(new Driver());
    //     $ext=$image->getClientOriginalExtension();
    //             $imageName=strtotime('now').'.'.$ext;

    //             $model=new TempImage();
    //             $model->name=$imageName;
    //             $model->save();

    //             $image->move(public_path('uploads/temp'),$imageName);

    //             //Resize image
    //             $sourcePath=public_path('uploads/temp/',$imageName);
    //             $destPath=public_path('uploads/temp/thumb/',$imageName);
    //             $manager = new ImageManager(Driver::class);
    //             $image = $manager->read($sourcePath);
    //             //$image=coverDown(300,300);
    //             $img = $manager->read($image);
    //             $img=$img->resize(300,360);

    //             $image->save($destPath);

    //             return response()->json([
    //                 'status'=>true,
    //                 'data'=>$model,
    //                 'message' => 'image uploaded successfully'
    //             ]);
    //         }
    // }
    public function store(Request $request)
{
    $validator = Validator::make($request->all(), [
        'image' => 'required|image|mimes:png,jpg,jpeg,svg,gif|max:2048',
    ]);

    if ($validator->fails()) {
        return response()->json([
            'status' => false,
            'errors' => $validator->errors()->first('image'),
        ], 422);
    }

    if ($request->hasFile('image')) {
        $image = $request->file('image');

        // ফাইলের নাম সেট করুন
        $imageName = time() . '.' . $image->getClientOriginalExtension();

        // ফোল্ডার চেক করুন
        $uploadPath = public_path('uploads/temp/');
        if (!file_exists($uploadPath)) {
            mkdir($uploadPath, 0777, true);
        }

        // ফাইল আপলোড করুন
        if (!$image->move($uploadPath, $imageName)) {
            return response()->json([
                'status' => false,
                'message' => 'Failed to upload image!',
            ], 500);
        }

        // মডেল তৈরি করুন এবং ডাটাবেজে সংরক্ষণ করুন
        $model = new TempImage();
        $model->name = $imageName;
        $model->save();

        // ✅ ImageManager তৈরি করুন
        $manager = new ImageManager(new Driver());

        // ✅ ইমেজ ফাইল চেক করুন
        $filePath = public_path('uploads/temp/' . $imageName);
        if (!file_exists($filePath)) {
            return response()->json([
                'status' => false,
                'message' => 'File not found: ' . $filePath,
            ], 404);
        }

        // ✅ ইমেজ লোড করুন
        $img = $manager->read(file_get_contents($filePath));

        // ✅ ইমেজ রিসাইজ করুন
        $img = $img->resize(300, 360);

        // ✅ রিসাইজ ইমেজ সংরক্ষণ
        $thumbPath = public_path('uploads/temp/thumb/');
        if (!file_exists($thumbPath)) {
            mkdir($thumbPath, 0777, true);
        }

        $img->save($thumbPath . $imageName);

        return response()->json([
            'status' => true,
            'data' => $model,
            'message' => 'Image uploaded successfully!',
        ]);
    }

    return response()->json([
        'status' => false,
        'message' => 'Image upload failed!',
    ], 400);
}
}
