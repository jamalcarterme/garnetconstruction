import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk"
});

const ibmPlex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm-plex"
});

export const metadata: Metadata = {
  title: "Garnet Construction — Real Estate Development, Lagos",
  description:
    "Garnet Construction is an indigenous real estate developer in Lagos, Nigeria, delivering residential and commercial projects from concept to completion."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${ibmPlex.variable}`}>
      <body className="font-body">{children}</body>
    </html>
  );
}
