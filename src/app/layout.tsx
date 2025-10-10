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

export const metadata: Metadata = {
   title: "Elite Forex | Semnale Profesionale, Trading de Top & Profit Real",
  description:
    "Elite Forex , platforma unde transparența și performanța se întâlnesc. Semnale validate zilnic, strategii testate și suport autentic pentru traderi serioși. Fără promisiuni false , doar rezultate măsurabile.",
  keywords: [
    "forex",
    "elite forex",
    "semnale forex",
    "trading profesional",
    "strategii forex",
    "profit real",
    "semnale telegram",
    "analiză piață",
    "forex românia",
    "trader profesionist",
  ],
  authors: [{ name: "Elite Forex" }],
  openGraph: {
    title: "Elite Forex | Semnale Forex Profesionale & Profit Transparent",
    description:
      "Descoperă Elite Forex | semnale valide zilnic, transparență totală și rezultate reale. Învață, aplică și crește-ți capitalul cu strategii eficiente de trading.",
    url: "https://sabin-website.vercel.app/",
    siteName: "Elite Forex",
    images: [
      {
        url: "/og-image.png", 
        width: 1200,
        height: 630,
        alt: "Elite Forex – Semnale și Trading de Top",
      },
    ],
    locale: "ro_RO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elite Forex | Semnale Forex Profesionale & Profit Real",
    description:
      "Semnale Forex validate zilnic. Strategii care maximizează potențialul de creștere, cu rezultate reale și suport autentic.",
    images: ["/og-image.png"],
  },
  metadataBase: new URL("https://sabin-website.vercel.app/"), 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
