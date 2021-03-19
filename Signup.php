<!--HEAD-->
<?php include 'Include/head.php';
// PHP file named head is included
bghead("Images/BG/bg5.jpg");
// function called 
?>
<!--LOGIN/REGISTER PAGE BODY-->
<div class="container-fluid" id="main">
    <div class="row">

        <!--Navbar-->
        <?php include 'Include/navbar.php';
			navbar();
			?>
        <!--Navbar Finished-->

        <!--Login Form-->
        <h1 id = "loginMessage"></h1>
        <div class="col-md-4 col-md-offset-2 login-form">
            <h2>Login</h2>
            <form name="myLoginForm" action="Game.php" method="POST">
                <div class="form-group" id="loginform">
                    <label for="lid">Player ID</label>
                    <input name="lid" type="text" class="form-control"  id="lid" placeholder="Player ID">
                </div>
                <div class="form-group">
                    <label>Password</label>
                    <input name="password" type="password" id="lpass" class="form-control" placeholder="Password"
                        required />
                </div>
                <button type="button" id="loginBtn" class="btn btn-primary "  onclick="playerLogin()">Login</button>
                <p id ="loginMsg"></p>
            </form>
           
            
        </div>
        <!--Login Formn End-->

        <!--Regiateration Form-->
        <div class="col-md-4 registration">
             <h2>Registration</h2>
                <form name="myRegform" action = "Game.html" method="POST" >
                    <div class="form-group">
                        <label for="rid">Player ID</label>
                        <input  name = "id" type="text" class="form-control" id="rid" placeholder="ID" />
                    </div>
                    <div class="form-group">
                        <label>Name</label>
                        <input name = "rname" type="text" id="rname" class="form-control" placeholder="Name" required />
                    </div>
                    <div class="form-group">
                        <label>Email</label>
                        <input type="email" class="form-control" id="remail"  name = "email"
                            placeholder="email@example.com" required />
                    </div>
                    <div class="form-group">
                        <label>Password</label>
                        <input type="password" class="form-control"  id="rpass" name = "password"
                            placeholder="Password" required />
                    </div>
                    
                    <button type="button" class="btn btn-primary "  onclick="playerRegister()">Register</button>
                </form>
        </div>
        <!--Registration Form Finsihed-->
    </div>
</div>
<!--LOGIN/REGISTER PAGE BODY FINISHED-->

<!--Footer-->

<?php include 'Include/footer.php' ;
		  footerc(); 
		  ?>
<!--Footer Finished-->
<!--ADDING JAVASCRIPT-->
