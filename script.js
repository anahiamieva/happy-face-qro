document.addEventListener('DOMContentLoaded', () => {
    console.log('Happy Face Qro website loaded!');

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Mobile menu toggle
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileBtn && navLinks) {
        mobileBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');

            // Toggle icon between list and x
            const icon = mobileBtn.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.replace('ph-list', 'ph-x');
            } else {
                icon.classList.replace('ph-x', 'ph-list');
            }
        });

        // Close menu when clicking a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                const icon = mobileBtn.querySelector('i');
                if (icon) icon.classList.replace('ph-x', 'ph-list');
            });
        });
    }

    // Reservation Buttons Logic
    const serviceSelect = document.getElementById('service');
    const additionalDetails = document.getElementById('details');

    document.querySelectorAll('.btn-reservar').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const serviceName = btn.dataset.service;

            // Scroll to contact section
            document.querySelector('#reservar').scrollIntoView({ behavior: 'smooth' });

            // Try to set select value, or append to textarea if option not found
            let optionFound = false;
            for (let i = 0; i < serviceSelect.options.length; i++) {
                if (serviceSelect.options[i].text === serviceName) {
                    serviceSelect.selectedIndex = i;
                    optionFound = true;
                    break;
                }
            }

            if (!optionFound) {
                additionalDetails.value = `Me interesa contratar el servicio: ${serviceName}.\n` + additionalDetails.value;
            }
        });
    });

    // WhatsApp Form Submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const date = document.getElementById('date').value;
            const service = document.getElementById('service').value;
            const details = document.getElementById('details').value;

            const formatDate = (dateString) => {
                if (!dateString) return 'Por definir';
                // Create date object and adjust for timezone offset to prevent one-day-off error
                const dateObj = new Date(dateString);
                const userTimezoneOffset = dateObj.getTimezoneOffset() * 60000;
                const adjustedDate = new Date(dateObj.getTime() + userTimezoneOffset);

                const options = { year: 'numeric', month: 'long', day: 'numeric' };
                return adjustedDate.toLocaleDateString('es-MX', options);
            };

            const messageText = `Hola Happy Face Qro! -- Nueva Solicitud --\n` +
                `Me interesa reservar una fecha con ustedes.\n\n` +
                `*Nombre:* ${name}\n` +
                `*Fecha:* ${formatDate(date)}\n` +
                `*Servicio:* ${service || 'No especificado'}\n` +
                `*Teléfono:* ${phone}\n` +
                `*Detalles:* ${details || 'Sin detalles adicionales'}`;

            const phoneNumber = '524427513785';
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(messageText)}`;

            window.open(whatsappUrl, '_blank');
        });
    }
});
