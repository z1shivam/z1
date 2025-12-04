"use client";

import { useState, useEffect } from "react";

// moved outside so it never changes → no ESLint warnings
const texts = [
    "नमस्ते", // Hindi
    "Hello", // English
    "ਸਤ ਸ੍ਰੀ ਅਕਾਲ", // Punjabi
    "Bonjour", // French
    "Привет", // Russian
    "你好", // Chinese (Mandarin)
    "Hola", // Spanish
    "مرحبا", // Arabic
    "Olá", // Portuguese
    "হ্যালো", // Bengali
    "こんにちは", // Japanese

    "안녕하세요", // Korean
    "Guten Tag", // German
    "Ciao", // Italian
    "Merhaba", // Turkish

    "Xin chào", // Vietnamese
];

export default function RotatingHello() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [nextIndex, setNextIndex] = useState(1);
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setIsTransitioning(true);

            setTimeout(() => {
                setCurrentIndex((prev) => (prev + 1) % texts.length);
                setNextIndex((prev) => (prev + 1) % texts.length);
                setIsTransitioning(false);
            }, 1000);
        }, 3000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative h-14 w-full overflow-hidden">
            {/* current text */}
            <h1
                className={`absolute inset-0 flex items-center justify-start px-4 text-center text-base transition-all duration-1000 ${
                    isTransitioning ? "animate-blurSlideUp" : "opacity-100"
                }`}
            >
                {texts[currentIndex]}
            </h1>

            {/* next text */}
            <h1
                className={`absolute inset-0 flex items-center justify-start px-4 text-center text-base transition-all duration-1000 ${
                    isTransitioning ? "animate-blurSlideIn" : "opacity-0"
                }`}
            >
                {texts[nextIndex]}
            </h1>
        </div>
    );
}
