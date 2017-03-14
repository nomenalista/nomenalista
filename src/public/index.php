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
$app->get('/users', '\NomenaLista\classes\UsersController:index');
$app->post('/users', '\NomenaLista\classes\UsersController:add');


$app->run();
