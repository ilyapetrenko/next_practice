"use client"

import { Inter } from "next/font/google";
import "./globals.css";
import {Provider} from "react-redux";
import {makeStore} from "@/lib/store";


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <Provider store={makeStore()}>
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
      </Provider>
  );
}
