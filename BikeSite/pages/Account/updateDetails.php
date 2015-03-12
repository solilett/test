
<?php
session_start();




if (isset($_POST['firstName']))
{
	$firstName = $_POST['firstName'];
}
if (isset($_POST['email']))
{
	$email = $_POST['email'];
}
if (isset($_POST['lastName']))
{
$lastName = $_POST['lastName'];
}
if (isset($_POST['contactNumber']))
{
$contactNumber = $_POST['contactNumber'];
}






if ($firstName == "")
{
	echo "Please enter your firstname";
	?>
		<script>
		$('#errorMessage').css('display','block');
		$('#firstName').addClass('inputError');
		</script>
	<?php
}
else if ($lastName == "")
{
	echo "Please enter your lastname";
	?>
		<script>
		$('#errorMessage').css('display','block');
		$('#lastName')..addClass('inputError');
		</script>
	<?php
}
else if ($contactNumber == "")
{
	echo "Please enter your contact Number";
	?>
		<script>
		$('#errorMessage').css('display','block');
		$('#contactNumber').addClass('inputError');
		</script>
	<?php
}
else if ($email != $_SESSION['currentEmail'])
{
	$email2 = $_POST['email2'];
	if($email != $email2)
	{
		echo "Your emails do not match, please check and try again";
	?>
		<script>
		$('#errorMessage').css('display','block');
		$('#email').addClass('inputError');
		$('#email2').addClass('inputError');
		</script>
	<?php
	}
	else
	{
		runUpdateSQL($firstName, $lastName, $email, $contactNumber);	
	}
}
else
{
	runUpdateSQL($firstName, $lastName, $email, $contactNumber);
}

function runUpdateSQL($firstName, $lastName, $email, $contactNumber){

include '../login/config.php';
$mysqli = mysqli_connect(DB_SERVER, DB_USER, DB_PASSWORD, DB_TABLE);

if (mysqli_connect_errno($mysqli)) {
    trigger_error('Database connection failed: '  . mysqli_connect_error(), E_USER_ERROR);
}

$query = ("UPDATE tUser SET firstName='".$firstName."', lastName='".$lastName."', email='".$email."', contactNumber='".$contactNumber."' WHERE id='".$_SESSION['id']."'");
$result = mysqli_query($mysqli, $query) or trigger_error("Query Failed! SQL: $query - Error: ". mysqli_error($mysqli), E_USER_ERROR);

	$_SESSION['name'] = $firstName;
	echo '<meta http-equiv="refresh" content="0; url=index.php#/account" />';

}

















?>
