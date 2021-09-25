$('.sidemenu button').click(function () {
    $('.sidemenu-list').addClass('sidemenu-list-show');
    $('.sidemenu-list .navbar-nav').addClass('show-list');

});

$('.sidemenu-list i').click(function () {
    $('.sidemenu-list').removeClass('sidemenu-list-show');
    $('.sidemenu-list .navbar-nav').removeClass('show-list');
});

$('.sidemenu-list').click(function () {
    $(this).removeClass('sidemenu-list-show');
    $('.sidemenu-list .navbar-nav').removeClass('show-list');
});

$('.navbar-nav').click(function(event) {
    event.stopPropagation();
});

$('.sidemenu .nav-item').click(function () {
    $('.sidemenu-list').removeClass('sidemenu-list-show');
    $('.sidemenu-list .navbar-nav').removeClass('show-list');
});
