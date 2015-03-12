
<?php


$email = $_POST['email'];

if($email == "")
{
	echo "Please enter a email address";
	?>
		<script>
			$('#email1Error').attr('src','Images/inputSymbols/cross.png');
			$('#email1Error').css('display','block');
			$('#catchError').css('display','block');
		</script>
	<?php

}

else if((!filter_var($email, FILTER_VALIDATE_EMAIL)))
{
	echo "Invalid email format";
	?>
		<script>
			$('#email1Error').attr('src','Images/inputSymbols/cross.png');
			$('#email1Error').css('display','block');
			$('#catchError').css('display','block');
		</script>
	<?php
}
else
{
include('../login/config.php'); 

$mysqli = mysqli_connect(DB_SERVER, DB_USER, DB_PASSWORD, DB_TABLE);

if (mysqli_connect_errno($mysqli)) {
    trigger_error('Database connection failed: '  . mysqli_connect_error(), E_USER_ERROR);
}

$query = "SELECT * FROM tUser WHERE email LIKE '".$email."'";
$result = mysqli_query($mysqli, $query) or trigger_error("Query Failed! SQL: $query - Error: ". mysqli_error($mysqli), E_USER_ERROR);

$row_count = $result->num_rows;

if ($row_count > 0)
{
	echo "An account already exists with that email"
	
	?>
	
		<script>
			$('#email1Error').attr('src','Images/inputSymbols/cross.png');
			$('#email1Error').css('display','block');
			$('#catchError').css('display','block');
		</script>
	<?php
}
else
{
	?>
		<script>
			$('#email1Error').attr('src','Images/inputSymbols/tick.png');
			$('#email1Error').css('display','block');
		</script>
	<?php
}
}