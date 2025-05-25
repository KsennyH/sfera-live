<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreCourseRequest;
use App\Http\Requests\UpdateCourseRequest;
use App\Http\Resources\CourseResource;
use App\Models\Course;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use PHPUnit\Framework\Constraint\Count;

class CourseController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return CourseResource::collection(
            Course::with([
                'media' => function ($query) {
                    $query->where('type', 'image');
                },
                'users'
            ])->get()
        );
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCourseRequest $request)
    {
        $course = Course::create($request->only(['title', 'introtext', 'content', 'is_published']));

        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('media', 'public');

            $course->media()->create([
                'type' => 'image',
                'path' => $path,
            ]);
        }

        return new CourseResource($course->load('media'));
    }

    /**
     * Display the specified resource.
     */
    public function show(Course $course)
    {
        return new CourseResource($course->load('media'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCourseRequest $request, Course $course)
    {

        $course->update($request->only(['title', 'introtext', 'content', 'is_published']));

        if ($request->hasFile('image')) {
            // Удалим старое изображение
            $oldImage = $course->media()->where('type', 'image')->first();
            if ($oldImage) {
                Storage::disk('public')->delete($oldImage->path);
                $oldImage->delete();
            }

            $path = $request->file('image')->store('media', 'public');

            $course->media()->create([
                'type' => 'image',
                'path' => $path,
            ]);
        }

        return new CourseResource($course->load('media'));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Course $course)
    {
        foreach ($course->media as $media) {
            Storage::disk('public')->delete($media->path);
        }

        $course->delete();
        return response()->json(['message' => 'Курс удалён']);
    }

    public function grantAccess(Request $request, Course $course)
    {
        $request->validate([
            'user_id' => 'required|exists:users,id',
        ]);

        $course->users()->syncWithoutDetaching([
            $request->user_id => ['access_granted_at' => now()],
        ]);

        return response()->json(['message' => 'Access granted.']);
    }
}
