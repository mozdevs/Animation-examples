'use strict';

const WIDTH_BREAKPOINT = 900;

function isSmallViewport() {
    return document.documentElement.clientWidth < WIDTH_BREAKPOINT;
}

window.onload = function () {
    let menu = document.querySelector('.sidebar');
    let burger = document.querySelector('.burger');
    let viewer = document.querySelector('.viewer-wrapper');
    let links = Array.from(document.querySelectorAll('a[target=viewer]'));


    // -------------------------------------------------------------------------
    // handle View Source Code button
    // -------------------------------------------------------------------------


    // -------------------------------------------------------------------------
    // handle responsive menu
    // -------------------------------------------------------------------------

    let hideMenu = function () {
        viewer.classList.add('mobile-show');
        viewer.classList.remove('mobile-hidden');

        menu.classList.add('mobile-hidden');
        menu.classList.remove('mobile-show');
    };

    let showMenu = function () {
        viewer.classList.add('mobile-hidden');
        viewer.classList.remove('mobile-show');

        menu.classList.add('mobile-show');
        menu.classList.remove('mobile-hidden');
    };

    links.forEach(function(link) {
        link.addEventListener('click', hideMenu);
    });

    burger.querySelector('button').addEventListener('click', showMenu);
};
