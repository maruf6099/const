<?php

use App\Http\Controllers\admin\DashboardController;
use App\Http\Controllers\admin\ServiceController;
use App\Http\Controllers\AuthenticationController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('authenticate',[AuthenticationController::class,'authenticate']);


// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');

Route::group(['middleware'=>['auth:sanctum']],function(){
    //protected routes
    Route::get('dashboard',[DashboardController::class,'index']);
    Route::get('logout',[AuthenticationController::class,'logout']);

    //Services route
    Route::post('services',[ServiceController::class,'store']);
});
