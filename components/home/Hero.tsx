"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

// Swiper Imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Swiper Styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// TypeScript Interface
interface Banner {
    id: number | string;
    badge: string;
    title: string;
    highlight: string;
    description: string;
    image_url: string;
    bg_circle_class: string;
    btn_link: string;
}

// --- SAMPLE / FALLBACK BANNER DATA ---
const DEFAULT_BANNERS: Banner[] = [
    {
        id: 'default-1',
        badge: "Premium Organic Food",
        title: "খুলনার বিখ্যাত",
        highlight: "খাঁটি চুইঝাল",
        description: "সরাসরি খুলনার মাঠ থেকে সংগৃহীত ১০০% প্রাকৃতিক ও ভেজালমুক্ত চুইঝাল। আপনার মাংসের তরকারিতে আনবে রাজকীয় স্বাদ।",
        image_url: "https://terraeat.theme.picode.in/assets/images/food_disk.png",
        bg_circle_class: "bg-[#15803D]",
        btn_link: "/shop"
    }
];

const Hero = () => {
    const [banners, setBanners] = useState<Banner[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchBanners = async () => {
            try {
                const API_URL = process.env.NEXT_PUBLIC_API_URL;
                const API_KEY = process.env.NEXT_PUBLIC_API_KEY; // Get key from env

                const response = await fetch(`${API_URL}/banners`, {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json',
                        'X-API-KEY': API_KEY || '' // মিডলওয়্যারের সাথে মিল রেখে সরাসরি কি পাঠানো হচ্ছে
                    }
                });
                const result = await response.json();

                if (result.success && result.data.length > 0) {
                    setBanners(result.data);
                } else {
                    // If API returns success but empty array
                    setBanners(DEFAULT_BANNERS);
                }
            } catch (error) {
                console.error("Error fetching banners, using fallback:", error);
                setBanners(DEFAULT_BANNERS);
            } finally {
                setLoading(false);
            }
        };

        fetchBanners();
    }, []);

    // Show a clean skeleton while loading
    if (loading) {
        return (
            <div className="h-[400px] md:h-[600px] bg-gray-50 animate-pulse flex items-center justify-center">
                <div className="w-12 h-12 border-4 border-[#C41E3A] border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    // Determine which data to use (API data or Fallback)
    const displayBanners = banners.length > 0 ? banners : DEFAULT_BANNERS;

    return (
        <section className="relative overflow-hidden bg-[#f9f9f9] font-['Hind_Siliguri'] group">
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                spaceBetween={0}
                slidesPerView={1}
                loop={displayBanners.length > 1}
                speed={1000}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    dynamicBullets: true
                }}
                navigation={{
                    nextEl: '.swiper-button-next-custom',
                    prevEl: '.swiper-button-prev-custom',
                }}
                className="mySwiper"
            >
                {displayBanners.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div className="py-16 md:py-28 px-4 container mx-auto relative z-20">
                            <div className="flex flex-col md:flex-row items-center gap-10">

                                {/* Left Side: Text Content */}
                                <div className="md:w-1/2 space-y-6 text-left hero-content">
                                    <span className="badge-anim bg-[#15803D]/10 text-[#15803D] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest inline-block">
                                        {slide.badge}
                                    </span>

                                    <h1 className="title-anim text-4xl md:text-7xl font-black leading-tight text-slate-900">
                                        {slide.title} <br className="hidden md:block" />
                                        <span className="text-[#C41E3A] mt-2 inline-block">{slide.highlight}</span>
                                    </h1>

                                    <p className="desc-anim text-gray-600 text-lg md:text-xl max-w-lg leading-relaxed">
                                        {slide.description}
                                    </p>

                                    <div className="btn-anim flex flex-wrap gap-4 pt-4">
                                        <Link href={slide.btn_link} className="bg-[#C41E3A] text-white px-8 py-4 rounded-xl font-bold shadow-xl hover:bg-red-700 transition transform hover:-translate-y-1">
                                            অর্ডার করুন
                                        </Link>
                                        <Link href="/shop" className="bg-white border-2 border-gray-200 px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition transform hover:-translate-y-1">
                                            শপ ভিজিট করুন
                                        </Link>
                                    </div>
                                </div>

                                {/* Right Side: Image */}
                                <div className="md:w-1/2 relative flex justify-center items-center">
                                    <div className="relative w-full max-w-[500px] img-anim">
                                        <img
                                            src={slide.image_url}
                                            alt={slide.highlight}
                                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10/12 z-10 drop-shadow-2xl object-contain"
                                        />
                                        <img
                                            src="https://terraeat.theme.picode.in/assets/images/food_bg.png"
                                            alt="Background Glow"
                                            className="animate-spin-slow w-full opacity-90"
                                        />
                                        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -inset-10 ${slide.bg_circle_class} opacity-10 rounded-full blur-3xl -z-10`}></div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>
                ))}

                {/* Navigation Buttons */}
                <button className="swiper-button-prev-custom absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100 hidden md:block">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 text-gray-800"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
                </button>
                <button className="swiper-button-next-custom absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100 hidden md:block">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 text-gray-800"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
                </button>
            </Swiper>

            <style jsx global>{`
                .swiper-slide .badge-anim, .swiper-slide .title-anim, .swiper-slide .desc-anim, .swiper-slide .btn-anim, .swiper-slide .img-anim {
                    opacity: 0;
                    transform: translateY(30px);
                    transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
                }
                .swiper-slide-active .badge-anim { opacity: 1; transform: translateY(0); transition-delay: 0.2s; }
                .swiper-slide-active .title-anim { opacity: 1; transform: translateY(0); transition-delay: 0.4s; }
                .swiper-slide-active .desc-anim { opacity: 1; transform: translateY(0); transition-delay: 0.6s; }
                .swiper-slide-active .btn-anim { opacity: 1; transform: translateY(0); transition-delay: 0.8s; }
                .swiper-slide-active .img-anim { opacity: 1; transform: scale(1) translateY(0); transition-delay: 0.5s; }

                @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
                .animate-spin-slow { animation: spin-slow 20s linear infinite; }

                .swiper-pagination-bullet-active {
                    background: #C41E3A !important;
                    width: 30px;
                    border-radius: 10px;
                }
            `}</style>
        </section>
    );
};

export default Hero;