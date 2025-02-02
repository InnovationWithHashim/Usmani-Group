// RootLayout.js (or App.js if used)
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "Usmani Group",
  description: "Learning , Praying & Celebrating Togeather",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Add the Font Awesome CSS library */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
      </head>
      <body style={{ fontFamily: "Poppins, sans-serif" }}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}