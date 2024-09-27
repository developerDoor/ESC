class CustomNav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <nav class="site-nav">
          <div class="container">
            <div class="site-navigation">
              <a href="index.html" class="logo float-left m-0">
                ESC <span class="text-primary">.</span>
              </a>

              <ul class="js-clone-nav d-none d-lg-inline-noone text-left site-menu">
                <li><a href="index.html" style="font-size: 20px;">Home</a></li>
                <li class="has-children">
                  <a href="/archive.html" style="font-size: 20px;">Archive</a>
                  <ul class="dropdown">
                    <li><a href="project1.html" style="font-size: 20px;">Project 1</a></li>
                    <li><a href="project2.html" style="font-size: 20px;">Project 2</a></li>
                  </ul>
                </li>
                <li><a href="about.html" style="font-size: 20px;">About</a></li>
                <li><a href="contact.html" style="font-size: 20px;">Contact Us</a></li>
              </ul>

              <a
                href="#"
                class="burger ml-auto float-right site-menu-toggle js-menu-toggle d-inline-block d-lg-block"
                data-toggle="collapse"
                data-target="#main-navbar"
              >
                <span></span>
              </a>
            </div>
          </div>
        </nav>
      `;
  }
}
customElements.define("site-nav", CustomNav);
