<?php
namespace NomenaLista\models;

use NomenaLista\models\AppModel;
use NomenaLista\models\contracts\UsersInterface;

class Users implements UsersInterface
{
    protected $Model;

    public function __construct()
    {
        $this->Model = new AppModel($table = 'users', $pk = 'email');
    }

    public function getAll()
    {
        return $this->Model->findAll();
    }

    public function store($data)
    {
        if ($this->Model->findById($data['email'])) {
            return ['error' => 'Username already exists'];
        }

        return $this->Model->save($data);
    }

    public function remove($id)
    {

    }
}
