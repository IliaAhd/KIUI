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
 * Toggles mobile menu and icon state with fade effect
 * @param {HTMLElement} menuElement
 * @param {HTMLElement} iconWrapper
 */
function toggleMobileMenu(menuElement, iconWrapper) {
  const isOpen = menuElement.classList.contains("open");

  // Toggle menu visibility
  if (menuElement.classList.contains("translate-x-full")) {
    menuElement.classList.toggle("translate-x-0");
    menuElement.classList.toggle("translate-x-full");
  } else {
    menuElement.classList.toggle("hidden");
  }

  // Toggle icons (fade effect)
  const [hamburgerIcon, closeIcon] = iconWrapper.children;
  if (isOpen) {
    hamburgerIcon.classList.remove("opacity-0");
    hamburgerIcon.classList.add("opacity-100");
    closeIcon.classList.remove("opacity-100");
    closeIcon.classList.add("opacity-0");
    menuElement.classList.remove("open");
  } else {
    hamburgerIcon.classList.remove("opacity-100");
    hamburgerIcon.classList.add("opacity-0");
    closeIcon.classList.remove("opacity-0");
    closeIcon.classList.add("opacity-100");
    menuElement.classList.add("open");
  }
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

  render(title, menuHTML) {
    this.innerHTML = `
      <nav class="menu-background bg-white shadow-md fixed w-full top-0 left-0 z-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">

          <!-- Logo -->
          <h1 class="menu-main-title text-xl font-bold text-black">
            <a href="./index.html">${title}</a>
          </h1>

          <!-- Hamburger Button (Mobile) -->
          <div class="md:hidden">
            <button id="hamburger-btn" class="relative w-6 h-6">
              <svg class="absolute inset-0 w-6 h-6 transition-opacity duration-300 opacity-100 hamburger-icon" fill="none" stroke="currentColor" stroke-width="2"
                   viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
              <svg class="absolute inset-0 w-6 h-6 transition-opacity duration-300 opacity-0 close-icon" fill="none" stroke="currentColor" stroke-width="2"
                   viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>

          <!-- Desktop Menu -->
          <ul class="menuItemsWrapper hidden md:flex gap-6 text-gray-700 font-medium *:transition-all">
            ${menuHTML}
          </ul>
        </div>

        <!-- Mobile Menu -->
        <div id="mobile-menu" class="md:hidden hidden fixed top-16 right-0 w-2/3 h-full bg-white shadow-lg px-6 py-4 flex-col gap-4 m-auto text-center">
          <ul class="flex flex-col gap-4 text-gray-800 font-semibold">
            ${menuHTML}
          </ul>
        </div>
      </nav>
    `;
  }

  setLinks(links) {
    const allLinks = this.querySelectorAll(".menu-item a");
    allLinks.forEach((a, index) => {
      a.setAttribute("href", links[index] || "#");
    });
  }

  setupMobileToggle() {
    const hamburgerBtn = this.querySelector("#hamburger-btn");
    const mobileMenu = this.querySelector("#mobile-menu");
    const iconWrapper = hamburgerBtn;

    if (hamburgerBtn && mobileMenu && iconWrapper) {
      // Init state
      iconWrapper.children[0].classList.add("opacity-100");
      iconWrapper.children[1].classList.add("opacity-0");

      hamburgerBtn.addEventListener("click", () =>
        toggleMobileMenu(mobileMenu, iconWrapper)
      );
    }
  }
}

customElements.define("header-type-1", HeaderType1);
