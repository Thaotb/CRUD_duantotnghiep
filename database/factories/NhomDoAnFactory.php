<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\NhomDoAn;
use Faker\Generator as Faker;

$factory->define(NhomDoAn::class, function (Faker $faker) {
    return [
        'ten_nhom_do_an' => $faker->name,
        'code_join' => $faker->unique(true)->numberBetween(100,900),
        'chuyen_nganh_id' => $faker->unique(true)->numberBetween(1, 5),
        'giao_vien_id' => $faker->unique(true)->numberBetween(1,9),
        'dot_id'  => $faker->unique(true)->numberBetween(6,7),
        'status' => $faker->boolean()
    ];
});
