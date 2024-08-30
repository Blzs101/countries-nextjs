"use client"
import { ThemeProvider } from 'next-themes'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
export default function ThemeContext({ children }: { children: React.ReactNode }) {
    return (
        <QueryClientProvider client={new QueryClient()}>
            <ThemeProvider themes={["dark", "light"]} enableSystem={false} attribute="class" defaultTheme="dark">
                {children}
            </ThemeProvider>
        </QueryClientProvider>
    )
}