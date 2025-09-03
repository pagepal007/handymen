import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from './components/Navbar'
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
  title: "General Rooter XP-LLC",
  description:
    "General Rooter XP-LLC offers professional handyman services including plumbing, painting, repairs, and more. Trusted for quality work.",
  verification: {
    google: "DV1SQZtTHArP3mi0o3LwM7VLayTrm_Xkm9S5am7HpgY", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
