<?php

namespace App\Services;

use Carbon\Carbon;
use App\Repositories\NhomDoAnRepository;
use Arr;

class NhomDoAnService extends BaseService
{
    protected $nhomDoAnRepository;

    public function __construct(
        NhomDoAnRepository $nhomDoAnRepository,
        UserRepository $userRepository
    ) {
        parent::__construct($nhomDoAnRepository);

        $this->nhomDoAnRepository = $nhomDoAnRepository;
    }

    public function paginateList($params)
    {
        $params = Arr::get($params, 'keyword', '');
        $page = isset($params['page']) ? $params['page'] : config('common.page_default');
        $keyword = isset($params['keyword']) ? $params['keyword'] : '';
        return $this->nhomDoAnRepository->paginateList($page, ['*'], $keyword);
    }

    public function update($id,array $data)
    {
       dd($data);
        return $this->repository->store($data);
    }
}