<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\usercontroller;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
route::get ('employees',[EmployeeController::class,'getemployee']);
route::get ('employee/{id}',[EmployeeController::class,'getemployeeById']);
route::post ('addemployee',[EmployeeController::class,'addemployee']);
route::put ('updateemployee/{id}',[EmployeeController::class,'updateemployee']);
route::delete ('suppremployee/{id}',[EmployeeController::class,'suppremployee']);

route::post ('adduser',[usercontroller::class,'adduser']);
route::delete ('suppruser/{id}',[usercontroller::class,'suppruser']);
route::post('getID',[usercontroller::class,'getID']);
route::post('existe',[usercontroller::class,'existe']);