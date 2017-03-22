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

      if ($this->Users->exists($data['email'])) {
          return $response->withJson($this->Users->fetch());
      }

      return $response->withJson(['msg' => 'not found']);
  }

}
