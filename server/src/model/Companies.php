<?php
namespace NomenaLista\model;

use NomenaLista\model\App as App;
use NomenaLista\model\contracts\Companies as iCompanies;

class Companies extends App implements iCompanies
{

    public function store($data)
    {
        $this->save($data);
        return $this->lastSavedId();
    }

}
