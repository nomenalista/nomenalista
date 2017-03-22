<?php

namespace NomenaLista\controller;

use \NomenaLista\model\Errors as Errors;

class ErrorsController {

    protected $Errors;

    public function __construct()
    {
        $this->Errors = new Errors;
    }

    public function index($request, $response)
    {
        return $response->withJson($this->Errors->findAll());
    }

}
