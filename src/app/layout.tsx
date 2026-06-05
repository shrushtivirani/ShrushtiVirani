import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shrushti Virani | Tiny Cabinet of Curiosities",
  description:
    "A playful personal portfolio for Shrushti Virani, HR coordinator and talent storyteller.",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
