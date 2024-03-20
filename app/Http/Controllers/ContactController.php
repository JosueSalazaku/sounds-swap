<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller; // Import the base controller class
use App\Models\Contact; // Import the Contact model

class ContactController extends Controller
{
    public function store(Request $request)
    {
        // Validate the form data
        $validatedData = $request->validate([
            'name' => 'required',
            'email' => 'required|email',
            'message' => 'required',
        ]);

        // Create a new Contact model instance with the validated data
        $contact = Contact::create($validatedData);

        // Optionally, you can return a response or redirect the user
        return redirect()->route('contact.store')->with('success', 'Contact created successfully.');
    }
}
