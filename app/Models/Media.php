<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Media extends Model
{
    use HasFactory;

    protected $fillable = [
        'course_id',
        'type',
        'path',
        'alt',
        'meta'
    ];

    protected $casts = [
        'meta' => 'array',
    ];

    public function course()
    {
        return $this->belongsTo(Course::class);
    }
}
