"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navlink = () => {
    const pathName = usePathname();
    return (
        <>
            <Link
                href="/"
                className={
                    pathName === "/"
                        ? "border-b-2 border-primary text-primary"
                        : ""
                }
            >
                <li>Home</li>
            </Link>
            <Link
                href="/all-books"
                className={
                    pathName === "/all-books"
                        ? "border-b-2 border-primary text-primary"
                        : ""
                }
            >
                <li>All Books</li>
            </Link>
            <Link
                href="/my-profile"
                className={
                    pathName === "/my-profile"
                        ? "border-b-2 border-primary text-primary"
                        : ""
                }
            >
                <li>My Profile</li>
            </Link>
        </>
    );
};

export default Navlink;
