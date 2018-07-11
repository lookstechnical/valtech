var state = true;

$('#sidebar').click(function(e) {
    e.preventDefault();
    $('.main').toggleClass('closed')
});