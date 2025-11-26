import Footer from "@/components/custom/Footer";
import Header from "@/components/custom/Header";

export default function MainLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <main className="">
            <Header />
            <main className="mx-auto max-w-3xl border-gray-800 pt-14 md:border-x-2">
                {children}
            </main>
            <Footer />
        </main>
    );
}
