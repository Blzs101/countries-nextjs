"use client";
import { ThemeProvider } from "next-themes";
export default function ThemeContext({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider
      themes={["dark", "light"]}
      enableSystem={false}
      attribute="class"
      defaultTheme="dark"
    >
      {children}
    </ThemeProvider>
  );
}
