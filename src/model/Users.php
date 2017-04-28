<?php
namespace NomenaLista\model;

use NomenaLista\model\App as App;
use NomenaLista\model\contracts\Users as iUsers;
use NomenaLista\lib\Users as Lib;
use NomenaLista\lib\Errors as Errors;

class Users extends App implements iUsers
{
    public $pk = 'email';
    public $Lib;
    public $Errors;

    public function __construct()
    {
        parent::__construct();

        $this->Lib = new Lib;
        $this->Errors = new Errors;
    }

    public function store($data)
    {
        $this->save([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => $this->Lib->hash($data['password'])
        ]);

        return $this->lastInsertId();
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
            'token'    => $this->Lib->hash($data['id']),
            'company'  => $data['company_id']
        ];
    }

    public function validatePassword($data)
    {
        return (password_verify($data['password'], $this->fetch()['password']));
    }
}
