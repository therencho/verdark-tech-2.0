import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Typewriter from "@/components/Typewriter";
import { ToastProvider } from "@/providers/toast-provider";
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vedark Tech",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar className="top-2 w-full" />
        <ToastProvider />

        {children}
        <Typewriter />

        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
