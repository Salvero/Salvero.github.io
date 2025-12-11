import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Salman | Full-Stack Developer",
  description:
    "Full-Stack Developer specializing in React, Next.js, Python, and Django. Building modern web applications with a focus on user experience.",
  keywords: [
    "Full-Stack Developer",
    "React",
    "Next.js",
    "Python",
    "Django",
    "TypeScript",
    "Web Developer",
    "Vancouver",
  ],
  authors: [{ name: "Salman" }],
  openGraph: {
    title: "Salman | Full-Stack Developer",
    description:
      "Full-Stack Developer specializing in React, Next.js, Python, and Django.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
