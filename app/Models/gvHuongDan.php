<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class gvHuongDan extends Model
{
	protected $table = "gv_huong_dan";
	protected $fillable = [
		'name',
		'email',
		'sdt',
		'bo_mon_id',
	];

	public function nhomDoAn()
	{
		return $this->hasMany('App\Models\NhomDoAn','giang_vien_id','id');
	}
}
