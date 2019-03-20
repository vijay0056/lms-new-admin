(function($) {
  "use strict"; // Start of use strict

  // Toggle the side navigation
  $("#filterToggle").on('click', function(e) {
    e.preventDefault();
    $("body").toggleClass("filterbar-toggled");
    $(".filterbar").toggleClass("toggled");
	
  });
  $(".cls").on('click', function(e){
	  
	  $(".filterbar").toggleClass("toggled");
	  
	  });
	  
$("#sidebarToggle").on('click', function(e) {
    e.preventDefault();
    $("body").toggleClass("sidebar-toggled");
    $(".sidebar").toggleClass("toggled");
	$("#sidebarToggle i").toggleClass("fa-times");
	
  });

  // Prevent the content wrapper from scrolling when the fixed side navigation hovered over
  $('body.fixed-nav .sidebar').on('mousewheel DOMMouseScroll wheel', function(e) {
    if ($(window).width() > 768) {
      var e0 = e.originalEvent,
        delta = e0.wheelDelta || -e0.detail;
      this.scrollTop += (delta < 0 ? 1 : -1) * 30;
      e.preventDefault();
    }
  });

  // Scroll to top button appear
  $(document).on('scroll', function() {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

  // Smooth scrolling using jQuery easing
  $(document).on('click', 'a.scroll-to-top', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: ($($anchor.attr('href')).offset().top)
    }, 1000, 'easeInOutExpo');
    event.preventDefault();
  });

})(jQuery); // End of use strict

$(document).ready(function() {
 // $('#dataTable').DataTable();
});

$(document).ready(function() {
    var table = $('#dataTable').removeAttr('width').DataTable( {
      scrollY:        true,
        scrollX:        true,
        scrollCollapse: true,
        paging:         true,
        columnDefs: [
            { "width": "16.66%", "targets": 0 },
      { "width": "16.66%", "targets": 1 },
      { "width": "16.66%", "targets": 2 },
      { "width": "16.66%", "targets": 3 },
      { "width": "16.66%", "targets": 4 },
      { "width": "16.66%", "targets": 5 }
        ],
        fixedColumns: true,
		
    } );
} );

