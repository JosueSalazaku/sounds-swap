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
        $lighting = Products::where('category', 'lighting')->get();

        return Inertia::render('Lighting', ['products' => $lighting]);
    }
}

