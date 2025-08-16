<!-- # 🧵 Textiles – Modern Template (Next.js App Router + Tailwind CSS)

![Textiles Preview](public/screenshots/textiles-preview.jpg)

A sleek, responsive, and fully customizable modern frontend template focused on textiles and fashion products. Built with **Next.js App Router**, **Tailwind CSS**, and **TypeScript**, it offers a modern UI and smooth user experience for online stores.

---

## 🔗 Live Demo

🌐 [https://textiles.vercel.app](https://textiles.vercel.app)

---

## 🚀 Features

- Built with **Next.js 13+ App Router** for modern routing and layouts
- Written in **TypeScript** for better type safety
- Stylish, responsive UI designed with **Tailwind CSS** and **DaisyUI**
- Smooth **Swiper.js** carousels for product highlights and hero banners
- Clean, modular, and reusable React components inside `app/components/` and `app/(sections)/`
- Fully **responsive** — optimized for all screen sizes
- Custom 404 error page included (`app/not-found.tsx`)
- SEO-friendly with `head.tsx` files for metadata management
- Easy to extend with backend or CMS integrations

---


## 💻 Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm or yarn package manager

### Installation

1. Clone the repo:

```bash
git clone https://github.com/rhshuvo44/textiles.git
cd textiles
````

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view locally.

---

## 🛠 Build & Production

To build and run the app in production mode:

```bash
npm run build
npm run start
```

---

## 🌐 Deployment

Easily deploy on platforms supporting Next.js 13 App Router:

* **Vercel** (recommended)
* **Netlify**
* Custom Node.js hosts supporting SSR

### Deploy to Vercel

* Connect your GitHub repo to [vercel.com](https://vercel.com/)
* Build command: `npm run build`
* Output directory: `.next`
* Framework preset: **Next.js**
* Deploy!

---

## 🎨 Customization

* Modify UI sections in `app/(sections)/`
* Update or add React components in `app/components/`
* Change page layouts or metadata in `app/layout.tsx` and `app/head.tsx`
* Replace static data in `/data/` or connect a backend API

---

## 📦 Dependencies & Libraries

| Package                                                   | Purpose                         |
| --------------------------------------------------------- | ------------------------------- |
| [Next.js](https://nextjs.org)                             | React framework with App Router |
| [React](https://reactjs.org)                              | UI Library                      |
| [TypeScript](https://www.typescriptlang.org)              | Type safety                     |
| [Tailwind CSS](https://tailwindcss.com)                   | Utility-first CSS framework     |
| [DaisyUI](https://daisyui.com)                            | Tailwind CSS component library  |
| [Swiper.js](https://swiperjs.com)                         | Carousel/slider                 |
| [React Icons](https://react-icons.github.io/react-icons/) | Icon library                    |

---

## 📸 Screenshots

### Homepage Hero Section

![Hero Section](public/screenshots/hero-light.png)

### Mobile Responsive View

![Mobile View](public/screenshots/mobile-view.jpg)

---

## 📝 Placeholder Notice

> Demo content (texts, images, products) are placeholders for demonstration only and should be replaced with your own content or connected to a CMS/backend.

---

## 📄 Versioning & Changelog

### Version `v1.0.0` – 04 August 2025

* Initial release using Next.js 13 App Router
* Responsive layout with Swiper carousel and modular components

---

## 📄 License & Usage

* Intended for sale and distribution on ThemeForest.
* Free to customize and use in your projects after purchase.
* Redistribution or resale without permission is prohibited.
* Keep author credits where applicable.

---

## 📞 Support & Contact

* Email: [rhshuvo44@gmail.com](mailto:rhshuvo44@gmail.com)
* Portfolio: [ripon.vercel.app](https://ripon.vercel.app)

---

> Thanks for choosing **Textiles**! We hope this template helps you create stunning online stores with ease.
 -->
# **Textiles - Next.js Template Documentation**

  * **Created:** August 04, 2024
  * **Last Updated:** August 04, 2025
  * **By:** Ripon Hossain Shuvo
  * **Support:** rhshuvo44@gmail.com

-----

### **Thank You\!**

Thank you for purchasing **Textiles** We've worked hard to create a template that is not only visually stunning but also robust, scalable, and easy to customize.

This documentation is designed to help you get up and running as quickly as possible. It covers everything from initial setup to full customization and deployment. If you have any questions that are not covered in this document, please feel free to reach out to us via our support channel.

We would be very grateful if you could **rate our template** on ThemeForest. Your feedback is important and helps us improve our products.

-----

## **Table of Contents**

1.  [Getting Started](https://www.google.com/search?q=%23getting-started)
      * [Prerequisites](https://www.google.com/search?q=%23prerequisites)
      * [Package Contents](https://www.google.com/search?q=%23package-contents)
      * [Installation](https://www.google.com/search?q=%23installation)
      * [Running the Development Server](https://www.google.com/search?q=%23running-the-development-server)
2.  [Folder Structure](https://www.google.com/search?q=%23folder-structure)
3.  [Customization](https://www.google.com/search?q=%23customization)
      * [Changing the Logo & Favicon](https://www.google.com/search?q=%23changing-the-logo--favicon)
      * [Theme Configuration (Colors, Fonts, etc.)](https://www.google.com/search?q=%23theme-configuration-colors-fonts-etc)
      * [Editing Page Content](https://www.google.com/search?q=%23editing-page-content)
      * [Updating Navigation Links](https://www.google.com/search?q=%23updating-navigation-links)
      * [Working with Images](https://www.google.com/search?q=%23working-with-images)
4.  [Key Features & Advanced Usage](https://www.google.com/search?q=%23key-features--advanced-usage)
      * [Environment Variables](https://www.google.com/search?q=%23environment-variables)
      * [Data Fetching](https://www.google.com/search?q=%23data-fetching)
      * [Working with Components](https://www.google.com/search?q=%23working-with-components)
      * [Third-Party Libraries](https://www.google.com/search?q=%23third-party-libraries)
5.  [Deployment](https://www.google.com/search?q=%23deployment)
      * [Recommended: Deploying to Vercel](https://www.google.com/search?q=%23recommended-deploying-to-vercel)
      * [Other Options (Netlify, etc.)](https://www.google.com/search?q=%23other-options-netlify-etc)
6.  [Changelog](https://www.google.com/search?q=%23changelog)
7.  [Support](https://www.google.com/search?q=%23support)

-----

## **1. Getting Started**

This section will guide you through the initial setup of the template.

### **Prerequisites**

Before you begin, make sure you have the following software installed on your machine:

  * **Node.js**: Version 18.17.0 or later. You can download it from [nodejs.org](https://nodejs.org/).
  * **Package Manager**: `npm`, `yarn`, or `pnpm`. This documentation will use `npm` in its examples, but you can use your preferred package manager.

### **Package Contents**

When you unzip the download package from ThemeForest, you'll find the following:

  * **`template/`**: The main folder containing all the Next.js source code.
  * **`documentation/`**: This documentation file (usually in HTML or PDF format).
  * **`license/`**: The license files.

### **Installation**

Follow these steps to get your project running locally:

1.  Navigate to the `template/` folder in your terminal or command prompt.

    ```bash
    cd path/to/your/unzipped/package/template
    ```

2.  Install the necessary dependencies. This will download all the required libraries for the project to run.

    ```bash
    npm install
    ```

    *(or `yarn install` or `pnpm install`)*

### **Running the Development Server**

Once the installation is complete, you can start the local development server:

```bash
npm run dev
```

This command will start the application in development mode. You can now view it in your browser by navigating to:

**[http://localhost:3000](https://www.google.com/search?q=http://localhost:3000)**

The application will automatically reload if you make any changes to the source files.

-----

## **2. Folder Structure**

Understanding the folder structure will help you locate and modify files efficiently. This template uses the Next.js **App Router**.

```
[Your Template Name]/
├── .next/           # Next.js build output (do not edit)
├── .vscode/         # VSCode settings (optional)
├── node_modules/    # Project dependencies (do not edit)
├── public/          # Static assets (images, fonts, favicon)
│   ├── images/
│   ├── logo.svg
│   └── favicon.ico
├── src/
│   ├── app/         # Main application routes and pages
│   │   ├── (pages)/   # Grouped routes (e.g., about, contact)
│   │   │   ├── about/
│   │   │   │   └── page.tsx
│   │   │   └── contact/
│   │   │       └── page.tsx
│   │   ├── api/       # API routes (optional)
│   │   ├── globals.css # Global styles
│   │   ├── layout.tsx  # Root layout of the application
│   │   └── page.tsx    # Homepage (route: /)
│   ├── components/  # Reusable React components
│   │   ├── ui/        # Low-level UI components (Button, Card, etc.)
│   │   ├── layout/    # Layout components (Header, Footer, Sidebar)
│   │   └── sections/  # Page-specific sections (Hero, Features, etc.)
│   └── lib/         # Helper functions, utility code
├── .env.local       # Local environment variables (create this file)
├── .env.example     # Example environment variables
├── .eslintrc.json   # ESLint configuration
├── .gitignore       # Files to be ignored by Git
├── next.config.mjs  # Next.js configuration
├── package.json     # Project dependencies and scripts
├── postcss.config.js # PostCSS configuration (for Tailwind CSS)
├── tailwind.config.ts # Tailwind CSS configuration
└── tsconfig.json    # TypeScript configuration
```

-----

## **3. Customization**

This section explains how to customize the template to fit your brand and content.

### **Changing the Logo & Favicon**

1.  **Logo**: Replace the `logo.svg` (or `logo.png`) file in the `public/` directory with your own logo. To adjust the logo size, find the `<Image>` component in `src/components/layout/Header.tsx` and modify its `width` and `height` props.
2.  **Favicon**: Replace the `favicon.ico` file in the `public/` directory with your own. You can use an online generator to create a `.ico` file.

### **Theme Configuration (Colors, Fonts, etc.)**

This template uses **Tailwind CSS** for styling. The main configuration file is `tailwind.config.ts`.

  * **Colors**: To change the primary, secondary, and other colors, modify the `colors` object in `tailwind.config.ts`.

    ```javascript
    // tailwind.config.ts
    const { fontFamily } = require("tailwindcss/defaultTheme")

    /** @type {import('tailwindcss').Config} */
    module.exports = {
      // ...
      theme: {
        extend: {
          colors: {
            primary: '#YOUR_PRIMARY_COLOR', // e.g., '#5A67D8'
            secondary: '#YOUR_SECONDARY_COLOR', // e.g., '#F56565'
            // ... add more custom colors
          },
        },
      },
      // ...
    }
    ```

  * **Fonts**: The template uses Google Fonts, configured in `src/app/layout.tsx`. To change the font:

    1.  Go to [Google Fonts](https://fonts.google.com/), choose your desired font, and get the import code.
    2.  In `src/app/layout.tsx`, replace the existing font import and instantiation with your new font.
    3.  (Optional) Add the font family to your `tailwind.config.ts` for easy use in your classes.

### **Editing Page Content**

All page content is located within the `src/app/` directory.

  * The **Homepage** content can be edited in `src/app/page.tsx`.
  * Other pages, like "About" or "Contact", are in their respective folders (e.g., `src/app/about/page.tsx`).

Content is written directly in JSX. Simply open the relevant file and edit the text and HTML-like tags.

### **Updating Navigation Links**

Navigation links for the header and footer are typically managed within their respective components:

  * **Header**: Open `src/components/layout/Header.tsx` and find the array or list of navigation items. Modify the links and labels as needed.
  * **Footer**: Open `src/components/layout/Footer.tsx` and do the same.

### **Working with Images**

1.  Place all your static images inside the `public/images/` directory.

2.  Use the Next.js `<Image>` component for optimized, responsive images. Import it from `next/image`.

    ```jsx
    import Image from 'next/image';

    <Image
      src="/images/your-image.jpg" // Path relative to the `public` folder
      alt="A descriptive alt text"
      width={500}
      height={300}
      priority // Add for above-the-fold images
    />
    ```

-----

## **4. Key Features & Advanced Usage**

### **Environment Variables**

For sensitive information like API keys, use environment variables.

1.  Create a file named `.env.local` in the root of your project.

2.  Copy the contents of `.env.example` into `.env.local`.

3.  Fill in your own values.

    ```
    # .env.local
    NEXT_PUBLIC_API_URL="https://api.example.com"
    SOME_SECRET_KEY="your_secret_key_here"
    ```

<!-- end list -->

  * Variables prefixed with `NEXT_PUBLIC_` are exposed to the browser.
  * Other variables are only available on the server-side.

### **Data Fetching**

This template fetches data using async Server Components, the recommended approach in the Next.js App Router. You can see examples in `src/app/blog/[slug]/page.tsx` or other dynamic pages. This allows for fast, server-rendered pages that are great for SEO.

### **Working with Components**

The template is built with a component-based architecture. Reusable components are located in `src/components/`.

  * `ui/`: Contains general-purpose UI elements like `<Button>`, `<Card>`, `<Input>`.
  * `layout/`: Contains structural components like `<Header>` and `<Footer>`.
  * `sections/`: Contains larger, page-specific sections like `<HeroSection>` or `<PricingSection>`.

Feel free to reuse these components across your pages or create new ones.

### **Third-Party Libraries**

This template uses the following key libraries:

  * **React** ([docs](https://react.dev/))
  * **Next.js** ([docs](https://nextjs.org/docs))
  * **Tailwind CSS** ([docs](https://tailwindcss.com/docs))
  * **Framer Motion** (for animations) ([docs](https://www.framer.com/motion/))
  * **Lucide React** (for icons) ([docs](https://lucide.dev/))

Please refer to their official documentation for more in-depth information.

-----

## **5. Deployment**

You can deploy your Next.js application to any hosting provider that supports Node.js.

### **Recommended: Deploying to Vercel**

Vercel is the creator of Next.js and provides a seamless, zero-configuration deployment experience.

1.  Push your code to a Git repository (e.g., GitHub, GitLab, Bitbucket).
2.  Sign up for a free account at [vercel.com](https://vercel.com).
3.  Click "Add New..." -\> "Project".
4.  Import your Git repository.
5.  Vercel will automatically detect that it's a Next.js project and configure the build settings.
6.  Add your environment variables (from your `.env.local` file) in the "Environment Variables" section of the project settings on Vercel.
7.  Click **Deploy**. Your site will be live in minutes\!

### **Other Options (Netlify, etc.)**

You can also deploy to other services like Netlify, AWS Amplify, or your own server.

  * **For hosting platforms like Netlify:** The process is similar to Vercel. Import your Git repo, and the platform will likely auto-detect the settings.
  * **For a traditional server:**
    1.  Run the build command: `npm run build`
    2.  This creates an optimized production build in the `.next` folder.
    3.  Run the start command: `npm start`
    4.  You will need a process manager like `pm2` to keep the server running.

-----

## **6. Changelog**

**Version 1.0.0** - August 04, 2025

  * Initial release.

-----

## **7. Support**

We are committed to providing excellent support. However, please note what is and isn't covered.

**Support Covers:**

  * Help with features included in the template.
  * Bugs or issues found in the original template files.
  * Guidance on the included features.

**Support Does Not Cover:**

  * Customization or new feature implementation.
  * Issues arising from modifications you have made to the code.
  * Server configuration or issues with third-party plugins and libraries.

For support, please contact us through our profile page on ThemeForest or email us at **rhshuvo44@gmail.com**. We generally respond within 24-48 hours on business days.

**Thank you again for your purchase\!**