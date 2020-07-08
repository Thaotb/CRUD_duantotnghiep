<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\User;
use App\Http\Resources\UserResource;
use App\Services\UserService;
class UserController extends Controller
{
    protected $userService;
    public function __construct(UserService $userService)
    {
        $this->userService = $userService;
    }
  public function index()
    {
        $data = $this->userService->paginateList([]);
        return app()->make(UserResource::class, [
            'resource' => $data,
            'method' => __FUNCTION__
        ]);
    }
     public function update($id, array $data)
    {
        return $this->repository->update($id, $data);
    }
}
