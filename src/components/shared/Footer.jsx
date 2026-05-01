import React from "react";
import {
    FaFacebook,
    FaTwitter,
    FaLinkedin,
    FaGithub,
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-base-content text-gray-300 py-12 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                <div className="space-y-6">
                    <h3 className="text-white text-2xl font-bold">
                        Connect With Us
                    </h3>
                    <div className="flex gap-4">
                        {[
                            FaFacebook,
                            FaTwitter,
                            FaLinkedin,
                            FaGithub,
                        ].map((Icon, index) => (
                            <a
                                key={index}
                                href="#"
                                className="bg-gray-800 p-3 rounded-full hover:bg-primary hover:text-white transition-all duration-300"
                            >
                                <Icon size={20} />
                            </a>
                        ))}
                    </div>
                    <p className="text-sm leading-relaxed max-w-xs">
                        Follow us for updates, news, and the latest insights
                        into our digital solutions.
                    </p>
                </div>

                <div className="space-y-4">
                    <h3 className="text-white text-xl font-semibold">
                        Contact Us
                    </h3>
                    <ul className="space-y-4 text-sm">
                        <li className="flex items-start gap-3">
                            <FaMapMarkerAlt className="text-primary mt-1" />
                            <span>123 React Lane, Tech City, CA 94105</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <FaPhone className="text-primary" />
                            <span>+1 (111) 123-4567</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <FaEnvelope className="text-primary" />
                            <span>support@example.com</span>
                        </li>
                    </ul>
                </div>

                <div className="space-y-4">
                    <h3 className="text-white text-xl font-semibold">
                        Quick Links
                    </h3>
                    <ul className="space-y-2 text-sm">
                        {[
                            "About Us",
                            "Services",
                            "Careers",
                            "Privacy Policy",
                            "Terms of Service",
                        ].map((link) => (
                            <li key={link}>
                                <a
                                    href="#"
                                    className="hover:text-primary transition-colors"
                                >
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="space-y-4">
                    <h3 className="text-white text-xl font-semibold">
                        Newsletter
                    </h3>
                    <p className="text-sm">
                        Subscribe for the latest React insights
                    </p>
                    <div className="flex">
                        <input
                            type="email"
                            placeholder="email@example.com"
                            className="bg-transparent border border-gray-700 rounded-l-md px-4 py-2 w-full focus:outline-none focus:border-primary"
                        />
                        <button className="bg-primary hover:bg-primary/80 text-white px-4 py-2 rounded-r-md transition-colors font-medium">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-700 text-center text-xs text-gray-500 space-y-2">
                <p>© 2026 React Solutions Inc. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
