import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";
import Navlink from "./Navlink";

const Navbar = () => {
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
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                        >
                            <Navlink />
                        </ul>
                    </div>
                    <Link href="/" className="text-accent-content">
                        <Image src={logo} alt="logo" height={40} width={160} />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-2">
                        <Navlink />
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn btn-primary text-white text-sm">Login</a>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
