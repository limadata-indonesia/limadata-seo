import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Limadata SEO Portal",
  description: "Google Search Console analytics powered by Windsor.ai",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
