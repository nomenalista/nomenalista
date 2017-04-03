<?php
namespace NomenaLista\controller;

use \NomenaLista\model\Users as Users;

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

      return $response->withJson($this->Users->login($data));
  }

}
