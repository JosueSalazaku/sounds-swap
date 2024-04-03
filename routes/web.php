<?php

use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
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


Route::get('/Products', [ProductController::class, 'index'])->name('products');

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

Route::get('/Lights', function () {
    return Inertia::render(('Lights'));
});

Route::get('/Microphones', function () {
    return Inertia::render(('Microphones'));
});

Route::get('/MixingBoard', function () {
    return Inertia::render(('MixingBoard'));
});

Route::get('/Monitors', function () {
    return Inertia::render(('Monitors'));
});

Route::get('/CordCables', function () {
    return Inertia::render(('CordCables'));
});

Route::get('/SoundSystems', function () {
    return Inertia::render(('SoundSystems'));
});

require __DIR__.'/auth.php';
