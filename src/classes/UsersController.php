<?php
namespace NomenaLista\classes;

use \NomenaLista\models\Users as Users;

class UsersController
{

  protected $Users;

  public function __construct()
  {
       $this->Users = new Users;
  }

  public function index($request, $response)
  {
      return $response->withJson($this->Users->getAll());
  }

  public function add($request, $response) {

       $data = $request->getParsedBody();
       $users = $response->withJson($this->Users->store($data));

      return $users;
  }

}
