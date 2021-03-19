<!--HEAD-->
<?php include 'Include/head.php';
// PHP file named head is included
bghead("Images/BG/bg2.jpg");
// function called 
?>
<!-- HEAD FINISHED-->

<!--HOME PAGE BODY-->
<div class="container-fluid" id="main">
    <div class="row">

        <!--Navbar-->
        <?php include 'Include/navbar.php' ;
        navbar("active");
      ?>
        <!--Navbar Finished-->

    </div>
    <section>
        <div class="row">
            <!--Banner-->
            <div class=" banner col-m-8">
                <div class="img-container">
                    <div id="slider">
                        <figure>
                            <img src="Images/banner/pic2.jpeg">
                            <img src="Images/banner/pic2.jpg">
                            <img src="Images/banner/pic4.jpg">
                            <img src="Images/banner/pic1.jpeg">
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div class="col-md-4">
        <section>
            <div class="container" id="rules">
                <div class="text-rules">
                    <ul>
                        <li>This Game will check your knowledge of coding languages like HTML, CSS, JAVA, PHP &
                            JavaScript. </li>
                        <br>
                        <li>Collide with the word which you think is JAVA and JavaScript tag or HTML keyword .</li>
                        <br>
                        <li>Before you start game, you must Login or Register yourself and once you finished press save to save your score</li>
                        <br>
                        <li>NOTE : Please press SAVE button to save your score. THANKS! &nbsp<i
                                class="fa fa-hand-o-down"></i></li>
                    </ul>
                </div>
            </div>
        </section>
    </div>
</div>
<!--Banner Finished-->

<!--HOME PAGE BODY-->
<!--Footer-->
<?php include 'Include/footer.php';
      footerc();
       ?>
<!--Footer Finished-->