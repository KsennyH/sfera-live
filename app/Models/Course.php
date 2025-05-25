<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'introtext',
        'content',
        'is_published'
    ];

    protected $casts = [
        'is_published' => 'boolean',
    ];

    public function media()
    {
        return $this->hasMany(Media::class);
    }

    public function users()
    {
        return $this->belongsToMany(User::class)
            ->withPivot('access_granted_at')
            ->withTimestamps();
    }
}
