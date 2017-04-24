<?php
namespace NomenaLista\model;

use SimpleORM\core\model\Model;

class App extends Model
{

    public function __construct()
    {
        parent::__construct();

        $ths->db_config = [
            'db_host' => getenv("DB_HOST"),
            'db_name' => getenv("DB_DATABASE"),
            'db_user' => getenv("DB_USERNAME"),
            'db_pass' => getenv("DB_PASSWORD")
        ];
    }

}
