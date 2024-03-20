<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/contact', function () {
    // Define the $page variable with the necessary properties
    $page = ['component' => 'Contact']; // Assuming 'Contact' is the name of the component for the contact page

    // Pass the $page variable to the view
    return view('app', ['page' => $page]);
});

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

Route::get('/AboutUs', function () {
    return Inertia::render(('AboutUs'));
});

require __DIR__.'/auth.php';

/* Route::get('/{any}', function () {
    return view('app');
})->where('any', '.*'); */

