import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/new/Navbar";
import { NextAuthProvider } from "./Providers";
import Footer from "@/components/new/Footer";
import Copyright from "@/components/new/Copyright";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cv/Resume Maker",
  description: "Generated professional cv/resume",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en">

      <body className={inter.className}>
        <NextAuthProvider>
          <Navbar />
          {children}
          <Footer />
          <Copyright />
        </NextAuthProvider>
      </body>

    </html>
  );
}
