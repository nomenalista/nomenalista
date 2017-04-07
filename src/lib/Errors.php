<?php

namespace NomenaLista\lib;

use \NomenaLista\model\Errors as model;

class Errors {

    protected $Errors;

    public function __construct()
    {
        $this->Errors = new model\Errors;
    }

    public function getError($id)
    {
        $error = $this->Errors->findById($id);

        return [
            'error' => [
                'code' => $error['id'],
                'msg' => $error['msg']
            ]
        ];
    }

}
