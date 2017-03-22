<?php
namespace NomenaLista\controller;

use \NomenaLista\model\Users as Users;
use \NomenaLista\lib\ErrorsLib as Errors;

class UsersController
{

  protected $Users;

  public function __construct()
  {
      $this->Users = new Users;
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
