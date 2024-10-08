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
                <li><a href="index.html" style="font-size: 20px;" onmouseover="this.style.fontWeight='bold'" onmouseout="this.style.fontWeight=''">Home</a></li>
                <li class="has-children">
                  <a href="/archive.html" style="font-size: 20px;" onmouseover="this.style.fontWeight='bold'" onmouseout="this.style.fontWeight=''">Archive</a>
                  <ul class="dropdown">
                    <li><a href="project1.html" style="font-size: 15px; line-height: 1" onmouseover="this.style.fontWeight='bold'" onmouseout="this.style.fontWeight=''">Project 1</a></li>
                    <li><a href="project2.html" style="font-size: 15px; line-height: 1" onmouseover="this.style.fontWeight='bold'" onmouseout="this.style.fontWeight=''">Project 2</a></li>
                    <li><a href="project3.html" style="font-size: 15px; line-height: 1" onmouseover="this.style.fontWeight='bold'" onmouseout="this.style.fontWeight=''">Project 3</a></li>
                  </ul>
                </li>
                <li><a href="about.html" style="font-size: 20px;" onmouseover="this.style.fontWeight='bold'" onmouseout="this.style.fontWeight=''">About</a></li>
                <li><a href="contact.html" style="font-size: 20px;" onmouseover="this.style.fontWeight='bold'" onmouseout="this.style.fontWeight=''">Contact</a></li>
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
