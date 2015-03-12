// JavaScript Document

$( document ).ready(function() {
	

	
	setFrameColour();
	setFrontWheelColour();
	setRearWheelColour();
	setSaddleColour();
	setFrontTyreColour();
	setRearTyreColour();
	setHandlebars();

	
	function setFrameColour() {

	if (frameColour == "red") 
	{
		  $("#frame").attr("src","Images/Frame/orange.png");
		  $('#txtFrame').val("red");
		  $("#frameTileRed").addClass("active");
		  $("#currentFrameColourHeading").attr("src","Images/Tiles/red.png");
		  $("#frame").css("-webkit-filter","hue-rotate(320deg)");
	}
	else if (frameColour == "blue"){
		  $("#frame").attr("src","Images/Frame/green.png");
		  $('#txtFrame').val("blue");
		  $("#frameTileBlue").addClass("active");
		  $("#currentFrameColourHeading").attr("src","Images/Tiles/blue.png");
		  $("#frame").css("-webkit-filter","hue-rotate(120deg)");	
	}
	else if (frameColour == "pink"){
		  $("#frame").attr("src","Images/Frame/orange.png");
		  $('#txtFrame').val("pink");
		  $("#frameTilePink").addClass("active");
		  $("#currentFrameColourHeading").attr("src","Images/Tiles/pink.png");
		  $("#frame").css("-webkit-filter","hue-rotate(300deg)");	
	}
	else if (frameColour == "black"){
		  $("#frame").attr("src","Images/Frame/Black.png");
		  $('#txtFrame').val("black");
		  $("#frameTileBlack").addClass("active");
		  $("#currentFrameColourHeading").attr("src","Images/Tiles/black.png");
		  $("#frame").css("-webkit-filter","hue-rotate(0deg)");	
	} 
	else
	{
	
    $("#frame").attr("src","Images/Frame/" + frameColour + ".png");
	$('#txtFrame').val(frameColour);
	frameColour = frameColour[0].toUpperCase() + frameColour.substring(1);
	var FrameTile = "#frameTile" + frameColour;
	$(FrameTile).addClass("active");
	$("#currentFrameColourHeading").attr("src","Images/Tiles/" + frameColour + ".png");

	}
	}
	
	function setFrontWheelColour() {

	
	if (frontWheelColour == "red") 
	{
		  $(".frontWheel").attr("src","Images/FrontWheel/orange.png");
		  $(".frontWheel").css("-webkit-filter","hue-rotate(340deg)");
		  $('#txtFrontWheel').val("red");
		  $("#frontWheelTileRed").addClass("active");
		  $("#currentFrontWheelColourHeading").attr("src","Images/Tiles/red.png");
	}
	else if (frontWheelColour == "blue"){
		  $(".frontWheel").attr("src","Images/FrontWheel/green.png");
		  $(".frontWheel").css("-webkit-filter","hue-rotate(120deg)");
		  $('#txtFrontWheel').val("blue");
		  $("#frontWheelTileBlue").addClass("active");
		  $("#currentFrontWheelColourHeading").attr("src","Images/Tiles/blue.png");
	
	}
	else
	{
	
    $(".frontWheel").attr("src","Images/FrontWheel/" + frontWheelColour + ".png");
	$('#txtFrontWheel').val(frontWheelColour);
	frontWheelColour = frontWheelColour[0].toUpperCase() + frontWheelColour.substring(1);
	var FrontWheelTile = "#frontWheelTile" + frontWheelColour;
	$(FrontWheelTile).addClass("active");
	$("#currentFrontWheelColourHeading").attr("src","Images/Tiles/" + frontWheelColour + ".png");
	}
	}
	
	function setRearWheelColour() {

	
	if (rearWheelColour == "red") 
	{
		  $(".rearWheel").attr("src","Images/RearWheel/orange.png");
		  $(".rearWheel").css("-webkit-filter","hue-rotate(340deg)");
		  $('#txtRearWheel').val("red");
		  $("#rearWheelTileRed").addClass("active");
		  $("#currentRearWheelColourHeading").attr("src","Images/Tiles/red.png");
	}
	else if (rearWheelColour == "blue"){
		  $(".rearWheel").attr("src","Images/RearWheel/green.png");
		  $(".rearWheel").css("-webkit-filter","hue-rotate(120deg)");
		  $('#txtRearWheel').val("blue");
		  $("#rearWheelTileBlue").addClass("active");
		  $("#currentRearWheelColourHeading").attr("src","Images/Tiles/blue.png");
	
	}
	else
	{
	
    $(".rearWheel").attr("src","Images/RearWheel/" + rearWheelColour + ".png");
	$('#txtRearWheel').val(rearWheelColour);
	rearWheelColour = rearWheelColour[0].toUpperCase() + rearWheelColour.substring(1);
	var RearWheelTile = "#rearWheelTile" + rearWheelColour;
	$(RearWheelTile).addClass("active");
	$("#currentRearWheelColourHeading").attr("src","Images/Tiles/" + rearWheelColour + ".png");
	}
	}
	
	function setSaddleColour() {

	if (saddleColour == "red") 
	{
		  $(".saddle").attr("src","Images/Saddle/orange.png");
		  $('#txtSaddleColour').val("red");
		  $("#saddleTileRed").addClass("active");
		  $("#currentSaddleColourHeading").attr("src","Images/Tiles/red.png");
		  $(".saddle").css("-webkit-filter","hue-rotate(320deg)");
	}
	else if (saddleColour == "blue"){
		  $(".saddle").attr("src","Images/Saddle/green.png");
		  $('#txtSaddleColour').val("blue");
		  $("#saddleTileBlue").addClass("active");
		  $("#currentSaddleColourHeading").attr("src","Images/Tiles/blue.png");
		  $(".saddle").css("-webkit-filter","hue-rotate(120deg)");	
	}
	else
	{

    $(".saddle").attr("src","Images/Saddle/" + saddleColour + ".png");
	$('#txtSaddleColour').val(saddleColour);
	saddleColour = saddleColour[0].toUpperCase() + saddleColour.substring(1);
	var SaddleTile = "#saddleTile" + saddleColour;
	$(SaddleTile).addClass("active");
	$("#currentSaddleColourHeading").attr("src","Images/Tiles/" + saddleColour + ".png");

	}
	}
	

function setFrontTyreColour() {
		if (frontTyreColour == "red") 
		{
		  	$(".frontTyre").attr("src","Images/FrontTyre/orange.png");
		  	$('#txtFrontTyre').val("red");
		  	$("#frontTyreTileRed").addClass("active");
		  	$("#currentFrontTyreColourHeading").attr("src","Images/Tiles/red.png");
			$(".frontTyre").css("-webkit-filter","hue-rotate(320deg)");
		}	
		else if (frontTyreColour == "blue"){
		  	$(".frontTyre").attr("src","Images/FrontTyre/green.png");
		  	$('#txtFrontTyre').val("blue");
		  	$("#frontTyreTileBlue").addClass("active");
		  	$("#currentFrontTyreColourHeading").attr("src","Images/Tiles/blue.png");
		  	$(".frontTyre").css("-webkit-filter","hue-rotate(120deg)");	
		}
		else
		{
    		$(".frontTyre").attr("src","Images/FrontTyre/" + frontTyreColour + ".png");
			$('#txtFrontTyre').val(frontTyreColour);
			frontTyreColour = frontTyreColour[0].toUpperCase() + frontTyreColour.substring(1);
			var FrontTyreTile = "#frontTyreTile" + frontTyreColour;
			$(FrontTyreTile).addClass("active");
			$("#currentFrontTyreColourHeading").attr("src","Images/Tiles/" + frontTyreColour + ".png");

		}
	}

function setRearTyreColour() {
		if (rearTyreColour == "red") 
		{
		  	$(".rearTyre").attr("src","Images/RearTyre/orange.png");
		  	$('#txtRearTyreColour').val("red");
		  	$("#rearTyreTileRed").addClass("active");
		  	$("#currentRearTyreColourHeading").attr("src","Images/Tiles/red.png");
			$(".rearTyre").css("-webkit-filter","hue-rotate(340deg)");
		}	
		else if (rearTyreColour == "blue"){
		  	$(".rearTyre").attr("src","Images/RearTyre/green.png");
		  	$('#txtRearTyreColour').val("blue");
		  	$("#rearTyreTileBlue").addClass("active");
		  	$("#currentRearTyreColourHeading").attr("src","Images/Tiles/blue.png");
		  	$(".rearTyre").css("-webkit-filter","hue-rotate(120deg)");	
		}
		else
		{
    		$(".rearTyre").attr("src","Images/RearTyre/" + rearTyreColour + ".png");
			$('#txtRearTyreColour').val(rearTyreColour);
			rearTyreColour = rearTyreColour[0].toUpperCase() + rearTyreColour.substring(1);
			var RearTyreTile = "#rearTyreTile" + rearTyreColour;
			$(RearTyreTile).addClass("active");
			$("#currentRearTyreColourHeading").attr("src","Images/Tiles/" + rearTyreColour + ".png");

		}
	}

	function setHandlebars() {
		if (handleBarColour == "red") 
		{
		 	$("#handlebar").attr("src","Images/Handlebars/" + handleBarType + "/orange.png");
		    $('#txtHandlebarColour').val("red");
		    $('#txtHandlebarType').val(handleBarType);
		    $('#' + handleBarType + 'Handlebar').attr('checked', true);
		    $("#" + handleBarType + "BarTileRed").addClass("active");

		    updateMapAndTiles();

		    $("#currentBarColourHeading").attr("src","Images/Tiles/red.png");
		    $("#handlebar").css("-webkit-filter","hue-rotate(320deg)");
		}
		else if (handleBarColour == "blue"){
		 	$("#handlebar").attr("src","Images/Handlebars/" + handleBarType + "/orange.png");
		    $('#txtHandlebarColour').val("blue");
		    $('#txtHandlebarType').val(handleBarType);
		    $('#' + handleBarType + 'Handlebar').attr('checked', true);
		    $("#" + handleBarType + "BarTileBlue").addClass("active");

		    updateMapAndTiles();

		    $("#currentBarColourHeading").attr("src","Images/Tiles/blue.png");
		    $("#handlebar").css("-webkit-filter","hue-rotate(180deg)"); 
		}
		else if (handleBarColour == "green"){
		 	$("#handlebar").attr("src","Images/Handlebars/" + handleBarType + "/orange.png");
		    $('#txtHandlebarColour').val("green");
		    $('#txtHandlebarType').val(handleBarType);
		    $('#' + handleBarType + 'Handlebar').attr('checked', true);
		    $("#" + handleBarType + "BarTileGreen").addClass("active");

		    updateMapAndTiles();

		    $("#currentBarColourHeading").attr("src","Images/Tiles/green.png");
		    $("#handlebar").css("-webkit-filter","hue-rotate(100deg)"); 
		}
		else
		{	
			$("#handlebar").attr("src","Images/Handlebars/" + handleBarType + "/" + handleBarColour + ".png");
		    $('#txtHandlebarColour').val(handleBarColour);
		    $('#txtHandlebarType').val(handleBarType);
		    $('#' + handleBarType + 'Handlebar').attr('checked', true);

		    
		    var capshandleBarColour = handleBarColour.substr(0, 1).toUpperCase() + handleBarColour.substr(1);
		    $("#" + handleBarType + "BarTile" + capshandleBarColour).addClass("active");

		    updateMapAndTiles();

		    $("#currentBarColourHeading").attr("src","Images/Tiles/" + handleBarColour + ".png");
		    $("#handlebar").css("-webkit-filter","hue-rotate(0deg)"); 
   

		}

		function updateMapAndTiles() {
			if (handleBarType == 'dropped')
		    {
		    	$("#droppedBarTiles").css("display","block");
		    	$("#bullhornBarTiles").css("display","none");
		    	$("#riserBarTiles").css("display","none");
	   		    $("#handlebarMap").attr("coords", "466, 128, 466, 128, 484, 128, 480, 123, 508, 121, 516, 112, 517, 103, 512, 97, 484, 68, 485, 58, 492, 58, 530, 98, 533, 113, 528, 124, 519, 131, 505, 135, 466, 138, 464, 128");
		    }
		    else if (handleBarType == 'bullhorn')
		    {
		    	$("#droppedBarTiles").css("display","none");
		    	$("#bullhornBarTiles").css("display","block");
		    	$("#riserBarTiles").css("display","none");
		    	$("#handlebarMap").attr("coords", "485, 52, 485, 52, 489, 72, 557, 66, 577, 43, 566, 37, 552, 54, 540, 55, 552, 41, 542, 35, 531, 49, 486, 54, 490, 72");
		    }	
		    else
		    {
		    	$("#droppedBarTiles").css("display","none");
		    	$("#bullhornBarTiles").css("display","none");
		    	$("#riserBarTiles").css("display","block");
		    	$("#handlebarMap").attr("coords", "489, 44, 469, 49, 473, 60, 493, 67, 503, 63, 503, 49, 495, 48, 495, 48");
		    }
		}
	}



});

