import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google"
import "./globals.css";
import { cn } from "@/lib/utils"
import Navbar from "../components/Navbar"
import Footer from "@/components/Footer";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "KIPLINGO - A marketplace for Influencers",
  description: "Connecting influencers with brands",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Navbar />
        
        {/* MAIN CONTENT AREA with padding */}
        <main className="container px-4 md:px-6 py-12">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}

