import React from "react";

const Pricing = () => {
    const plans = [
        {
            id: 1,
            name: "Basic",
            price: "$9.99",
            features: [
                "Access to 10 Books",
                "Standard Support",
                "Mobile App Access",
            ],
            isPopular: false,
        },
        {
            id: 2,
            name: "Premium",
            price: "$19.99",
            features: [
                "Unlimited Books",
                "Priority Support",
                "Offline Reading",
                "Early Access",
            ],
            isPopular: true,
        },
        {
            id: 3,
            name: "Diamond",
            price: "$29.99",
            features: [
                "Family Sharing",
                "Hardcopy Discounts",
                "Personal Librarian",
                "No Ads",
            ],
            isPopular: false,
        },
    ];

    return (
        <section className="w-11/12 max-w-7xl mx-auto my-16">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-3">
                    Choose Your Plan
                </h2>
                <p className="text-gray-500">
                    Select the best subscription plan that fits your reading
                    habit.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {plans.map((plan) => (
                    <div
                        key={plan.id}
                        className={`relative p-8 rounded-2xl border ${plan.isPopular ? "border-primary shadow-xl scale-105" : "border-base-300"} flex flex-col`}
                    >
                        {plan.isPopular && (
                            <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold">
                                MOST POPULAR
                            </span>
                        )}

                        <div className="mb-6">
                            <h3 className="text-xl font-bold mb-2">
                                {plan.name}
                            </h3>
                            <div className="flex items-baseline gap-1">
                                <span className="text-4xl font-extrabold">
                                    {plan.price}
                                </span>
                                <span className="text-gray-500">/month</span>
                            </div>
                        </div>

                        <ul className="flex-grow space-y-4 mb-8">
                            {plan.features.map((feature, i) => (
                                <li
                                    key={i}
                                    className="flex items-center gap-2 text-gray-600"
                                >
                                    <svg
                                        className="w-5 h-5 text-primary"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        <button
                            className={`btn rounded-xl w-full ${plan.isPopular ? "btn-primary" : "btn-outline btn-primary"}`}
                        >
                            Get Started
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Pricing;
