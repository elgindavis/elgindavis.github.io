class Footer extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();

    }

    connectedCallback() {
    }
    disconnectedCallback() {
    }
}

customElements.define('main-footer', class extends Footer {
    connectedCallback() {
        this.innerHTML = `
            <footer class="section-gap footer-widget-area">
                <div class="overlay overlay-bg"></div>
                <div class="container">
				    <div class="footer-bottom d-flex justify-content-between align-items-center flex-wrap">
					    <p class="footer-text m-0">Copyright &copy; ${new Date().getFullYear()} Elgin Davis All rights reserved   |   This template is made with <i class="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com/">Colorlib</a></p>
					<!-- <div class="footer-social d-flex align-items-center">
						<a href="#"><i class="fa fa-facebook"></i></a>
						<a href="#"><i class="fa fa-twitter"></i></a>
						<a href="#"><i class="fa fa-dribbble"></i></a>
						<a href="#"><i class="fa fa-behance"></i></a>
					</div> -->
				</div>
			</div>
		</footer>
    `}});