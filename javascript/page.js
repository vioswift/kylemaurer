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


	if ($('#landingPageTitle').isInViewport()) {
		$(document).prop('title', pageTitle + 'I.T Professional');
	} else {
		$('h1').each(function () {
			if ($(this).isInViewport()) {
				$(document).prop('title', pageTitle + $(this).text());
			}
		});
	}
}

$('#main').on({
	scroll: handleHeaderState
});

handleHeaderState(); // on load