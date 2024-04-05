<?php

namespace App\Http\Controllers;
use App\Models\Products;
use Inertia\Inertia;

class LightingController extends Controller
{
    public function show()
    {
      
        $lighting = Products::where('category_id', 1)->get();
        return Inertia::render('Lighting', ['lighting' => $lighting]);
    }
}
