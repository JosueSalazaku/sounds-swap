<?php

namespace App\Http\Controllers;
use App\Models\Products;
use Inertia\Inertia;
use Illuminate\Http\Request;

class LightingController extends Controller
{
    public function show()
    {
      
        $lighting = Products::where('category_id', 1)->get();
        return Inertia::render('Lighting', ['lighting' => $lighting]);
    }
}
