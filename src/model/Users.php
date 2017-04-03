<?php
namespace NomenaLista\model;

use NomenaLista\model\AppModel;
use NomenaLista\model\contracts\UsersInterface;
use NomenaLista\lib\UsersLib;
use NomenaLista\lib\ErrorsLib as Errors;

class Users extends AppModel implements UsersInterface
{
    public $pk = 'email';
    public $Lib;
    public $Errors;

    public function __construct()
    {
        parent::__construct();

        $this->Lib = new UsersLib;
        $this->Errors = new Errors;
    }

    public function store($data)
    {
        return $this->save(self::hashPassword($data));
    }

    public function remove($id)
    {

    }

    public function login($data)
    {
        if ( ! $this->exists($data['email'])) {
            return $this->Errors->getError(1);
        }

        if ( ! $this->validatePassword($data)) {
            return $this->Errors->getError(2);
        }

        $data = $this->fetch();

        return [
            'isLogged' => true,
            'token'    => $this->Lib->hash($data['id'])
        ];
    }

    public function validatePassword($data)
    {
        return (password_verify($data['password'], $this->fetch()['password']));
    }

    public function hashPassword($data)
    {
        return array_merge($data, [
          'password' => $this->Lib->hash($data['password'])
        ]);
    }

}
