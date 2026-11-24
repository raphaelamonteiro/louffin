
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "louffin.",
  description: "Family Finance & Home",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
