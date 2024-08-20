import type { Metadata } from "next";
import { Inter, Press_Start_2P } from "next/font/google";
import "./globals.css";

const pressstart2p = Press_Start_2P ({
  subsets: ['latin'],
  weight: '400',
});


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Strictly Students",
  description: "For the lost",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={pressstart2p.className}>{children}</body>
    </html>
  );
}
