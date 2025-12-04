import "@/styles/globals.css";

import { type Metadata, type Viewport } from "next";
import { Caveat, Inter, Playpen_Sans } from "next/font/google";

export const viewport: Viewport = {
    themeColor: "#030712",
    colorScheme: "dark",
};

export const metadata: Metadata = {
    title: {
        template: "%s | Shivam Kumar",
        default: "Shivam Kumar",
    },
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

const pp = Playpen_Sans({
    subsets: ["latin"],
    variable: "--font-pp",
});

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html
            lang="en"
            className={`${inter.variable} ${caveat.variable} ${pp.variable}`}
        >
            <body className="bg-gray-950 text-[#fffff0]">{children}</body>
        </html>
    );
}
