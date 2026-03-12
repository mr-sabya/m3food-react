"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const foodPairingItems = [
    { id: 1, img: "/images/food-1.webp" },
    { id: 2, img: "/images/food-2.webp" },
    { id: 3, img: "/images/food-3.webp" },
    { id: 4, img: "/images/food-1.webp" },
];

export const FoodPairing = () => (
    <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-center text-slate-900 mb-10">কোন কোন খাবারের সাথে খেতে পারি ?</h2>
            <div className="max-w-5xl mx-auto mb-12">
                <p className="text-[#004d26] text-lg md:text-xl font-bold text-center leading-relaxed">
                    যে কোন মসলা জাতীয় খাবারের সাথে চুইঝাল খেতে পারেন... (আপনার টেক্সট)
                </p>
            </div>
            <div className="relative pb-12">
                <Swiper
                    modules={[Pagination, Autoplay, Navigation]}
                    spaceBetween={20} slidesPerView={1} loop={true}
                    autoplay={{ delay: 3000 }} pagination={{ clickable: true }}
                    breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
                >
                    {foodPairingItems.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className="bg-white p-2 rounded-[2.5rem] shadow-lg border border-gray-100 overflow-hidden">
                                <img src={item.img} className="w-full aspect-square object-cover rounded-[2.2rem]" alt="Food" />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="mt-12 text-center">
                <h4 className="text-red-600 text-4xl md:text-7xl font-black uppercase tracking-tighter">xx সাবধান xx</h4>
            </div>
        </div>
    </section>
);