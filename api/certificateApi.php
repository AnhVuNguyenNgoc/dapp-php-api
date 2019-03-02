<?php

include("api.php");


$api_object= new API();

if($_GET["action"] =="fetch_all")
{
    $data=$api_object -> fetch_all();
}

//else bla bla $_Post['action']

echo json_encode($data);
?>