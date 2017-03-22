<?php
namespace NomenaLista\controller;

use \NomenaLista\model\Users as Users;
use \NomenaLista\lib\ErrorsLib as Errors;

class LoginController
{

  protected $Users;

  public function __construct()
  {
       $this->Users = new Users;
  }

  public function index($request, $response)
  {
      $data = $request->getParsedBody();

      return $response->withJson(self::loginUser($data));
  }

  private function loginUser($data)
  {
      $Errors = new Errors;

      if ( ! $this->Users->exists($data['email'])) {
          return $Errors->getError(1);
      }

      if ( ! $this->Users->validatePassword($data)) {
          return $Errors->getError(2);
      }

      return $this->Users->fetch();
  }

}
