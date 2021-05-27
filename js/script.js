

// Preloader js javascript 


$('.preloader').fadeOut();


// header ----- sticky ------- mode --------- by ----------- javascript --------- //

window.addEventListener("scroll", function () {

	let headerSection = document.querySelector(".header_section");

	headerSection.classList.toggle("sticky", window.scrollY > 50)

})


// header ------- menu bar --------- mode ------ by ------------- javascript ------- //

document.querySelector("#toggle_menu").addEventListener("click", function () {

	let menuToggle = document.querySelector(".menu_toggle");
	menuToggle.classList.toggle("active");

	let navGation = document.querySelector(".header_menu");
	navGation.classList.toggle("active");
})


//   Scroll Top js 


$(document).ready(function () {

	$(window).on('scroll', function () {
		if ($(this).scrollTop() > 300) {
			$('#scrollTop').fadeIn()
		} else {
			$('#scrollTop').fadeOut()
		}
	})

	$('#scrollTop').on('click', function () {

		$('html , body').animate({
			scrollTop: 0
		}, 1500)

	})


})

