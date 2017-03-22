<?php
namespace NomenaLista\controller;

use \NomenaLista\model\Users as Users;

class UsersController
{

  protected $Users;

  public function __construct()
  {
       $this->Users = new Users;
  }

  public function add($request, $response) {

       $data = $request->getParsedBody();
       $users = $response->withJson($this->Users->store($data));

      return $users;
  }

}
