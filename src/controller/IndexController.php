<?php
namespace NomenaLista\controller;

class IndexController
{

  public function index($request, $response)
  {
      $routes = [
        'RoutesAvailable' => [
          '/users' => [
              'POST' => '[add] Create new user'
          ],
          '/login' => [
              'POST' => '[index] Login'
          ]
        ]
      ];

      return $response->withJson($routes);
  }

}
