import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Define custom fonts
// const originHeavy = {
//   fontFamily: 'Origin Heavy',
//   src: 'url(/fonts/Origin Heavy.otf)',
//   fontWeight: '900',
//   fontStyle: 'normal',
// };

// const montserratRegular = {
//   fontFamily: 'Montserrat',
//   src: 'url(/fonts/Montserrat-Regular.otf)',
//   fontWeight: '400',
//   fontStyle: 'normal',
// };

// const montserratSemiBold = {
//   fontFamily: 'Montserrat',
//   src: 'url(/fonts/Montserrat-SemiBold.otf)',
//   fontWeight: '600',
//   fontStyle: 'normal',
// };

export const metadata: Metadata = {
  title: "FibeX - Honest & Reliable Internet for Filipinos",
  description: "Every Filipino deserves internet that's honest, reliable, and truly felt. No fine print. No exaggerated claims. Just clear plans, fair pricing, and customer care that actually shows up.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
