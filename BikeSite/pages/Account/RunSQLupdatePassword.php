<?php 
session_start();


if (isset($_REQUEST['password1']))
{
	$password1 = $_REQUEST['password1'];
}
if (isset($_REQUEST['password2']))
{
	$password2 = $_REQUEST['password2'];
}
if (isset($_REQUEST['currentPassword']))
{
	$currentPassword = $_REQUEST['currentPassword'];
}


if ($currentPassword == "")
{
	echo "Please enter your current password";	
	?>
	<script>
		$('#currentPassword').addClass('inputError');
	</script>
	<?php

}
else if ($currentPassword != $_SESSION['currentPassword'])
{
	echo "Your current password is incorrect";
	?>
	<script>
		$('#currentPassword').addClass('inputError');
	</script>
	<?php
}
else if ($password1 == "" && $password2 == "")
{
		echo "Please enter your new password";
	?>
	<script>
		$('#password1').addClass('inputError');
		$('#password2').addClass('inputError');
	</script>
	<?php
}
else if($password1 == "")
{
	echo "Please enter a new password";
	?>
	<script>
		$('#password1').addClass('inputError');
	</script>
	<?php
}
else if($password2 == "")
{
	echo "Please re-type your new password";
	?>
	<script>
		$('#password2').addClass('inputError');
	</script>
	<?php
}
else if ($password1 != $password2)
{
	echo "Your new passwords do not match, please check and try again";
	?>
	<script>
		$('#password1').addClass('inputError');
		$('#password2').addClass('inputError');
	</script>
	<?php
}
else
{
	include '../login/config.php';
$mysqli = mysqli_connect(DB_SERVER, DB_USER, DB_PASSWORD, DB_TABLE);

if (mysqli_connect_errno($mysqli)) {
    trigger_error('Database connection failed: '  . mysqli_connect_error(), E_USER_ERROR);
}

$query = ("UPDATE tUser SET password='".$password1."' WHERE id='".$_SESSION['id']."'");
$result = mysqli_query($mysqli, $query) or trigger_error("Query Failed! SQL: $query - Error: ". mysqli_error($mysqli), E_USER_ERROR);
	
	echo '<meta http-equiv="refresh" content="1; url=index.php#/account" />';

	?>
		<script>
		$('#errorMessage').css('display','none');
		$('#btnSavePassword').html('Updated');
		</script>
	<?php
}







?>
		<script>
		$('#errorMessage').css('display','block');
		</script>
	<?php

?>




