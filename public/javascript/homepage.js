
function showSidebar(){
    const sidebar  = document.querySelector ('.sidebar') 
    sidebar.style.display ='flex'
}
function hideSidebar(){
    const sidebar  = document.querySelector('.sidebar') 
    sidebar.style.display ='none'
}
let currentSlide = 0;
const slides = document.querySelectorAll('.slide-item');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

// Change slide every 7 seconds
setInterval(nextSlide, 7000);
showSlide(currentSlide); // Show the first slide initially

// Testimonial slider functionality
let currentIndex = 0;
const testimonials = document.querySelectorAll('.slide-item'); // Update selector to match the testimonials elements

function showTestimonials() {
    const testimonials = document.querySelectorAll('.slide-item'); // Ensure to target the right class for testimonials
    testimonials.forEach((item, index) => {
        item.style.display = index === currentIndex ? 'block' : 'none';
    });
    currentIndex = (currentIndex + 1) % testimonials.length;
}

setInterval(showTestimonials, 3000); // Change testimonial every 3 seconds
showTestimonials(); // Initialize display