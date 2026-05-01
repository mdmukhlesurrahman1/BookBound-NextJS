import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
    return (
        <div className="flex flex-1 flex-col justify-center items-center py-30 px-10 space-y-5">
            <h1 className="text-7xl text-primary font-extrabold">404</h1>
            <h3 className="text-2xl text-base-primary font-extrabold">
                Not Found This Page
            </h3>
            <Link href="/">
                <button className="btn btn-primary">Go To Home</button>
            </Link>
        </div>
    );
};

export default NotFoundPage;
