<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group([
    'prefix' => 'auth'
], function () {
    Route::post('login', 'AuthController@login')->name('auth.login');
    Route::post('logout', 'AuthController@logout')->name('auth.logout');
});

// Route::group([
//     'middleware' => 'auth:api'
// ], function () {
    Route::group([
        'prefix' => 'nhom',
        'as' => 'nhomdoan.'
    ], function () {
        Route::get('/', 'NhomDoAnController@index')->name('index');
        Route::post('create', 'NhomDoAnController@create')->name('create');
         Route::get('index', 'GiangVienHdController@index')->name('index');
         Route::post('update/{id}', 'UserController@update')->name('update');
          Route::get('user', 'UserController@index')->name('user');
    });
// });
