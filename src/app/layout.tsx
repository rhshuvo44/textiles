import Footer from "@/components/UI/Footer";
import Navbar from "@/components/UI/Navbar";
import type { Metadata } from "next";
import { Rubik, Montserrat, Playfair_Display } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "./globals.css";

// Font imports with variables
export const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-rubik",
});
export const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair",
});
export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-montserrat",
});

// Metadata
export const metadata: Metadata = {
  title: "Textiles & Apparel",
  description:
    "Premium textile and apparel solutions for businesses and individuals.",
  applicationName: "Textiles",
  authors: [{ name: "Ripon Hossain Shuvo" }],
  creator: "Ripon Hossain Shuvo",
  keywords: ["Textiles", "Apparel", "Fashion", "Clothing", "Online Store"],
  openGraph: {
    title: "Textiles & Apparel",
    description:
      "Premium textile and apparel solutions for businesses and individuals.",
    url: "https://textiles.vercel.app",
    siteName: "Sarkar Textiles",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Textiles & Apparel",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Textiles & Apparel",
    description:
      "Premium textile and apparel solutions for businesses and individuals.",
    images: ["/og-image.png"],
    creator: "@rhshuvo44",
  },
  viewport: "width=device-width, initial-scale=1.0",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD structured data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Textiles & Apparel",
    url: "https://textiles.vercel.app",
    logo: "https://textiles.vercel.app/og-image.png",
    sameAs: [
      "https://www.facebook.com/yourpage",
      "https://www.linkedin.com/in/rhshuvo44/",
      "https://twitter.com/rhshuvo44",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+880187865537", // No spaces
      contactType: "Customer Service",
      email: "info@demo.com",
      areaServed: "BD",
      availableLanguage: ["English", "Bangla"],
    },
    description:
      "Premium textile and apparel solutions for businesses and individuals.",
  };

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('theme') || 'light';
                document.documentElement.setAttribute('data-theme', theme);
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${rubik.variable} ${montserrat.variable} ${playfair.variable} antialiased bg-base-100 text-base-content transition-colors duration-300`}
      >
        <Navbar />
        <main>
          {children}

          <ToastContainer />
        </main>
        <Footer />
      </body>
    </html>
  );
}
