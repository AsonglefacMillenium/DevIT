import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Technical quiz app",
  description: "A quiz app to test the technological know how of individuals",
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
