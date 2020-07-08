<?php

namespace App\Services;

use Carbon\Carbon;
use App\Repositories\UserRepository;
use Arr;

class UserService extends BaseService
{
    protected $userRepository;

    public function __construct(
        UserRepository $userRepository
    ) {
        parent::__construct($userRepository);

        $this->userRepository = $userRepository;
    }

  
}