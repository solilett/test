

<style>
#offFocus {
	display:none;
}


</style>
<

<div class="container" >
	<div class="jumbotron" id="editView">
		<h1> My account </h1>
		
		<?php
		session_start();
		require('login/config.php'); 

		$mysqli = mysqli_connect(DB_SERVER, DB_USER, DB_PASSWORD, DB_TABLE);

		if (mysqli_connect_errno($mysqli)) {
    		trigger_error('Database connection failed: '  . mysqli_connect_error(), E_USER_ERROR);
		}

		$query = "SELECT * FROM tUser WHERE Id = ".$_SESSION['id'].";";
		$result = mysqli_query($mysqli, $query) or trigger_error("Query Failed! SQL: $query - Error: ". mysqli_error($mysqli), E_USER_ERROR);
		$count = 0;



		while($row = mysqli_fetch_array($result)) {
			echo "<span id='test'>";
			echo '<div class="table-responsive">
				  <table class="table">
        		  <thead>
          		  <tr>
                  <th>Full Name</th>
                  <th>Contact Number</th>
                  <th>Email</th>
                  </tr>
                  </thead>
                    <tbody>
                        <tr>
                         <td>'.$row['firstName'].' '.$row['lastName'].'</td>
                         <td> '.$row['contactNumber'].' </td>
                         <td>'.$row['email'].'</td>
                        </tr>
                    </tbody>
                  </table>
                  </div>
                  <button class="btn btn-success" name="editAccount" id="btnEdit">Edit </button>
                  <button class="btn btn-success" name="passwordChange" id="btnChangePassword">Change Password </button>';
                  echo "</span";



		}	
		?>
		

	</div>
</div>



<script>



$(document).ready(function(){
	$('#btnEdit').click(function(){
		window.location.hash = '/editAccount';
	});
	$('#btnChangePassword').click(function(){
		window.location.hash = '/changePassword';
		
	});
});

</script>