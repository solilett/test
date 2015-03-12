<?php
session_start();
?>




<div class="jumbotron" id="storedDesigns" >
<h1 id="storedBikesTitle"> My Bike Designs</h1>


<?php
require('login/config.php'); 

$mysqli = mysqli_connect(DB_SERVER, DB_USER, DB_PASSWORD, DB_TABLE);

if (mysqli_connect_errno($mysqli)) {
    trigger_error('Database connection failed: '  . mysqli_connect_error(), E_USER_ERROR);
}

$query = "SELECT * FROM tDesign WHERE userId = ".$_SESSION['id'].";";
$result = mysqli_query($mysqli, $query) or trigger_error("Query Failed! SQL: $query - Error: ". mysqli_error($mysqli), E_USER_ERROR);
$count = 0;


while($row = mysqli_fetch_array($result)) {
		echo "<a href='#/custom?frame=".$row['frame']."&frontWheel=".$row['frontWheel']."&rearWheel=".$row['rearWheel']."&saddle=".$row['saddle']."&barType=".$row['handlebarType']."&barColour=".$row['handlebarColour']."&frontTyre=".$row['frontTyre']."&rearTyre=".$row['rearTyre']."&designId=".$row['id']."'>";
        echo "<div id='designBlock' class='block' >";
        echo "<form action='delete.php' method='GET'>";
        echo "<img src='Images/blockMaster.png' id='smMapMaster'/>";
		echo "<img src='Images/bike-master.png' id='smMaster'/>";

        /* frame for saved block */
        $frame = $row['frame'];
        if ($frame == "red")
        {
            echo "<img src='Images/Frame/orange.png' id='smFrame' style='-webkit-filter: hue-rotate(320deg);'/>";
        }
        else if ($frame == "blue")
        {
            echo "<img src='Images/Frame/green.png' id='smFrame' style='-webkit-filter: hue-rotate(120deg);'/>";   
        }
        else if ($frame == "pink")
        {
            echo "<img src='Images/Frame/orange.png' id='smFrame' style='-webkit-filter: hue-rotate(300deg);'/>";   
        }
        else 
        {
    	   echo "<img src='Images/Frame/".$frame.".png' id='smFrame' />";
        }

        /* front Wheel for saved block */
        $frontWheel = $row['frontWheel'];
        if ($frontWheel == "red")
        {
            echo "<img src='Images/FrontWheel/orange.png' id='smFrontWheel' style='-webkit-filter: hue-rotate(340deg);'/>";
        }
        else if ($frontWheel == "blue")
        {
            echo "<img src='Images/FrontWheel/green.png' id='smFrontWheel' style='-webkit-filter: hue-rotate(100deg);' />";
        }
        else
        {
            echo "<img src='Images/FrontWheel/".$row['frontWheel'].".png' id='smFrontWheel' />";
        }
    	
        /* front Tyre for saved block */
        $frontTyre = $row['frontTyre'];
        if ($frontTyre == "red")
        {
            echo "<img src='Images/FrontTyre/orange.png' id='smFrontTyre' style='-webkit-filter: hue-rotate(320deg);' />";
        }
        else if ($frontTyre == "blue")
        {
            echo "<img src='Images/FrontTyre/green.png' id='smFrontTyre' style='-webkit-filter: hue-rotate(120deg);' />";
        }
        else if ($frontTyre == "orange")
        {
            echo "<img src='Images/FrontTyre/orange.png' id='smFrontTyre' />"; 
        }
        else 
        {
            echo "<img src='Images/FrontTyre/".$row['frontTyre'].".png' id='smFrontTyre' />"; 
        }

        /* rearWheel for saved block */
        $rearWheel = $row['rearWheel'];
        if ($rearWheel == "red")
        {
            echo "<img src='Images/RearWheel/orange.png' id='smRearWheel' style='-webkit-filter: hue-rotate(320deg);' />";
        }
        else if ($rearWheel == "blue")
        {
            echo "<img src='Images/RearWheel/green.png' id='smRearWheel' style='-webkit-filter: hue-rotate(120deg);' />";
        }
        else
        {
            echo "<img src='Images/RearWheel/".$row['rearWheel'].".png' id='smRearWheel' />";  
        }

        /* rear Tyre for saved block */
        $rearTyre = $row['rearTyre'];
        if ($rearTyre == "red")
        {
            echo "<img src='Images/RearTyre/orange.png' id='smRearTyre' style='-webkit-filter: hue-rotate(340deg);'   />";
        }
    	else if ($rearTyre == "blue")
        {
            echo "<img src='Images/RearTyre/green.png' id='smRearTyre'  style='-webkit-filter: hue-rotate(120deg);' />";
        }
        else 
        {
            echo "<img src='Images/RearTyre/".$row['rearTyre'].".png' id='smRearTyre' />";
        }

         /* Bars for saved block */
        $barColour = $row['handlebarColour'];
        if ($barColour == "red")
        {
            echo "<img src='Images/HandleBars/".$row['handlebarType']."/orange.png' id='smHandlebar' style='-webkit-filter: hue-rotate(320deg);'/>";
        }
        else if ($barColour == "blue")
        {
            echo "<img src='Images/HandleBars/".$row['handlebarType']."/orange.png' id='smHandlebar' style='-webkit-filter: hue-rotate(180deg);'/>";
        }
        else if ($barColour == "green")
        {
            echo "<img src='Images/HandleBars/".$row['handlebarType']."/orange.png' id='smHandlebar' style='-webkit-filter: hue-rotate(100deg);'/>";
        }
        else
        {
            echo "<img src='Images/HandleBars/".$row['handlebarType']."/".$row['handlebarColour'].".png' id='smHandlebar'  />";
        }

    	 /* Saddle for saved block */
        $saddle = $row['saddle'];
        if ($saddle == "red")
        {
            echo "<img src='Images/Saddle/orange.png' id='smSaddle' style='-webkit-filter: hue-rotate(320deg);' />";
        }
        else if ($saddle == "blue")
        {
            echo "<img src='Images/Saddle/green.png' id='smSaddle' style='-webkit-filter: hue-rotate(120deg);' />";
        }
        else
        {
           echo "<img src='Images/Saddle/".$row['saddle'].".png' id='smSaddle' />"; 
        }
    	
        echo "<input type='hidden' value='".$row['id']."' class='test' />";

        $count++;

        echo "</form>";
        echo "</div>";
    	echo "</a>";
 	} 	


echo "</div>";
?>


<script>

 $( document ).ready(function() {

    
    $('#offFocus').css('display','none')

    $('.block').click(function(){
        window.location  = '../index.php#/custom';";
    });
});



    


</script>


