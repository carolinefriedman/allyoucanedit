$(document).ready(function() {
  $('.about_us_link, #back_btn').on('click', function() {
    $('.about_us').removeClass('inactive').toggleClass('active');
  });
  $('.about_us_link, #back_btn').on('click', function() {
    $('body').removeClass('scroll').toggleClass('no_scroll');
  });
});

(function () {
    var submit_focus = false;
    $('.newsletter').focus(function () {
        $(this).next().addClass('visible');
    }).blur(function () {
        if (submit_focus) {
            submit_focus = true;
        } else {
            $(this).next().removeClass('visible');
        }
    });

    $('#submit').mousedown(function () {
        submit_focus = true;
    });
}());
