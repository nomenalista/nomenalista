<?php
namespace NomenaLista\models;

use NomenaLista\models\AppModel;

class Users extends AppModel
{
    public function getAll()
    {
        return $this->findAll();
    }
}
