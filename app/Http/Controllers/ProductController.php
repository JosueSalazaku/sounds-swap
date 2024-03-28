<?php

namespace App\Http\Controllers;

use App\Models\Products;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function index()
    {
        // Add any necessary logic here, such as retrieving products from a database
        // For now, just render the "Products" view using Inertia
        $products = Products::all();
        return Inertia::render('Products', ['products' => $products]);
    }
}
