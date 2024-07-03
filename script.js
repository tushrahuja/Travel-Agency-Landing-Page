document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.navbar li a');
    const logo = document.querySelector('.logo');
    const nav = document.querySelector('.nav');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            nav.style.backgroundColor = 'rgb(229, 228, 226)';
            navbar.style.color = 'white'; 
        } else {
            nav.style.backgroundColor = 'transparent';
            navbar.style.color = 'black'; 
        }
    });

    navLinks.forEach(link => {
        link.addEventListener('mouseover', function () {
            link.style.color = 'rgb(243, 112, 92)';
        });
        link.addEventListener('mouseout', function () {
            link.style.color = 'rgb(132, 86, 63)';
        });
    });
});
