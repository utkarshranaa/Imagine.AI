import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";

//const geistSans = Geist({
//  variable: "--font-geist-sans",
//  subsets: ["latin"],
//});

//const geistMono = Geist_Mono({
//  variable: "--font-geist-mono",
//  subsets: ["latin"],
//});

const font = Roboto({
  weight: ['100', '300', '400' , '500' , '700' , '900'],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "Imagine.AI - AI-Powered Image Generation",
  description: "Imagine.AI lets you create stunning AI-generated images effortlessly. Experience the future of creative design with cutting-edge artificial intelligence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} bg-gray-900 antialiased`}
      >
        <ResponsiveNav />
        {children}
        
      </body>
    </html>
  );
}
