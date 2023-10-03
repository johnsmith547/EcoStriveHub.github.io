// Navbar Script
let menu = document.querySelector('#menu-icon');
let icon = menu.querySelector('i');
let navigation = document.querySelector('.navigation');

menu.onclick = () => {
    icon.classList.toggle('fa-x');
    navigation.classList.toggle('open');
}

// Parallax Effect Script
let text = document.getElementById('text');
let bird1 = document.getElementById('bird1');
let bird2 = document.getElementById('bird2');
let btn = document.getElementById('btn');
let rocks = document.getElementById('rocks');
let forest = document.getElementById('forest');
let water = document.getElementById('water');
let header = document.getElementById('header');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    text.style.top = 50 + value * -0.5 + '%';
    bird1.style.top = value * -1.5 + 'px';
    bird1.style.left = value * 2 + 'px';
    bird2.style.top = value * -1.5 + 'px';
    bird2.style.left = value * -5 + 'px';
    btn.style.marginTop = value* 1.5 + 'px';
    rocks.style.top = value * -0.12 + 'px';
    forest.style.top = value * 0.25 + 'px';
    header.style.top = value * -0.5 + 'px';
})

// Slide Effect Script
const paragraph = document.getElementById('paragraph');
const fish = document.getElementById('fish');
const solor = document.getElementById('solor');
const recycle = document.getElementById('recycle');
const content_header = document.getElementById('content-header');
      
function handleScroll() {

const triggerPosition = window.innerHeight;
const boxPosition = paragraph.getBoundingClientRect().top;
if (boxPosition < triggerPosition) {
    content_header.style.opacity = '1';
    content_header.style.transform = 'translateX(0)';

    paragraph.style.opacity = '1';
    paragraph.style.transform = 'translateX(0)';

    fish.style.opacity = '1';
    fish.style.transform = 'translateX(0)';

    solor.style.opacity = '1';
    solor.style.transform = 'translateX(0)';

    recycle.style.opacity = '1';
    recycle.style.transform = 'translateX(0)';

}
else {
    content_header.style.opacity = '0';
    content_header.style.transform = 'translateX(-100%)';
    
    paragraph.style.opacity = '0';
    paragraph.style.transform = 'translateX(-100%)';

    fish.style.opacity = '0';
    fish.style.transform = 'translateX(100%)';

    solor.style.opacity = '0';
    solor.style.transform = 'translateX(100%)';

    recycle.style.opacity = '0';
    recycle.style.transform = 'translateX(100%)';
  }
}
window.addEventListener('scroll', handleScroll);
handleScroll();

