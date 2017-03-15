<?php
namespace NomenaLista\model\contracts;

interface UsersInterface
{
    public function store($data);
    public function remove($id);
}
