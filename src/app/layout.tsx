import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ErrorBoundary } from "@/components/providers/ErrorBoundary";
import { StarryBackground } from "@/components/ui/starry-background";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Salman | Software Engineer",
  description:
    "Senior Software Engineer building modern web applications. Specializing in React, Next.js, Python, and TypeScript.",
  keywords: [
    "Software Engineer",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "Python",
    "TypeScript",
    "Web Development",
  ],
  authors: [{ name: "Salman" }],
  openGraph: {
    title: "Salman | Software Engineer",
    description:
      "Senior Software Engineer building modern web applications.",
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
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-background`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          storageKey="portfolio-theme">
          {/* Animated starry background - only visible in dark mode */}
          <StarryBackground />

          {/* Error Boundary for site-wide error protection */}
          <ErrorBoundary>
            {children}
          </ErrorBoundary>
        </ThemeProvider>
      </body>
    </html>
  );
}
