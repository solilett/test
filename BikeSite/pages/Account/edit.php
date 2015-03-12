
<style>
#renewEmail {
	display:none;
}
#autoResize {
	height:auto;
}
</style>

<div class="container">
	<div class="jumbotron" id="autoResize">


		<?php

		session_start();

	
		require('../login/config.php'); 

		$mysqli = mysqli_connect(DB_SERVER, DB_USER, DB_PASSWORD, DB_TABLE);
		if (mysqli_connect_errno($mysqli)) {
    		trigger_error('Database connection failed: '  . mysqli_connect_error(), E_USER_ERROR);
		}

		$query = "SELECT * FROM tUser WHERE Id = ".$_SESSION['id'].";";
		$result = mysqli_query($mysqli, $query) or trigger_error("Query Failed! SQL: $query - Error: ". mysqli_error($mysqli), E_USER_ERROR);
		$count = 0;



		while($row = mysqli_fetch_array($result)) {

		$email = $row['email'];
		$_SESSION['currentEmail'] = $email;
			echo '<div class="container">
				  <h2>Update Details</h2>
				  <form class="form-horizontal" id="userForm" role="form" method="post">
				    <div class="form-group">
				      <label class="control-label col-sm-2" for="firstName">Firstname:</label>
				      <div class="col-sm-10">
				        <input type="text" class="form-control" id="firstName" name="firstName" value="'.$row['firstName'].'">
				      </div>
				    </div>
				    <div class="form-group">
				      <label class="control-label col-sm-2" for="lastName">Lastname:</label>
				      <div class="col-sm-10">          
				        <input type="text" class="form-control" id="lastName" name="lastName" value="'.$row['lastName'].'">
				      </div>
				    </div>

				    <div class="form-group">
				      <label class="control-label col-sm-2" for="pwd">Email:</label>
				      <div class="col-sm-10">          
				        <input type="email" class="form-control" id="email" name="email" value="'.$row['email'].'">
				      </div>
				    </div>

				    <div class="form-group" id="renewEmail">
				      <label class="control-label col-sm-2" for="pwd">Re-type Email:</label>
				      <div class="col-sm-10">          
				        <input type="email" class="form-control" id="email2" name="email2" placeholder="Re-type Email">
				      </div>
				    </div>

				    <div class="form-group">
				      <label class="control-label col-sm-2" for="pwd">Contact Number:</label>
				      <div class="col-sm-10">          
				        <input type="text" class="form-control" id="contactNumber" name="contactNumber" value="'.$row['contactNumber'].'" >
				      </div>
				    </div>

			
				    <div class="form-group">        
				      <div class="col-sm-offset-2 col-sm-10">
				        <button type="submit" class="btn btn-success" id="btnSave">Submit</button>
				        <button class="btn btn-danger" id="btnCancel">Cancel</button>
				      </div>
				    </div>
				  </form>
				</div>';

		}



		?>

			<div id="errorMessage"></div>
	</div>
</div>


<script>






$(document).ready(function(){

		$('#btnCancel').click(function(){
		window.location.hash = "/account";
	});

	$('#email').focus(function(){
		$('#renewEmail').show();
		$('#email').val('');
		$('#email2').val('');
	});

	var currentEmail = '<?php echo $email; ?>'; 

	$('#email').focusout(function(){
		
		if ($('#email').val() === currentEmail )
		{
			$('#renewEmail').hide();
		}

		if ($('#email').val() === "")
		{
			$('#email').val('<?php echo $email; ?>');
			$('#renewEmail').hide();
		}

	});


	$("#btnSave").click(function(){
		$.ajax({
   			url: "pages/account/updateDetails.php",
   			type: "POST",
   			data: $('form').serialize(),
			success: function(data) {
					$("#errorMessage").html(data);
			}
	 });
	});

	$("input").focus(function(){
		$("#errorMessage").css('display','none');
		$("input").removeClass('inputError');

	});



});


</script>
