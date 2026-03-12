"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';

// Swiper Styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export const ProductGallerySlider = () => {
    // এখানে আপনার গ্যালারির ৬-৮টি ইমেজের পাথ দিন
    const galleryItems = [
        { id: 1, img: "/images/gallery/gal-1.webp" },
        { id: 2, img: "/images/gallery/gal-2.webp" },
        { id: 3, img: "/images/gallery/gal-3.webp" },
        { id: 4, img: "/images/gallery/gal-4.webp" },
        { id: 5, img: "/images/gallery/gal-5.webp" },
        { id: 6, img: "/images/gallery/gal-6.webp" },
    ];

    return (
        <section className="py-16 px-4 bg-[#fcfcfc] font-['Hind_Siliguri']">
            <div className="max-w-7xl mx-auto">

                {/* --- Section Title --- */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">
                        আমাদের পণ্যের কিছু স্থিরচিত্র
                    </h2>
                    <div className="h-1.5 w-24 bg-[#004d26] mx-auto rounded-full"></div>
                </div>

                {/* --- Swiper Slider --- */}
                <div className="relative group">
                    <Swiper
                        modules={[Pagination, Autoplay, Navigation]}
                        spaceBetween={20}
                        slidesPerView={1.2} // মোবাইলে কিছুটা পরবর্তী স্লাইড দেখা যাবে
                        centeredSlides={true}
                        loop={true}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        pagination={{ clickable: true }}
                        navigation={true}
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 4 }, // পিসিতে ৪টি ছবি
                        }}
                        className="gallery-swiper !pb-12"
                    >
                        {galleryItems.map((item) => (
                            <SwiperSlide key={item.id}>
                                <div className="rounded-[2.5rem] overflow-hidden shadow-xl border-4 border-white transition-all duration-500 hover:shadow-2xl aspect-[4/5] bg-white">
                                    <img
                                        src={item.img}
                                        alt="M3Food Product Gallery"
                                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* --- Trust Badge under Gallery --- */}
                <p className="text-center mt-6 text-[#004d26] font-bold text-lg md:text-xl italic">
                    "একদম প্রাকৃতিক এবং ঘরোয়া পরিবেশে প্রস্তুতকৃত"
                </p>
            </div>

            {/* Custom Navigation Styling */}
            <style jsx global>{`
                /* বাটন কন্টেইনার স্টাইল */
                .swiper-button-next, 
                .swiper-button-prev {
                    background-color: white !important;
                    width: 40px !important;
                    height: 40px !important;
                    border-radius: 50% !important;
                    box-shadow: 0 4px 15px rgba(0,0,0,0.15) !important;
                    color: #004d26 !important; /* আপনার ব্র্যান্ডের গাঢ় সবুজ */
                    transition: all 0.3s ease;
                    padding: 10px;
                }

                /* বাটনের ভেতরের অ্যারো আইকন সাইজ ও বোল্ডনেস */
                .swiper-button-next:after, 
                .swiper-button-prev:after {
                    font-size: 20px !important; /* আইকন বড় করার জন্য */
                    font-weight: 900 !important; /* আইকন মোটা করার জন্য */
                }

                /* হোভার করলে হালকা পরিবর্তন */
                .swiper-button-next:hover, 
                .swiper-button-prev:hover {
                    transform: scale(1.1);
                    background-color: #f8f8f8 !important;
                }

                /* মোবাইলে বাটন একটু ছোট দেখাবে */
                @media (max-width: 640px) {
                    .swiper-button-next, 
                    .swiper-button-prev {
                        width: 35px !important;
                        height: 35px !important;
                    }
                    .swiper-button-next:after, 
                    .swiper-button-prev:after {
                        font-size: 14px !important;
                    }
                }
            `}</style>
        </section>
    );
};