<?php
  
  require_once('dbConnect.php');
    
  // get all events from database
  $query = "SELECT * FROM events";

  $result = $con->query($query);

  if($result != FALSE) 
  {
    // echo a button for each event
      while($row = $result->fetch()) {
        echo "<button type='button' class='list-group-item list-group-item-action' onclick='getEventInfo({$row['id']})'>{$row['id']}. {$row['name']}</button>";
      }
  }

  

