"use client";

import React, { useState } from 'react';
import { Menu, ShoppingBag, X, Phone, Search } from "lucide-react";
import Link from "next/link";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [cartCount] = useState(0);

    const menuItems = [
        { name: "HOME", href: "/" },
        { name: "SHOP", href: "/shop" },
        { name: "চুইঝাল", href: "/category/chuijhal" },
        { name: "আচার", href: "/category/achar" },
        { name: "ঘি ও তেল", href: "/category/ghee-oil" },
        { name: "মধু", href: "/category/honey" },
        { name: "কম্বো অফার", href: "/category/combo" },
        { name: "ABOUT", href: "/about" },
        { name: "CONTACT", href: "/contact" },
    ];

    return (
        <>
            <header className="sticky top-0 z-50 bg-white shadow-sm font-['Hind_Siliguri']">
                {/* --- Top Utility Bar --- */}
                <div className="bg-[#f8f8f8] hidden md:block">
                    <div className="container mx-auto px-4 py-1.5 flex justify-between items-center text-[13px] text-gray-600">
                        <div className="flex items-center gap-4">
                            <span className="flex items-center gap-1"><Phone size={14} className="text-[#C41E3A]" /> 01520 101590</span>
                            <span>সারা বাংলাদেশে ক্যাশ অন ডেলিভারি</span>
                        </div>
                        <div className="flex gap-4">
                            <Link href="/track-order" className="hover:text-[#C41E3A]">অর্ডার ট্র্যাকিং</Link>
                            <Link href="/my-account" className="hover:text-[#C41E3A]">আমার অ্যাকাউন্ট</Link>
                        </div>
                    </div>
                </div>

                {/* --- Main Header --- */}
                <div className="container mx-auto px-4 py-4 flex items-center justify-between gap-4 md:gap-10">

                    {/* Left: Menu & Logo */}
                    <div className="flex items-center gap-4 shrink-0">
                        {/* Mobile/Tablet Menu Toggle */}
                        <div className="lg:hidden">
                            <Menu className="cursor-pointer text-slate-700" onClick={() => setIsMenuOpen(true)} />
                        </div>

                        {/* Logo */}
                        <Link href="/" className="text-2xl md:text-3xl font-black tracking-tighter flex items-center">
                            <span className="text-[#C41E3A]">M3</span>
                            <span className="text-[#15803D]">FOOD</span>
                        </Link>
                    </div>

                    {/* Center: Search Bar (Desktop Only) */}
                    <div className="hidden lg:flex flex-1 max-w-2xl relative group">
                        <input
                            type="text"
                            placeholder="পণ্য খুঁজুন (যেমন: চুইঝাল, ঘি, আচার...)"
                            className="w-full border-2 border-gray-100 bg-gray-50 rounded-full py-2.5 px-6 pr-12 focus:border-[#C41E3A] focus:bg-white outline-none text-sm transition-all duration-300"
                        />
                        <button className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-[#C41E3A] text-white p-2 rounded-full hover:bg-red-700 transition-colors">
                            <Search size={18} />
                        </button>
                    </div>

                    {/* Right: Support & Cart */}
                    <div className="flex items-center gap-3 md:gap-6 shrink-0">
                        <div className="hidden xl:block text-right">
                            <p className="text-[10px] text-gray-400 uppercase font-bold leading-none">Support</p>
                            <p className="font-bold text-sm text-slate-700">01520 101590</p>
                        </div>

                        <div className="relative cursor-pointer group p-2 bg-gray-50 rounded-full hover:bg-gray-100 transition">
                            <ShoppingBag size={24} className="text-slate-700 group-hover:text-[#C41E3A]" />
                            <span className="absolute -top-1 -right-1 bg-[#15803D] text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full shadow-sm">
                                {cartCount}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Mobile Search Bar (Only visible on Mobile screens) */}
                <div className="lg:hidden px-4 pb-4">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="পণ্য খুঁজুন..."
                            className="w-full border border-gray-200 bg-gray-50 rounded-lg py-2 px-4 outline-none text-sm focus:border-[#C41E3A]"
                        />
                        <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                    </div>
                </div>
            </header>

            {/* --- Mobile Sidebar Navigation --- */}
            {isMenuOpen && (
                <div className="fixed inset-0 z-[100] lg:hidden">
                    {/* Overlay */}
                    <div
                        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                        onClick={() => setIsMenuOpen(false)}
                    />

                    {/* Sidebar Content */}
                    <div className="absolute inset-y-0 left-0 w-80 bg-white shadow-2xl flex flex-col">
                        <div className="p-5 border-b flex justify-between items-center bg-[#C41E3A] text-white">
                            <span className="font-bold text-lg uppercase tracking-wider">M3 Food Menu</span>
                            <X className="cursor-pointer" onClick={() => setIsMenuOpen(false)} />
                        </div>

                        <div className="flex-1 overflow-y-auto">
                            <ul className="p-4 space-y-1">
                                {menuItems.map((item) => (
                                    <li key={item.name} className="border-b border-gray-50 last:border-0">
                                        <Link
                                            href={item.href}
                                            onClick={() => setIsMenuOpen(false)}
                                            className="block py-3.5 px-2 text-slate-700 font-bold hover:bg-gray-50 rounded-md transition"
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="p-6 bg-gray-50 border-t mt-auto">
                            <p className="text-sm text-gray-500 mb-2 font-semibold">সহযোগিতার জন্য কল করুন</p>
                            <a href="tel:01520101590" className="text-lg font-bold text-[#C41E3A] flex items-center gap-2">
                                <Phone size={18} /> 01520 101590
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}