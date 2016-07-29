'use strict';


// TODO: we need to display local content instead of the one at Github
const GITHUB_RAW = 'https://raw.githubusercontent.com/mozdevs/Animation-examples/';
function buildRawCodeURL(base) {
    let path = base.replace(window.location.href, '');
    return `${GITHUB_RAW}gh-pages/${path}`;
}

window.onload = function () {
    let menu = document.querySelector('.sidebar');
    let burger = document.querySelector('.burger');
    let viewer = document.querySelector('.viewer-wrapper');
    let links = Array.from(document.querySelectorAll('a[target=viewer]'));
    let viewSourceLink = document.querySelector('.view-source a');
    let viewSource = document.querySelector('.view-source');

    // -------------------------------------------------------------------------
    // handle View Source Code button
    // -------------------------------------------------------------------------

    links.forEach(function (link) {
        link.addEventListener('click', function(event) {
            // only update and show the button for demos
            if (/demos\//.test(link.href)) {
                viewSourceLink.href = buildRawCodeURL(link.href);
                viewSource.style.display = 'block';
            }
            else {
                viewSourceLink.href = '#';
                viewSource.style.display = 'none';
            }
        });
    });

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

        viewSourceLink.href = '#';
        viewSource.style.display = 'none';
    };

    links.forEach(function(link) {
        link.addEventListener('click', hideMenu);
    });

    burger.querySelector('button').addEventListener('click', showMenu);
};
