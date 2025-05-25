<?php

use App\Http\Controllers\Api\CourseController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


require __DIR__ . '/api/auth.php';
require __DIR__ . '/api/courses.php';
// require __DIR__ . '/api/users.php';
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

// Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
//     return $request->user();
// });

// Route::get('/courses', [CourseController::class, 'index']);
// Route::get('/courses/{course}', [CourseController::class, 'show']);

// Route::middleware('auth:sanctum')->group(function () {
//     Route::post('/courses', [CourseController::class, 'store']);
//     Route::put('/courses/{course}', [CourseController::class, 'update']);
//     Route::delete('/courses/{course}', [CourseController::class, 'destroy']);
// });
