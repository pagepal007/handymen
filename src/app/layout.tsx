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
  title: "General Rooter XP – Professional Handyman & Plumbing Services",
  description:
    "General Rooter XP-LLC provides expert handyman, plumbing, painting, and repair services. Quality craftsmanship trusted by homeowners.",
  openGraph: {
    title: "General Rooter XP – Professional Handyman & Plumbing Services",
    description:
      "Trusted handyman and plumbing solutions by General Rooter XP-LLC. Reliable, affordable home repairs.",
    url: "https://generalrooterxp.netlify.app",
    siteName: "General Rooter XP",
  },
  twitter: {
    card: "summary_large_image",
    title: "General Rooter XP – Professional Handyman & Plumbing Services",
    description:
      "Professional handyman, plumbing, and home repair services. Quality you can rely on.",
  },
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
