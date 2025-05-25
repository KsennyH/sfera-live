<?php

namespace Database\Seeders;

use App\Models\Course;
use App\Models\Media;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CourseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        \App\Models\User::factory()->create(['name' => 'Admin', 'email' => 'admin@example.com']);

        Course::factory(5)->create()->each(function ($course) {
            Media::factory()->create([
                'course_id' => $course->id,
                'type' => 'image',
                'path' => 'uploads/images/sample.jpg',
                'alt' => 'Пример изображения курса',
            ]);

            Media::factory()->create([
                'course_id' => $course->id,
                'type' => 'video',
                'path' => 'uploads/videos/sample.mp4',
                'alt' => 'Пример видео курса',
            ]);
        });
    }
}
