<?php

class API{

    private $connect="";

    function __construct()
    {
        $this->database_Connection();
    }

    function database_Connection(){
        $this->connect = new PDO("mysql:host=localhost;dbname=cv_management","root","");
    }

    function fetch_all()
    {
        $query = "SELECT * FROM certificate";
        $statement = $this->connect->prepare($query);

        if($statement->execute())
        {
                while($row = $statement->fetch(PDO::FETCH_ASSOC))
                {
                    $data[] = $row;
                }
                return $data;
        }
    }
}

?>
