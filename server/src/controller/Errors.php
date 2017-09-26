<?php

namespace NomenaLista\controller;

use \NomenaLista\model\Errors as model;

class Errors {

    protected $Errors;

    public function __construct()
    {
        $this->Errors = new model;
    }

    public function index($request, $response)
    {
        return $response->withJson($this->Errors->findAll());
    }

}
