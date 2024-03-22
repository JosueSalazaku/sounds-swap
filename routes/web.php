<?php

use App\Http\Controllers\ContactController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::post('/contact', [ContactController::class, 'store'])->name('contact.store');

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

Route::get('/contact', function () {
    return Inertia::render('Contact');
});

Route::get('/AboutUs', function () {
    return Inertia::render(('AboutUs'));
});

require __DIR__.'/auth.php';

