<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class AuthResource extends JsonResource
{
    protected $method;

    public function __construct($resource, $method = 'login', $message = null)
    {
        parent::__construct($resource, $message);
        $this->method = $method;
    }

    public function toArray($request)
    {
        return $this->{$this->method}();
    }

    public function login()
    {
        return $this->resource;
    }

    public function logout()
    {
        return [
            'data' => null,
        ];
    }
}
