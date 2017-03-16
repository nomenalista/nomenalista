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
        if ($this->exists($data['email'])) {
            return ['error' => 'Username already exists'];
        }

        return $this->save($data);
    }

    public function remove($id)
    {

    }

}
