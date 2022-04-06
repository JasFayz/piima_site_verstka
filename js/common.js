document.addEventListener('DOMContentLoaded', function() {

	// $('body').hide()
	$('.header__menu-btn').click(function(){
		$(this).children().toggleClass('is-active')
		$('.header__nav').toggleClass('show')
	})
})
