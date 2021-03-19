<?php 

function bghead($urlbg)
{
echo
<<<HEAD

<html>
<head>
	<title>Crazy Code</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<link rel="icon" type="image/png" href="Images/logo.png">
	<link rel="stylesheet" type="text/css" href="../Bootstrap/css/bootstrap.min.css">
	<script type="text/javascript" src="../JS/validation.js"> </script>
	<script type="text/javascript" src="../JS/localStorage.js"> </script>
	
	
     
	<link rel="stylesheet" type="text/css" href="../style.css">

	<style>
    body {
	  background-image:url($urlbg );

    }
  </style>


</head>

HEAD;
}
?>