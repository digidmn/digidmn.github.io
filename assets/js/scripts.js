$(document).ready(function() {
    // Handle left arrow click
    $('.left-arrow').on('click', function() {
        $('.scroll-container').animate({
            scrollLeft: '-=300' // Adjust the scroll amount as needed
        }, 300);
    });

    // Handle right arrow click
    $('.right-arrow').on('click', function() {
        $('.scroll-container').animate({
            scrollLeft: '+=300' // Adjust the scroll amount as needed
        }, 300);
    });

    // Add event listener to update scroll position on tab change
    $('#skillsTab').on('shown.bs.tab', function (e) {
        var $scrollContainer = $(this).closest('.scroll-container');
        $scrollContainer.animate({
            scrollLeft: $(e.target).position().left + $scrollContainer.scrollLeft()
        }, 300);
    });
});

