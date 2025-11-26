import "@/styles/globals.css";

import { type Metadata } from "next";
import { Caveat, Inter } from "next/font/google";

export const metadata: Metadata = {
    title: "Shivam - Software Developer",
    description:
        "Shivam is software developer with expertise in Python, JavaScript and Golang. He enjoys building software and tools, partially because he likes to build things and partially because he does not like the existing solution.",
    icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const inter = Inter({
    subsets: ["latin"],
    style: ["italic", "normal"],
    variable: "--font-inter-sans",
});

const caveat = Caveat({
    subsets: ["latin"],
    variable: "--font-caveat",
});

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" className={`${inter.variable} ${caveat.variable}`}>
            <body className="bg-gray-950 text-white">{children}</body>
        </html>
    );
}
