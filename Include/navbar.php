<?php 

function navbar()
{
  $url="";
  $url = basename($_SERVER['REQUEST_URI']);
echo  '<div class="row">';
echo  '<nav class="navbar ">';
echo  '<div class="col-3  n">';
echo  '<a class="navbar-brand '; if($url == 'Game.php'){echo 'active';} echo ' "href="Game.php">Crazy &nbsp &nbsp &nbspCode  <img id="logo" src="Images/logo.png"></a>';
echo  '<div class="col-9 navbar-active">';
echo  '<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1"';
echo  ' <ul class="nav navbar-nav navbar-right">';
echo  '<ul class="nav navbar-nav navbar-right">';
echo  '<li>';
echo  '<a class="nav-link '; if($url == 'index.php'){echo 'active';} echo ' "href="index.php" ><i class="fa fa-home  fa-fw "></i> Home </a>';
echo  '</li>'; 
echo  '<li>'; 
echo  '<a href="Game.php" class="nav-link '; if($url == 'Game.php'){echo 'active';} echo '"><i class="fa fa-optin-monster  fa-fw "></i>Game </a>';    
echo  '</li>'; 
echo  '<li>'; 
echo  '<a href="Leaderboard.php" class="nav-link '; if($url == 'Leaderboard.php'){echo 'active';} echo '"><i class="fa fa-trophy  fa-fw "></i>Leaderboard </a>';  
echo  '</li>'; 
echo  '<li>'; 
echo  '<a href="Signup.php" class="nav-link '; if($url == 'Signup.php'){echo 'active';} echo'"><i class="fa fa-user-o  fa-fw "></i> Login/Register </a>'; 
echo  '</li>'; 
echo  '<li>'; 
echo  '<a href="Signup.php" id="logout" onclick = "playerLogout()"><i class="fa fa-user-o  fa-fw "></i> Logout </a>'; 
echo  '</li>'; 
echo  '</ul>'; 
echo  '</div>'; 
echo  '</div>'; 
echo  '</nav>'; 
}

?>