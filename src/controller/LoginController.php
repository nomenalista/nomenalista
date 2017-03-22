<?php
namespace NomenaLista\controller;

use \NomenaLista\model\Users as Users;
use \NomenaLista\lib\ErrorsLib as Errors;

class LoginController
{

  protected $Users;
  public $Errors;

  public function __construct()
  {
       $this->Users = new Users;
       $this->Errors = new Errors;
  }

  public function index($request, $response)
  {
      $data = $request->getParsedBody();

      return $response->withJson(self::loginUser($data));
  }

  private function loginUser($data)
  {
      if ( ! $this->Users->exists($data['email'])) {
          return $this->Errors->getError(1);
      }

      if ( ! $this->Users->validatePassword($data)) {
          return $this->Errors->getError(2);
      }

      $data = $this->Users->fetch();
      
      return [
          'isLogged' => true,
          'token'    => $this->Users->Lib->hash($data['id'])
      ];
  }

}
