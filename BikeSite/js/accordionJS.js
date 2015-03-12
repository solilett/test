// JavaScript Document
$( document ).ready(function() {
	
	var partTile;
	
     $( ".accordion").accordion({
	collapsible: true,
	 active: 10,
	 heightStyle: "content",
	 icons: { "header": "ui-icon-plus", "activeHeader": "ui-icon-minus" }
	});
	 $( ".accordion2").accordion({
	collapsible: true,
	 active: 10,
	 heightStyle: "content",
	 icons: { "header": "ui-icon-plus", "activeHeader": "ui-icon-minus" }
	});
	 $( ".accordion3").accordion({
	collapsible: true,
	 active: 10,
	 heightStyle: "content",
	 icons: { "header": "ui-icon-plus", "activeHeader": "ui-icon-minus" }
	});	
	
	function accordianReduce(){
		  $( ".accordion2" ).accordion({
			active: false,
			collapsible: true,
			heightStyle: "content",
			navigation: true,
			header: ".menuitem"
		 }); 
		  $( ".accordion3" ).accordion({
			active: false,
			collapsible: true,
			heightStyle: "content",
			navigation: true,
			header: ".menuitem"
		 });  
	}
	function accordianReduceSub(){
		  $( ".accordion3" ).accordion({
			active: false,
			collapsible: true,
			heightStyle: "content",
			navigation: true,
			header: ".menuitem"
		 });  
	}
	

$('.topItem').on('click', function(){
    accordianReduce() 
})
$('.subItem').on('click', function(){
    accordianReduceSub() 
})

   $("#frameTileGreen").click(function(){
		$(".frame").attr("src","Images/Frame/green.png");
		$(".frame").css("-webkit-filter","hue-rotate(0deg)");
		$("#currentFrameColourHeading").attr("src","Images/Tiles/green.png");
		$('#txtFrame').val('green');
		partTile = "#frame";
		removeActiveClass();
   });
   $("#frameTileOrange").click(function(){
		$(".frame").attr("src","Images/Frame/orange.png");
		$(".frame").css("-webkit-filter","hue-rotate(0deg)");
		$("#currentFrameColourHeading").attr("src","Images/Tiles/orange.png");
		$("#logFrameColour").html("orange");
		$('#txtFrame').val('orange');
		partTile = "#frame";
		removeActiveClass();
		$("#frameTileOrange").addClass("active");
		
		
   });
    $("#frameTileBlue").click(function(){
		$(".frame").attr("src","Images/Frame/green.png");
		$(".frame").css("-webkit-filter","hue-rotate(120deg)");
		$("#currentFrameColourHeading").attr("src","Images/Tiles/blue.png");
		$('#txtFrame').val('blue');
		partTile = "#frame";
		removeActiveClass();
		$("#frameTileBlue").addClass("active");
   });
   
   $("#frameTilePink").click(function(){
		$(".frame").attr("src","Images/Frame/orange.png");
		$(".frame").css("-webkit-filter","hue-rotate(300deg)");
		$("#currentFrameColourHeading").attr("src","Images/Tiles/pink.png");
		$('#txtFrame').val('pink');
		partTile = "#frame";
		removeActiveClass();
		$("#frameTilePink").addClass("active");
   });

       $("#frameTileWhite").click(function(){
		$(".frame").attr("src","Images/Frame/white.png");
		$(".frame").css("-webkit-filter","hue-rotate(0deg)");
		$("#currentFrameColourHeading").attr("src","Images/Tiles/white.png");
		$('#txtFrame').val('white');
		partTile = "#frame";
		removeActiveClass();
		$("#frameTileWhite").addClass("active");
   });
      $("#frameTileRed").click(function(){
		$(".frame").attr("src","Images/Frame/orange.png");
		$("#frame").css("-webkit-filter","hue-rotate(320deg)");
		$("#currentFrameColourHeading").attr("src","Images/Tiles/red.png");
		$('#txtFrame').val('red');
		partTile = "#frame";
		removeActiveClass();
		$("#frameTileRed").addClass("active");
   });
   $("#frameTileBlack").click(function(){
		$(".frame").attr("src","Images/Frame/Black.png");
		$("#frame").css("-webkit-filter","hue-rotate(0deg)");
		$("#currentFrameColourHeading").attr("src","Images/Tiles/black.png");
		$('#txtFrame').val('black');
		partTile = "#frame";
		removeActiveClass();
		$("#frameTileBlack").addClass("active");
   });






	$("#frontWheelTileGreen").click(function(){
		$(".frontWheel").attr("src","Images/FrontWheel/green.png");
		$(".frontWheel").css("-webkit-filter","hue-rotate(0deg)");
		$("#currentFrontWheelColourHeading").attr("src","Images/Tiles/green.png");
		$('#txtFrontWheel').val('green');
		partTile = "#frontWheel";
		removeActiveClass();
		$("#frontWheelTileGreen").addClass("active");
   });
   $("#frontWheelTileOrange").click(function(){
		$(".frontWheel").attr("src","Images/FrontWheel/orange.png");
		$(".frontWheel").css("-webkit-filter","hue-rotate(0deg)");
		$("#currentFrontWheelColourHeading").attr("src","Images/Tiles/orange.png");
		$('#txtFrontWheel').val('orange');
		partTile = "#frontWheel";
		removeActiveClass();
		$("#frontWheelTileOrange").addClass("active");
   });
   $("#frontWheelTileBlue").click(function(){
		$(".frontWheel").attr("src","Images/FrontWheel/green.png");
		$(".frontWheel").css("-webkit-filter","hue-rotate(100deg)");
		$("#currentFrontWheelColourHeading").attr("src","Images/Tiles/blue.png");
		$('#txtFrontWheel').val('blue');
		partTile = "#frontWheel";
		removeActiveClass();
		$("#frontWheelTileBlue").addClass("active");
   });
   $("#frontWheelTileWhite").click(function(){
		$(".frontWheel").attr("src","Images/FrontWheel/white.png");
		$(".frontWheel").css("-webkit-filter","hue-rotate(0deg)");
		$("#currentFrontWheelColourHeading").attr("src","Images/Tiles/white.png");
		$('#txtFrontWheel').val('white');
		partTile = "#frontWheel";
		removeActiveClass();
		$("#frontWheelTileWhite").addClass("active");
   });
	$("#frontWheelTileRed").click(function(){
		$(".frontWheel").attr("src","Images/FrontWheel/orange.png");
		$(".frontWheel").css("-webkit-filter","hue-rotate(340deg)");
		$("#currentFrontWheelColourHeading").attr("src","Images/Tiles/red.png");
		$('#txtFrontWheel').val('red');
		partTile = "#frontWheel";
		removeActiveClass();
		$("#frontWheelTileRed").addClass("active");
   });
   $("#frontWheelTileBlack").click(function(){
		$(".frontWheel").attr("src","Images/FrontWheel/black.png");
		$(".frontWheel").css("-webkit-filter","hue-rotate(0deg)");
		$("#currentFrontWheelColourHeading").attr("src","Images/Tiles/black.png");
		$('#txtFrontWheel').val('black');
		partTile = "#frontWheel";
		removeActiveClass();
		$("#frontWheelTileBlack").addClass("active");
   });


	$("#rearWheelTileGreen").click(function(){
		$(".rearWheel").attr("src","Images/rearWheel/green.png");
		$(".rearWheel").css("-webkit-filter","hue-rotate(0deg)");
		$("#currentRearWheelColourHeading").attr("src","Images/Tiles/green.png");
		$('#txtRearWheel').val('green');
		partTile = "#rearWheel";
		removeActiveClass();
		$("#rearWheelTileGreen").addClass("active");
   });
   $("#rearWheelTileOrange").click(function(){
		$(".rearWheel").attr("src","Images/rearWheel/orange.png");
		$(".rearWheel").css("-webkit-filter","hue-rotate(0deg)");
		$("#currentRearWheelColourHeading").attr("src","Images/Tiles/orange.png");
		$('#txtRearWheel').val('orange');
		partTile = "#rearWheel";
		removeActiveClass();
		$("#rearWheelTileOrange").addClass("active");
   });
   $("#rearWheelTileBlue").click(function(){
		$(".rearWheel").attr("src","Images/rearWheel/green.png");
		$(".rearWheel").css("-webkit-filter","hue-rotate(100deg)");
		$("#currentRearWheelColourHeading").attr("src","Images/Tiles/blue.png");
		$('#txtRearWheel').val('blue');
		partTile = "#rearWheel";
		removeActiveClass();
		$("#rearWheelTileBlue").addClass("active");
   });
   $("#rearWheelTileWhite").click(function(){
		$(".rearWheel").attr("src","Images/rearWheel/white.png");
		$(".rearWheel").css("-webkit-filter","hue-rotate(0deg)");
		$("#currentRearWheelColourHeading").attr("src","Images/Tiles/white.png");
		$('#txtRearWheel').val('white');
		partTile = "#rearWheel";
		removeActiveClass();
		$("#rearWheelTileWhite").addClass("active");
   });
	$("#rearWheelTileRed").click(function(){
		$(".rearWheel").attr("src","Images/rearWheel/orange.png");
		$(".rearWheel").css("-webkit-filter","hue-rotate(340deg)");
		$("#currentRearWheelColourHeading").attr("src","Images/Tiles/red.png");
		$('#txtRearWheel').val('red');
		partTile = "#rearWheel";
		removeActiveClass();
		$("#rearWheelTileRed").addClass("active");
   });
   $("#rearWheelTileBlack").click(function(){
		$(".rearWheel").attr("src","Images/rearWheel/black.png");
		$(".rearWheel").css("-webkit-filter","hue-rotate(0deg)");
		$("#currentRearWheelColourHeading").attr("src","Images/Tiles/black.png");
		$('#txtRearWheel').val('black');
		partTile = "#rearWheel";
		removeActiveClass();
		$("#rearWheelTileBlack").addClass("active");
   });
   

	$('#handlebarType').click(function() {
	   if($('#bullhornHandlebar').is(':checked')) 
	   { 
	   		 $("#bullhornBarTiles").css("display","block");
			 $("#riserBarTiles").css("display","none");
			 $("#droppedBarTiles").css("display","none");
			 $('#txtHandlebarType').val('bullhorn');
			 
			 $("#handlebar").attr("src","Images/Handlebars/Bullhorn/orange.png");
			 $("#handlebarMap").attr("coords", "485, 52, 485, 52, 489, 72, 557, 66, 577, 43, 566, 37, 552, 54, 540, 55, 552, 41, 542, 35, 531, 49, 486, 54, 490, 72");
	   }
	   else if($('#droppedHandlebar').is(':checked')) 
	   { 
	   		 $("#bullhornBarTiles").css("display","none");
			 $("#riserBarTiles").css("display","none");
			 $("#droppedBarTiles").css("display","block");
			 $('#txtHandlebarType').val('dropped');
			 
			 $("#handlebar").attr("src","Images/Handlebars/Dropped/orange.png");
			 $("#handlebarMap").attr("coords", "466, 128, 466, 128, 484, 128, 480, 123, 508, 121, 516, 112, 517, 103, 512, 97, 484, 68, 485, 58, 492, 58, 530, 98, 533, 113, 528, 124, 519, 131, 505, 135, 466, 138, 464, 128");
	   }
	   else
	   { 
	   		 $("#bullhornBarTiles").css("display","none");
			 $("#riserBarTiles").css("display","block");
			 $("#droppedBarTiles").css("display","none");
			 $('#txtHandlebarType').val('riser');
			 
			 $("#handlebar").attr("src","Images/Handlebars/Riser/orange.png");
			 $("#handlebarMap").attr("coords", "489, 44, 469, 49, 473, 60, 493, 67, 503, 63, 503, 49, 495, 48, 495, 48");
			  
	   }
	});
	
	$('#bullhornBarTileWhite').click(function() {
		 $("#handlebar").attr("src","Images/Handlebars/Bullhorn/white.png");
		 $("#handlebar").css("-webkit-filter","hue-rotate(0deg)");
		 $("#currentBarColourHeading").attr("src","Images/Tiles/white.png");
		 $('#txtHandlebarType').val('bullhorn');
		 $('#txtHandlebarColour').val('white');
		 partTile = "#bullhornBar";
		 removeActiveClass();
		 $("#bullhornBarTileWhite").addClass("active");
	});
	$('#bullhornBarTileBlue').click(function() {
		 $("#handlebar").attr("src","Images/Handlebars/Bullhorn/orange.png");
		 $("#handlebar").css("-webkit-filter","hue-rotate(180deg)");
		 $("#currentBarColourHeading").attr("src","Images/Tiles/blue.png");
		 $('#txtHandlebarType').val('bullhorn');
		 $('#txtHandlebarColour').val('blue');
		 partTile = "#bullhornBar";
		 removeActiveClass();
		 $("#bullhornBarTileBlue").addClass("active");
	});
	$('#bullhornBarTileGreen').click(function() {
		 $("#handlebar").attr("src","Images/Handlebars/Bullhorn/orange.png");
		 $("#handlebar").css("-webkit-filter","hue-rotate(100deg)");
		 $("#currentBarColourHeading").attr("src","Images/Tiles/green.png");
		 $('#txtHandlebarType').val('bullhorn');
		 $('#txtHandlebarColour').val('green');
		 partTile = "#bullhornBar";
		 removeActiveClass();
		 $("#bullhornBarTileGreen").addClass("active");
	});
	$('#bullhornBarTileOrange').click(function() {
		 $("#handlebar").attr("src","Images/Handlebars/Bullhorn/orange.png");
		 $("#handlebar").css("-webkit-filter","hue-rotate(0deg)");
		 $("#currentBarColourHeading").attr("src","Images/Tiles/orange.png");
		 $('#txtHandlebarType').val('bullhorn');
		 $('#txtHandlebarColour').val('orange');
		 partTile = "#bullhornBar";
		 removeActiveClass();
		 $("#bullhornBarTileOrange").addClass("active");
	});
	$('#bullhornBarTileRed').click(function() {
		 $("#handlebar").attr("src","Images/Handlebars/Bullhorn/orange.png");
		 $("#handlebar").css("-webkit-filter","hue-rotate(340deg)");
		 $("#currentBarColourHeading").attr("src","Images/Tiles/red.png");
		 $('#txtHandlebarType').val('bullhorn');
		 $('#txtHandlebarColour').val('red');
		 partTile = "#bullhornBar";
		 removeActiveClass();
		 $("#bullhornBarTileRed").addClass("active");
	});
	$('#bullhornBarTileBlack').click(function() {
		 $("#handlebar").attr("src","Images/Handlebars/Bullhorn/black.png");
		 $("#handlebar").css("-webkit-filter","hue-rotate(0deg)");
		 $("#currentBarColourHeading").attr("src","Images/Tiles/black.png");
		 $('#txtHandlebarType').val('bullhorn');
		 $('#txtHandlebarColour').val('black');
		 partTile = "#bullhornBar";
		 removeActiveClass();
		 $("#bullhornBarTileBlack").addClass("active");
	});
	
	
	$('#droppedBarTileWhite').click(function() {
		 $("#handlebar").attr("src","Images/Handlebars/Dropped/white.png");
		 $("#handlebar").css("-webkit-filter","hue-rotate(0deg)");
		 $("#currentBarColourHeading").attr("src","Images/Tiles/white.png");
		 $('#txtHandlebarType').val('dropped');
		 $('#txtHandlebarColour').val('white');
		 partTile = "#droppedBar";
		 removeActiveClass();
		 $("#droppedBarTileWhite").addClass("active");
	});
	$('#droppedBarTileBlue').click(function() {
		 $("#handlebar").attr("src","Images/Handlebars/Dropped/orange.png");
		 $("#handlebar").css("-webkit-filter","hue-rotate(180deg)");
		 $("#currentBarColourHeading").attr("src","Images/Tiles/blue.png");
		 $('#txtHandlebarType').val('dropped');
		 $('#txtHandlebarColour').val('blue');
		 partTile = "#droppedBar";
		 removeActiveClass();
		 $("#droppedBarTileBlue").addClass("active");
	});
	$('#droppedBarTileGreen').click(function() {
		 $("#handlebar").attr("src","Images/Handlebars/Dropped/orange.png");
		 $("#handlebar").css("-webkit-filter","hue-rotate(100deg)");
		 $("#currentBarColourHeading").attr("src","Images/Tiles/green.png");
		 $('#txtHandlebarType').val('dropped');
		 $('#txtHandlebarColour').val('green');
		 partTile = "#droppedBar";
		 removeActiveClass();
		 $("#droppedBarTileGreen").addClass("active");
	});
	$('#droppedBarTileOrange').click(function() {
		 $("#handlebar").attr("src","Images/Handlebars/Dropped/orange.png");
		 $("#handlebar").css("-webkit-filter","hue-rotate(0deg)");
		 $("#currentBarColourHeading").attr("src","Images/Tiles/orange.png");
		 $('#txtHandlebarType').val('dropped');
		 $('#txtHandlebarColour').val('orange');
		 partTile = "#droppedBar";
		 removeActiveClass();
		 $("#droppedBarTileOrange").addClass("active");
	});
	$('#droppedBarTileRed').click(function() {
		 $("#handlebar").attr("src","Images/Handlebars/Dropped/orange.png");
		 $("#handlebar").css("-webkit-filter","hue-rotate(340deg)");
		 $("#currentBarColourHeading").attr("src","Images/Tiles/red.png");
		 $('#txtHandlebarType').val('dropped');
		 $('#txtHandlebarColour').val('red');
		 partTile = "#droppedBar";
		 removeActiveClass();
		 $("#droppedBarTileRed").addClass("active");
	});
	$('#droppedBarTileBlack').click(function() {
		 $("#handlebar").attr("src","Images/Handlebars/Dropped/black.png");
		 $("#handlebar").css("-webkit-filter","hue-rotate(0deg)");
		 $("#currentBarColourHeading").attr("src","Images/Tiles/black.png");
		 $('#txtHandlebarType').val('dropped');
		 $('#txtHandlebarColour').val('black');
		 partTile = "#droppedBar";
		 removeActiveClass();
		 $("#droppedBarTileBlack").addClass("active");
	});
   
   
   $('#riserBarTileWhite').click(function() {
		 $("#handlebar").attr("src","Images/Handlebars/Riser/white.png");
		 $("#handlebar").css("-webkit-filter","hue-rotate(0deg)");
		 $("#currentBarColourHeading").attr("src","Images/Tiles/white.png");
		 $('#txtHandlebarType').val('riser');
		 $('#txtHandlebarColour').val('white');
		 partTile = "#riserBar";
		 removeActiveClass();
		 $("#riserBarTileWhite").addClass("active");
	});
	$('#riserBarTileBlue').click(function() {
		 $("#handlebar").attr("src","Images/Handlebars/Riser/orange.png");
		 $("#handlebar").css("-webkit-filter","hue-rotate(180deg)");
		 $("#currentBarColourHeading").attr("src","Images/Tiles/blue.png");
		 $('#txtHandlebarType').val('riser');
		 $('#txtHandlebarColour').val('blue');
		 partTile = "#riserBar";
		 removeActiveClass();
		 $("#riserBarTileBlue").addClass("active");
	});
	$('#riserBarTileGreen').click(function() {
		 $("#handlebar").attr("src","Images/Handlebars/Riser/orange.png");
		 $("#handlebar").css("-webkit-filter","hue-rotate(60deg)");
		 $("#currentBarColourHeading").attr("src","Images/Tiles/green.png");
		 $('#txtHandlebarType').val('riser');
		 $('#txtHandlebarColour').val('green');
		 partTile = "#riserBar";
		 removeActiveClass();
		 $("#riserBarTileGreen").addClass("active");
	});
	$('#riserBarTileOrange').click(function() {
		 $("#handlebar").attr("src","Images/Handlebars/Riser/orange.png");
		 $("#handlebar").css("-webkit-filter","hue-rotate(0deg)");
		 $("#currentBarColourHeading").attr("src","Images/Tiles/orange.png");
		 $('#txtHandlebarType').val('riser');
		 $('#txtHandlebarColour').val('orange');
		 partTile = "#riserBar";
		 removeActiveClass();
		 $("#riserBarTileOrange").addClass("active");
	});
	$('#riserBarTileRed').click(function() {
		 $("#handlebar").attr("src","Images/Handlebars/Riser/orange.png");
		 $("#handlebar").css("-webkit-filter","hue-rotate(330deg)");
		 $("#currentBarColourHeading").attr("src","Images/Tiles/red.png");
		 $('#txtHandlebarType').val('riser');
		 $('#txtHandlebarColour').val('red');
		 partTile = "#riserBar";
		 removeActiveClass();
		 $("#riserBarTileRed").addClass("active");
	});
	$('#riserBarTileBlack').click(function() {
		 $("#handlebar").attr("src","Images/Handlebars/Riser/black.png");
		 $("#handlebar").css("-webkit-filter","hue-rotate(0deg)");
		 $("#currentBarColourHeading").attr("src","Images/Tiles/black.png");
		 $('#txtHandlebarType').val('riser');
		 $('#txtHandlebarColour').val('black');
		 partTile = "#riserBar";
		 removeActiveClass();
		 $("#riserBarTileBlack").addClass("active");
	});
	
	
	$('#saddleTileBlack').click(function() {
		 $(".saddle").attr("src","Images/Saddle/black.png");
		 $(".saddle").css("-webkit-filter","hue-rotate(0deg)");
		 $("#currentSaddleColourHeading").attr("src","Images/Tiles/black.png");
		 $('#txtSaddleColour').val('black');
		 partTile = "#saddle";
		 removeActiveClass();
		 $("#saddleTileBlack").addClass("active");
	});
	
	$('#saddleTileWhite').click(function() {
		 $(".saddle").attr("src","Images/Saddle/white.png");
		 $(".saddle").css("-webkit-filter","hue-rotate(0deg)");
		 $("#currentSaddleColourHeading").attr("src","Images/Tiles/white.png");
		 $('#txtSaddleColour').val('white');
		 partTile = "#saddle";
		 removeActiveClass();
		 $("#saddleTileWhite").addClass("active");
	});
	
	$('#saddleTileBlue').click(function() {
		 $(".saddle").attr("src","Images/Saddle/green.png");
		 $(".saddle").css("-webkit-filter","hue-rotate(140deg)");
		 $("#currentSaddleColourHeading").attr("src","Images/Tiles/blue.png");
		 $('#txtSaddleColour').val('blue');
		 partTile = "#saddle";
		 removeActiveClass();
		 $("#saddleTileBlue").addClass("active");
	});
	
	$('#saddleTileGreen').click(function() {
		 $(".saddle").attr("src","Images/Saddle/green.png");
		 $(".saddle").css("-webkit-filter","hue-rotate(0deg)");
		 $("#currentSaddleColourHeading").attr("src","Images/Tiles/green.png");
		 $('#txtSaddleColour').val('green');
		 partTile = "#saddle";
		 removeActiveClass();
		 $("#saddleTileGreen").addClass("active");
	});

	$('#saddleTileOrange').click(function() {
		 $(".saddle").attr("src","Images/Saddle/orange.png");
		 $(".saddle").css("-webkit-filter","hue-rotate(0deg)");
		 $("#currentSaddleColourHeading").attr("src","Images/Tiles/orange.png");
		 $('#txtSaddleColour').val('orange');
		 partTile = "#saddle";
		 removeActiveClass();
		 $("#saddleTileOrange").addClass("active");
	});
	
	$('#saddleTileRed').click(function() {
		 $(".saddle").attr("src","Images/Saddle/orange.png");
		 $(".saddle").css("-webkit-filter","hue-rotate(330deg)");
		 $("#currentSaddleColourHeading").attr("src","Images/Tiles/red.png");
		 $('#txtSaddleColour').val('red');
		 partTile = "#saddle";
		 removeActiveClass();
		 $("#saddleTileRed").addClass("active");
	});
	
	$('#frontTyreTileWhite').click(function() {
		 $(".frontTyre").attr("src","Images/FrontTyre/white.png");
		 $(".frontTyre").css("-webkit-filter","hue-rotate(0deg)");
		 $("#currentFrontTyreColourHeading").attr("src","Images/Tiles/white.png");
		 $('#txtFrontTyre').val('white');
		 partTile = "#frontTyre";
		 removeActiveClass();
		 $("#frontTyreTileWhite").addClass("active");
	});
	
	$('#frontTyreTileBlue').click(function() {
		 $(".frontTyre").attr("src","Images/FrontTyre/green.png");
		 $(".frontTyre").css("-webkit-filter","hue-rotate(100deg)");
		 $("#currentFrontTyreColourHeading").attr("src","Images/Tiles/blue.png");
		 $('#txtFrontTyre').val('blue');
		 partTile = "#frontTyre";
		 removeActiveClass();
		 $("#frontTyreTileBlue").addClass("active");
	});
	
	$('#frontTyreTileGreen').click(function() {
		 $(".frontTyre").attr("src","Images/FrontTyre/green.png");
		 $(".frontTyre").css("-webkit-filter","hue-rotate(0deg)");
		 $("#currentFrontTyreColourHeading").attr("src","Images/Tiles/green.png");
		 $('#txtFrontTyre').val('green');;
		 partTile = "#frontTyre";
		 removeActiveClass();
		 $("#frontTyreTileGreen").addClass("active");
	});
	
	$('#frontTyreTileOrange').click(function() {
		 $(".frontTyre").attr("src","Images/FrontTyre/orange.png");
		 $(".frontTyre").css("-webkit-filter","hue-rotate(0deg)");
		 $("#currentFrontTyreColourHeading").attr("src","Images/Tiles/orange.png");
		 $('#txtFrontTyre').val('orange');
		 partTile = "#frontTyre";
		 removeActiveClass();
		 $("#frontTyreTileOrange").addClass("active");
	});
	
	$('#frontTyreTileRed').click(function() {
		 $(".frontTyre").attr("src","Images/FrontTyre/orange.png");
		 $(".frontTyre").css("-webkit-filter","hue-rotate(320deg)");
		 $("#currentFrontTyreColourHeading").attr("src","Images/Tiles/red.png");
		 $('#txtFrontTyre').val('red');
		 partTile = "#frontTyre";
		 removeActiveClass();
		 $("#frontTyreTileRed").addClass("active");
	});
	
	$('#frontTyreTileBlack').click(function() {
		 $(".frontTyre").attr("src","Images/FrontTyre/black.png");
		 $(".frontTyre").css("-webkit-filter","hue-rotate(0deg)");
		 $("#currentFrontTyreColourHeading").attr("src","Images/Tiles/black.png");
		 $('#txtFrontTyre').val('black');
		 partTile = "#frontTyre";
		 removeActiveClass();
		 $("#frontTyreTileBlack").addClass("active");
	});


	$('#rearTyreTileWhite').click(function() {
		 $(".rearTyre").attr("src","Images/RearTyre/white.png");
		 $(".rearTyre").css("-webkit-filter","hue-rotate(0deg)");
		 $("#currentRearTyreColourHeading").attr("src","Images/Tiles/white.png");
		 $('#txtRearTyreColour').val('white');
		 partTile = "#rearTyre";
		 removeActiveClass();
		 $("#rearTyreTileWhite").addClass("active");
	});
	
	$('#rearTyreTileBlue').click(function() {
		 $(".rearTyre").attr("src","Images/RearTyre/green.png");
		 $(".rearTyre").css("-webkit-filter","hue-rotate(100deg)");
		 $("#currentRearTyreColourHeading").attr("src","Images/Tiles/blue.png");
		 $('#txtRearTyreColour').val('blue');
		 partTile = "#rearTyre";
		 removeActiveClass();
		 $("#rearTyreTileBlue").addClass("active");
	});

	$('#rearTyreTileGreen').click(function() {
		 $(".rearTyre").attr("src","Images/RearTyre/green.png");
		 $(".rearTyre").css("-webkit-filter","hue-rotate(0deg)");
		 $("#currentRearTyreColourHeading").attr("src","Images/Tiles/green.png");
		 $('#txtRearTyreColour').val('green');
		 partTile = "#rearTyre";
		 removeActiveClass();
		 $("#rearTyreTileGreen").addClass("active");
	});

	$('#rearTyreTileOrange').click(function() {
		 $(".rearTyre").attr("src","Images/RearTyre/orange.png");
		 $(".rearTyre").css("-webkit-filter","hue-rotate(0deg)");
		 $("#currentRearTyreColourHeading").attr("src","Images/Tiles/orange.png");
		 $('#txtRearTyreColour').val('orange');
		 partTile = "#rearTyre";
		 removeActiveClass();
		 $("#rearTyreTileOrange").addClass("active");
	});

	$('#rearTyreTileRed').click(function() {
		 $(".rearTyre").attr("src","Images/RearTyre/orange.png");
		 $(".rearTyre").css("-webkit-filter","hue-rotate(340deg)");
		 $("#currentRearTyreColourHeading").attr("src","Images/Tiles/red.png");
		 $('#txtRearTyreColour').val('red');
		 partTile = "#rearTyre";
		 removeActiveClass();
		 $("#rearTyreTileRed").addClass("active");
	});

	$('#rearTyreTileBlack').click(function() {
		 $(".rearTyre").attr("src","Images/RearTyre/black.png");
		 $(".rearTyre").css("-webkit-filter","hue-rotate(0deg)");
		 $("#currentRearTyreColourHeading").attr("src","Images/Tiles/black.png");
		 $('#txtRearTyreColour').val('black');
		 partTile = "#rearTyre";
		 removeActiveClass();
		 $("#rearTyreTileBlack").addClass("active");
	});

	function removeActiveClass(){
    $(partTile + "TileGreen").removeClass("active");
	$(partTile + "TileOrange").removeClass("active");
	$(partTile + "TileBlue").removeClass("active");
	$(partTile + "TileWhite").removeClass("active");
	$(partTile + "TileRed").removeClass("active");
	$(partTile + "TileBlack").removeClass("active");
	$(partTile + "TilePink").removeClass("active");
	};
	

	$('#offFocus').click(function() {
		$(".accordion").accordion("option","active", false);
	});

	
	$('#frameMap').click(function() {
		$( ".accordion" ).accordion( "option", "active", 0 );
	});

	$('#frontWheelMap').click(function() {
		$( ".accordion" ).accordion( "option", "active", 1 );
		$( ".accordion2" ).accordion( "option", "active", 0 );
		$( ".accordion3" ).accordion( "option", "active", 0 );
	});
	
	$('#rearWheelMap').click(function() {
		$( ".accordion" ).accordion( "option", "active", 1 );
		$( ".accordion2" ).accordion( "option", "active", 1 );
		$( ".accordion3" ).accordion( "option", "active", 0 );
	});
	
	$('#handlebarMap').click(function() {
		$( ".accordion" ).accordion( "option", "active", 2 );
	});
	
	$('#saddleMap').click(function() {
		$( ".accordion" ).accordion( "option", "active", 3);
	});
	
	$('#frontTyreMap').click(function() {
		$( ".accordion" ).accordion( "option", "active", 1);
		$( ".accordion2" ).accordion( "option", "active", 0);
		$( ".accordion3" ).accordion( "option", "active", 1);
	});
	
		$('#rearTyreMap').click(function() {
		$( ".accordion" ).accordion( "option", "active", 1);
		$( ".accordion2" ).accordion( "option", "active", 1);
		$( ".accordion3" ).accordion( "option", "active", 1);
	});

    $('#frameMap').mousemove(function(event) { 
        var left = event.pageX - $(this).offset().left + -25;
        var top = event.pageY - $(this).offset().top + 30;
            $('#frameLabel').css({top: top,left: left}).show();
            console.log (left, top);
         });
         $('#frameMap').mouseout(function() {
             $('#frameLabel').hide();
         });

	
	
	 $('#frontWheelMap').mousemove(function(event) { 
        var left = event.pageX - $(this).offset().left + -25;
        var top = event.pageY - $(this).offset().top + 30;
            $('#frontWheelLabel').css({top: top,left: left}).show();
            console.log (left, top);
         });
         $('#frontWheelMap').mouseout(function() {
             $('#frontWheelLabel').hide();
            
		});

 	$('#rearWheelMap').mousemove(function(event) { 
        var left = event.pageX - $(this).offset().left + -25;
        var top = event.pageY - $(this).offset().top + 30;
            $('#rearWheelLabel').css({top: top,left: left}).show();
            console.log (left, top);
         });
         $('#rearWheelMap').mouseout(function() {
             $('#rearWheelLabel').hide();
            
		});


$('#handlebarMap').mousemove(function(event) { 
        var left = event.pageX - $(this).offset().left + -25;
        var top = event.pageY - $(this).offset().top + 30;
            $('#handlebarLabel').css({top: top,left: left}).show();
            console.log (left, top);
         });
         $('#handlebarMap').mouseout(function() {
             $('#handlebarLabel').hide();
            
		});

$('#saddleMap').mousemove(function(event) { 
        var left = event.pageX - $(this).offset().left + -25;
        var top = event.pageY - $(this).offset().top + 30;
            $('#saddleLabel').css({top: top,left: left}).show();
            console.log (left, top);
         });
         $('#saddleMap').mouseout(function() {
             $('#saddleLabel').hide();
            
		});

$('#frontTyreMap').mousemove(function(event) { 
        var left = event.pageX - $(this).offset().left + -25;
        var top = event.pageY - $(this).offset().top + 30;
            $('#frontTyreLabel').css({top: top,left: left}).show();
            console.log (left, top);
         });
         $('#frontTyreMap').mouseout(function() {
             $('#frontTyreLabel').hide();
            
		});

$('#rearTyreMap').mousemove(function(event) { 
        var left = event.pageX - $(this).offset().left + -25;
        var top = event.pageY - $(this).offset().top + 30;
            $('#rearTyreLabel').css({top: top,left: left}).show();
            console.log (left, top);
         });
         $('#rearTyreMap').mouseout(function() {
             $('#rearTyreLabel').hide();
            
		});


});




$( document ).ready(function() {
   	
	if ($(window).width() < 1090 & $(window).width() > 991)
	{
		$('#frameMap').attr('coords','411, 76, 398, 80, 399, 87, 209, 85, 206, 74, 197, 78, 201, 92, 104, 260, 259, 265, 406, 119, 458, 257, 469, 257, 422, 121');
		$('#noframeMap1').attr('coords','214, 95, 257, 248, 405, 103, 401, 93');
		$('#noframeMap2').attr('coords','204, 103, 246, 254, 135, 239');

	}
	else if ($(window).width() < 990 & $(window).width() > 768)
	{
		$('#frameMap').attr('coords','326, 60, 314, 63, 315, 66, 166, 65, 162, 57, 155, 60, 159, 71, 83, 208, 207, 211, 325, 94, 363, 204, 373, 201, 335, 92');
		$('#noframeMap1').attr('coords','170, 76, 205, 198, 319, 82, 316, 74');
		$('#noframeMap2').attr('coords','161, 81, 192, 202, 110, 189');
	}
	else if ($(window).width() < 767 & $(window).width() > 437)
	{
		$('#frameMap').attr('coords','151, 54, 153, 60, 289, 61, 287, 56, 297, 53, 341, 188, 328, 186, 295, 87, 185, 199, 73, 189, 145, 65, 141, 53');
		$('#noframeMap1').attr('coords','155, 69, 291, 70, 291, 74, 188, 180');
		$('#noframeMap2').attr('coords','148, 76, 176, 183, 99, 173');	
	}
	else if ($(window).width() < 436 & $(window).width() > 415)
	{
		$('#frameMap').attr('coords','122, 44, 124, 49, 234, 48, 242, 42, 274, 149, 267, 150, 238, 71, 150, 161, 58, 152, 117, 53, 115, 4');
		$('#noframeMap1').attr('coords','126, 56, 235, 57, 236, 62, 151, 147');
		$('#noframeMap2').attr('coords','120, 63, 141, 146, 83, 140');	
	}
	else if ($(window).width() < 414)
	{
		$('#frameMap').attr('coords','229, 45, 259, 140, 250, 139, 225, 66, 143, 152, 59, 144, 110, 50, 108, 42, 112, 40, 115, 44');
		$('#noframeMap1').attr('coords','119, 53, 222, 54, 220, 58, 144, 135');
		$('#noframeMap2').attr('coords','112, 57, 136, 139, 75, 133');	
	}
	else if($(window).width() > 1090)
	{
		$('#frameMap').attr('coords','294,306,469,137,526,295,539,296,488,140,475,88,461,92,242,98,239,88,225,89,230,102,229,102,135,285,122,298');
		$('#noframeMap1').attr('coords','247,110,463,110,465,119,295,284');
		$('#noframeMap2').attr('coords','235,117,278,290,157,275');
	}



$(window).resize(function() {
    	if ($(window).width() < 1090 & $(window).width() > 991)
    	{
    		
    		$('#frameMap').attr('coords','411, 76, 398, 80, 399, 87, 209, 85, 206, 74, 197, 78, 201, 92, 104, 260, 259, 265, 406, 119, 458, 257, 469, 257, 422, 121');
    		$('#noframeMap1').attr('coords','214, 95, 257, 248, 405, 103, 401, 93');
			$('#noframeMap2').attr('coords','204, 103, 246, 254, 135, 239');
    	}
    	else if ($(window).width() < 990 & $(window).width() > 767 )
		{
			$('#frameMap').attr('coords','326, 60, 314, 63, 315, 66, 166, 65, 162, 57, 155, 60, 159, 71, 83, 208, 207, 211, 325, 94, 363, 204, 373, 201, 335, 92');
				$('#noframeMap1').attr('coords','170, 76, 205, 198, 319, 82, 316, 74');
				$('#noframeMap2').attr('coords','161, 81, 192, 202, 110, 189');
		}
		else if ($(window).width() < 767 & $(window).width() > 437)
		{
		$('#frameMap').attr('coords','288, 56, 299, 54, 339, 186, 329, 184, 298, 85, 186, 197, 75, 190, 75, 184, 82, 182, 145, 65, 143, 55, 152, 53, 153, 60, 288, 60');
		$('#noframeMap1').attr('coords','155, 69, 291, 70, 291, 74, 188, 180');
		$('#noframeMap2').attr('coords','148, 76, 176, 183, 99, 173');	
		}
		else if ($(window).width() < 436 & $(window).width() > 421)
		{
			
			$('#frameMap').attr('coords','');
			$('#noframeMap1').attr('coords','');
			$('#noframeMap2').attr('coords','');
		}
	else if ($(window).width() < 420 & $(window).width() > 366)
	{
		$('#frameMap').attr('coords','');
		$('#noframeMap1').attr('coords','');
		$('#noframeMap2').attr('coords','');
	
	}
	else if ($(window).width() < 365)
	{
		$('#frameMap').attr('coords','');
		$('#noframeMap1').attr('coords','');
		$('#noframeMap2').attr('coords','');
	}
    else if ($(window).width() > 1090)
    {
    	$('#frameMap').attr('coords','294,306,469,137,526,295,539,296,488,140,475,88,461,92,242,98,239,88,225,89,230,102,229,102,135,285,122,298');
    		$('#noframeMap1').attr('coords','247,110,463,110,465,119,295,284');
			$('#noframeMap2').attr('coords','235,117,278,290,157,275');
    	}
	});


});









