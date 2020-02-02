<?php
    $servername = "localhost";
    $username = "id12383611_root";
    $password = "ilies22";
    $dbname = "id12383611_managment";
    global $result;
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $query="";

    if (empty($_POST["first_name"]) AND empty($_POST["last_name"]) AND empty($_POST["date"])) {
        $query = $conn->prepare("SELECT * FROM student");
    }else{
        $query = $conn->prepare( "SELECT * FROM `student` WHERE `birthday` = '".$_POST["date"]."' OR `first_name` = '".$_POST["first_name"]."' OR `last_name` = '".$_POST["last_name"]."' ORDER BY created");
    }
    $query->execute();
    $result = $query->fetchAll();

    echo json_encode($result);
    
?>