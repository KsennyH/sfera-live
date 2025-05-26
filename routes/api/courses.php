<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\CourseController;
// use App\Http\Controllers\Api\MediaController;
// use App\Http\Controllers\Api\CourseAccessController;

Route::get('/courses', [CourseController::class, 'index']);
Route::get('/courses/{course}', [CourseController::class, 'show']);
Route::post('/courses', [CourseController::class, 'store']);

Route::middleware(['auth:sanctum'])->group(function () {
    // Route::post('/courses', [CourseController::class, 'store'])->middleware('admin');
    Route::put('/courses/{course}', [CourseController::class, 'update'])->middleware('admin');
    Route::delete('/courses/{course}', [CourseController::class, 'destroy'])->middleware('admin');

    // Route::post('/courses/{course}/grant-access', [CourseAccessController::class, 'grantAccess'])->middleware('admin');

    // Route::get('/courses/{course}/media', [MediaController::class, 'index']);
    // Route::get('/media/{media}', [MediaController::class, 'show']);
});
