import React from "react";
import { Users, ShieldCheck, IndianRupee, Headphones } from "lucide-react";

const whyChooseUs = [
    {
        icon: <Users />,
        title: "Experienced Solar Installation Team",
        description:
            "Our experienced solar installation team ensures precise planning, safe installation, and optimal system performance. With years of hands-on expertise, we deliver reliable solar solutions tailored to residential and commercial needs.",
    },
    {
        icon: <ShieldCheck />,
        title: "High-Quality MNRE-Approved Panels",
        description:
            "We use only high-quality MNRE-approved solar panels that offer superior efficiency, durability, and long-term performance. Our panels comply with government standards, ensuring maximum energy output and subsidy eligibility.",
    },
    {
        icon: <IndianRupee />,
        title: "Transparent & Competitive Pricing",
        description:
            "We follow transparent pricing with no hidden costs. From system design to installation and documentation, you get clear cost breakdowns and competitive solar pricing that fits your budget.",
    },
    {
        icon: <Headphones />,
        title: "Reliable After-Sales Support",
        description:
            "Our after-sales solar support includes regular maintenance guidance, quick issue resolution, and system performance checks. We stay with you even after installation to ensure long-term efficiency and peace of mind.",
    },
];

const WhyChooseUs = () => {
    return (
        <section className="py-16">
            <div className="mx-auto max-w-7xl px-6">
                <div className="mx-auto mb-10 max-w-2xl text-center">
                    <p className="text-2xl font-bold text-green-400">Why Choose Us</p>
                    <h2 className="mt-2 text-3xl font-bold text-dark md:text-4xl">
                        Rooftop solar installation with subsidy support in Indore.
                    </h2>
                </div>

                <div className="grid grid-cols-1 py-5 gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {whyChooseUs.map((item, idx) => (
                        <div
                            key={idx}
                            className="relative overflow-visible rounded-2xl  p-6 pt-10 text-center text-slate-700 border-2 border-green-300"
                        >
                            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                                <div className="grid h-20 w-20 place-items-center rounded-full bg-white shadow-soft">
                                    <span className="text-green-500 [&>svg]:h-9 [&>svg]:w-9 border-2 border-green-400 p-2 rounded-full">
                                        {item.icon}
                                    </span>
                                </div>
                            </div>

                            <div className="pt-8">
                                <h3 className="text-2xl font-extrabold leading-snug">{item.title}</h3>
                                <p className="mt-4 text-gray-700 text-lg">{item.description}</p>

                                <a href="" className="mt-6 inline-flex  text-green-400 items-center gap-2 font-semibold">
                                    Learn More <span aria-hidden="true">→</span>
                                </a>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
