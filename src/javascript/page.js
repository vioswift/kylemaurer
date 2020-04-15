// checks if element is in the viewport and sets the page title as the elements text
$.fn.isInViewport = function () {
	var elementTop = $(this).offset().top;
	var elementBottom = elementTop + $(this).outerHeight();

	var viewportTop = $(window).scrollTop();
	var viewportBottom = viewportTop + $(window).height();

	return elementBottom > viewportTop && elementTop < viewportBottom;
};

function handleHeaderState() {
	var pageTitle = "Kyle Maurer | ";
	var pageIndex = 0;
	var menuIndex = 0;

	$('.newpage').each(function () {
		if ($(this).isInViewport()) {
			pageIndex = $(this).index();

			if (pageIndex == 0){
				$(document).prop('title', pageTitle + 'I.T Professional');
			}else {
				$(document).prop('title', pageTitle + $(this).find('h1').text());
			}

			$('#menu li').each(function () {
				menuIndex = $(this).index();

				if (menuIndex == pageIndex) {
					$(this).addClass('active');
				} else {
					$(this).removeClass('active');
				}
			});
		}
	});
}

$('#main').on({
	scroll: handleHeaderState
});

handleHeaderState(); // on load