"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';

// Swiper Styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export const CustomerReviews = () => {
    // আপনার রিভিউ ইমেজের পাথগুলো এখানে দিন
    const reviewImages = [
        { id: 1, img: "/images/review/review_1.webp" },
        { id: 2, img: "/images/review/review_2.webp" },
        { id: 3, img: "/images/review/review_3.webp" },
        { id: 4, img: "/images/review/review_1.webp" }, // স্লাইডার চেক করার জন্য ডামি
    ];

    return (
        <section className="py-16 px-4 bg-white font-['Hind_Siliguri']">
            <div className="max-w-7xl mx-auto">

                {/* --- Header: Green Background with Yellow Text --- */}
                <div className="bg-[#004d26] py-6 px-4 rounded-2xl mb-12 shadow-lg">
                    <h2 className="text-[#ffcc00] text-2xl md:text-5xl font-black text-center leading-tight">
                        আলহামদুলিল্লাহ, আমাদের সম্মানিত ক্লায়েন্টদের মতামত
                    </h2>
                </div>

                {/* --- Swiper Slider Section --- */}
                <div className="relative group px-2 md:px-10">
                    <Swiper
                        modules={[Pagination, Autoplay, Navigation]}
                        spaceBetween={25}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{ delay: 4000 }}
                        navigation={true}
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        className="review-swiper"
                    >
                        {reviewImages.map((review) => (
                            <SwiperSlide key={review.id}>
                                <div className="rounded-[2rem] overflow-hidden shadow-2xl border border-gray-100 transition-transform duration-300 hover:scale-[1.02]">
                                    <img
                                        src={review.img}
                                        alt="M3Food Customer Review"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            {/* Custom CSS for Slider Navigation Styling */}
            <style jsx global>{`
                .review-swiper .swiper-button-next, 
                .review-swiper .swiper-button-prev {
                    color: #000;
                    background: white;
                    width: 45px;
                    height: 45px;
                    border-radius: 50%;
                    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
                    opacity: 0.8;
                }
                .review-swiper .swiper-button-next:after, 
                .review-swiper .swiper-button-prev:after {
                    font-size: 18px;
                    font-weight: bold;
                }
                .review-swiper .swiper-button-next:hover, 
                .review-swiper .swiper-button-prev:hover {
                    opacity: 1;
                    background: #004d26;
                    color: #ffcc00;
                }
            `}</style>
        </section>
    );
};