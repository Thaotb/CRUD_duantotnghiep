<?php

namespace App\Repositories;
use App\Repositories\AppRepository;
use App\Models\gvHuongDan;

class GiangVienHdRepository extends AppRepository
{
    public function __construct(gvHuongDan $model)
    {
        parent::__construct($model);
    }
}