import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import MainNav from "@/components/MainNav/MainNav";
import styles from "./layout.module.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Umbrellas",
  description: "Web store of umbrellas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <div className={styles.container}>
          <MainNav />
          <div className={styles.wrapContent}>{children}</div>
        </div>
      </body>
    </html>
  );
}
