import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";

// Components
import { Provider as Providers } from "@/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Financial Tracker",
  description:
    "Money manager. Keep track of all your money, accounts transactions, balance, goals and more. All in one place and completely FREE!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
