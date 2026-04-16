import type { Metadata } from "next";
import "./globals.css";
// import ClientWrapper from "@/app/components/ClientWrapper";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SmoothScroll from "./components/SmoothScroll";


export const metadata: Metadata = {
  title: "Portfolio  |  Harshal",
  description: "This is Portfolio of Harshal Patil",
};

const inter = Inter({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className={`min-h-full flex flex-col overflow-x-hidden ${inter.className}`}>
        <Navbar />
        <SmoothScroll>
          {children}
        </SmoothScroll>
        <Footer />
      </body>
    </html>
  );
}
