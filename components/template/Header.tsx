"use client";

import React, { useState } from 'react';
import { ShoppingBag, Phone, Search } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface HeaderProps {
    settings?: {
        website_name?: string;
        logo?: string;
        tagline?: string;
        contact_email?: string;
        contact_phone?: string;
    };
}

export default function Header({ settings }: HeaderProps) {
    const [cartCount] = useState(0);

    return (
        <header className="bg-white shadow-sm font-['Hind_Siliguri'] border-b border-gray-100">
            {/* --- Top Utility Bar --- */}
            <div className="bg-[#f8f8f8] hidden md:block border-b border-gray-100">
                <div className="container mx-auto px-4 py-2 flex justify-between items-center text-[13px] text-gray-600">
                    <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1.5">
                            <Phone size={14} className="text-[#004d26]" />
                            {settings?.contact_phone || "01520 101590"}
                        </span>
                        <span className="bg-green-100 text-[#004d26] px-2 py-0.5 rounded-full font-bold text-[11px]">
                            {settings?.tagline || "সারা বাংলাদেশে ক্যাশ অন ডেলিভারি"}
                        </span>
                    </div>
                    <div className="flex gap-5">
                        <Link href="/track-order" className="hover:text-[#004d26] transition-colors">অর্ডার ট্র্যাকিং</Link>
                        <Link href="/contact" className="hover:text-[#004d26] transition-colors">যোগাযোগ</Link>
                    </div>
                </div>
            </div>

            {/* --- Main Header --- */}
            <div className="container mx-auto px-4 py-3 md:py-5 flex items-center justify-between gap-4 md:gap-10">

                {/* Left: Logo Area */}
                <div className="flex items-center gap-4 shrink-0">
                    <Link href="/" className="flex items-center">
                        {settings?.logo ? (
                            <img
                                src={settings.logo}
                                alt={settings.website_name || "M3Food Logo"}
                                className="h-10 md:h-14 w-auto object-contain"
                            />
                        ) : (
                            <div className="text-2xl md:text-3xl font-black tracking-tighter flex items-center">
                                <span className="text-[#004d26]">{settings?.website_name || "M3"}</span>
                                <span className="text-[#fad500]">FOOD</span>
                            </div>
                        )}
                    </Link>
                </div>

                {/* Center: Search Bar (Desktop Only) */}
                <div className="hidden lg:flex flex-1 max-w-xl relative group">
                    <input
                        type="text"
                        placeholder="পণ্য খুঁজুন (যেমন: চুইঝাল, ঘি, মধু...)"
                        className="w-full border-2 border-gray-100 bg-gray-50 rounded-full py-2.5 px-6 pr-12 focus:border-[#004d26] focus:bg-white outline-none text-sm transition-all duration-300"
                    />
                    <button className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-[#004d26] text-white p-2 rounded-full hover:bg-[#00331a] transition-colors">
                        <Search size={18} />
                    </button>
                </div>

                {/* Right: Support & Cart */}
                <div className="flex items-center gap-3 md:gap-6 shrink-0">
                    <div className="text-right hidden sm:block border-r pr-4 border-gray-200">
                        <p className="text-[10px] text-gray-400 uppercase font-bold leading-none mb-1">প্রয়োজনে কল করুন</p>
                        <p className="font-black text-sm md:text-base text-slate-800">{settings?.contact_phone || "01520 101590"}</p>
                    </div>

                    {/* কার্ট বাটনে লিঙ্ক যুক্ত করা হয়েছে */}
                    <Link
                        href="/cart"
                        className="relative cursor-pointer group p-2.5 bg-gray-50 rounded-xl hover:bg-green-50 transition-colors border border-transparent hover:border-green-100"
                    >
                        <ShoppingBag size={24} className="text-slate-700 group-hover:text-[#004d26]" />
                        <span className="absolute -top-2 -right-2 bg-[#004d26] text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full shadow-md border-2 border-white">
                            {cartCount}
                        </span>
                    </Link>
                </div>
            </div>

            {/* Mobile Search Bar */}
            <div className="lg:hidden px-4 pb-4">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="পণ্য খুঁজুন..."
                        className="w-full border border-gray-200 bg-gray-50 rounded-xl py-2.5 px-4 outline-none text-sm focus:border-[#004d26]"
                    />
                    <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                </div>
            </div>
        </header>
    );
}