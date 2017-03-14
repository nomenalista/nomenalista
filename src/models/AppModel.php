<?php
namespace NomenaLista\models;

use SimpleORM\core\model\Model;

class AppModel extends Model
{
    public $table;
    public $pk;
    public $db_config = [
        'db_host' => 'localhost',
        'db_name' => 'nnl_github',
        'db_user' => 'root',
        'db_pass' => ''
    ];

    public function __construct($table = null, $pk = 'id')
    {
        $this->table = $table;
        $this->pk = $pk;

        parent::__construct();
    }

}
