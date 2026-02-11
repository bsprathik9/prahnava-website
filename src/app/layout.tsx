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
  title: "Prahnava | Where Intelligence Meets Engineering",
  description:
    "From agentic AI solutions for enterprises to an adaptive learning platform transforming education — Prahnava engineers the future with AI at its core.",
  keywords: [
    "AI",
    "Agentic AI",
    "LLM",
    "RAG",
    "NLP",
    "Document Intelligence",
    "Learning Management System",
    "EdTech",
    "Prahnava",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-950 text-white`}
      >
        {children}
      </body>
    </html>
  );
}
