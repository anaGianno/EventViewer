<?php
  
  require_once('dbConnect.php');
    
  $query = "Select * from events";

  $result = $con->query($query);

  //if we get data back display it using a table
  if($result != FALSE) 
  {
      while($row = $result->fetch()) 
      {
          echo $row['name'] . " " ;
          echo $row['category'] . " " ;
          echo $row['month'] . " " ;
          echo $row['day'] . " " ;
          echo $row['time'] . " " ;
          echo $row['cost'] . " " ;
          echo $row['location'] . " " ;
          echo $row['id'] . " " ;
          echo $row['tagged'] . " " ;
          echo $row['lon_lat'] . " " ;
          echo $row['notes'] . " " ;
          echo "<br>";
      }
  }

