import type { Metadata } from "next";
import Navbar from "./Navbar";
import "@radix-ui/themes/styles.css";
import './theme-config.css'
import "./globals.css";
import { Theme, ThemePanel } from "@radix-ui/themes";
import { Inter } from "next/font/google";

const inter = Inter({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Issue Tracker",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body >
        <Theme accentColor="red">
          <Navbar/>
          <main className="px-1">{children}</main>
          {/* <ThemePanel/> */}
        </Theme>
      </body>
    </html>
  );
}
