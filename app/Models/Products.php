<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Products extends Model
{   
    protected $table = 'products';
    use HasFactory;
}

class SlugGenerator
{
    public static function generateUniqueSlug($name)
    {
        $slug = Str::slug($name);
        $count = Products::where('slug', $slug)->count();
        $uniqueSlug = $slug;
        $suffix = 1;

        while ($count > 0) {
            $uniqueSlug = $slug . '-' . $suffix;
            $count = Products::where('slug', $uniqueSlug)->count();
            $suffix++;
        }

        return $uniqueSlug;
    }
}
