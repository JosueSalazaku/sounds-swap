<?php

use App\Http\Controllers\LightingController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\CheckoutController;
use App\Models\Products;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/Welcome', function () {
    return Inertia::render(('Welcome'));
});


Route::get('/checkout', [CheckoutController::class, 'index'])->name('checkout');

Route::get('/Contact', function () {
    return Inertia::render(('Contact'));
});

Route::get('/AboutUs', function () {
    return Inertia::render(('AboutUs'));
});

Route::get('/Community', function () {
    return Inertia::render(('Community'));
});

Route::get('/Pricing', function () {
    return Inertia::render(('Pricing'));
});

Route::get('/SignIn', function () {
    return Inertia::render(('SignIn'));
});

Route::get('/SignUp', function () {
    return Inertia::render(('SignUp'));
});

Route::get('/Dashboard', function () {
    return Inertia::render(('Dashboard'));
});

Route::get('/Products', [ProductController::class, 'index'])->name('products.index');
Route::get('/Products/{product}', [ProductController::class, 'show'])->name('product.show');

Route::get('/Lighting', [ProductController::class, 'index'])->name('lighting.index');
Route::get('/Lighting/{lighting}', [LightingController::class, 'show'])->name('lighting.show');

Route::get('/Microphones', [ProductController::class, 'index'])->name('Micro');

Route::get('/MixingBoard', [ProductController::class, 'index'])->name('mixing');

Route::get('/Monitors', [ProductController::class, 'index'])->name('monitors');

Route::get('/CordCables', [ProductController::class, 'index'])->name('cables');

Route::get('/SoundSystems', [ProductController::class, 'index'])->name('sounds');

require __DIR__.'/auth.php';
