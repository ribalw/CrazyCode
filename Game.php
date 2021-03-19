<!DOCTYPE html>
<html>
<!--HEAD-->
<?php include 'Include/head.php';
// PHP file named head is included

bghead("Images/BG/bg3.jpeg");
// function called 
?>
<body onload = "" >  
  <!--header section-->
<div class="container-fluid" id="main">
  <div class="row">
      <!--Navbar-->
      <?php include 'Include/navbar.php' ;
      navbar();
      ?>
      <!--Navbar Finished-->
       <!--Game Starts-->
     <div class="container">
     
      <div class="gamepage">
        <canvas id ="gameCanvas">   
          <h1></h1>
        
        </canvas>
        <script type="text/javascript" src="JS/game.js"> </script>
        <script type="text/javascript" src="JS/localStorage.js"> </script>
        
          
    <div id="gameButton">
  
  <button type="button" class="gButton "  onclick="levelUp()">Start</button>
  <button type="button" class="gButton "  onclick="levelUp()">Level Up</button>
  <button type="button" class="gButton "  onclick="pushScore()">Save</button>
  <button type="button" class="gButton "  onclick="window.location.href = 'index.php'"> Rules</button>
  
 
</div>

      </div  >
    
  
</div>
 
      <!--Footer-->
      <?php include 'Include/footer.php';
      footerc();
       ?>
      <!--Footer Finished-->
    </div>
