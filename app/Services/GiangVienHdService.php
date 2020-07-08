<?php

namespace App\Services;

use Carbon\Carbon;
use Arr;
use App\Repositories\GiangVienHdRepository;

class GiangVienHdService extends BaseService
{
    protected $nhomDoAnRepository;

    public function __construct(
       
        GiangVienHdRepository $giangVienHdRepository
    ) {
      
        parent::__construct($giangVienHdRepository);

    
        $this->giangVienHdRepository = $giangVienHdRepository;
    }


}