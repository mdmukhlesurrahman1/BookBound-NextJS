import "animate.css";
import Link from "next/link";

const Banner = () => {
    return (
        <div className="bg-base-200 shadow-sm rounded-lg w-11/12 max-w-7xl text-center px-5 md:px-10 py-20 my-10">
            <h1 className="text-3xl md:text-5xl font-bold text-primary animate__animated animate__heartBeat">
                Find Your Next Read
            </h1>
            <Link href="/all-books">
                <button className="btn btn-primary mt-5 text-lg">
                    Browse Now
                </button>
            </Link>
        </div>
    );
};

export default Banner;
