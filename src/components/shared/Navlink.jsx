"use client";

import Link from "next/link";

const Navlink = () => {
    return (
        <>
            <Link href="/">
                <li>Home</li>
            </Link>
            <Link href="/all-books">
                <li>All Books</li>
            </Link>
            <Link href="/my-profile">
                <li>My Profile</li>
            </Link>
        </>
    );
};

export default Navlink;
