<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Products;
class ProductsSeeder extends Seeder
{
    public function run()
    {
        Products::create([
            'category_id' => 1, // Assuming the category ID for "Lighting"
            'name' => 'LED Stage Light',
            'description' => 'Illuminate your stage with this powerful LED stage light. Perfect for concerts, performances, and events.',
            'price' => 99.99,
            'image' => 'https://res.cloudinary.com/cash-crusaders/image/upload/f_auto,fl_lossy,h_1000,q_auto,w_1000/v1642057859/NewGoods/nkyjsfbaopoixjnbkvnk',
            'brand' => 'Chauvet DJ',
        ]);

        Products::create([
            'category_id' => 2, // Assuming the category ID for "Mixing Board"
            'name' => 'Digital Mixing Console',
            'description' => 'Professional digital mixing console for live sound reinforcement and recording applications.',
            'price' => 999.99,
            'image' => 'https://example.com/mixing-board.jpg',
            'brand' => 'Behringer',
        ]);


    }
}