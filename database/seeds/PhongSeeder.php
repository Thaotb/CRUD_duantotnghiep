<?php

use Illuminate\Database\Seeder;
use App\Models\Phong;
class PhongSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(Phong::class, 100)->create();
    }
}
