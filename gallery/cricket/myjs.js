
	
//==================================GO Top=================================================	
	$(window).scroll(function(){
	     if($(this).scrollTop()>200)
		 {
		    $("#top").fadeIn();
			$("#header_position").css({'box-shadow':'1px 2px 3px black','transition':'all 1s'});
			
		 }
		 
		 else
		 {
		    $("#top").fadeOut();
			$("#header_position").css({'box-shadow':'0px 0px 0px black','transition':'all 1s'});
		     
		 }
	 });
	 
	$("#top").click(function(){
	     $("body,html").animate({scrollTop:0},1200);
	 });
 
     
  





$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})








	//with class div
	$(document).ready(function(){
		$(".videowidth").hover(function(){
			$(this).children("video")[0].play();
		},
		function(){
		$(this).children("video")[0].pause();
		});
	});
	// Without id and class div
	/*$(document).ready(function(){
		$("video").hover(function(){
			$(this)[0].play();
		},
		function(){
		$(this)[0].pause();
		});
	});*/
	






