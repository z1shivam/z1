import Link from "next/link";

export default function Header() {
    return (
        <header className="fixed top-0 z-50 h-14 w-full">
            <div className="mx-auto h-full w-full max-w-3xl border-b-2 border-gray-800 bg-gray-950/60 backdrop-blur-lg md:border-x-2">
                <Link
                    href={"/"}
                    className="font-caveat flex h-full w-full items-center bg-linear-to-r from-amber-500 to-amber-50 bg-clip-text px-4 text-3xl font-medium text-transparent"
                >
                    Shivam Kumar
                </Link>
            </div>
        </header>
    );
}
