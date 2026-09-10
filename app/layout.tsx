import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "./data/siteConfig";
import { ThemeProvider } from "@/app/components/theme-provider";

export const metadata: Metadata = {
  title: `${siteConfig.name} - ${siteConfig.role}`,
  description: siteConfig.bio,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
