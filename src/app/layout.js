import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CircleNav from "@/components/CircleNav";   // ← Added here
import TimedPopupForm from "@/components/TimedPopupForm";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Imperial Linguistics",
  description: "Your global language partner for success",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Font Awesome for CircleNav icons */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          integrity="sha512-..."
          crossOrigin="anonymous"
        />
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        
        {/* Main Content */}
        <main>
          {children}
          <TimedPopupForm />
        </main>

        <Footer />

        {/* CircleNav – Visible on EVERY page */}
        <CircleNav />
      </body>
    </html>
  );
}