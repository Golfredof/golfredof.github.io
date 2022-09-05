// Menu animation

var icon = document.getElementById("hamb-icon");
var icon1 = document.getElementById("a");
var icon2 = document.getElementById("b");
var icon3 = document.getElementById("c");
var nav = document.getElementById('nav');
var dgreen = document.getElementById("dgreen");
var closeMenuElements = document.querySelectorAll('.close');

    icon.addEventListener('click', function() {
        icon1.classList.toggle('a');
        icon2.classList.toggle('c');
        icon3.classList.toggle('b');
        nav.classList.toggle('show');
        dgreen.classList.toggle('slide');
    });

    closeMenuElements .forEach(close => {
        close.addEventListener('click', function() {
            icon1.classList.toggle('a');
            icon2.classList.toggle('c');
            icon3.classList.toggle('b');
            nav.classList.toggle('show');
            dgreen.classList.toggle('slide');
        });
      });


// Menu hover

var bgNav = document.getElementById("nav");
var menu = document.getElementById("menu");

document.addEventListener("DOMContentLoaded", function(event) {
  
  menu.addEventListener("mouseover", function( event ) {
    bgNav.classList.add("dark");
  }, false);

  menu.addEventListener("mouseout", function( event ) {
    bgNav.classList.remove("dark");
  }, false);

});

// Sticky menu

window.onscroll = function() {stickyFunction()};
            
var nav = document.getElementById("nav");
var hamburgerIcon = document.getElementById("hamb-icon");
var sticky = nav.offsetTop;
var sticky2 = hamburgerIcon.offsetTop;
            
    function stickyFunction() {
        if (window.pageYOffset >= sticky) {
            nav.classList.add("sticky");
            hamburgerIcon.classList.add("sticky2")
        } else {
            nav.classList.remove("sticky");
            hamburgerIcon.classList.remove("sticky2");
        }
    }

// Type effect

var typed = new Typed(".auto-type", {
    strings: ["developer", "3d modeler", "foodie", "geek"],
    typeSpeed: 80,
    backSpeed: 80,
    loop: true
})

// Parallax banner


const paths = [...document.querySelectorAll('path.path-anim')];
paths.forEach(el => {
    const svgEl = el.closest('svg');
    const pathTo = el.dataset.pathTo;

    gsap.timeline({
        scrollTrigger: {
            trigger: svgEl,
            start: "top bottom",
            end: "bottom top",
            scrub: true
        }
    })
    .to(el, {
        ease: 'none',
        attr: { d: pathTo }
    });
});


// Parallax rellax

var rellax = new Rellax('.rellax');
rellax.refresh();

// Scrollout

ScrollOut({
    threshold: .6
})