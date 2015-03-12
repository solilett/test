

<?php
session_start();
?>

<link rel="stylesheet" href="css/progressBar.css">
<script src="js/pace.js"></script>

<script>
 $("html, body").animate({ scrollTop: 0 }, "slow");
 
  var frameColour = 'red';
  var frontWheelColour = 'black';
  var frontTyreColour = 'blue';
  var rearTyreColour = 'blue';
  var rearWheelColour = 'black';
  var saddleColour = 'blue';
  var handleBarType = 'dropped';
  var handleBarColour = 'blue'; 


  var checkHash = location.hash.substring(9);

  if (checkHash.length > 0)
  {
    var hash = location.hash.substring(2);
hash = hash.split('?');
var allComponents = hash[1].split('&');
var frameColour = allComponents[0];
var frontWheelColour = allComponents[1];
var rearWheelColour = allComponents[2];
var saddleColour = allComponents[3];
var handleBarType = allComponents[4];
var handleBarColour = allComponents[5];
var frontTyreColour = allComponents[6];
var rearTyreColour = allComponents[7];



frameColour = frameColour.split('=');
frontWheelColour = frontWheelColour.split('=');
rearWheelColour = rearWheelColour.split('=');
saddleColour = saddleColour.split('=');
handleBarType = handleBarType.split('=');
handleBarColour = handleBarColour.split('=');
frontTyreColour = frontTyreColour.split('=');
rearTyreColour = rearTyreColour.split('=');


  frameColour = frameColour[1];
  frontWheelColour = frontWheelColour[1];
  rearWheelColour = rearWheelColour[1];
  saddleColour = saddleColour[1];
  handleBarType = handleBarType[1];
  handleBarColour = handleBarColour[1];
  frontTyreColour = frontTyreColour[1];
  rearTyreColour = rearTyreColour[1];

  var designId = allComponents[8];
  designId = designId.split('=');
  designId = designId[1];

  document.cookie = "SelectedDesignId=" + designId;

  

  if (designId == "")
  {

  }
  else
  {
    $('#btn-save').val('Update');
  $('#btn-save').attr('name', 'updateBtn');
  $('#deleteBtnSpot').html('<input type="submit" form="setValues" class="btn btn-danger" name="deleteBtn" id="btn-delete" value="Delete" />');

  }

  






  }
</script>




<div class="jumbotron jumbotron-customPage">




            <img src="Images/bike-master.png" class="bike"  />
            <img src="Images/Frame/Black.png" class="frame" id="frame" />
            
   
            
            <img src="Images/HandleBars/Riser/orange.png" class="handlebars" id="handlebar" />
          	<img src="Images/FrontWheel/white.png" class="frontWheel"/>
         
            
            <img src="Images/FrontTyre/green.png" class="frontTyre" />
            <img src="Images/RearWheel/green.png" class="rearWheel" />
            <img src="Images/rearTyre/orange.png" class="rearTyre" />
            
            <img src="Images/Saddle/green.png" class="saddle"  />
			<img src="Images/mapMaster.png" class="mapMaster" usemap="bikeMap" />
                   
            <map name="bikeMap" id="bikeMap" >
           
            <!-- Frame -->
        <area shape="poly" coords="247,110,463,110,465,119,295,284" alt="inside1" nohref id="noframeMap1"/>
    <area shape="poly" coords="235,117,278,290,157,275" alt="inside2" nohref id="noframeMap2"/>
           <area shape="poly" id="frameMap" coords="294,306,469,137,526,295,539,296,488,140,475,88,461,92,242,98,239,88,225,89,230,102,229,102,135,285,122,298" alt="Orange" href="javascript:void" />
          
           
            <!-- Front Wheel -->
           <area shape="circle" coords="531, 286, 98" nohref/>
    		<area id="frontWheelMap" shape="circle" coords="530, 287, 124"  alt="frontWheel" href="javascript:void"/>
    	  
           <!-- Rear Wheel -->
           <area shape="circle" coords="136, 285, 102" nohref />
           <area id="rearWheelMap" shape="circle" coords="135, 287, 123" alt="rearWheel" href="javascript:void"/>
          
          <!-- Riser bars -->
          <area shape="poly" id="handlebarMap" coords="489, 44, 469, 49, 473, 60, 493, 67, 503, 63, 503, 49, 495, 48, 495, 48" href="javascript:void"/>
          
          <!-- Saddle -->
          <area shape="poly" id="saddleMap" coords="169, 20, 203, 24, 230, 22, 271, 26, 271, 32, 255, 35, 237, 32, 206, 40, 193, 40" href="javascript:void"/>
          
          
          <!-- FrontTyre -->
           <area shape="circle" coords="531, 288, 117" nohref/>
           <area shape="circle" id="frontTyreMap" coords="530, 288, 135" href="javascript:void"/>
 

          <!- Rear Tyre -->
          <area shape="circle" coords="133, 287, 119" nohref/>
           <area shape="circle" id="rearTyreMap" coords="135, 285, 135" href="javascript:void"/>
          </map> 




<div id="frameLabel" class="hoverLabel">
    Frame
</div>
<div id="frontWheelLabel" class="hoverLabel">
    Front Wheel
</div>
<div id="rearWheelLabel" class="hoverLabel">
    Rear Wheel
</div>

<div id="handlebarLabel" class="hoverLabel">
    Handlebars
</div>
<div id="saddleLabel" class="hoverLabel">
    Saddle
</div>
<div id="frontTyreLabel" class="hoverLabel">
    Front Tyre
</div>
<div id="rearTyreLabel" class="hoverLabel">
    Rear Tyre
</div>



	</div>






<div class="container">
	<div class="sidePanel" >
<?php include 'accordion.php'; ?>
      </div>
</div>


