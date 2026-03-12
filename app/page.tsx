"use client";

import React, { useState } from 'react';
import {
    ChevronRight,
    Truck, ShieldCheck, CreditCard, Heart,
    Zap,
    ShoppingCart
} from 'lucide-react';
import Hero from '@/components/Hero';

export default function M3FoodHome() {
    const [cartCount, setCartCount] = useState(0);

    // Pass this function to your product card
    const handleAddToCart = () => {
        setCartCount(prev => prev + 1);
    };

    // Latest Product Data from m3food.com
    const products = [
        { id: 1, name: "চুইঝাল (Chuijhal) - প্রিমিয়াম কোয়ালিটি", price: "৯৯০", oldPrice: "১২৯০", image: "https://m3food.com/wp-content/uploads/2024/06/Screenshot_200-600x601.png", tag: "Sale!" },
        { id: 2, name: "চুইঝাল আচার কম্বো ১+১ = ২টি", price: "১০৯০", oldPrice: "১২০০", image: "https://m3food.com/wp-content/uploads/2024/06/Screenshot_202.png", tag: "Sale!" },
        { id: 3, name: "স্পেশাল চুইঝাল আচার (Chuijhal Achar)", price: "৪৯৫", oldPrice: "৭৯০", image: "https://m3food.com/wp-content/uploads/2025/03/132-768x768.jpg", tag: "Sale!" },

    ];

    return (
        <div>
            <Hero />


            {/* --- TRUST BADGES --- */}
            <section className="container mx-auto px-4 -mt-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                        { icon: <Truck className="text-[#C41E3A]" />, title: "সারা দেশে ডেলিভারি", desc: "খুব দ্রুত হোম ডেলিভারি সুবিধা" },
                        { icon: <ShieldCheck className="text-[#C41E3A]" />, title: "১০০% বিশুদ্ধ পণ্য", desc: "কোনো প্রকার ভেজাল নেই" },
                        { icon: <CreditCard className="text-[#C41E3A]" />, title: "ক্যাশ অন ডেলিভারি", desc: "পণ্য বুঝে নিয়ে পেমেন্ট করুন" },
                    ].map((item, i) => (
                        <div key={i} className="bg-white p-6 rounded-2xl shadow-xl flex items-center gap-5 border border-gray-50">
                            <div className="p-4 bg-gray-50 rounded-xl">{item.icon}</div>
                            <div>
                                <h4 className="font-bold text-slate-900">{item.title}</h4>
                                <p className="text-xs text-gray-500">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- FEATURED PRODUCTS --- */}
            <section className="container mx-auto px-4 py-20">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                    <div>
                        <h2 className="text-3xl font-black text-slate-900">আমাদের জনপ্রিয় পণ্য</h2>
                        <div className="h-1.5 w-20 bg-[#C41E3A] mt-2 rounded-full"></div>
                    </div>
                    <button className="text-[#C41E3A] font-bold flex items-center gap-1 hover:gap-2 transition-all">
                        সবগুলো দেখুন <ChevronRight size={20} />
                    </button>
                </div>

                {/* --- PRODUCT GRID CONTAINER --- */}
                {/* --- PRODUCT AREA --- */}
                <div className="container mx-auto px-4">
                    {/* 
        On Mobile: 2-column Grid (Standard e-commerce look)
        On Desktop: Flexbox with justify-center (Centers 1, 2, or 3 items perfectly)
    */}
                    <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                        {products.map((p) => (
                            <div key={p.id} className="group relative bg-white border border-gray-100 rounded-3xl p-3 md:p-5 hover:shadow-2xl transition duration-500 flex flex-col items-center w-[calc(50%-8px)] lg:w-[calc(25%-24px)] min-w-[160px] max-w-[300px]">

                                {/* Image Container */}
                                <div className="relative aspect-square overflow-hidden rounded-2xl bg-gray-50 mb-4 w-full">
                                    <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                                    {p.tag && <span className="absolute top-3 left-3 bg-[#C41E3A] text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-tighter">{p.tag}</span>}
                                    <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md text-gray-300 hover:text-red-500 transition opacity-0 group-hover:opacity-100">
                                        <Heart size={18} />
                                    </button>
                                </div>

                                {/* Text & Price Info */}
                                <div className="text-center space-y-2 w-full flex flex-col flex-grow">
                                    <h3 className="font-bold text-sm md:text-base text-slate-800 line-clamp-2 h-10 leading-snug">
                                        {p.name}
                                    </h3>

                                    <div className="flex items-center justify-center gap-2">
                                        {p.oldPrice && <span className="text-gray-300 line-through text-xs md:text-sm">৳{p.oldPrice}</span>}
                                        <span className="text-[#C41E3A] font-black text-lg md:text-xl">৳{p.price}</span>
                                    </div>

                                    {/* --- BUTTONS SECTION --- */}
                                    <div className="mt-auto pt-3 space-y-2">

                                        {/* Add to Cart Button (Secondary) */}
                                        <button
                                            onClick={() => handleAddToCart()}
                                            className="w-full border-2 border-[#15803D] text-[#15803D] py-2 rounded-xl font-bold text-xs md:text-sm flex items-center justify-center gap-2 hover:bg-[#15803D] hover:text-white transition-all duration-300"
                                        >
                                            <ShoppingCart size={16} />
                                            কার্টে যোগ করুন
                                        </button>

                                        {/* Buy Now Button (Primary) */}
                                        <button
                                            onClick={() => window.location.href = '/checkout'}
                                            className="w-full bg-[#15803D] text-white py-2.5 rounded-xl font-bold text-xs md:text-sm shadow-md hover:bg-[#0e5a2a] transition active:scale-95 flex items-center justify-center gap-2"
                                        >
                                            <Zap size={16} fill="white" />
                                            অর্ডার করুন
                                        </button>

                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
}