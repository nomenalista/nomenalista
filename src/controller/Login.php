<?php
namespace NomenaLista\controller;

use \NomenaLista\model\Users as model;

class Login
{

  protected $Users;

  public function __construct()
  {
       $this->Users = new model\Users;
  }

  public function index($request, $response)
  {
      $data  = $request->getParsedBody();
      $token = $this->Users->login($data);

      if (isset($token['error'])) {
         return $response->withJson($token, 401);
      }

      return $response->withJson($token);
  }

}
