<?php

  $id = $_POST['id'];
  
  require_once('dbConnect.php');
    
  $query = "SELECT * FROM events WHERE id = '$id'";

  $result = $con->query($query);

  //if we get data back display it using a table
  if($result != FALSE) 
  {
      while($row = $result->fetch()) 
      {
        echo "<h5 class='card-title'>{$row['name']}</h5>";
        echo "<h6 class='card-subtitle mb-2 text-body-secondary'>{$row['category']}</h6>";
        echo "<p class='card-text'>Cost: {$row['cost']}<br>
        Location: {$row['location']} [{$row['lon_lat']}]<br>
        Date: {$row['month']} {$row['day']} {$row['time']}<br>
        ID: {$row['id']}<br>Tagged: {$row['tagged']}<br>
        <div class='input-group'>
          <span class='input-group-text'>Notes:</span>
          <textarea class='form-control' aria-label='Notes:' id='notes'>{$row['notes']}</textarea>
          <button type='button' class='btn btn-dark' onclick='updateNotes({$row['id']})'>Update Notes</button>
        </div>
        <button type='button' class='btn btn-dark' onclick='getWeather({$row['lon_lat']})'>Get Weather</button>
        </p>";
      }
  }
  
// show update visually
// add refresh that clears right side and loads using ajax

