<?php

namespace App\Http\Controllers;

use App\Models\Products;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function index()
    {
        $products = Products::all();

        return Inertia::render('Products', ['products' => $products]);
    }

    public function lighting()
    {
        $lighting = Products::where('category_id', 1)->get();

        return Inertia::render('Lighting', ['products' => $lighting]);
    }

    public function mixing()
    {
        $mixing = Products::where('category_id', 2)->get();

        return Inertia::render('MixingBoard', ['products' => $mixing]);
    }

    public function micro()
    {
        $micro = Products::where('category_id', 3)->get();

        return Inertia::render('Microphones', ['products' => $micro]);
    }

    public function monitors()
    {
        $monitors = Products::where('category_id', 4)->get();

        return Inertia::render('Microphones', ['products' => $monitors]);
    }
}


 

