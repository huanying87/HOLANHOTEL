$(document).ready(function() {
    // Toggle the answer when the question is clicked
    $('.c-iconfonticon').click(function() {
        $(this).closest('.list-item').find('.userReview').slideToggle();
    });
});
