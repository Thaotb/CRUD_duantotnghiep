<?php

namespace App\Http\Resources;

use App\Http\Resources\ApiResource;

class NhomDoAnResource extends ApiResource
{
    protected $method;

    public function __construct($resource, $method = 'index', $message = null)
    {
        $this->method = $method;
        parent::__construct($resource, $message);
    }

    public function toArray($request)
    {
        return $this->{$this->method}();
    }

    public function index()
    {
        return $this->resource;
    }
    public function create()
    {
        return $this->resource; 
    }
}
