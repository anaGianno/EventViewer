<?php
  
  require_once('dbConnect.php');
    
  $query = "Select * from events";

  $result = $con->query($query);

  //if we get data back display it using a table
  if($result != FALSE) 
  {
      while($row = $result->fetch()) {
        echo "<button type='button' class='list-group-item list-group-item-action' onclick='getEventInfo({$row['id']})'>{$row['id']}. {$row['name']}</button>";
      }
  }

  

