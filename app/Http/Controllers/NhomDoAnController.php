<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use App\Models\NhomDoAn;
use App\Http\Resources\NhomDoAnResource;
use App\Services\NhomDoAnService;
use App\Http\Requests\NhomDoAnRequest;

class NhomDoAnController extends Controller
{
    protected $nhomDoAnService;
    protected $giangVienHdService;
    public function __construct(
        NhomDoAnService $nhomDoAnService
    ) {
        $this->nhomDoAnService = $nhomDoAnService;
    }

    public function index()
    {
        $data = $this->nhomDoAnService->paginateList([]);
        return app()->make(NhomDoAnResource::class, [
            'resource' => $data,
            'method' => __FUNCTION__
        ]);
    }

    public function create(NhomDoAnRequest $request)
    {
        $nhomDoAn = $request->all();
        // $gvHuongDan = $request->all();
        // dd($gvHuongDan);
        $this->nhomDoAnService->store($nhomDoAn);

        $data = [
            'ten_de_tai' => $nhomDoAn['ten_de_tai'],
            'code_join' => $nhomDoAn['code_join'],
            'dot_id' => $nhomDoAn['dot_id'],
            'is_leader' => $nhomDoAn['is_leader'],
            'bo_mon_id' => $nhomDoAn['bo_mon_id'],
            'giang_vien_id' => $nhomDoAn['giang_vien_id']
        ];
          // $token = $this->passportIssueToken($data);
        return app()->make(NhomDoAnResource::class, [
            'resource' => $data,
            'method' => __FUNCTION__
        ]);
    }
}
