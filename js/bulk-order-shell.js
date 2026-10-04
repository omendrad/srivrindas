(function () {
    var scriptUrl = document.currentScript && document.currentScript.src;
    if (!scriptUrl) return;

    var siteRoot = new URL('../', scriptUrl);
    var sitePath = function (path) {
        return new URL(path, siteRoot).href;
    };

    var currentPath = decodeURIComponent(window.location.pathname || '').toLowerCase();
    var currentUrl = decodeURIComponent(window.location.href || '').toLowerCase();
    var collectionBackLink = sitePath('bulk-order.html');
    var collectionBackText = '&larr; Back to Bulk Order Menu';

    if (currentPath.indexOf('/sv all menus/all north menu/') !== -1 || currentUrl.indexOf('/sv all menus/all north menu/') !== -1 || currentPath.indexOf('/sv%20all%20menus/all%20north%20menu/') !== -1 || currentUrl.indexOf('/sv%20all%20menus/all%20north%20menu/') !== -1) {
        collectionBackLink = sitePath('sv all menus/all north menu/index.html');
        collectionBackText = '&larr; Back to All North Indian Menus';
    } else if (currentPath.indexOf('/sv all menus/all south menu/') !== -1 || currentUrl.indexOf('/sv all menus/all south menu/') !== -1 || currentPath.indexOf('/sv%20all%20menus/all%20south%20menu/') !== -1 || currentUrl.indexOf('/sv%20all%20menus/all%20south%20menu/') !== -1) {
        collectionBackLink = sitePath('sv all menus/all south menu/index.html');
        collectionBackText = '&larr; Back to All South Indian Menus';
    }

    var styles = document.createElement('style');
    styles.textContent = `
        .svc-shell-header {
            position: sticky;
            top: 0;
            z-index: 1050;
            background: #fff;
            font-family: Arial, sans-serif;
        }
        .svc-shell-container { width: 100%; margin: 0 auto; padding: 0 12px; }
        .svc-shell-navbar { position: relative; display: flex; min-height: 55px; align-items: center; flex-wrap: wrap; padding: 8px 12px; }
        .svc-shell-brand { position: absolute; top: 0; left: 0; display: block; width: 126px; height: 100px; padding: 0; }
        .svc-shell-brand img { display: block; width: 100%; height: 100%; object-fit: contain; }
        .svc-shell-toggler { display: inline-flex; width: 50px; height: 38px; align-items: center; justify-content: center; margin-left: auto; padding: 4px 12px; color: #4b4b4b; background: transparent; border: 1px solid rgba(0,0,0,.15); border-radius: 4px; cursor: pointer; }
        .svc-shell-toggler-icon, .svc-shell-toggler-icon::before, .svc-shell-toggler-icon::after { display: block; width: 24px; height: 2px; background: currentColor; }
        .svc-shell-toggler-icon { position: relative; }
        .svc-shell-toggler-icon::before, .svc-shell-toggler-icon::after { position: absolute; left: 0; content: ''; }
        .svc-shell-toggler-icon::before { top: -7px; }
        .svc-shell-toggler-icon::after { top: 7px; }
        .svc-shell-collapse { display: none; flex-basis: 100%; width: 100%; }
        .svc-shell-collapse.show { display: block; }
        .svc-shell-links { display: flex; flex-direction: column; margin-top: 75px; border-top: 1px solid #eee; }
        .svc-shell-links a { padding: 10px 0; color: #343a40; font-size: 1rem; font-weight: 600; text-decoration: none; text-transform: uppercase; }
        .svc-shell-links a:hover, .svc-shell-links a:focus-visible { color: #c95718; }
        .svc-shell-footer { padding: 38px 24px 20px; color: #e5e9e3; background: #202b25; font-family: Arial, sans-serif; }
        .svc-shell-footer-inner { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 28px; width: min(1120px, 100%); margin: 0 auto; }
        .svc-shell-footer h2 { margin: 0 0 14px; color: #e1b65e; font-size: 1rem; }
        .svc-shell-footer p, .svc-shell-footer a { color: #e5e9e3; font-size: .9rem; line-height: 1.65; }
        .svc-shell-footer p { margin: 0 0 8px; }
        .svc-shell-footer a { display: block; width: fit-content; text-decoration: none; }
        .svc-shell-footer a:hover, .svc-shell-footer a:focus-visible { color: #f1c878; text-decoration: underline; text-underline-offset: 3px; }
        .svc-shell-copyright { width: min(1120px, 100%); margin: 26px auto 0; padding-top: 14px; border-top: 1px solid rgba(255,255,255,.18); color: #cbd1cb; font-size: .82rem; text-align: center; }
        .svc-shell-back-action { width: min(1120px, calc(100% - 48px)); margin: 28px auto; text-align: center; font-family: Arial, sans-serif; }
        .svc-shell-back-action a { display: inline-block; padding: 10px 18px; color: #fff; background: #56616a; border: 1px solid #56616a; border-radius: 4px; font-size: .95rem; font-weight: 600; text-decoration: none; }
        .svc-shell-back-action a:hover, .svc-shell-back-action a:focus-visible { color: #fff; background: #414a51; border-color: #414a51; }
        .svc-collection-offer { position: relative; display: grid; grid-template-columns: auto 1fr; align-items: center; gap: 8px 18px; width: min(1120px, calc(100% - 40px)); margin: 24px auto; padding: 18px 24px; overflow: hidden; color: #fff; background: linear-gradient(112deg, #8f3716 0%, #c95718 58%, #df8738 100%); border: 1px solid #f0c879; border-radius: 8px; box-shadow: 0 10px 28px rgba(89, 45, 19, .2); font-family: Arial, sans-serif; }
        .svc-collection-offer::before { position: absolute; top: -36px; right: 26px; width: 150px; height: 150px; content: ''; border: 1px solid rgba(255,255,255,.22); border-radius: 50%; box-shadow: 0 0 0 14px rgba(255,255,255,.06), 0 0 0 28px rgba(255,255,255,.04); }
        .svc-collection-offer-badge { z-index: 1; display: grid; width: 72px; height: 72px; place-content: center; color: #713411; background: #f5d58b; border-radius: 50%; font-size: 1.05rem; font-weight: 800; text-align: center; line-height: 1.05; }
        .svc-collection-offer-copy { z-index: 1; }
        .svc-collection-offer-kicker { margin: 0 0 3px; color: #ffe5aa; font-size: .76rem; font-weight: 700; text-transform: uppercase; }
        .svc-collection-offer h2 { margin: 0; color: #fff; font-size: clamp(1.2rem, 3vw, 1.75rem); font-weight: 800; line-height: 1.2; }
        .svc-collection-offer p { grid-column: 2; margin: -4px 0 0; color: #fff6e8; font-size: .94rem; }
        .svc-shell-contact-shortcuts { position: fixed; right: 30px; bottom: 96px; z-index: 10000; display: flex; flex-direction: column; gap: 10px; }
        .svc-shell-contact-shortcuts a { display: flex; width: 52px; height: 52px; align-items: center; justify-content: center; overflow: hidden; border-radius: 50%; color: #fff; box-shadow: 0 6px 18px rgba(0,0,0,.2); transition: transform .18s ease, box-shadow .18s ease; }
        .svc-shell-contact-shortcuts a:hover { color: #fff; transform: translateY(-3px); box-shadow: 0 10px 24px rgba(0,0,0,.24); }
        .svc-shell-contact-shortcuts a:focus-visible, .svc-shell-back-to-top:focus-visible { outline: 3px solid #252c30; outline-offset: 3px; }
        .svc-shell-contact-call { background: #d15704; }
        .svc-shell-contact-call svg { width: 23px; height: 23px; }
        .svc-shell-contact-whatsapp { background: #25d366; }
        .svc-shell-contact-whatsapp img { width: 31px; height: 31px; object-fit: contain; }
        .svc-shell-back-to-top { position: fixed; right: 30px; bottom: 30px; z-index: 99; display: none; width: 52px; height: 52px; align-items: center; justify-content: center; border-radius: 50%; color: #fff; background: #d15704; box-shadow: 0 6px 18px rgba(0,0,0,.2); }
        .svc-shell-back-to-top:hover { color: #fff; background: #b94900; }
        @media (min-width: 576px) { .svc-shell-container { max-width: 540px; } }
        @media (min-width: 768px) { .svc-shell-container { max-width: 720px; } }
        @media (min-width: 992px) {
            .svc-shell-container { max-width: 960px; }
            .svc-shell-navbar { min-height: 74px; flex-wrap: nowrap; padding: 0 12px; }
            .svc-shell-brand { width: 170px; height: 135px; }
            .svc-shell-toggler { display: none; }
            .svc-shell-collapse { display: flex; flex: 1 1 auto; justify-content: flex-end; width: auto; }
            .svc-shell-links { flex-direction: row; justify-content: flex-end; margin-top: 0; border-top: 0; }
            .svc-shell-links a { margin-right: 35px; padding: 25px 0; }
            .svc-shell-links a:last-child { margin-right: 0; }
        }
        @media (min-width: 1200px) { .svc-shell-container { max-width: 1140px; } }
        @media (min-width: 1400px) { .svc-shell-container { max-width: 1320px; } }
        @media (max-width: 700px) {
            .svc-shell-footer-inner { grid-template-columns: 1fr; gap: 22px; }
        }
        @media (max-width: 576px) {
            .svc-collection-offer { grid-template-columns: 54px 1fr; gap: 7px 12px; width: calc(100% - 28px); margin: 18px auto; padding: 14px; }
            .svc-collection-offer-badge { width: 54px; height: 54px; font-size: .86rem; }
            .svc-collection-offer p { grid-column: 1 / -1; margin: 2px 0 0; }
            .svc-shell-contact-shortcuts { right: 18px; bottom: 86px; gap: 8px; }
            .svc-shell-contact-shortcuts a, .svc-shell-back-to-top { width: 48px; height: 48px; }
            .svc-shell-contact-whatsapp img { width: 29px; height: 29px; }
            .svc-shell-back-to-top { right: 18px; bottom: 24px; }
        }
    `;
    document.head.appendChild(styles);

    var northCollectionPath = '/sv all menus/all north menu/';
    var northCollectionIndexPath = northCollectionPath + 'index.html';
    var isNorthSubpage = currentPath.indexOf(northCollectionPath) !== -1 && currentPath.slice(-northCollectionIndexPath.length) !== northCollectionIndexPath;
    var southCollectionPath = '/sv all menus/all south menu/';
    var southCollectionIndexPath = southCollectionPath + 'index.html';
    var isSouthSubpage = currentPath.indexOf(southCollectionPath) !== -1 && currentPath.slice(-southCollectionIndexPath.length) !== southCollectionIndexPath;
    if ((isNorthSubpage || isSouthSubpage) && !document.querySelector('.svc-collection-offer')) {
        var offer = document.createElement('aside');
        offer.className = 'svc-collection-offer';
        offer.setAttribute('aria-label', 'Special offer for large gatherings');
        offer.innerHTML = '<div class="svc-collection-offer-badge" aria-hidden="true">5%<br>OFF</div>' +
            '<div class="svc-collection-offer-copy"><p class="svc-collection-offer-kicker">Special Offer for Large Gatherings</p>' +
            '<h2>Get 5% OFF on 50+ Plate Orders</h2></div>' +
            '<p>Perfect for celebrations, events &amp; special occasions.</p>';
        var firstPage = document.querySelector('.page');
        if (firstPage) {
            document.body.insertBefore(offer, firstPage);
        } else {
            document.body.insertBefore(offer, document.body.firstChild);
        }
    }

    var existingNavbar = document.querySelector('.navbar-expand-lg, .svc-shell-header');
    var oldTopbar = document.querySelector('.topbar');
    if (oldTopbar) oldTopbar.remove();

    if (!existingNavbar) {
        var header = document.createElement('header');
        header.className = 'svc-shell-header';
        header.innerHTML = '<div class="svc-shell-container"><nav class="svc-shell-navbar">' +
            '<a class="svc-shell-brand" href="' + sitePath('index.html') + '" aria-label="Sri Vrinda\'s Catering home">' +
            '<img src="' + sitePath('img/logo.png') + '" alt="Sri Vrinda\'s Catering"></a>' +
            '<button class="svc-shell-toggler" type="button" aria-controls="svc-shell-collapse" aria-expanded="false" aria-label="Toggle navigation"><span class="svc-shell-toggler-icon"></span></button>' +
            '<div class="svc-shell-collapse" id="svc-shell-collapse"><div class="svc-shell-links" role="navigation" aria-label="Main navigation">' +
            '<a href="' + sitePath('index.html') + '">Home</a>' +
            '<a href="' + sitePath('about.html') + '">About</a>' +
            '<a href="' + sitePath('services.html') + '">Services</a>' +
            '<a href="' + sitePath('menu.html') + '">Menu</a>' +
            '<a href="' + sitePath('bulk-order.html') + '">Bulk Order Menu</a>' +
            '<a href="' + sitePath('contact.html') + '">Contact</a>' +
            '<a href="https://www.google.com/search?q=Sri+Vrindas+Catering+Service+reviews" target="_blank" rel="noopener noreferrer">Google Review</a></div></div></nav></div>';
        document.body.insertBefore(header, document.body.firstChild);

        var toggle = header.querySelector('.svc-shell-toggler');
        var collapse = header.querySelector('.svc-shell-collapse');
        toggle.addEventListener('click', function () {
            var expanded = toggle.getAttribute('aria-expanded') === 'true';
            toggle.setAttribute('aria-expanded', String(!expanded));
            collapse.classList.toggle('show', !expanded);
        });
    }

    if (!document.querySelector('.svc-shell-footer')) {
        var footer = document.createElement('footer');
        footer.className = 'svc-shell-footer';
        footer.innerHTML =
            '<div class="svc-shell-footer-inner">' +
            '<section><h2>Our Office</h2><p>SLV Complex, 9th Cross, Ananth Nagar,<br>Electronic City PH-2, Bangalore-560100,<br>Karnataka, India</p>' +
            '<a href="tel:+918197317345">+91 8197317345</a><a href="mailto:srivindas@gmail.com">srivindas@gmail.com</a></section>' +
            '<nav aria-label="Footer navigation"><h2>Quick Links</h2>' +
            '<a href="' + sitePath('about.html') + '">About Us</a>' +
            '<a href="' + sitePath('contact.html') + '">Contact Us</a>' +
            '<a href="' + sitePath('services.html') + '">Our Services</a>' +
            '<a href="' + sitePath('menu.html') + '">Menu</a>' +
            '<a href="' + sitePath('bulk-order.html') + '">Bulk Order</a></nav>' +
            '<section><h2>Business Hours</h2><p>Monday - Friday<br>07:00 am - 10:00 pm</p>' +
            '<p>Saturday and Sundays<br>09:00 am - 11:00 pm</p></section></div>' +
            '<div class="svc-shell-copyright">&copy; Sri Vrinda\'s Catering. All Rights Reserved.</div>';
        document.body.appendChild(footer);
    }

    var bulkOrderPath = new URL('bulk-order.html', siteRoot).pathname;
    if (window.location.pathname !== bulkOrderPath && !document.querySelector('.back-link, .page-actions a[href*="bulk-order.html"], .svc-shell-back-action')) {
        var backAction = document.createElement('div');
        backAction.className = 'svc-shell-back-action';
        backAction.innerHTML = '<a href="' + collectionBackLink + '">' + collectionBackText + '</a>';
        var pageFooter = document.querySelector('.svc-shell-footer, .footer');
        if (pageFooter) {
            document.body.insertBefore(backAction, pageFooter);
        } else {
            document.body.appendChild(backAction);
        }
    }

    if (!document.querySelector('.contact-shortcuts, .svc-shell-contact-shortcuts')) {
        var shortcuts = document.createElement('div');
        shortcuts.className = 'svc-shell-contact-shortcuts';
        shortcuts.setAttribute('aria-label', 'Contact Sri Vrindas Catering');
        shortcuts.innerHTML =
            '<a class="svc-shell-contact-call" href="tel:+918197317345" aria-label="Call Sri Vrindas at +91 8197317345" title="Call us">' +
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.24.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2z"/></svg></a>' +
            '<a class="svc-shell-contact-whatsapp" href="https://wa.me/918197317345" target="_blank" rel="noopener noreferrer" aria-label="Chat with Sri Vrindas on WhatsApp" title="WhatsApp">' +
            '<img src="' + sitePath('img/whats.png') + '" alt="" aria-hidden="true"></a>';
        document.body.appendChild(shortcuts);
    }

    if (!document.querySelector('.back-to-top, .svc-shell-back-to-top')) {
        var backToTop = document.createElement('a');
        backToTop.className = 'svc-shell-back-to-top';
        backToTop.href = '#';
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
})();