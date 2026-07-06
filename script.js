/**
 * Keanna B. Nojara Portfolio Engine
 * Core Interaction and Navigation Mechanics
 */

document.addEventListener("DOMContentLoaded", function () {
    
    // ---- 1. Dynamic Scroll Spy Engine ----
    const navLinks = document.querySelectorAll('.sidebar-menu a');
    const sections = document.querySelectorAll('.content-section');

    function trackViewportScrollSpy() {
        let activeSectionId = '';
        // Offset boundary to trigger the link change slightly before entering the section area
        const triggerBoundaryOffset = window.pageYOffset + 120;

        sections.forEach(section => {
            const sectionTopPosition = section.offsetTop;
            if (triggerBoundaryOffset >= sectionTopPosition) {
                activeSectionId = section.getAttribute('id');
            }
        });

        // Update active classes across the sidebar navigation nodes
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${activeSectionId}`) {
                link.classList.add('active');
            }
        });
    }

    // Initialize tracking on window scroll events
    window.addEventListener('scroll', trackViewportScrollSpy);
    // Execute single pass immediately to style current landing section view
    trackViewportScrollSpy();


    // ---- 2. Smooth Interpolation Anchor Jumps ----
    navLinks.forEach(anchorLink => {
        anchorLink.addEventListener('click', function (event) {
            const targetedHash = this.getAttribute('href');
            
            // Only capture internal hash links
            if (targetedHash.startsWith('#')) {
                event.preventDefault();
                const destinationElement = document.querySelector(targetedHash);
                
                if (destinationElement) {
                    // Smoothly scroll down to target positioning bounds
                    destinationElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });


    // ---- 3. Contact Gateway Form Validation Guard ----
    const submissionForm = document.querySelector('.gateway-form');
    
    if (submissionForm) {
        submissionForm.addEventListener('submit', function (event) {
            const inputName = this.querySelector('input[name="name"]').value.trim();
            const inputEmail = this.querySelector('input[name="email"]').value.trim();
            const inputMessage = this.querySelector('textarea[name="message"]').value.trim();
            
            // Basic input data clean validation block
            if (!inputName || !inputEmail || !inputMessage) {
                event.preventDefault();
                alert('Transmission Interrupted: Please complete all input entries prior to processing operations.');
            }
        });
    }
});
