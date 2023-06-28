<?php

use App\Http\Controllers\ControllerUser;
use App\Http\Controllers\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post("register",[ControllerUser::class,'register']);
Route::post("login",[ControllerUser::class,'login']);
Route::post("addPro",[ProductController::class,'addPro']);
Route::get("listPro",[ProductController::class,'listPro']);
Route::get("getOne/{id}",[ProductController::class,'getOne']);
Route::delete("deletePro/{id}",[ProductController::class,'deletePro']);
