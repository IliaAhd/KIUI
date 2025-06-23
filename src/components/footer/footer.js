import { getFooterData } from "../fetchData.js";

class FooterType1 extends HTMLElement {
  async connectedCallback() {
    const data = await getFooterData();
    if (!data) return;

    this.render(data.footer);

    console.log(data.footer);
  }

  render(footer) {
    this.innerHTML = `
    <div class="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 pt-10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Top  -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-gray-300 dark:border-gray-700">
        <!-- Logo + Description  -->
        <div>
          <h2 class="text-2xl font-bold text-gray-800 dark:text-white">${
            footer.title
          }</h2>
          <p class="mt-4 text-sm text-gray-600 dark:text-gray-400">${
            footer.description
          }</p>
        </div>

        <!-- Links  -->
        <div>
          <h3 class="text-lg font-semibold mb-4">${
            footer.footerItems.item1.title
          }</h3>
          <ul class="space-y-2 text-sm">
          ${footer.footerItems.item1.items
            .map(
              (item, index) =>
                `<li><a href="${footer.footerItems.item1.links[index]}" class="hover:underline">${item}</a></li>`
            )
            .join("")}
          </ul>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-4">${
            footer.footerItems.item2.title
          }</h3>
          <ul class="space-y-2 text-sm">
          ${footer.footerItems.item2.items
            .map(
              (item, index) =>
                `<li><a href="${footer.footerItems.item2.links[index]}" class="hover:underline">${item}</a></li>`
            )
            .join("")}
          </ul>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-4">${
            footer.footerItems.item3.title
          }</h3>
          <ul class="space-y-2 text-sm">
          ${footer.footerItems.item2.items
            .map(
              (item, index) =>
                `<li><a href="${footer.footerItems.item2.links[index]}" class="hover:underline">${item}</a></li>`
            )
            .join("")}
          </ul>
        </div>
      </div>

      <!-- Bottom  -->
      <div class="flex flex-col md:flex-row justify-between items-center py-6 gap-4">
        <p class="text-sm">&copy; ${new Date().getFullYear()} ${
      footer.title
    }. All rights reserved.</p>
        <div class="flex space-x-4">
          <a href="#" class="hover:text-blue-500">
            Telegram
          </a>
          <a href="#" class="hover:text-blue-400">
            Twitter
          </a>
          <a href="#" class="hover:text-pink-500">
            Instagram
          </a>
          <a href="#" class="hover:text-gray-500">
            others
          </a>
        </div>
      </div>
    </div>
</div>
    `;
  }
}
// TODO: Icon for social
customElements.define("footer-type-1", FooterType1);
