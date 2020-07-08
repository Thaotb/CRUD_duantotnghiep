<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BoMon extends Model
{
    protected $table = "hoc_ki";
    protected $fillable = [
        'ten_hoc_ki'
    ];
    public function nhomDoAn()
    {
        return $this->hasMany('App\Models\NhomDoAn','bo_mon_id','id');
    }
}
