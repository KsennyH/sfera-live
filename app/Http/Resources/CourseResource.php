<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Auth;

class CourseResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {

        $user = Auth::user();
        $canSeeMedia = false;

        if ($user) {
            $canSeeMedia = $user->isAdmin() || $this->users->contains($user->id);
        }

        $image = $this->media->where('type', 'image')->first();

        return [
            'id' => $this->id,
            'title' => $this->title,
            'introtext' => $this->introtext,
            'content' => $this->content,
            'is_published' => $this->is_published,
            'image' => $image ? asset('storage/' . $image->path) : null,
            'media' => $canSeeMedia
                ? MediaResource::collection($this->whenLoaded('media'))
                : [],
            'created_at' => $this->created_at->toDateString(),
        ];
    }
}
