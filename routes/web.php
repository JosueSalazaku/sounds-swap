<?php

use App\Http\Controllers\ProfileController;
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

Route::get('/Products', function () {
    return Inertia::render(('Products'));
});

Route::get('/Contact', function () {
    return Inertia::render(('Contact'));
});

require __DIR__.'/auth.php';
