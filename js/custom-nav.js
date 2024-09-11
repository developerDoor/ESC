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
                <li class="active"><a href="index.html">Home</a></li>
                <li class="has-children">
                  <a href="/blog.html">Archive</a>
                  <ul class="dropdown">
                    <li><a href="single.html">Project 1</a></li>
                    <li><a href="single.html">Project 2</a></li>
                  </ul>
                </li>
                <li><a href="about.html">About</a></li>
                <li><a href="contact.html">Contact Us</a></li>
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
