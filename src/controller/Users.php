<?php
namespace NomenaLista\controller;

use \NomenaLista\model\Users as model;
use \NomenaLista\lib\Errors as Errors;

class Users
{

  protected $Users;

  public function __construct()
  {
      $this->Users = new model\Users;
  }

  public function add($request, $response)
  {
      $Errors = new Errors;

      $data = $request->getParsedBody();

      if ($this->Users->exists($data['email'])) {
          return $response->withJson($Errors->getError(3));
      }

      return $this->Users->store($data);
  }

}
