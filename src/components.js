class AppHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header>
            <div class="container">
                <nav>
                    <a href="index.html" class="logo">&lt;Duc Le/&gt;</a>
                    <ul class="nav-links">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="projects.html">Projects</a></li>
                        <li><a href="timeline.html">Timeline</a></li>
                        <li><a href="gallery.html">Gallery</a></li>
                    </ul>
                    <button class="nav-mobile-toggle" id="nav-mobile-toggle" aria-label="Toggle menu">
                        <i class="fas fa-bars"></i>
                    </button>
                </nav>
            </div>
        </header>
        `;
        this.highlightActiveLink();
        this.setupMobileToggle();
    }

    highlightActiveLink() {
        const currentPath = window.location.pathname.split('/').pop() || 'index.html';
        const links = this.querySelectorAll('.nav-links a');
        links.forEach(link => {
            if (link.getAttribute('href') === currentPath) {
                link.style.color = 'var(--accent-color)';
            }
        });
    }

    setupMobileToggle() {
        const header = this.querySelector('header');
        const toggle = this.querySelector('#nav-mobile-toggle');
        if (!toggle || !header) return;

        // Toggle open/close
        toggle.addEventListener('click', () => {
            const isOpen = header.classList.toggle('nav-open');
            toggle.setAttribute('aria-expanded', isOpen);
        });

        // Close menu when a link is clicked
        this.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                header.classList.remove('nav-open');
                toggle.setAttribute('aria-expanded', 'false');
            });
        });
    }
}

class AppFooter extends HTMLElement {
    connectedCallback() {
        const year = new Date().getFullYear();
        this.innerHTML = `
        <footer>
            <div class="container">
                <div class="social-links">
                    <!-- <a href="https://github.com" target="_blank" class="social-icon"><i class="fab fa-github"></i></a> -->
                    <a href="https://www.linkedin.com/in/ducle95/" target="_blank" class="social-icon"><i
                            class="fab fa-linkedin"></i></a>
                    <a href="mailto:ducle95.work@gmail.com" class="social-icon"><i class="fas fa-envelope"></i></a>
                </div>
                <p class="footer-text">&copy; ${year} Duc Le. All rights reserved.</p>
            </div>
        </footer>
        `;
    }
}

customElements.define('app-header', AppHeader);
customElements.define('app-footer', AppFooter);
