class Header extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();
    }

    connectedCallback() {
    }
    disconnectedCallback() {
    }
}

customElements.define('nav-header', class extends Header {
    connectedCallback() {
        this.innerHTML = `
            <header class="default-header">
                <div class="header-wrap">
                    <div class="header-top d-flex justify-content-between align-items-center">
                        <div class="logo">
                            <a href="../"><img style="border-radius: 50px;" src="../img/fox-icon.png"
                                    alt="Cute winking fox cartoon character" height=70></a>
                        </div>
                        <div class="main-menubar d-flex align-items-center">
                            <nav class="hide">
                                <a href="../projects">Projects</a>
                                <a href="../about">About</a>
                                <a href="../resume">Resume</a>
                            </nav>
                            <div class="menu-bar"><span class="lnr lnr-menu"></span></div>
                        </div>
                    </div>
                </div>
            </header>
        `}
    }
);