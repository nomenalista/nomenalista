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

$app->add(function ($req, $res, $next) {
    $response = $next($req, $res);
    return $response
            ->withHeader('Access-Control-Allow-Origin', '*')
            ->withHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization')
            ->withHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
});

/*
* Routes
*/
$app->get('/', '\NomenaLista\controller\IndexController:index');
$app->post('/login', '\NomenaLista\controller\LoginController:index');
$app->post('/users', '\NomenaLista\controller\UsersController:add');
$app->get('/errors', '\NomenaLista\controller\ErrorsController:index');

$app->run();
