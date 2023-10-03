// Slide Effect Script
const missionHeadingH1 = document.getElementById('mission-heading-h1');
const missionHeadingH2 = document.getElementById('mission-heading-h2');
const missionParagraph = document.getElementById('mission-paragraph');
const slide = document.getElementById('slide');

function handleScroll(){
    const triggerPosition = window.innerHeight;
    const boxPosition = missionParagraph.getBoundingClientRect().top;

    if (boxPosition < triggerPosition) {
        missionHeadingH1.style.opacity = '1';
        missionHeadingH1.style.transform = 'translateX(0)';
    
        missionHeadingH2.style.opacity = '1';
        missionHeadingH2.style.transform = 'translateX(0)';
    
        missionParagraph.style.opacity = '1';
        missionParagraph.style.transform = 'translateX(0)';

        slide.style.opacity = '1';
        slide.style.transform = 'translateX(0)';
    }
    else {
        missionHeadingH1.style.opacity = '0';
        missionHeadingH1.style.transform = 'translateX(-100%)';
    
        missionHeadingH2.style.opacity = '0';
        missionHeadingH2.style.transform = 'translateX(100%)';
    
        missionParagraph.style.opacity = '0';
        missionParagraph.style.transform = 'translateX(-100%)';

        slide.style.opacity = '0';
        slide.style.transform = 'translateX(-100%)';
      }
    }
    window.addEventListener('scroll', handleScroll);
    handleScroll();