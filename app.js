document.addEventListener('DOMContentLoaded', function () {
     // Mobile menu functionality
     const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
     const closeMenuBtn = document.querySelector('.close-menu-btn');
     const nav = document.querySelector('.nav');
     
     mobileMenuBtn.addEventListener('click', function() {
          this.classList.toggle('active');
          nav.classList.toggle('active');
          document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
     });
     
     closeMenuBtn.addEventListener('click', function() {
          mobileMenuBtn.classList.remove('active');
          nav.classList.remove('active');
          document.body.style.overflow = '';
     });

     // Close mobile menu when clicking outside
     document.addEventListener('click', function(event) {
          if (!event.target.closest('.nav') && !event.target.closest('.mobile-menu-btn')) {
               mobileMenuBtn.classList.remove('active');
               nav.classList.remove('active');
               document.body.style.overflow = '';
          }
     });
     
     // Close mobile menu when clicking on a link
     const navLinks = document.querySelectorAll('.nav ul li a');
     navLinks.forEach(link => {
          link.addEventListener('click', function() {
               mobileMenuBtn.classList.remove('active');
               nav.classList.remove('active');
               document.body.style.overflow = '';
          });
     });

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
     let isAnimating = false;

     function goToSlide(index) {
          if (isAnimating) return;
          isAnimating = true;
          
          if (index < 0) index = slidesCount - 1;
          if (index >= slidesCount) index = 0;

          // Get current and next slide backgrounds
          const currentSlideBg = slides[currentSlide].querySelector('.slide-bg');
          const nextSlideBg = slides[index].querySelector('.slide-bg');
          
          // Get current and next slide bottom backgrounds
          const currentBottomBg = slides[currentSlide].querySelector('.slide-bottom-bg');
          const nextBottomBg = slides[index].querySelector('.slide-bottom-bg');
          
          // Get current and next slide particles
          const currentParticles = slides[currentSlide].querySelector('.slide-particles');
          const nextParticles = slides[index].querySelector('.slide-particles');
          
          // Get current and next slide content
          const currentContent = slides[currentSlide].querySelector('.slide-content');
          const nextContent = slides[index].querySelector('.slide-content');
          
          // Get current and next slide tagline
          const currentTagline = slides[currentSlide].querySelector('.product-tagline');
          const nextTagline = slides[index].querySelector('.product-tagline');
          
          // Get current and next slide can image
          const currentCan = slides[currentSlide].querySelector('.can-image');
          const nextCan = slides[index].querySelector('.can-image');
          
          // Get current and next slide accents
          const currentAccents = slides[currentSlide].querySelectorAll('.slide-accent');
          const nextAccents = slides[index].querySelectorAll('.slide-accent');

          // Create a timeline for the transition
          const tl = gsap.timeline({
               onComplete: () => {
                    // Update active states after animation completes
                    slides.forEach(slide => slide.classList.remove('active'));
                    slides[index].classList.add('active');
                    
                    navItems.forEach(item => item.classList.remove('active'));
                    navItems[index].classList.add('active');
                    
                    currentSlide = index;
                    isAnimating = false;
               }
          });

          // Animate the slider
          tl.to(slider, {
               duration: 0.8,
               x: `-${index * 25}%`,
               ease: "power2.inOut"
          });

          // Fade out current slide elements
          tl.to(currentSlideBg, {
               duration: 0.5,
               opacity: 0,
               scale: 1.1,
               ease: "power2.inOut"
          }, 0);
          
          tl.to(currentBottomBg, {
               duration: 0.5,
               opacity: 0,
               y: 50,
               ease: "power2.inOut"
          }, 0);
          
          tl.to(currentParticles, {
               duration: 0.5,
               opacity: 0,
               ease: "power2.inOut"
          }, 0);
          
          tl.to(currentContent, {
               duration: 0.5,
               opacity: 0,
               y: 30,
               ease: "power2.inOut"
          }, 0);
          
          tl.to(currentTagline, {
               duration: 0.5,
               opacity: 0,
               x: -30,
               ease: "power2.inOut"
          }, 0);
          
          tl.to(currentCan, {
               duration: 0.5,
               opacity: 0,
               y: 50,
               rotate: 5,
               ease: "power2.inOut"
          }, 0);
          
          // Fade out current slide accents
          currentAccents.forEach((accent, i) => {
               tl.to(accent, {
                    duration: 0.5,
                    opacity: 0,
                    y: 30,
                    ease: "power2.inOut"
               }, 0);
          });

          // Fade in next slide elements
          tl.fromTo(nextSlideBg, 
               { opacity: 0, scale: 0.9 },
               { duration: 0.8, opacity: 1, scale: 1, ease: "power2.inOut" },
               0.3
          );
          
          tl.fromTo(nextBottomBg, 
               { opacity: 0, y: 50 },
               { duration: 0.8, opacity: 1, y: 0, ease: "power2.inOut" },
               0.3
          );
          
          tl.fromTo(nextParticles, 
               { opacity: 0 },
               { duration: 0.8, opacity: 1, ease: "power2.inOut" },
               0.3
          );
          
          tl.fromTo(nextContent, 
               { opacity: 0, y: 30 },
               { duration: 0.8, opacity: 1, y: 0, ease: "power2.inOut" },
               0.3
          );
          
          tl.fromTo(nextTagline, 
               { opacity: 0, x: -30 },
               { duration: 0.8, opacity: 1, x: 0, ease: "power2.inOut" },
               0.5
          );
          
          tl.fromTo(nextCan, 
               { opacity: 0, y: 50, rotate: 5 },
               { duration: 0.8, opacity: 1, y: 0, rotate: 0, ease: "power2.inOut" },
               0.5
          );
          
          // Fade in next slide accents with staggered delay
          nextAccents.forEach((accent, i) => {
               tl.fromTo(accent, 
                    { opacity: 0, y: 30 },
                    { duration: 0.8, opacity: 1, y: 0, ease: "power2.inOut" },
                    0.5 + (i * 0.1)
               );
          });
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
