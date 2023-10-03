// Slide Effect Script
const contact_image = document.getElementById('contact-image');
const form = document.getElementById('form');

function handleScroll() {
  const triggerPosition = window.innerHeight;
  const boxPosition = contact_image.getBoundingClientRect().top;
  if (boxPosition < triggerPosition) {
    form.style.opacity = '1';
    form.style.transform = 'translateX(0%)';

    contact_image.style.opacity = '1';
    contact_image.style.transform = 'translateX(0%)';
  } else {
    form.style.opacity = '0';
    form.style.transform = 'translateX(-100%)';

    contact_image.style.opacity = '0';
    contact_image.style.transform = 'translateX(100%)';
  }
}

window.addEventListener('scroll', handleScroll);
handleScroll();
  