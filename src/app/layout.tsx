import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Superlinked | Vector Compute",
  description: "Control panel inspired landing page for vector compute platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
