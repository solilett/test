<?php

$email =  $_POST['email'];
$email2 = $_POST['email2'];



if($email == "")
{
	echo "Please enter a valid email address before retyping one";
	?>
		<script>
			$('#email2Error').attr('src','Images/inputSymbols/cross.png');
			$('#email2Error').css('display','block');
			$('#catchError').css('display','block');
		</script>
	<?php
}
else if($email2 == "")
{
	echo "Please Re-type your email";
	?>
		<script>
			$('#email2Error').attr('src','Images/inputSymbols/cross.png');
			$('#email2Error').css('display','block');
			$('#catchError').css('display','block');
		</script>
	<?php
}
else if($email != $email2)
{
	echo "Emails entered do not match";
	?>
		<script>
			$('#email2Error').attr('src','Images/inputSymbols/cross.png');
			$('#email2Error').css('display','block');
			$('#catchError').css('display','block');
		</script>
	<?php
}
else
{
	?>
		<script>
			$('#email2Error').attr('src','Images/inputSymbols/tick.png');
			$('#email2Error').css('display','block');
		</script>
	<?php
}
?>