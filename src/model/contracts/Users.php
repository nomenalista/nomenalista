<?php
namespace NomenaLista\model\contracts;

interface Users
{
    public function store($data);
    public function remove($id);
}
