<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require '../vendor/autoload.php';

/*
* Slim Framework Configution
*/
$config['displayErrorDetails'] = true;
$config['addContentLengthHeader'] = false;

$app = new \Slim\App(["settings" => $config]);

/*
* Routes
*/
$app->get('/users', function (Request $request, Response $response) {

    $Users = new NomenaLista\models\Users;
    $list = $Users->getAll();

    $response->getBody()->write(var_export($list, true));

    return $response;
});

$app->run();
