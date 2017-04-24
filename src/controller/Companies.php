<?php
namespace NomenaLista\controller;

use \NomenaLista\model\Companies as model;
use \NomenaLista\lib\Errors as Errors;

class Companies
{

  protected $Companies;

  public function __construct()
  {
      $this->Companies = new model;
  }

  public function get($request, $response)
  {
      $route = $request->getAttribute('route');
      $id = $route->getArgument('id');

      if ( ! $this->Companies->exists($id)) {
          return $response->withJson(['error' => 'not found']);
      }

      return $response->withJson($this->Companies->fetch());
  }

  public function add($request, $response)
  {
      $Errors = new Errors;

      $data = $request->getParsedBody();

      if ($this->Companies->exists($data['name'])) {
          return $response->withJson($Errors->getError(3));
      }

      $id = $this->Companies->store($data);
      return $response->withJson($this->Companies->findById($id));
  }

}
