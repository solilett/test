
<style>
#autoResize {
	height:auto;
}
#passwordCheckbox {
	float:right;
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

		$_SESSION['currentPassword'] = $row['password'];


		}



		?>
		<div class="container">
				  <h2>Renew Password</h2>
				  <form class="form-horizontal" id="passwordForm" role="form" method="post">
				    <div class="form-group">

				      <label class="control-label col-sm-2" for="oldPassword">Current Password</label>
				      <div class="col-sm-10">
				        <input type="password" class="form-control" id="currentPassword" name="currentPassword" >
				      </div>
				    </div>
				    <div class="form-group">
				      <label class="control-label col-sm-2" for="password1">New Password</label>
				      <div class="col-sm-10">          
				        <input type="password" class="form-control" id="password1" name="password1" >
				      </div>
				    </div>

				    <div class="form-group">
				      <label class="control-label col-sm-2" for="pwd">Re-enter Password</label>
				      <div class="col-sm-10">          
				        <input type="password" class="form-control" id="password2" name="password2">
				      </div>
				    </div>
				   
				    				    	 <div class="checkbox" id="passwordCheckbox">
          				<label>
            				<input type="checkbox" class="showCharacters"> Show Characters
          				</label>
        				</div>


			
				    <div class="form-group">        
				      <div class="col-sm-offset-2 col-sm-10">
				        <button type="submit" class="btn btn-success" id="btnSavePassword">Save</button>
				        <button class="btn btn-danger" id="btnCancel">Cancel</button>
				      </div>
				    </div>

				  </form>
				</div>

			<div id="errorMessage"></div>
	</div>
</div>


<script>






$(document).ready(function(){



	$("#btnSavePassword").click(function(){
		$.ajax({
   			url: "pages/account/runSQLupdatePassword.php",
   			type: "POST",
   			data: $('form').serialize(),
			success: function(data) {
					$("#errorMessage").html(data);
			}
	 });
	});

	$('#btnCancel').click(function(){
		window.location.hash = "/account";
	});

	$("input").focus(function(){
		$("#errorMessage").css('display','none');
		$("input").removeClass('inputError');

	});

	$(".showCharacters").click(function(){
		 if($('.showCharacters').is(':checked')) 
		{
			$('.form-control').attr('type','text');
		}
		else
		{
			$('.form-control').attr('type','password');	
		}
	})

});


</script>
