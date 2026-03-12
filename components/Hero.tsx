"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
        });
    }, []);

    // Configuration for the floating leaves
    const leaves = [
        { src: "https://terraeat.theme.picode.in/assets/images/leaf.png", style: "top-2 left-5", delay: "0s" },
        { src: "https://terraeat.theme.picode.in/assets/images/leaf5.png", style: "top-0 left-1/3", delay: "0.5s" },
        { src: "https://terraeat.theme.picode.in/assets/images/leaf9.png", style: "top-10 right-1/3", delay: "1s" },
        { src: "https://terraeat.theme.picode.in/assets/images/leaf1.png", style: "top-20 right-10", delay: "0.3s" },
        { src: "https://terraeat.theme.picode.in/assets/images/leaf13.png", style: "bottom-20 right-20", delay: "1.2s" },
        { src: "https://terraeat.theme.picode.in/assets/images/leaf4.png", style: "bottom-10 left-10", delay: "0.2s" },
    ];

    return (
        <section className="relative overflow-hidden bg-[#f9f9f9] py-10 md:py-20 font-['Hind_Siliguri']">

            {/* --- Content Area --- */}
            <div className="container mx-auto px-4 relative z-20">
                <div className="flex flex-col md:flex-row items-center gap-10 md:gap-4">

                    {/* Left Side: Text */}
                    <div className="md:w-1/2 space-y-6" data-aos="fade-right">
                        <span className="bg-[#15803D]/10 text-[#15803D] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest inline-block">
                            Premium Organic Food
                        </span>

                        <h1 className="text-4xl md:text-7xl font-black leading-tight md:leading-[1.3] text-slate-900">
                            খুলনার বিখ্যাত <br className="hidden md:block" />
                            <span className="text-[#C41E3A] mt-2 inline-block">খাঁটি চুইঝাল</span>
                        </h1>

                        <p className="text-gray-600 text-lg md:text-xl max-w-lg leading-relaxed">
                            আমরা দিচ্ছি সরাসরি খুলনার মাঠ থেকে সংগৃহীত ১০০% বিশুদ্ধ চুইঝাল ও ঘরোয়া পদ্ধতিতে তৈরি আচার।
                        </p>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <Link href="/shop" className="bg-[#C41E3A] text-white px-8 py-4 rounded-xl font-bold shadow-xl hover:bg-red-700 transition transform hover:-translate-y-1">
                                অর্ডার করুন
                            </Link>
                            <Link href="/shop" className="bg-white border-2 border-gray-200 px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition transform hover:-translate-y-1">
                                শপ ভিজিট করুন
                            </Link>
                        </div>
                    </div>

                    {/* Right Side: Animated Image */}
                    <div className="md:w-1/2 relative flex justify-center items-center">
                        <div className="relative w-full max-w-[500px]" data-aos="fade-left" data-aos-delay="200">
                            {/* Static Food Plate */}
                            <img
                                src="https://terraeat.theme.picode.in/assets/images/food_disk.png"
                                alt="M3 Food Disk"
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10/12 z-10 drop-shadow-2xl"
                            />
                            {/* Rotating Background */}
                            <img
                                src="https://terraeat.theme.picode.in/assets/images/food_bg.png"
                                alt="Background Glow"
                                className="animate-custom-rotate w-full opacity-90"
                            />
                            {/* Soft Blur Glow */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -inset-10 bg-[#15803D]/10 rounded-full blur-3xl -z-10"></div>
                        </div>
                    </div>

                </div>
            </div>

            {/* --- Floating Decorative Leaves --- */}
            <div className="absolute inset-0 pointer-events-none z-0 hidden lg:block">
                {leaves.map((leaf, index) => (
                    <img
                        key={index}
                        src={leaf.src}
                        alt="leaf"
                        className={`absolute animate-leaf-float w-12 md:w-16 opacity-60 ${leaf.style}`}
                        style={{ animationDelay: leaf.delay }}
                    />
                ))}
            </div>

            {/* --- Large Background Circle --- */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 h-[500px] w-[500px] lg:h-[900px] lg:w-[900px] rounded-full bg-[#15803D] opacity-[0.08] blur-3xl-z-0 pointer-events-none"></div>
        </section>
    );
};

export default Hero;