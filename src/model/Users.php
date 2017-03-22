<?php
namespace NomenaLista\model;

use NomenaLista\model\AppModel;
use NomenaLista\model\contracts\UsersInterface;

class Users extends AppModel implements UsersInterface
{
    public $pk = 'email';

    public function getAll()
    {
        return $this->findAll();
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
          'password' => password_hash($data['password'], PASSWORD_DEFAULT)
        ]);
    }

}
