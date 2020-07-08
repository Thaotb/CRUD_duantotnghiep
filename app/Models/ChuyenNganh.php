<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ChuyenNganh extends Model
{
    protected $table = "chuyen_nganh";
    protected $fillable = [
        'ten_chuyen_nganh'
    ];
    public function phong(){
        return $this->hasMany('App\Models\Phong', 'chuyen_nganh_id', 'id');
    }
    
}
