import React from 'react';

const Statistics = () => {
    const stats = [
        { id: 1, label: "Total Books", value: "850+" },
        { id: 2, label: "Active Users", value: "1.2K" },
        { id: 3, label: "Categories", value: "25+" },
        { id: 4, label: "Awards Won", value: "12" }
    ];

    return (
        <section className="w-11/12 max-w-7xl mx-auto my-12 bg-primary text-white p-10 rounded-2xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {stats.map((stat) => (
                    <div key={stat.id} className="flex flex-col gap-2">
                        <h2 className="text-3xl md:text-5xl font-bold italic">
                            {stat.value}
                        </h2>
                        <p className="text-sm md:text-lg font-medium opacity-80 uppercase tracking-wider">
                            {stat.label}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Statistics;
