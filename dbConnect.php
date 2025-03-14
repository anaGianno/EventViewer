<?php
	// connect to database
   try{
   	$con = new PDO('mysql:host=learn-mysql.cms.waikato.ac.nz;dbname=bc245','bc245','my356583sql');
   	} catch (PDOException $e) {
   		echo "Database connection error " . $e->getMessage();
   	}
   
