$(document).ready(function() {
    // Toggle the answer when the question is clicked
    $('.question').click(function() {
        $(this).closest('.list-item').find('.answer').slideToggle();
    });
});