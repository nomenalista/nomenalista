<?php

namespace NomenaLista\lib;

use \NomenaLista\model\Users as Users;
use \NomenaLista\model\Companies as Companies;

class Login
{

    protected $Users;
    protected $Companies;

    public function __construct()
    {
         $this->Users = new Users;
         $this->Companies = new Companies;
    }

    public function storeUserAndCompany($data)
    {
        $user_id = self::storeUser($data);

        $company_id = self::storeCompany($data, $user_id);

        $this->Users->save([
            'email' => $data['email'],
            'company_id' => $company_id
        ]);

        return [
            'user_id' => $user_id,
            'company_id' => $company_id
        ];
    }

    public function storeUser($data)
    {
        $user = array(
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => $data['password']
        );

        return $this->Users->store($user);
    }

    public function storeCompany($data, $user_id)
    {
        $company = array(
            'name' => $data['company'],
            'user_id' => $user_id
        );

        return $this->Companies->store($company);
    }
}
