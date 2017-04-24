<?php
namespace NomenaLista\model;

use NomenaLista\model\App as App;
use NomenaLista\model\contracts\Events as iEvents;

class Events extends App implements iEvents
{

    public function store($data)
    {
        $this->save($data);
        return $this->lastInsertId();
    }

}
