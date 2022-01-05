// header
$(window).scroll(function() {
    if ($(this).scrollTop() > 1){  
        $('#scroll').addClass("sticky");
    }
    else{
        $('#scroll').removeClass("sticky");
    }
});

// Show Nav Mobile
const btnShowMobileNav = document.querySelector('.nav__mobile-btn--show');
const btnHideMobileNav = document.querySelector('.nav__mobile-close');
const mobileNav = document.querySelector('.nav__mobile');
const overlay1 = document.querySelector('.nav__overlay')

function showMobileNav() {
    mobileNav.classList.add('show__nav-mobile');
    overlay1.classList.add('show__overlay');
}
function hideMobileNav() {
    mobileNav.classList.remove('show__nav-mobile');
    overlay1.classList.remove('show__overlay');
}
btnShowMobileNav.addEventListener('click', showMobileNav);
btnHideMobileNav.addEventListener('click', hideMobileNav);
overlay1.addEventListener('click', hideMobileNav);

