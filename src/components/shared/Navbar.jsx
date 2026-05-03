"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";
import Navlink from "./Navlink";
import { authClient } from "@/lib/auth-client";
import { Avatar } from "@heroui/react";

const Navbar = () => {
    const userData = authClient.useSession();
    const user = userData.data?.user;

    const handleSignOut = async () => {
        await authClient.signOut();
    }

    return (
        <div className="bg-base-300 shadow-sm px-6 lg:px-12 sticky top-0 z-50 w-full">
            <nav className="max-w-7xl mx-auto flex justify-between items-center navbar p-0">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {" "}
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />{" "}
                            </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-30 p-2 shadow font-semibold text-[16px] space-y-2 transition-all"
                        >
                            <Navlink />
                        </ul>
                    </div>
                    <Link href="/" className="text-accent-content">
                        <Image src={logo} alt="logo" height={40} width={160} />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-4 text-[16px] font-semibold">
                        <Navlink />
                    </ul>
                </div>
                <div className="navbar-end">
                    {!user && (
                        <Link
                            href="/login"
                            className="btn btn-primary text-white"
                        >
                            Login
                        </Link>
                    )}
                    {user && (
                        <div className="flex gap-2 items-center">
                            <p className="hidden md:flex">{user?.name}</p>
                            <Avatar className="border-2 border-base-200 text-base md:w-12 md:h-12">
                                <Avatar.Image
                                    alt={user?.name}
                                    src={user?.image}
                                    referrerPolicy="no-referrer"
                                />
                                <Avatar.Fallback>
                                    {user?.name[0].toUpperCase()}
                                </Avatar.Fallback>
                            </Avatar>
                            <button onClick={handleSignOut} className="btn btn-error text-white">
                                Logout
                            </button>
                        </div>
                    )}
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
