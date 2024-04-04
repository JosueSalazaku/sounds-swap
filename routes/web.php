<?php

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

Route::get('/welcome', function () {
    return Inertia::render(('Welcome'));
});


Route::get('/products', [ProductController::class, 'index'])->name('products');

Route::get('/contact', function () {
    return Inertia::render(('Contact'));
});

Route::get('/aboutUs', function () {
    return Inertia::render(('AboutUs'));
});



Route::get('/checkout', [CheckoutController::class, 'index'])->name('checkout');

Route::get('/community', function () {
    return Inertia::render(('Community'));
});

Route::get('/pricing', function () {
    return Inertia::render(('Pricing'));
});

Route::get('/signIn', function () {
    return Inertia::render(('SignIn'));
});

Route::get('/signUp', function () {
    return Inertia::render(('SignUp'));
});

Route::get('/dashboard', function () {
    return Inertia::render(('Dashboard'));
});


Route::get('/lighting', [ProductController::class, 'index'])->name('lighting');


Route::get('/microphones', function () {
    return Inertia::render(('Microphones'));
});

Route::get('/mixingBoard', function () {
    return Inertia::render(('MixingBoard'));
});

Route::get('/monitors', function () {
    return Inertia::render(('Monitors'));
});

Route::get('/CordCables', function () {
    return Inertia::render(('CordCables'));
});

Route::get('/SoundSystems', function () {
    return Inertia::render(('SoundSystems'));
});

require __DIR__.'/auth.php';
