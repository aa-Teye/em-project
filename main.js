/* JavaScript to handle the hamburger menu toggle */
function toggleMenu() {
    const menu = document.getElementById('menu');
    const hamburger = document.querySelector('.hamburger i');

    // Toggle menu visibility and icon
    menu.classList.toggle('show');
    hamburger.classList.toggle('fa-bars');
    hamburger.classList.toggle('fa-times');
}


let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll('.slider img');
    const totalSlides = slides.length;

    slideIndex = (slideIndex + 1) % totalSlides; // Loop back to the first slide after the last one
    const offset = -100 * slideIndex; // Move the slider by 100% of its width each time

    const slider = document.querySelector('.slider');
    slider.style.transform = `translateX(${offset}%)`;
}

setInterval(showSlides, 3000); // Change image every 3 seconds

// New functionality for navigation arrows
function moveSlide(direction) {
    const slides = document.querySelectorAll('.slider img');
    const totalSlides = slides.length;

    slideIndex = (slideIndex + direction + totalSlides) % totalSlides; // Ensure index stays within bounds
    const offset = -100 * slideIndex; // Calculate new offset

    const slider = document.querySelector('.slider');
    slider.style.transform = `translateX(${offset}%)`;
}

// Event listeners for next/prev buttons (assuming they have IDs 'prev' and 'next')
document.getElementById('prev').addEventListener('click', () => moveSlide(-1));
document.getElementById('next').addEventListener('click', () => moveSlide(1));

document.addEventListener("DOMContentLoaded", function () {
    const missionSection = document.querySelector(".mission");
    const visionSection = document.querySelector(".vision");

    // Example: Fade in effect when the page loads
    missionSection.style.opacity = 0;
    visionSection.style.opacity = 0;

    setTimeout(() => {
        missionSection.style.transition = "opacity 2s ease-in-out";
        visionSection.style.transition = "opacity 2s ease-in-out";
        missionSection.style.opacity = 1;
        visionSection.style.opacity = 1;
    }, 500);

    // Optional: Add a scroll effect to reveal sections when they are scrolled into view
    function revealOnScroll() {
        const sections = document.querySelectorAll('.mission, .vision');
        const windowHeight = window.innerHeight;

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < windowHeight - 100) {
                section.classList.add('show');
            } else {
                section.classList.remove('show');
            }
        });
    }

    // Call the reveal function when scrolling
    window.addEventListener('scroll', revealOnScroll);
    
    // Initial call to reveal any sections already in view
    revealOnScroll();
});
