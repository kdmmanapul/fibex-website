import type { Metadata, Viewport } from "next";
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

const SITE_NAME = "Fibex";
const SITE_TITLE = "Fibex — Honest & Reliable Internet for Filipinos";
const SITE_DESCRIPTION =
  "Every Filipino deserves internet that's honest, reliable, and truly felt. No fine print. No exaggerated claims. Just clear plans, fair pricing, and customer care that actually shows up.";
const SITE_URL = "https://fibex.ph";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  generator: "Next.js",
  keywords: [
    "Fibex",
    "Fibex Turbo",
    "Philippines internet",
    "Filipino ISP",
    "fiber internet Philippines",
    "honest internet",
    "reliable internet",
    "unlimited data",
    "gaming internet",
    "fiber optic Philippines",
  ],
  authors: [{ name: "Fibex Turbo Inc." }],
  creator: "Fibex Turbo Inc.",
  publisher: "Fibex Turbo Inc.",
  category: "Telecommunications",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/logos/Emblem.svg", type: "image/svg+xml" },
    ],
    shortcut: "/logos/Emblem.svg",
    apple: "/logos/Emblem.svg",
  },
  manifest: undefined,
  openGraph: {
    type: "website",
    locale: "en_PH",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/logos/blue_logo.png",
        width: 1200,
        height: 630,
        alt: "Fibex — True Speed, True Connection",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/logos/blue_logo.png"],
    creator: "@FibexPH",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#04080F" },
  ],
  colorScheme: "dark light",
  width: "device-width",
  initialScale: 1,
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
