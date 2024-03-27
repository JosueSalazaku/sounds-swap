<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Category;

class CategorySeeder extends Seeder
{
    public function run()
    {
        Category::create([
            'name' => 'Lighting',
            'slug' => 'lighting',
            'description' => 'Category for lighting products',
            'order' => 1, 
        ]);

        Category::create([
            'name' => 'Mixing Board',
            'slug' => 'mixing-board',
            'description' => 'Category for mixing boards',
            'order' => 1, 
        ]);

        Category::create([
            'name' => 'Microphones',
            'slug' => 'microphones',
            'description' => 'Category for microphones.',
            'order' => 1, 
        ]);

        Category::create([
            'name' => 'Monitors',
            'slug' => 'monitors',
            'description' => 'Category for monitors.',
            'order' => 1, 
        ]);

        Category::create([
            'name' => 'Sound Systems',
            'slug' => 'sound-systems',
            'description' => 'Category for sound systems.',
            'order' => 1, 
        ]);

        Category::create([
            'name' => 'Cord Cables',
            'slug' => 'cord-cables',
            'description' => 'Category for cord cables.',
            'order' => 1, 
        ]);
    }
}
