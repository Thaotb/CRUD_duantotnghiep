<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDotTotNghiepTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('dot_tot_nghiep', function (Blueprint $table) {
            $table->id();
            $table->string('ten_dot');
            $table->date('ngay_bat_dau');
            $table->date('ngay_ket_thuc');
            $table->boolean('trang_thai')->default(config('common.status.yes'));
            $table->integer('user_id');
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
        Schema::dropIfExists('dot_tot_nghiep');
    }
}
