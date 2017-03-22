<?php

namespace NomenaLista\lib;

class UsersLib {

    public function hash($value)
    {
        return password_hash($value, PASSWORD_DEFAULT);
    }

}
