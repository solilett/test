<?php

session_start();


if (isset($_REQUEST['email']))
{
	$email = $_REQUEST['email'];
}

if (isset($_REQUEST['email2']))
{
	$email2 = $_REQUEST['email2'];
}

if (isset($_REQUEST['firstName']))
{
	$firstName = $_REQUEST['firstName'];
}

if (isset($_REQUEST['lastName']))
{
	$lastName = $_REQUEST['lastName'];
}
if (isset($_REQUEST['contact']))
{
	$contact = $_REQUEST['contact'];
}
if (isset($_REQUEST['password']))
{
	$password = $_REQUEST['password'];
}
if (isset($_REQUEST['password2']))
{
	$password2 = $_REQUEST['password2'];
}



if(($email != "") && ($email2 != "") && ($email == $email2) && ($firstName != "") && ($lastName != "") && ($contact != "") && (strlen($contact) < 14) && ($password != "") && ($password2 != "") && ($password == $password2))
{
		include '../login/config.php';
		$mysqli = mysqli_connect(DB_SERVER, DB_USER, DB_PASSWORD, DB_TABLE);

		if (mysqli_connect_errno($mysqli)) {
			trigger_error('Database connection failed: '  . mysqli_connect_error(), E_USER_ERROR);
		}

		$query = ("INSERT INTO tUser VALUES ('', '".$firstName."', '".$lastName."', '".$email."', '".$password."', '".$contact."');");
		$result = mysqli_query($mysqli, $query) or trigger_error("Query Failed! SQL: $query - Error: ". mysqli_error($mysqli), E_USER_ERROR);


		$query = "SELECT * FROM tUser WHERE email = '".$email."';";
		$result = mysqli_query($mysqli, $query) or trigger_error("Query Failed! SQL: $query - Error: ". mysqli_error($mysqli), E_USER_ERROR);

		while($row = mysqli_fetch_array($result)) {
			$_SESSION['id'] = $row['id'];
		}
		$_SESSION['SessionStarted'] = true;

		$query = ("INSERT INTO tDesign VALUES (".$_SESSION['id'].", 'white', 'black', 'black', 'black','black','dropped','white','white','', ".date("Y-m-d").");");
		$result = mysqli_query($mysqli, $query) or trigger_error("Query Failed! SQL: $query - Error: ". mysqli_error($mysqli), E_USER_ERROR);

		echo '<meta http-equiv="refresh" content="1; url=index.php#/storedBikes" />';
}
?>