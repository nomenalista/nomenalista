<?php
namespace NomenaLista\models\contracts;

interface UsersInterface
{
    public function store($data);
    public function remove($id);
}
