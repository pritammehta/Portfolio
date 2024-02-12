new WOW().init();


//TYPEWRITER   //TYPEWRITER   //TYPEWRITER   //TYPEWRITER   //TYPEWRITER   //TYPEWRITER  //TYPEWRITER
/*
var i = 0;
var txt = 'Hello';
var speed = 700;

function typeWriter(){
  if (i < txt.length) {
	  
  document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
	
    setTimeout(typeWriter, speed);
  }
}

typeWriter();
*/












//Scroll Indicator  //Scroll Indicator  //Scroll Indicator  //Scroll Indicator  //Scroll Indicator

/*
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("indicator").style.width = scrolled + "%";
}

*/



//  ---- || pipline = or

window.onscroll = function() {myFunction()};

function myFunction() {
var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
var scrolled = (winScroll / height) * 100;
  document.getElementById("indicator").style.width = scrolled + "%";
}


//J Query   //J Query  //J Query   //J Query   //J Query   //J Query    //J Query    //J Query   //J Query
$(document).ready(function()
{
	
	
	


	//Toggle
	$("#toggle").click(function()
	{
	    $("nav").css({'right':'0','transition':'all 1s'});
		$("header").css({'display':'none'});
		
		
			
	});
	
	$(".toggle_in").click(function()
	{
		
        if (window.matchMedia('(max-width: 576px)').matches)
          {
             $("nav").css({'right':'-50%','transition':'all 1s'});
		     $("header").css({'display':'block'});
          }

        else
		 {
	         $("nav").css({'right':'-20%','transition':'all 1s'});
		     $("header").css({'display':'block'});
         }
		
	});
	
	
	
	
	


	
	//Scroll
	$(window).scroll(function(){
		
	     if($(this).scrollTop()>300)
		 {
		    
			$("header").addClass("intro");
		 }
		 
		 else
		 { 
			$("header").removeClass("intro"); 
		 }
	 });
	 
	 
	 
	 	$(window).scroll(function(){
	     if($(this).scrollTop()>1020)
		 {
		    
			$(".progress-bar").css({'width':'80%','transition':'width 2s'});
			
		 }
		 
	
	 });
	 
	 
	
});








