'use strict';

window.onload = function () {
    var menu = document.querySelector('.sidebar');
    var burger = document.querySelector('.burger');
    var viewer = document.querySelector('.viewer-wrapper');

    let hideMenu = function () {
        viewer.style.display = 'block';
        menu.style.display = 'none';
        burger.style.display = 'block';
    };

    let showMenu = function () {
        viewer.style.display = 'none';
        menu.style.display = 'block';
        burger.style.display = 'none';
    };

    let links = Array.from(document.querySelectorAll('a[target=viewer]'));
    links.forEach(function(link) {
        link.addEventListener('click', hideMenu);
    });

    burger.querySelector('button').addEventListener('click', showMenu);
};
