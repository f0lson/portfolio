// mobile menu
const $mobileMenuIcon = $('.mobile-icon');
const $mobileMenu = $('.mobile-nav');
const $navBar = $('.nav-bar');
const $logoPeriod = $('.logo span');

// open menu
$(document).ready( function() {
    $mobileMenuIcon.click(function () {
        $(this).toggleClass('open');
        if ($mobileMenuIcon.hasClass('open') === true) {
            $mobileMenu.css('right', '0');
            $navBar.css('background-color', '#2979FF');
            $logoPeriod.css('color', '#333');
        } else {
            $mobileMenu.css('right', '-100vw');
            $navBar.css('background-color', '#333');
            $logoPeriod.css('color', '#2979FF');
        }
    });
});
