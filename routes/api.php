<?php

use Illuminate\Http\Request;

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

Route::get('/arah_angin', 'API\AWSController@arah_angin');
Route::get('/suhu', 'API\AWSController@suhu');
Route::get('/kelembaban', 'API\AWSController@kelembaban');
Route::get('/tekanan_udara', 'API\AWSController@tekanan_udara');
Route::get('/intensitas_cahaya', 'API\AWSController@intensitas_cahaya');
Route::get('/kualitas_udara', 'API\AWSController@kualitas_udara');
Route::get('/kondisi_cuaca', 'API\AWSController@kondisi_cuaca');
Route::get('/ketinggian', 'API\AWSController@ketinggian');
