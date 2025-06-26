# 🧩 KIUI Kit
---
<img src="kiui.png">


A lightweight, modern Web Component UI Kit – ready to plug into your HTML projects.

> Includes responsive headers, product cards, footers, and full theming system – powered by vanilla JavaScript and TailwindCSS-inspired utility styles.

---

## 📦 Files Overview

| File                  | Description                                  |
| --------------------- | -------------------------------------------- |
| `kiui.min.js`         | Core JavaScript containing Web Components    |
| `kiui.min.css`        | Main CSS for layout and design               |
| `components.conf.css` | Theme/style config – customize colors easily |
| `data.json`           | Dynamic content used by components           |
| `index.html`          | Live demo file – test components quickly     |
| `kiui.png`            | Default image/logo used in cards/headers     |

---
## 📦 Installation

```bash
npm i kiui-kit
```
---
## 🚀 How to Use

### 1. Add Files to Your Project

You can either clone this repo or copy the following files into your project:

```
/your-project/
│
├── kiui.min.js
├── kiui.min.css
├── components.conf.css (optional)
├── data.json
└── your.html
```

---

### 2. Include in Your HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>KiUI Demo</title>

  <!-- CSS Files -->
  <link rel="stylesheet" href="kiui.min.css" />
  <link rel="stylesheet" href="components.conf.css" /> <!-- Optional -->

  <!-- Web Component Script -->
  <script src="kiui.min.js" defer></script>
</head>
<body>

  <!-- Header -->
  <header>
      <header-type-1></header-type-1>
      <header-type-2></header-type-2>
               <!-- ... -->
  </header>
  <!-- Main -->
  <main class="container">
  <!-- Product Card -->
      <box-card-1
        data-img="./kiui.png"
        data-title="Cool Headphones"
        data-description="Experience immersive sound quality."
        data-price="129.99"
        data-button-title="Buy Now"
        data-button-link="https://example.com"
      ></box-card-1>
               <!-- ... -->
   </main>
  <!-- Footer -->
  <footer>
      <footer-type-1></footer-type-1>
      <footer-type-2></footer-type-2>
               <!-- ... -->
  </footer>
</body>
</html>
```

---

### 3. Customize with `data.json`

Change menu items, links, and footer content by editing `data.json`:

```json
{
  "data": {
    "menu": {
      "title": ["KIUI"],
      "items": ["Home", "products", "contact", "GitHub"],
      "links": [
        "#Home",
        "#products",
        "#contact",
        "https://github.com/alirezaabbasi-dev"
      ]
    },
    "main":{
    },
    "footer": {
      "title": "KIUI",
      "description": "KIUI is a modern UI design system to build fast and responsive web interfaces.",
      "footerItems": {
        "item1": {
          "title": "Company",
          "items": ["About", "Contact Us", "Careers", "Blog", "Contact"],
          "links": ["#About", "#Us", "#Careers", "#Blog", "#Contact"]
        },
        "item2": {
          "title": "Support",
          "items": ["Help Center", "Documentation", "API Reference", "Status"],
          "links": ["#Help", "#Documentation", "#API", "#Status"]
        },
        "item3": {
          "title": "Legal",
          "items": [
            "Privacy Policy",
            "Terms of Service",
            "Cookie Policy",
            "Licenses"
          ],
          "links": ["#Privacy", "#Terms", "#Cookie", "#Licenses"]
        }
      }
    }
  }
}

```

---
## 🛠️ Development
To run the project locally:

```bash
git clone https://github.com/alirezaabbasi-dev/KIUI.git
cd KIUI
npm install
npm run dev:css
```
---
## 🎨 Theming & Styling

- To change colors, shadows, transitions, and styles:
  Edit the `components.conf.css` file and **uncomment** the section you want to modify.
- You can apply your own color palette, spacing, fonts, etc.

---

## 🌐 Browser Support

✅ Modern Browsers (Chrome, Firefox, Edge, Safari)
❗ Not tested in IE (because it's 2025 😉)

---

## 📄 License

`Apache License Version 2.0`

---

## ✨ Author

Built with ❤️ by Kiyan Abbasi.
Feel free to contribute or fork the project.
