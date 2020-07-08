<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateNhomDoAnTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('nhom_do_an', function (Blueprint $table) {
            $table->id();
            $table->string('ten_de_tai');
            $table->integer('code_join');
            $table->integer('dot_id');
            $table->integer('giang_vien_id');
            $table->integer('bo_mon_id');
            $table->boolean('is_leader')->default(config('common.status.yes'));
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('nhom_do_an');
    }
}
