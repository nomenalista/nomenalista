<?php

namespace NomenaLista\lib;

class Users {

    public function hash($value)
    {
        return password_hash($value, PASSWORD_DEFAULT);
    }

}
