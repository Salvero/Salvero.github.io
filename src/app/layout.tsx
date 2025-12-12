import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Salman | AI & Software Engineer",
  description:
    "Senior AI & Software Engineer building intelligent systems. Specializing in React, Next.js, Python, and Machine Learning.",
  keywords: [
    "AI Engineer",
    "Software Engineer",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "Python",
    "Machine Learning",
    "TypeScript",
  ],
  authors: [{ name: "Salman" }],
  openGraph: {
    title: "Salman | AI & Software Engineer",
    description:
      "Senior AI & Software Engineer building intelligent systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-[#0a0a1a]`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {/* Space background */}
          <div className="fixed inset-0 -z-10 overflow-hidden bg-gradient-to-b from-[#0a0a1a] via-[#0d0d24] to-[#0a0a1a]">
            {/* Stars layer 1 - small twinkling */}
            <div
              className="absolute inset-0 animate-twinkle"
              style={{
                backgroundImage: `radial-gradient(1px 1px at 20px 30px, white, transparent),
                                  radial-gradient(1px 1px at 40px 70px, rgba(255,255,255,0.8), transparent),
                                  radial-gradient(1px 1px at 50px 160px, rgba(255,255,255,0.6), transparent),
                                  radial-gradient(1px 1px at 90px 40px, white, transparent),
                                  radial-gradient(1px 1px at 130px 80px, rgba(255,255,255,0.7), transparent),
                                  radial-gradient(1px 1px at 160px 120px, white, transparent),
                                  radial-gradient(1px 1px at 70px 140px, rgba(255,255,255,0.5), transparent),
                                  radial-gradient(1px 1px at 110px 20px, white, transparent),
                                  radial-gradient(1px 1px at 180px 60px, rgba(255,255,255,0.7), transparent),
                                  radial-gradient(1px 1px at 30px 180px, white, transparent),
                                  radial-gradient(1px 1px at 150px 170px, rgba(255,255,255,0.6), transparent),
                                  radial-gradient(1px 1px at 85px 95px, white, transparent)`,
                backgroundSize: '200px 200px',
              }}
            />

            {/* Stars layer 2 - medium, different timing */}
            <div
              className="absolute inset-0 opacity-70 animate-twinkle-slow"
              style={{
                backgroundImage: `radial-gradient(2px 2px at 100px 50px, white, transparent),
                                  radial-gradient(2px 2px at 200px 150px, rgba(255,255,255,0.9), transparent),
                                  radial-gradient(1.5px 1.5px at 300px 250px, white, transparent),
                                  radial-gradient(2px 2px at 400px 100px, rgba(255,255,255,0.8), transparent),
                                  radial-gradient(1.5px 1.5px at 500px 300px, white, transparent),
                                  radial-gradient(2px 2px at 50px 200px, white, transparent),
                                  radial-gradient(1.5px 1.5px at 350px 50px, rgba(255,255,255,0.9), transparent),
                                  radial-gradient(2px 2px at 150px 300px, white, transparent),
                                  radial-gradient(1.5px 1.5px at 450px 200px, rgba(255,255,255,0.8), transparent),
                                  radial-gradient(2px 2px at 250px 80px, white, transparent)`,
                backgroundSize: '550px 350px',
              }}
            />

            {/* Stars layer 3 - drifting stars */}
            <div
              className="absolute inset-0 animate-drift"
              style={{
                backgroundImage: `radial-gradient(1.5px 1.5px at 80px 100px, rgba(255,255,255,0.9), transparent),
                                  radial-gradient(1px 1px at 250px 200px, rgba(255,255,255,0.7), transparent),
                                  radial-gradient(2px 2px at 450px 80px, white, transparent),
                                  radial-gradient(1px 1px at 600px 300px, rgba(255,255,255,0.6), transparent),
                                  radial-gradient(1.5px 1.5px at 150px 350px, white, transparent),
                                  radial-gradient(1px 1px at 350px 150px, rgba(255,255,255,0.8), transparent),
                                  radial-gradient(2px 2px at 550px 250px, white, transparent),
                                  radial-gradient(1px 1px at 50px 280px, rgba(255,255,255,0.7), transparent)`,
                backgroundSize: '700px 400px',
              }}
            />

            {/* Stars layer 4 - extra tiny stars, static */}
            <div
              className="absolute inset-0 opacity-50"
              style={{
                backgroundImage: `radial-gradient(0.5px 0.5px at 25px 45px, white, transparent),
                                  radial-gradient(0.5px 0.5px at 75px 25px, white, transparent),
                                  radial-gradient(0.5px 0.5px at 125px 85px, white, transparent),
                                  radial-gradient(0.5px 0.5px at 45px 125px, white, transparent),
                                  radial-gradient(0.5px 0.5px at 95px 65px, white, transparent),
                                  radial-gradient(0.5px 0.5px at 55px 95px, white, transparent),
                                  radial-gradient(0.5px 0.5px at 115px 35px, white, transparent),
                                  radial-gradient(0.5px 0.5px at 35px 75px, white, transparent),
                                  radial-gradient(0.5px 0.5px at 85px 115px, white, transparent),
                                  radial-gradient(0.5px 0.5px at 65px 15px, white, transparent),
                                  radial-gradient(0.5px 0.5px at 105px 105px, white, transparent),
                                  radial-gradient(0.5px 0.5px at 15px 55px, white, transparent)`,
                backgroundSize: '140px 140px',
              }}
            />

            {/* Stars layer 5 - bright accent stars */}
            <div
              className="absolute inset-0 animate-twinkle"
              style={{
                backgroundImage: `radial-gradient(2.5px 2.5px at 180px 120px, rgba(200,220,255,1), transparent),
                                  radial-gradient(2.5px 2.5px at 420px 280px, rgba(200,220,255,0.9), transparent),
                                  radial-gradient(3px 3px at 650px 150px, rgba(220,240,255,1), transparent),
                                  radial-gradient(2.5px 2.5px at 320px 380px, rgba(200,220,255,0.8), transparent)`,
                backgroundSize: '800px 450px',
              }}
            />

            {/* Glowing blue orb - top center */}
            <div
              className="absolute top-[10%] left-1/2 -translate-x-1/2 w-32 h-32"
            >
              <div className="absolute inset-0 rounded-full bg-cyan-400/30 blur-[60px] animate-pulse" />
              <div className="absolute inset-4 rounded-full bg-cyan-300/50 blur-[30px]" />
              <div className="absolute inset-8 rounded-full bg-cyan-200/70 blur-[15px]" />
            </div>

            {/* Shooting star lines - animated, positioned near code section */}
            <div
              className="absolute top-[35%] right-[20%] w-[150px] h-[1px] bg-gradient-to-r from-teal-400/80 to-transparent rotate-[35deg] animate-shooting-star"
            />
            <div
              className="absolute top-[45%] right-[10%] w-[120px] h-[1px] bg-gradient-to-r from-cyan-400/70 to-transparent rotate-[40deg] animate-shooting-star-delayed"
            />
            <div
              className="absolute top-[55%] right-[25%] w-[100px] h-[1px] bg-gradient-to-r from-purple-400/60 to-transparent rotate-[30deg] animate-shooting-star-slow"
            />
            <div
              className="absolute top-[40%] right-[5%] w-[80px] h-[1px] bg-gradient-to-r from-cyan-300/50 to-transparent rotate-[45deg] animate-shooting-star"
            />

            {/* Purple glow - right side */}
            <div
              className="absolute top-1/2 -right-[200px] w-[600px] h-[600px] rounded-full bg-purple-600/20 blur-[150px] animate-glow-pulse"
            />

            {/* Bottom gradient fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a1a] to-transparent" />
          </div>

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
