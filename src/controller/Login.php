<?php
namespace NomenaLista\controller;

use \NomenaLista\model\Users as Users;
use \NomenaLista\model\Companies as Companies;
use \NomenaLista\lib\Login as Lib;

class Login
{

  protected $Users;
  protected $Companies;
  protected $Lib;

  public function __construct()
  {
       $this->Users = new Users;
       $this->Companies = new Companies;
       $this->Lib = new Lib;
  }

  public function index($request, $response)
  {
      $data  = $request->getParsedBody();
      $token = $this->Users->login($data);

      if (isset($token['error'])) {
         return $response->withJson($token);
      }

      return $response->withJson($token);
  }

  public function register($request, $response)
  {
      $data  = $request->getParsedBody();

      if ($this->Users->exists($data['email'])) {
          return $response->withJson($Errors->getError(3));
      }

      if ($this->Companies->exists(['name' => $data['company']])) {
          return $response->withJson($Errors->getError(3));
      }

      $this->Lib->storeUserAndCompany($data);

      return $response->withJson($this->Users->login($data));
  }

}
