

<?php
session_start();



$frame = $_POST['frameColour'];
$frontWheel = $_POST['frontWheelColour'];
$frontTyre = $_POST['frontTyreColour'];
$rearWheel = $_POST['rearWheelColour'];
$rearTyre = $_POST['rearTyreColour'];
$handlebarType = $_POST['handlebarType'];
$handlebarColour = $_POST['handlebarColour'];
$saddle = $_POST['saddleColour'];

require('login/config.php'); 

$mysqli = mysqli_connect(DB_SERVER, DB_USER, DB_PASSWORD, DB_TABLE);

if (mysqli_connect_errno($mysqli)) {
    trigger_error('Database connection failed: '  . mysqli_connect_error(), E_USER_ERROR);
}


if (isset($_POST['deleteBtn']))
{
	$designId =  $_COOKIE['SelectedDesignId'];
   	$query = ("DELETE FROM tDesign WHERE id = ".$designId);
$result = mysqli_query($mysqli, $query) or trigger_error("Query Failed! SQL: $query - Error: ". mysqli_error($mysqli), E_USER_ERROR);

	echo "<script>";
		echo "window.location  = '../index.php#/storedBikes';";
	echo "</script>";

}
else if (isset($_POST['updateBtn']))
{
	$designId =  $_COOKIE['SelectedDesignId'];
	$query = ("UPDATE tDesign SET frame='".$frame."', frontWheel='".$frontWheel."', frontTyre='".$frontTyre."', rearWheel='".$rearWheel."', rearTyre='".$rearTyre."', saddle='".$saddle."', handlebarColour='".$handlebarColour."', handlebarType='".$handlebarType."' WHERE id=".$designId."");
$result = mysqli_query($mysqli, $query) or trigger_error("Query Failed! SQL: $query - Error: ". mysqli_error($mysqli), E_USER_ERROR);

	echo "<script>";
		echo "window.location = '../index.php#/storedBikes';";
	echo "</script>";


}

else
{

$query = ("INSERT INTO tDesign (userId,frame,frontWheel,frontTyre,rearWheel,rearTyre, handlebarType,handlebarColour, saddle) 
VALUES (".$_SESSION['id'].",'".$frame."','".$frontWheel."', '".$frontTyre."', '".$rearWheel."', '".$rearTyre."', '".$handlebarType."', '".$handlebarColour."', '".$saddle."')");
$result = mysqli_query($mysqli, $query) or trigger_error("Query Failed! SQL: $query - Error: ". mysqli_error($mysqli), E_USER_ERROR);

	echo "<script>";
		echo "window.location = '../index.php#/storedBikes';";
	echo "</script>";
}
?>