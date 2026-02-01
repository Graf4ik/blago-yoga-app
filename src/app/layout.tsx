import type { Metadata } from "next";
import "../assets/styles/globals.scss";
import React from "react";


export const metadata: Metadata = {
  title: "Blago Yoga App",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body cz-shortcut-listen="true">
        {children}
      </body>
    </html>
  );
}
