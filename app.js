document.addEventListener('DOMContentLoaded', function () {
     // Create particles
     createParticles('particles-1', 20);
     createParticles('particles-2', 20);
     createParticles('particles-3', 20);
     createParticles('particles-4', 20);

     // Slider functionality
     const slider = document.querySelector('.slider');
     const slides = document.querySelectorAll('.slide');
     const navItems = document.querySelectorAll('.slider-nav-item');
     const prevArrow = document.querySelector('.slide-arrow.prev');
     const nextArrow = document.querySelector('.slide-arrow.next');
     let currentSlide = 0;
     const slidesCount = slides.length;

     function goToSlide(index) {
          if (index < 0) index = slidesCount - 1;
          if (index >= slidesCount) index = 0;

          slider.style.transform = `translateX(-${index * 25}%)`;

          // Update active states
          slides.forEach(slide => slide.classList.remove('active'));
          slides[index].classList.add('active');

          navItems.forEach(item => item.classList.remove('active'));
          navItems[index].classList.add('active');

          currentSlide = index;
     }

     // Click events for navigation
     navItems.forEach((item, index) => {
          item.addEventListener('click', () => {
               goToSlide(index);
          });
     });

     // Arrow navigation
     prevArrow.addEventListener('click', () => {
          goToSlide(currentSlide - 1);
     });

     nextArrow.addEventListener('click', () => {
          goToSlide(currentSlide + 1);
     });

     // Create particles function
     function createParticles(containerId, count) {
          const container = document.getElementById(containerId);

          for (let i = 0; i < count; i++) {
               const particle = document.createElement('div');
               particle.classList.add('particle');

               // Random size
               const size = Math.random() * 20 + 5;
               particle.style.width = `${size}px`;
               particle.style.height = `${size}px`;

               // Random position
               particle.style.left = `${Math.random() * 100}%`;
               particle.style.top = `${Math.random() * 100}%`;

               // Random opacity
               particle.style.opacity = Math.random() * 0.5;

               // Random animation duration and delay
               const duration = Math.random() * 15 + 10;
               const delay = Math.random() * 5;
               particle.style.animation = `float ${duration}s ${delay}s infinite linear`;

               container.appendChild(particle);
          }
     }
});
