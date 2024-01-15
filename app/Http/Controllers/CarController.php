<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class CarController extends Controller
{
    //
    public function index(){
        return Inertia::render('Car');
    }
    public function carDetail($slug){
        return Inertia::render('CarDetail', ['slug' => $slug]);
    }
}
