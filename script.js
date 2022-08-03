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



// Parallax rellax

var rellax = new Rellax('.rellax');
rellax.refresh();

// Scrollout

ScrollOut({
    threshold: .6
})

//grid

const nodes = [].slice.call(document.querySelectorAll("li"), 0);
const directions = { 0: "top", 1: "right", 2: "bottom", 3: "left" };
const classNames = ["in", "out"]
  .map((p) => Object.values(directions).map((d) => `${p}-${d}`))
  .reduce((a, b) => a.concat(b));

const getDirectionKey = (ev, node) => {
  const { width, height, top, left } = node.getBoundingClientRect();
  const l = ev.pageX - (left + window.pageXOffset);
  const t = ev.pageY - (top + window.pageYOffset);
  const x = l - (width / 2) * (width > height ? height / width : 1);
  const y = t - (height / 2) * (height > width ? width / height : 1);
  return Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
};

class Item {
  constructor(element) {
    this.element = element;
    this.element.addEventListener("mouseover", (ev) => this.update(ev, "in"));
    this.element.addEventListener("mouseout", (ev) => this.update(ev, "out"));
  }

  update(ev, prefix) {
    this.element.classList.remove(...classNames);
    this.element.classList.add(
      `${prefix}-${directions[getDirectionKey(ev, this.element)]}`
    );
  }
}

nodes.forEach((node) => new Item(node));

AOS.init();