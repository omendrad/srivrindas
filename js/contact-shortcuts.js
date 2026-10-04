(function () {
    "use strict";

    var mainHeading = document.querySelector('h1');
    if (mainHeading && !document.querySelector('.site-slogan')) {
        var siteSlogan = document.createElement('p');
        siteSlogan.className = 'site-slogan';
        siteSlogan.textContent = 'Pure Vegetarian and Satvik Catering';
        mainHeading.insertAdjacentElement('afterend', siteSlogan);
    }

    var backToTop = document.querySelector('.back-to-top');
    if (!backToTop) {
        backToTop = document.createElement('a');
        backToTop.href = '#';
        backToTop.className = 'btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top';
        backToTop.setAttribute('aria-label', 'Back to top');
        backToTop.title = 'Back to top';
        backToTop.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 19V5M5 12l7-7 7 7"/></svg>';
        document.body.appendChild(backToTop);

        var updateBackToTop = function () {
            backToTop.style.display = window.scrollY > 300 ? 'flex' : 'none';
        };

        window.addEventListener('scroll', updateBackToTop, { passive: true });
        backToTop.addEventListener('click', function (event) {
            event.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
        updateBackToTop();
    }

    if (document.querySelector('.contact-shortcuts')) return;

    document.querySelectorAll('.whatsapp-float').forEach(function (link) {
        link.remove();
    });

    var shortcuts = document.createElement('div');
    shortcuts.className = 'contact-shortcuts';
    shortcuts.setAttribute('aria-label', 'Contact Sri Vrindas Catering');
    shortcuts.innerHTML =
        '<a class="contact-shortcut contact-shortcut--call" href="tel:+918197317345" aria-label="Call Sri Vrindas at +91 8197317345" title="Call us">' +
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">' +
                '<path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.24.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2z"/>' +
            '</svg>' +
        '</a>' +
        '<a class="contact-shortcut contact-shortcut--whatsapp" href="https://wa.me/918197317345" target="_blank" rel="noopener noreferrer" aria-label="Chat with Sri Vrindas on WhatsApp" title="WhatsApp">' +
            '<img src="img/whats.png" alt="" aria-hidden="true">' +
        '</a>';

    document.body.appendChild(shortcuts);
})();