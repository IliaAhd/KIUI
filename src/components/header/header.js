"use strict";

const $ = document;

/**
 * Fetches menu data from JSON file
 * @returns {Promise<Object|null>}
 */
async function getMenuData() {
  try {
    const response = await fetch("./src/components/data.json");
    if (!response.ok) throw new Error("Failed to fetch menu data");
    const result = await response.json();
    return result.menu;
  } catch (error) {
    console.error("Error loading menu:", error);
    return null;
  }
}

/**
 * Toggles mobile menu visibility
 * @param {HTMLElement} menuElement
 */
function toggleMobileMenu(menuElement) {
  menuElement.classList.toggle("hidden");
}

class HeaderType1 extends HTMLElement {
  async connectedCallback() {
    const menu = await getMenuData();
    if (!menu) return;

    const menuHTML = menu.items
      .map(
        (item) =>
          `<li class="menu-item"><a class="transition-colors">${item}</a></li>`
      )
      .join("");

    this.render(menu.title, menuHTML);
    this.setLinks(menu.links);
    this.setupMobileToggle();
  }

  /**
   * Renders the header content
   * @param {string} title
   * @param {string} menuHTML
   */
  render(title, menuHTML) {
    this.innerHTML = `
      <nav class="menu-background bg-white shadow-md fixed w-full top-0 left-0 z-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">

          <!-- Logo -->
          <div>
            <h1 class="menu-main-title text-xl font-bold text-blue-600">
              <a href="./index.html">${title}</a>
            </h1>
          </div>

          <!-- Hamburger (Mobile) -->
          <div class="md:hidden">
            <button  class="focus:outline-none cursor-pointer">
              <svg id="hamburger-btn" class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2"
                   viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            </button>
          </div>

          <!-- Desktop Menu -->
          <ul class=" menuItemsWrapper hidden md:flex gap-6 text-gray-700 font-medium">
            ${menuHTML}
          </ul>
        </div>

        <!-- Mobile Menu -->
        <div id="mobile-menu" class="md:hidden hidden fixed top-16 right-0 w-2/3 h-full bg-white shadow-lg px-6 py-4 flex-col gap-4 m-auto text-center">
          <ul class=" flex flex-col gap-4 text-gray-800 font-semibold">
            ${menuHTML}
          </ul>
        </div>
      </nav>
    `;
  }

  /**
   * Sets href attributes for menu items
   * @param {string[]} links
   */
  setLinks(links) {
    const allLinks = this.querySelectorAll(".menu-item a");
    allLinks.forEach((a, index) => {
      a.setAttribute("href", links[index] || "#");
    });
  }

  /**
   * Sets up hamburger button for toggling mobile menu
   */
  setupMobileToggle() {
    const hamburgerBtn = this.querySelector("#hamburger-btn");
    const mobileMenu = this.querySelector("#mobile-menu");

    if (hamburgerBtn && mobileMenu) {
      hamburgerBtn.addEventListener("click", () =>
        toggleMobileMenu(mobileMenu)
      );
    }
  }
}

customElements.define("header-type-1", HeaderType1);
