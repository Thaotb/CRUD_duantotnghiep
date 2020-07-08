<?php

namespace App\Repositories;
use App\Repositories\AppRepository;
use App\Models\User;

class UserRepository extends AppRepository
{
    public function __construct(User $model)
    {
        parent::__construct($model);
    }
    //   public function getUserById($id)
    // {
    //     return $this->model
    //         ->where('nhomDoAnId', $id)
    //         ->first();
    // }
}