import Link from "next/link";
import React from "react";

export interface CustomLinkProps
    extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    external?: boolean;
    href: string;
    newTab?: boolean;
}

export default function CustomLink({
    external,
    href,
    newTab,
    children,
    ...rest
}: CustomLinkProps) {
    const isExternal = external ?? /^(https?:\/\/|\/\/)/.test(href);

    const target = newTab ? "_blank" : rest.target;
    const rel = newTab ? "noopener noreferrer" : rest.rel;

    if (isExternal) {
        return (
            <a
                className="text-amber-400 hover:underline active:underline"
                href={href}
                target={target}
                rel={rel}
                {...rest}
            >
                {children}
            </a>
        );
    }

    // Internal Link -> Next.js <Link>
    return (
        <Link href={href} target={target} rel={rel} {...rest}>
            {children}
        </Link>
    );
}
