<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\Auth\LoginRequest;
use Laravel\Passport\TokenRepository;
use Lcobucci\JWT\Parser as JwtParser;
use League\OAuth2\Server\AuthorizationServer;
use App\Services\AuthService;
use Laravel\Passport\Http\Controllers\AccessTokenController as PassportController;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Http\Response;
use App\Http\Resources\AuthResource;
use Auth;

class AuthController extends PassportController
{
    protected $authService;

    public function __construct(
        AuthorizationServer $server,
        TokenRepository $tokens,
        JwtParser $jwt,
        AuthService $authService
    ) {
        parent::__construct($server, $tokens, $jwt);
        $this->authService = $authService;
    }

    public function login(LoginRequest $request)
    {
        $params = $request->all();
        $loginData = [
            'username' => $request->get('email'),
            'password' => $request->get('password'),
        ];

        $token = $this->passportIssueToken($loginData);

        return new AuthResource($token, __FUNCTION__);
    }

    protected function passportIssueToken($data, $scope = '*', string $grantType = 'password')
    {
        $passportRequest = $this->authService->createPassportRequest($data, $scope, $grantType);
        $passportResponse = $this->issueToken($passportRequest);
        $responseContent = json_decode($passportResponse->getContent(), true);

        if ($passportResponse->status() === Response::HTTP_UNAUTHORIZED) {
            throw new AuthenticationException($responseContent['message']);
        }

        return $responseContent;
    }

    public function logout(Request $request)
    {
        $user = Auth::guard('api')->user();
        if ($user) {
            $user->token()->revoke();
        }

        return new AuthResource([], 'logout', __('auth.logout'));
    }
}
