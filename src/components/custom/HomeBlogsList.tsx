import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const posts = [
    {
        title: "Understanding React Server Components",
        slug: "rsc-basics",
        featuredImage: "/demo/image.jpg",
        publishedDate: "Nov 2025",
    },
    {
        title: "Learning Next.js the right way",
        slug: "nextjs-guide",
        featuredImage: "/demo/image.jpg",
        publishedDate: "Nov 2025",
    },
    {
        title: "Build a full-stack app using Go & React",
        slug: "go-react-stack",
        featuredImage: "/demo/image.jpg",
        publishedDate: "Oct 2025",
    },
    {
        title: "Linux tweaks for productivity",
        slug: "linux-setup",
        featuredImage: "/demo/image.jpg",
        publishedDate: "Oct 2025",
    },
    {
        title: "Async patterns in JavaScript explained",
        slug: "async-js",
        featuredImage: "/demo/image.jpg",
        publishedDate: "Sep 2025",
    },
    {
        title: "How to deploy Go apps cheaply",
        slug: "go-deploy-cheap",
        featuredImage: "/demo/image.jpg",
        publishedDate: "Sep 2025",
    },
];

export default function HomeBlogsList() {
    return (
        <section className="px-3 py-5">
            <h2 className="font-caveat px-1 pb-2 text-3xl">
                I write sometimes
            </h2>
            <div className="home-blogs grid grid-cols-1 gap-3 pt-1 pb-3 sm:grid-cols-2 md:grid-cols-3">
                {posts.slice(0, 4).map((post) => (
                    <Link
                        key={post.slug}
                        href={`/blogs/${post.slug}`}
                        className="group flex gap-3 rounded-md border border-transparent p-1 hover:border-gray-700 hover:bg-slate-900/50 sm:flex-col"
                    >
                        <div className="aspect-video h-full w-32 shrink-0 overflow-hidden rounded-sm sm:h-auto sm:w-auto">
                            <Image
                                width={854}
                                height={480}
                                src={post.featuredImage}
                                alt={post.title}
                                className="aspect-video h-full w-32 object-cover transition-transform duration-300 group-hover:scale-105 sm:w-full"
                            />
                        </div>

                        <div>
                            <h3 className="line-clamp-2 text-base leading-snug sm:text-base">
                                {post.title}
                            </h3>
                            <p className="pt-1 text-sm text-slate-400 sm:text-sm">
                                {post.publishedDate}
                            </p>
                        </div>
                    </Link>
                ))}
                {posts.slice(4, 6).map((post) => (
                    <Link
                        key={post.slug}
                        href={`/blogs/${post.slug}`}
                        className="group hidden gap-3 rounded-md border border-transparent p-1 hover:border-gray-700 hover:bg-slate-900/50 sm:flex-col md:flex"
                    >
                        <div className="aspect-video h-full w-32 shrink-0 overflow-hidden rounded-sm sm:h-auto sm:w-auto">
                            <Image
                                width={854}
                                height={480}
                                src={post.featuredImage}
                                alt={post.title}
                                className="aspect-video h-full w-32 object-cover transition-transform duration-300 group-hover:scale-105 sm:w-full"
                            />
                        </div>

                        <div>
                            <h3 className="line-clamp-2 text-base leading-snug sm:text-base">
                                {post.title}
                            </h3>
                            <p className="pt-1 text-sm text-slate-400 sm:text-sm">
                                {post.publishedDate}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>

            <div className="flex w-full items-center justify-center gap-1 px-4 py-2 text-center text-sm text-amber-400">
                see 43 more <ArrowRight className="size-4" />
            </div>
        </section>
    );
}
