import type { Metadata } from "next";
import { DM_Sans, Barlow } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dmSans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Urban Build",
  description:
    "Urban Build is a full-service construction company specializing in comprehensive design, planning, and turnkey building solutions. We deliver innovative, durable, and cost-effective projects for residential, commercial, and industrial clients.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${barlow.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
