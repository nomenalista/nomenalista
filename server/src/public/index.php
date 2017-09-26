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
$app->get('/', '\NomenaLista\controller\Index:index');
$app->post('/login', '\NomenaLista\controller\Login:index');
$app->post('/register', '\NomenaLista\controller\Login:register');
$app->post('/users', '\NomenaLista\controller\Users:add');
$app->post('/companies', '\NomenaLista\controller\Companies:add');
$app->get('/companies/{id}', '\NomenaLista\controller\Companies:get');
$app->get('/events', '\NomenaLista\controller\Events:index');
$app->get('/events/{id}', '\NomenaLista\controller\Events:get');
$app->get('/errors', '\NomenaLista\controller\Errors:index');

$app->run();
