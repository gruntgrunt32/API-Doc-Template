API Documentation Template
==========================

A professional and fast API documentation site powered by **VitePress**.

Overview
--------
This is a lightweight and modern documentation framework built using **VitePress** 
and designed for fast, intuitive, and scalable API documentation.

Developed and maintained by **Austin Reed**.

Installation
------------
Make sure you have **Node.js (16.x or newer)** and **npm** (or **pnpm/yarn**) installed.

1. Clone the Repository:
2. Install Dependencies:
   Using npm:
   ```
   npm install
   ```
   Using pnpm:
   ```
   pnpm install
   ```
   Using yarn:
   ```
   yarn install
   ```

Running the Documentation Locally
---------------------------------
Start the Development Server:
```
npm run docs:dev
```
Then open **http://localhost:5173** in your browser.

Build for Production:
```
npm run docs:build
```
This generates a static site inside the `docs/.vitepress/dist` folder.

Preview Production Build:
```
npm run docs:preview
```

Project Structure
-----------------
```
📂 your-repo-name
 ┣ 📂 docs
 ┃ ┣ 📜 index.md        # Home page
 ┃ ┣ 📜 example.md      # Example documentation page
 ┃ ┣ 📂 api
 ┃ ┃ ┣ 📜 index.md      # API overview example
 ┃ ┃ ┣ 📜 auth.md       # Authentication API example
 ┃ ┃ ┗ 📜 todo.md      # Todo API example
 ┃ ┗ 📂 .vitepress
 ┃   ┣ 📜 config.js    # VitePress configuration
 ┃   ┣ 📜 theme.css    # Custom styling (optional)
 ┗ 📜 package.json      # Dependencies & scripts
```

Customization
-------------
Modify the `docs/.vitepress/config.js` file to customize navigation, theme, and other settings.

Example **config.js** snippet:
```js
export default {
  title: "API Docs",
  description: "A sleek and modern API documentation template.",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Getting Started", link: "/getting-started" },
      { text: "API Reference", link: "/api-reference" }
    ]
  }
};
```

Have Fun!
==========================
