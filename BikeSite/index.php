<?php 
session_start();
?>

<!DOCTYPE html>
<html ng-app="myApp">


<head>
<title> Bootstrap Template </title>
<meta name="viewport" content="width=device-width, initial-scale=1.0" >

<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css">
<link href='http://fonts.googleapis.com/css?family=Oswald' rel='stylesheet' type='text/css'>
<link rel = "stylesheet" href = "css/style.css" >
<link rel="stylesheet" href="css/accordionStyle.css">


<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script> 
<script src="http://code.jquery.com/ui/1.11.2/jquery-ui.js"></script>
<link rel="stylesheet" href="http://code.jquery.com/ui/1.11.2/themes/smoothness/jquery-ui.css">


<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.3.3/angular.min.js"></script>
<script src="http://cdnjs.cloudflare.com/ajax/libs/angular.js/1.3.3/angular-route.min.js"></script>

<script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/js/bootstrap.min.js"></script>  


<script src="app.js"></script>





</head>

<body>

<div class="logoBG">
<h1 class="logo"> Custom Bikes </h1>
</div>

	

<div class="navbar navbar-inverse navbar-static-top" id="siteNav">
	<div class="container">

		<div class="navbar-header">
		<a href = "#/" class="navbar-brand"> Custom Bikes </a>

		<button class = "navbar-toggle" data-toggle = "collapse" data-target = ".navHeaderCollapse">
			<span class="icon-bar"> </span>
			<span class="icon-bar"> </span>
			<span class="icon-bar"> </span>
		</button>
		</div>

		<div  ng-controller="MyCtrl" class = "collapse navbar-collapse navHeaderCollapse">

			<ul class = "nav navbar-nav navbar-right">
				<li ng-class="{active:isActive('/')}"><a href= "#/">Home</a></li>
				<li ng-class="{active:isActive('/custom')}"><a href= "#/custom">Customise Bike</a></li>	
				<?php 
					if (isset($_SESSION['SessionStarted']))
					{
						if ($_SESSION['SessionStarted'] == true)
						{
							echo '<li class="dropdown">';
								echo '<a href="javascript:void" class="dropdown-toggle" id="loggedInLink" data-toggle="dropdown"> Logged In <b class="caret"></b></a>';
									echo '<ul class="dropdown-menu">';
										echo '<li><a href="#/account"> My Account </a> </li>';
										echo '<li><a href="#/storedBikes"> Saved Designs </a> </li>';
										echo '<li><a href="#/logout"> Logout </a> </li>';
									echo '</ul>';
							echo '</li>';

						}
						else
						{
							include 'pages/login/false.php';	
						}
					}
					else
					{
						include 'pages/login/false.php';
					}
					
				?>

				<div id="userSession" >
				</div>
			
			</ul>
			<div id="currentUser"> <?php echo $_SESSION['name']; ?></div>

		</div> 
	</div>
</div>


 	<div id="offFocus"> <!-- sets accordion to close when background is clicked -->
	</div>
	


<div class="container">



    	<div ng-view> </div>
  
   

</div>

<script>
$(window).on('hashchange', function() {
    if (location.hash === "#/custom") {
        $('#offFocus').css('display','block')
    }
    else
    {
    	 $('#offFocus').css('display','none')
    }
});
	

$()

	

$( document ).ready(function() {
$('#currentUser').hide();


	$("#loggedInLink").mouseover(function(){
        $("#currentUser").fadeIn();
        });

        $("#loggedInLink").mouseleave(function(){
        $("#currentUser").fadeOut();
        });
 	
	


    $(window).scroll(function() {

    	if ($(window).width() < 800)
    	{
    		if ($(document).scrollTop() > 67) {
            	$('#siteNav').attr('class','navbar navbar-inverse navbar-fixed-top');
            	$('.container .jumbotron').css('margin-top','140px');
            	$('#homeImg').css('margin-top','130px');
            	$('.logo').hide();
            	$('.navbar-brand').fadeIn();
        	}
        	else {
        		$('#siteNav').attr('class','navbar navbar-inverse navbar-static-top');
        		$('.container .jumbotron').css('margin-top','');
        		$('#homeImg').css('margin-top','');
        		$('.logo').show();
        		$('.navbar-brand').fadeOut();
        	}
    	}
    	else
    	{
        	if ($(document).scrollTop() > 60) {
            	$('#siteNav').attr('class','navbar navbar-inverse navbar-fixed-top');
            	$('.container .jumbotron').css('margin-top','130px');
            	$('#homeImg').css('margin-top','130px');
            	$('.logo').hide();
            	$('.navbar-brand').fadeIn();
        	}
        	else {
        		$('#siteNav').attr('class','navbar navbar-inverse navbar-static-top');
        		$('.container .jumbotron').css('margin-top','');
        		$('#homeImg').css('margin-top','');
        		$('.logo').show();
        		$('.navbar-brand').fadeOut();
        	}
        }

	});




});





</script>


</body>

</html>