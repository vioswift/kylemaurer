$.fn.isInViewport = function() {
	var elementTop = $(this).offset().top;
	var elementBottom = elementTop + $(this).outerHeight();
  
	var viewportTop = $(window).scrollTop();
	var viewportBottom = viewportTop + $(window).height();
  
	return elementBottom > viewportTop && elementTop < viewportBottom;
  };
  
//   $(window).on('resize scroll', function() {
// 	$('h1').each(function() {
// 		console.log('test2');
// 	  if ($(this).isInViewport()) {
// 		 $(document).prop('title', $(this).text);
// 	  } 
// 	});
//   });


//   function handleHeaderState() {
// 	console.log('test1sate');
	
// 	$('h1').each(function() {
// 		console.log('test2');
// 	  if ($(this).isInViewport()) {
// 		 $(document).prop('title', $(this).text);
// 	  } 
// 	});
// }

// $('#main').on({
//     scroll: handleHeaderState
// });

// handleHeaderState(); // on load