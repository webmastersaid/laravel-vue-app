<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::prefix('people')->namespace('App\Http\Controllers')->group(function () {
    Route::namespace('Person')->group(function () {
        Route::post('/', StoreController::class);
        Route::get('/', IndexController::class);
        Route::patch('/{person}', UpdateController::class);
        Route::delete('/{person}', DeleteController::class);
    });
});