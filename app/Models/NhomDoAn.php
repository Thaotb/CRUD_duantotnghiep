<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class NhomDoAn extends Model
{
    protected $table = "nhom_do_an";
    protected $fillable = [
        'ten_de_tai','code_join','dot_id',
'is_leader',
'bo_mon_id',
 'giang_vien_id',
    ];
  public function dot(){
        return $this->belongsTo('App\Models\Dot', 'dot_id', 'id');
    }
    public function gvHuongDan(){
        return $this->belongsTo('App\Models\gvHuongDan', 'giang_vien_id', 'id');
    }
    public function boMon(){
        return $this->belongsTo('App\Models\BoMon', 'bo_mon_id', 'id');
    }
      public function users()
    {
        return $this->hasMany('App\Models\User','nhomDoAnId','id');
    }
    public function user()
    {
        return $this->hasOne('App\Models\User');
    }
}
