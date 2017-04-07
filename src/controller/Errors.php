<?php

namespace NomenaLista\controller;

use \NomenaLista\model\Errors as model;

class Error {

    protected $Errors;

    public function __construct()
    {
        $this->Errors = new model\Errors;
    }

    public function index($request, $response)
    {
        return $response->withJson($this->Errors->findAll());
    }

}
