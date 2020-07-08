<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Illuminate\Support\Facades\DB;
use App\Models\gvHuongDan;
use App\Http\Resources\GiangVienHdResource;
use App\Services\GiangVienHdService;

class GiangVienHdController extends Controller
{
     protected $giangVienHdService;
    public function __construct(
        GiangVienHdService $giangVienHdService
    )
    {
        $this->giangVienHdService = $giangVienHdService;
    }

    public function index()
    {
        $data = $this->giangVienHdService->paginateList([]);
        return app()->make(GiangVienHdResource::class, [
            'resource' => $data,
            'method' => __FUNCTION__
        ]);
    }
}
