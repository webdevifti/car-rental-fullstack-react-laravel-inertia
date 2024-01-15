<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class BlogController extends Controller
{
    //
    public function index(){
        return Inertia::render('Blog');
    }
    public function blogDetail($slug){
        return Inertia::render('BlogDetail',['slug' => $slug]);
    }
}
