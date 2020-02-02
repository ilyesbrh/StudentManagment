<?php
    $servername = "localhost";
    $username = "id12383611_root";
    $password = "ilies22";
    $dbname = "id12383611_managment";
    global $result;
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $query = $conn->prepare("DELETE FROM `student` WHERE id = ".$_GET['id']);
        
    $query->execute();
    
?>