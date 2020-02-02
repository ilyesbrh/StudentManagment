<?php

    $number = $_POST["number"];
    $first_name = $_POST["first_name"];
    $last_name = $_POST["last_name"];
    $address = $_POST["address"];
    $bDate = $_POST["date"];
    $gender = $_POST["gender"];
    $level = $_POST["level"];
    $ID = $_POST["id"];

    $servername = "localhost";
    $username = "id12383611_root";
    $password = "ilies22";
    $dbname = "id12383611_managment";

    global $result;
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    $sql = "UPDATE student set first_name ='".$first_name."', last_name='".$last_name."', number='".$number."', adress ='".$address."',birthday ='".$bDate."', level='".$level."', gender='".$gender."'  WHERE id = ". $ID;
    
    $query = $conn->prepare($sql);
    
    $fetch = $query->execute();
    
?>