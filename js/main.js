$(function() {

	$('.slider_box').slick({
		autoplay: true,
		autoplaySpeed: 3000,
		speed: 2000,
		arrows: false,
		dots: true

	});

	$('.btn_menu').click(function(){
		$('.menu ul').slideToggle();

	});


	var mixer = mixitup('.mixer');
});

function openPost(evt, postName) {
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	document.getElementById(postName).style.display = "block";
	evt.currentTarget.className += " active";
};
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();