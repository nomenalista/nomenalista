<?php
namespace NomenaLista\model;

use NomenaLista\model\AppModel;
use NomenaLista\model\contracts\UsersInterface;
use NomenaLista\lib\UsersLib;

class Users extends AppModel implements UsersInterface
{
    public $pk = 'email';
    public $Lib;

    public function __construct()
    {
        parent::__construct();

        $this->Lib = new UsersLib;
    }

    public function store($data)
    {
        return $this->save(self::hashPassword($data));
    }

    public function remove($id)
    {

    }

    public function validatePassword($data)
    {
        return (password_verify($data['password'], $this->fetch()['password']));
    }

    private function hashPassword($data)
    {
        return array_merge($data, [
          'password' => $this->Lib->hash($data['password'])
        ]);
    }

}
