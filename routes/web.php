<?php

use App\Http\Controllers\BlogController;
use App\Http\Controllers\CarController;
use App\Http\Controllers\FrontEndController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [FrontEndController::class, 'index'])->name('front.home');
Route::get('/contact', [FrontEndController::class, 'contact'])->name('front.contact');
Route::get('/about', [FrontEndController::class, 'about'])->name('front.about');
Route::get('/terms-and-condition', [FrontEndController::class, 'termsCondition'])->name('front.termscondition');
Route::get('/privacy-policy', [FrontEndController::class, 'privacyPolicy'])->name('front.privacypolicy');
Route::get('/blog', [BlogController::class, 'index'])->name('front.blog');
Route::get('/blog/{slug}', [BlogController::class, 'blogDetail'])->name('front.blog.detail');
Route::get('/cars', [CarController::class, 'index'])->name('front.car');
Route::get('/car/{slug}', [CarController::class, 'carDetail'])->name('front.car.detail');



Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
