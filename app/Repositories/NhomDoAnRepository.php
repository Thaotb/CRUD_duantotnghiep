<?php

namespace App\Repositories;
use App\Repositories\AppRepository;
use App\Models\NhomDoAn;

class NhomDoAnRepository extends AppRepository
{
    public function __construct(NhomDoAn $model)
    {
        parent::__construct($model);
    }
}