
$(document).ready(function(){

	// Start Menu jQuery
	$('.menu-i').click(function(){
		$('.toggle-menu').slideDown();
		$('.menu-i').hide();
		$('.crose-i').show();
	});
	$('.crose-i').click(function(){
		$('.toggle-menu').slideUp();
		$('.crose-i').hide();
		$('.menu-i').show();
	});
	// End Menu jQuery


	// Start Apps Carousel jQuery (owlCarousel PlugIn)
	$('.apps-carousel').owlCarousel({
		loop:true,
		nav:true, 
		autoplay:true,
		responsive:{
			0:{
				items:1
			},
			480:{
				items:1
			},
			575:{
				items:2
			},
			767:{
				items:3
			},
			900:{
				items:4
			}
		}
	});
	// End Apps Carousel jQuery

	// Start Team Member Carousel jQuery (owlCarousel PlugIn)
	// $('.team-members').owlCarousel({
	// 	loop:true,
	// 	nav:false, 
	// 	autoplay:true,
	// 	responsive:{
	// 		0:{
	// 			items:1
	// 		},
	// 		480:{
	// 			items:1
	// 		},
	// 		575:{
	// 			items:2
	// 		},
	// 		767:{
	// 			items:3
	// 		},
	// 		900:{
	// 			items:4
	// 		}
	// 	}
	// });
	// End Team Member Carousel jQuery


	// Start MixItUp jQuery (mixitup PlugIn)
	var containerEl = document.querySelector('#mixitupId'); 
	var mixer = mixitup(containerEl, {
	    load: {
	       filter: 'all'
	   },
	   animation: {
	   	 	effectsIn: 'fade translateY(-100%)',
	        effects: 'fade translateZ(-100px)'
	    }
	});
	// End MixItUp jQuery
});



// Start Fixed Menu jQuery
$(window).scroll(function(){
		var scrollTop = $(window).scrollTop();
		if(scrollTop > 300){
			$('.header-top-area').addClass('menu-fixed');
		}else{
			$('.header-top-area').removeClass('menu-fixed');
		}

	})
// End Fixed Menu jQuery




// Start WithOut Document Ready

// Start Fixed Scroll Button jQuery
$(window).scroll(function(){
	var scrollTop = $(window).scrollTop();
	if(scrollTop > 300){
		$('#scrollBtn').fadeIn();
	}else{
		$('#scrollBtn').fadeOut();
	}

})

$('#scrollBtn').click(function(){
	$('html , body').animate({
		scrollTop : 0
	},2000);
})
// End Fixed Scroll Button jQuery


// Start Value Change Button javaScript
const toggleSwitch = document.querySelector("#SwitchCheck");
const changeText = document.querySelector("#changePrice");
const changeMonth1 = document.querySelector("#changeMonth");
toggleSwitch.addEventListener("change",function(){
	if(this.checked){
		changeText.innerText = '$9'
		changeMonth1.innerText = 'per month'
	}else{
		changeText.innerText = '$100'
		changeMonth1.innerText = 'per year'
	}
});
// End Value Change Button javaScript



