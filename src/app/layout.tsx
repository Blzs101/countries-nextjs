import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import ThemeContext from "@/context/ThemeContext";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Countries",
  description:
    "Find every country in the world with information about it with just one click",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} inset-0 min-h-screen overflow-auto bg-very-light-grey-bg text-black dark:bg-very-dark-blue-bg dark:text-white`}
      >
        <ThemeContext>
          <Navbar />
          {children}
        </ThemeContext>
      </body>
    </html>
  );
}
