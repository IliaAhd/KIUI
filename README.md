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
| `kiui.typewriter.min` | Type writer Effect                           |

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
<html lang="en" dir="ltr">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>KIUI Demo</title>
  <link rel="shortcut icon" href="./kiui.png" type="image/png">
  <link rel="stylesheet" href="./kiui.min.css">
  <link rel="stylesheet" href="./components.conf.css">
</head>

<body>
  <header>
    <!--! To use one of the components below, uncomment only one  -->
    <header-type-1></header-type-1>
    <!-- <header-type-2></header-type-2> -->
  </header>
  <main class="container">
    <!-- Type Writer -->
    <div "">
      <h2 id="KIUI-typewriter"></h2>
    </div>
    <div id="cards-wrapper">
      <!-- Boxes -->
      <box-card-1 data-title="just title">
      </box-card-1>
      <box-card-1 data-img="./kiui.png" data-title="title2" data-price="23">
      </box-card-1>
      <box-card-1 data-img="./kiui.png" data-button-title="Buy" data-title="title3" data-description="description"
        data-price="12"></box-card-1>
      <box-card-1 data-img="./kiui.png" data-title="title4" data-description="description" data-button-title="button"
        data-button-link="#itsLink"></box-card-1>
      <!-- Boxes -->
    </div>
  </main>
  <footer>
    <!--* To use one of the components below, uncomment only one  -->
    <footer-type-1></footer-type-1>
    <!-- <footer-type-2></footer-type-2> -->
    <!-- <footer-type-3></footer-type-3> -->
  </footer>
  <script src="./kiui.min.js"></script>
  <!-- Use KIUI Type Writer -->
  <script src="./kiui.typewriter.min.js"></script>
  <script>
    initKIUITypeWriter(
      [
        "Welcome to KIUI",
        "A lightweight",
        "and",
        "Modern Web Component UI Kit.",
        "Let’s build something amazing together . . . ",
      ],
      100, // typing/deleting speed
      1000 // pause between type/delete
    );
  </script>
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
      "items": ["Home", "Docs", "contact", "GitHub"],
      "links": [
        "#Home",
        "https://github.com/alirezaabbasi-dev/KIUI?tab=readme-ov-file#-kiui-kit",
        "#contact",
        "https://github.com/alirezaabbasi-dev/KIUI"
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
