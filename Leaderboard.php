<!--HEAD-->

<?php include 'Include/head.php';
// PHP file named head is included
bghead("Images/BG/bg4.jpeg");
// function called 
?>

<div class="container-fluid" id="main">
    <div class="row">
        <!--Navbar-->
        <?php include 'Include/navbar.php' ;
      navbar("active");
      ?>
        <!--Navbar Finished-->
    </div>
    <div class="container-table">
    
        <!--Table Starts-->
        <table class="table" id ="ranking">
        <thead>
                <tr>
                    <th>Name</th>
                    <th>Player ID</th>
                    <th>Score</th>
                    <th>Rank</th>
                </tr>
        </thead>
    <script type="text/javascript" src="../JS/ranking.js"> </script>
    
           


    </div>
    <!--Footer-->
    <?php include 'Include/footer.php';
  footerc();
  ?>
    <!--Footer Finished-->
    </body>

    </html>