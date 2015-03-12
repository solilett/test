<?php
session_start();

require('config.php'); 

$email = $_POST['email'];
$password = $_POST['password'];

if ($email == "") 
{
	echo $email;
	echo "<div class='loginError'>";
	echo "You need to enter a valid email";
	echo "</div";
}
else 
{
$mysqli = mysqli_connect(DB_SERVER, DB_USER, DB_PASSWORD, DB_TABLE);

if (mysqli_connect_errno($mysqli)) {
    trigger_error('Database connection failed: '  . mysqli_connect_error(), E_USER_ERROR);
}

$query = "SELECT * FROM tUser WHERE email LIKE '".$email."' AND password LIKE '".$password."'";
$result = mysqli_query($mysqli, $query) or trigger_error("Query Failed! SQL: $query - Error: ". mysqli_error($mysqli), E_USER_ERROR);

$row_count = $result->num_rows;

if($row_count > 0) {
	$_SESSION['SessionStarted'] = true;

	while($row = mysqli_fetch_array($result)) {
    	$_SESSION['id'] = $row['id'];
    		$_SESSION['name'] = $row['firstName'];
	} 
	echo "<script>";
		echo "window.location = 'index.php#/storedBikes';";
		echo "location.reload();";
	echo "</script>";
} 
else
{
	echo "<div class='loginError'>";
	echo "Unable to login - Your email or password is incorrect. Please check credentials and try again";
	echo "</div>";

	echo "<style> .container .jumbotron { height: 400px;} </style>";
}

mysqli_close($mysqli);
}

?>