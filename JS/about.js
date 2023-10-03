// Slide Effect Script
const social_icons = document.getElementById('social-icons');
      
function handleScroll() {
  const triggerPosition = window.innerHeight;
  const boxPosition = social_icons.getBoundingClientRect().top;
  if (boxPosition < triggerPosition) {
    social_icons.style.opacity = '1';
    social_icons.style.transform = 'translateX(0%)';
  } else {
    social_icons.style.opacity = '0';
    social_icons.style.transform = 'translateX(-100%)';
  }
}

window.addEventListener('scroll', handleScroll);
handleScroll();
