import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Companion by AIOS",
  description: "AIOS Companion automates your everyday tasks, right on your computer.",
  keywords: ["AI assistant", "automation", "productivity", "task automation"],
  viewport: "width=device-width, initial-scale=0.9",
  icons: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      url: '/favicon.ico',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon-16x16.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: '/apple-touch-icon.png',
    },
  ],
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="stylesheet" href="https://fonts.cdnfonts.com/css/sf-pro-display" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
