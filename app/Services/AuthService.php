<?php

namespace App\Services;

use App\Repositories\UserRepository;
use Psr\Http\Message\ServerRequestInterface;

class AuthService extends BaseService
{
    protected $userRepository;

    public function __construct(
        UserRepository $userRepository
    ) {
        $this->userRepository = $userRepository;
    }

    public function createPassportRequest(array $data, $scope = '*', string $grantType = 'password')
    {
        $data['scope'] = $scope;
        $data['grant_type'] = $grantType;
        $data['client_id'] = env('API_CLIENT_ID');
        $data['client_secret'] = env('API_CLIENT_SECRET');

        return app(ServerRequestInterface::class)->withParsedBody($data);
    }
}
