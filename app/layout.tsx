import "./globals.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  title: "ONPLY — AI music mixes in a swipeable feed",
  description: "Seamless AI transitions, social discovery, and UGC music mixes.",
  openGraph: {
    title: "ONPLY — AI music mixes",
    description: "Seamless AI transitions, social discovery, and UGC.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }]
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-shoom bg-fixed bg-cover">{children}</body>
    </html>
  );
}
