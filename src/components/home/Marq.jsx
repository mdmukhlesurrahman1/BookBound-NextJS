import Marquee from "react-fast-marquee";

const Marq = () => {
    return (
        <div className="border-2 border-base-300 rounded-sm shadow w-11/12 max-w-7xl my-5 flex overflow-hidden">
            <span className="bg-primary text-white p-2 w-35 text-center font-bold">
                New Arrivals
            </span>
            <Marquee className="p-2" pauseOnHover>
                <ul className="flex">
                    <li className="text-success mr-20">
                        New Book: Foundations of Quantum Physics. by Charles E.
                        Burkhardt
                    </li>
                    <li className="text-warning mr-20">
                        Now 25% Discount on BookBound Primmium Membership.
                    </li>
                </ul>
            </Marquee>
        </div>
    );
};

export default Marq;
