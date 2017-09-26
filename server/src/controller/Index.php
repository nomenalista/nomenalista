<?php
namespace NomenaLista\controller;

class Index
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
