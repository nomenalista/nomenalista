<?php
namespace NomenaLista\controller;

use \NomenaLista\model\Events as model;
use \NomenaLista\lib\Errors as Errors;

class Events
{

  protected $Events;

  public function __construct()
  {
      $this->Events = new model;
  }

  public function index($request, $response)
  {
      return $response->withJson($this->Events->findAll());
  }

  public function get($request, $response)
  {
      $route = $request->getAttribute('route');
      $id = $route->getArgument('id');

      if ( ! $this->Events->exists($id)) {
          return $response->withJson(['error' => 'not found']);
      }

      return $response->withJson($this->Events->fetch());
  }

  public function add($request, $response)
  {
      $Errors = new Errors;

      $data = $request->getParsedBody();

      $id = $this->Events->store($data);
      return $response->withJson($this->Events->findById($id));
  }

}
