"use strict";
let headerBox = document.querySelector('#header');
let header_height = headerBox.clientHeight;
// document.write(header_height);
// main banner height height and decrease header height and margin top(size : header height) START
// let css_mt_height = `margin-top: ${header_height}px; height: calc(100vh - ${header_height}px); `;
let css_mt_height = ` height: calc(100vh - ${header_height}px); `;
let banner_box = document.getElementById('main_banner');
if (banner_box) {
    banner_box.style.cssText = css_mt_height;
}
let css_mt = `margin-top: ${header_height}px;`;
let other_banner = document.getElementById('other_banner');

if (other_banner) {
    other_banner.style.cssText = css_mt;
}


// css_mt_height = `margin-top: ${header_height}px; `;
// banner_box = document.getElementById('sss');
// banner_box.style.cssText = css_mt_height;


// main banner height height and decrease header height and margin top(size : header height) END
// *****
// *****
// *****
// loader remove when page is loaded AND add scroll to body when loader is removed START
document.body.setAttribute("class", "noscroll");
window.onload = function () {
    document.getElementById("loader").style.display = "none";
    document.body.className = document.body.className.replace(/\bnoscroll\b/, '');
}
// loader remove when page is loaded AND add scroll to body when loader is removed END
// *****
// *****
// *****
//add class on scroll top START
let scrollY = window.scrollY;

function addClass_on_scroll() {
    headerBox.classList.add('bg-danger', 'fixed-top', 'animate__fadeInDown');
    banner_box.style.cssText = `${css_mt_height};margin-top:${header_height}px`;


}

function removeClass_on_scroll() {
    headerBox.classList.remove('bg-danger', 'fixed-top', 'animate__fadeInDown');
    banner_box.style.cssText = `${css_mt_height};margin-top: 0px; `;

}
window.addEventListener('scroll', function () {
    if (window.scrollY > `${header_height}`) {
        let scrollY = window.scrollY;
        addClass_on_scroll();
    } else {
        removeClass_on_scroll();
    }
});
//add class on scroll top END
//  ***
//  ***
//  ***
//  ***
// window RELOAD every resize screen START
// window.addEventListener('resize', function () {
//     window.location.reload();
// });
// window RELOAD every resize screen END

var element = document.querySelector('.dropdown > a');

// element.classList.remove('dropdown-toggle');

window.addEventListener('resize', function () {
    var currentWidth = Math.min(window.innerWidth || Infinity, screen.width),
        currentClass = currentWidth > 992 ? 'dropdown-toggle' : 'democlass';

    // element.classList.add('no-transition');
    element.classList.remove('dropdown-toggle', 'democlass');
    element.classList.add(currentClass);
    // element.classList.remove('no-transition');
});
// $(window).on("load resize", function() {
//     if (this.matchMedia("(min-width: 992px)").matches) {
//         $('.dropdown > a').addClass("dropdown-toggle");

//     } else {
//         $('.dropdown > a').removeClass("dropdown-toggle");

//     }
// });