import "./globals.css";
import { Navbar } from "@/components/navbar";
import { ReactLenis } from 'lenis/react';
import { newsreader, ibmPlexSans, jetbrainsMono } from "@/app/fonts";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${newsreader.variable} ${ibmPlexSans.variable} ${jetbrainsMono.variable} antialiased font-sans bg-background text-foreground overflow-x-hidden`}
      >
        <ReactLenis root>
          <div className="noise-overlay" />
          <Navbar />
          {children}
        </ReactLenis>
      </body>
    </html>
  );
}
