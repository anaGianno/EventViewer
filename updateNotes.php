<?php

  $notes = $_POST['notes'];
  $id = $_POST['id'];
  
  require_once('dbConnect.php');
    
  $query = "UPDATE events SET notes = '$notes' WHERE id = '$id'";
  
  $result = $con->query($query);

