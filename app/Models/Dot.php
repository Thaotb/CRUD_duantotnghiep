<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Dot extends Model
{
    protected $table = "dot";
    protected $fillable = [
        'ten_dot'
    ];
  
    public function nhomDoAn()
    {
        return $this->hasMany('App\Models\NhomDoAn','dot_id','id');
    }
}
