new WOW().init();




//==================================JQUERY==================================================
//==================================JQUERY==================================================

$(document).ready(function()
{    
//==================================Menu efft==================================================   

	$("#menu_efft1").mouseover(function()
	{
	    $("#menu_efft1").animate({'width':'200'});
		 
	});
	
	
	
	
	
	
	
	
//==================================SCROLL==================================================	
	$(window).scroll(function(){
	     if($(this).scrollTop()>200)
		 {
		    $("#top").fadeIn();
			$("#header_position").css({'box-shadow':'1px 2px 3px black','background-color':'rgba(255,255,255,1)','transition':'all 1s'});
			
		 }
		 
		 else
		 {
		    $("#top").fadeOut();
			$("#header_position").css({'box-shadow':'0px 0px 0px black','background-color':'rgba(255,255,255,0.6)','transition':'all 1s'});
		     
		 }
	 });
	 
	$("#top").click(function(){
	     $("body,html").animate({scrollTop:0},1200);
	 });
 
     
   
	 
});

