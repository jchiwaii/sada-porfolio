import "./globals.css";
import { Navbar } from "@/components/navbar";
import { ReactLenis } from 'lenis/react';
import { newsreader, ibmPlexSans, jetbrainsMono, dancingScript } from "@/app/fonts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Beatrice Sada Chilumo | Control & Instrumentation Engineer",
  description: "Portfolio of Beatrice Sada Chilumo, a Control & Instrumentation Engineer specializing in PLC programming, automation, and industrial process optimization.",
  openGraph: {
    title: "Beatrice Sada Chilumo | Control & Instrumentation Engineer",
    description: "Portfolio of Beatrice Sada Chilumo, a Control & Instrumentation Engineer specializing in PLC programming, automation, and industrial process optimization.",
    url: "https://beatrice-sada.vercel.app/",
    siteName: "Beatrice Sada Chilumo Portfolio",
    images: [
      {
        url: "/potrait.jpeg",
        width: 1200,
        height: 630,
        alt: "Beatrice Sada Chilumo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Beatrice Sada Chilumo | Control & Instrumentation Engineer",
    description: "Portfolio of Beatrice Sada Chilumo, a Control & Instrumentation Engineer specializing in PLC programming, automation, and industrial process optimization.",
    images: ["/potrait.jpeg"],
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/apple-touch-icon.png" },
    ],
    other: [
      {
        rel: "manifest",
        url: "/site.webmanifest",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${newsreader.variable} ${ibmPlexSans.variable} ${jetbrainsMono.variable} ${dancingScript.variable} antialiased font-sans bg-background text-foreground overflow-x-hidden`}
      >
        <ReactLenis root options={{ lerp: 0.01, duration: 3.5, smoothWheel: true }}>
          <div className="noise-overlay" />
          <Navbar />
          {children}
        </ReactLenis>
      </body>
    </html>
  );
}
