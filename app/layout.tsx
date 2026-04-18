import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.interstice.be"),
  title: {
    default: "Interstice",
    template: "%s | Interstice",
  },
  description:
    "Interstice is an international collective of artists and writers working around immanent critique and system critique.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          defer
          src="https://umami-loopbaantest-bitter-flower-1931.fly.dev/script.js"
          data-website-id="7d9c2893-798c-4079-aa37-be2ddd334e96"
        ></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
