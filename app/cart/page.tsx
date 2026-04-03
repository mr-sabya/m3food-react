"use client";

import React, { useState } from 'react';
import {
    Trash2, Plus, Minus, ShoppingBag,
    ArrowRight, ShieldCheck, Truck, ChevronLeft
} from 'lucide-react';
import Link from 'next/link';

// মক ডাটা (এটি আপনার কন্ট্যাক্ট বা স্টেট থেকে আসবে)
const INITIAL_CART = [
    {
        id: 1,
        name: "খাঁটি চুইঝাল স্পেশাল (৫০০ গ্রাম)",
        price: 450,
        qty: 1,
        image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=200&h=200&fit=crop",
        category: "চুইঝাল"
    },
    {
        id: 2,
        name: "মধু মিশ্রিত ঘরোয়া আমড়া আচার",
        price: 320,
        qty: 2,
        image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=200&h=200&fit=crop",
        category: "আচার"
    }
];

export default function CartPage() {
    const [cartItems, setCartItems] = useState(INITIAL_CART);

    // কোয়ান্টিটি আপডেট ফাংশন
    const updateQty = (id: number, delta: number) => {
        setCartItems(prev => prev.map(item =>
            item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item
        ));
    };

    // রিমুভ ফাংশন
    const removeItem = (id: number) => {
        setCartItems(prev => prev.filter(item => item.id !== id));
    };

    // ক্যালকুলেশন
    const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.qty), 0);
    const deliveryCharge = subtotal > 0 ? 60 : 0;
    const total = subtotal + deliveryCharge;

    return (
        <div className="bg-gray-50 min-h-screen font-['Hind_Siliguri'] pb-20">

            {/* --- Header --- */}
            <div className="bg-[#004d26] py-12 md:py-16 text-center text-white px-4">
                <h1 className="text-3xl md:text-4xl font-black mb-2 flex items-center justify-center gap-3">
                    <ShoppingBag size={32} /> আপনার শপিং ব্যাগ
                </h1>
                <p className="opacity-80 font-bold">অর্ডার সম্পন্ন করতে নিচের ধাপগুলো অনুসরণ করুন</p>
            </div>

            <div className="max-w-7xl mx-auto px-4 -mt-8">
                {cartItems.length > 0 ? (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                        {/* --- Left: Cart Items (২ কলাম) --- */}
                        <div className="lg:col-span-2 space-y-4">
                            <div className="bg-white p-4 md:p-6 rounded-3xl shadow-sm border border-gray-100">
                                <div className="hidden md:grid grid-cols-4 pb-4 border-b text-slate-400 font-black text-sm uppercase tracking-wider">
                                    <div className="col-span-2">পণ্য</div>
                                    <div className="text-center">পরিমাণ</div>
                                    <div className="text-right">মূল্য</div>
                                </div>

                                <div className="divide-y divide-gray-50">
                                    {cartItems.map((item) => (
                                        <div key={item.id} className="py-6 flex flex-col md:grid md:grid-cols-4 items-center gap-4">
                                            {/* Product Info */}
                                            <div className="col-span-2 flex items-center gap-4 w-full">
                                                <div className="w-20 h-20 bg-gray-100 rounded-2xl overflow-hidden shrink-0">
                                                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                                </div>
                                                <div>
                                                    <h3 className="font-black text-slate-900 leading-tight">{item.name}</h3>
                                                    <p className="text-xs text-slate-400 font-bold mt-1">{item.category}</p>
                                                    <button
                                                        onClick={() => removeItem(item.id)}
                                                        className="text-red-400 hover:text-red-600 flex items-center gap-1 text-xs font-black mt-2 transition-colors"
                                                    >
                                                        <Trash2 size={14} /> রিমুভ করুন
                                                    </button>
                                                </div>
                                            </div>

                                            {/* Qty Selector */}
                                            <div className="flex items-center justify-center gap-3 bg-gray-50 p-1 rounded-xl w-fit">
                                                <button
                                                    onClick={() => updateQty(item.id, -1)}
                                                    className="w-8 h-8 flex items-center justify-center bg-white rounded-lg shadow-sm text-slate-600 hover:bg-[#004d26] hover:text-white transition-all"
                                                >
                                                    <Minus size={14} />
                                                </button>
                                                <span className="w-8 text-center font-black text-slate-900">{item.qty}</span>
                                                <button
                                                    onClick={() => updateQty(item.id, 1)}
                                                    className="w-8 h-8 flex items-center justify-center bg-white rounded-lg shadow-sm text-slate-600 hover:bg-[#004d26] hover:text-white transition-all"
                                                >
                                                    <Plus size={14} />
                                                </button>
                                            </div>

                                            {/* Price */}
                                            <div className="text-right w-full md:w-auto">
                                                <p className="font-black text-xl text-slate-900">৳{item.price * item.qty}</p>
                                                <p className="text-xs text-slate-400 font-bold">৳{item.price} প্রতি ইউনিট</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-6">
                                    <Link href="/shop" className="inline-flex items-center gap-2 text-[#004d26] font-black text-sm hover:underline">
                                        <ChevronLeft size={16} /> আরো পণ্য কিনুন
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* --- Right: Order Summary (১ কলাম) --- */}
                        <div className="lg:col-span-1">
                            <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 sticky top-24">
                                <h3 className="text-xl font-black text-slate-900 mb-6 pb-4 border-b border-gray-50">অর্ডার সামারি</h3>

                                <div className="space-y-4 mb-8">
                                    <div className="flex justify-between text-slate-500 font-bold">
                                        <span>মোট আইটেম</span>
                                        <span>{cartItems.length} টি</span>
                                    </div>
                                    <div className="flex justify-between text-slate-500 font-bold">
                                        <span>সাব-টোটাল</span>
                                        <span>৳{subtotal}</span>
                                    </div>
                                    <div className="flex justify-between text-slate-500 font-bold">
                                        <span>ডেলিভারি চার্জ</span>
                                        <span>৳{deliveryCharge}</span>
                                    </div>
                                    <div className="pt-4 border-t border-gray-100 flex justify-between items-center text-2xl font-black text-slate-900">
                                        <span>সর্বমোট</span>
                                        <span className="text-[#004d26]">৳{total}</span>
                                    </div>
                                </div>

                                <button className="w-full bg-[#004d26] text-white py-5 rounded-2xl font-black flex items-center justify-center gap-3 hover:bg-[#003d1e] shadow-lg shadow-green-900/20 transition-all active:scale-95 mb-6">
                                    চেকআউট করুন <ArrowRight size={20} />
                                </button>

                                {/* Trust Badges */}
                                <div className="space-y-4 pt-6 border-t border-gray-50">
                                    <div className="flex items-center gap-3 text-xs font-bold text-slate-500">
                                        <div className="bg-green-50 p-2 rounded-lg text-[#004d26]"><ShieldCheck size={18} /></div>
                                        নিরাপদ পেমেন্ট এবং ১০০% আসল পণ্য
                                    </div>
                                    <div className="flex items-center gap-3 text-xs font-bold text-slate-500">
                                        <div className="bg-green-50 p-2 rounded-lg text-[#004d26]"><Truck size={18} /></div>
                                        সারা দেশে দ্রুত হোম ডেলিভারি
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                ) : (
                    /* --- Empty Cart State --- */
                    <div className="bg-white rounded-[40px] shadow-xl py-24 px-6 text-center border-2 border-dashed border-gray-100 max-w-2xl mx-auto animate-fadeIn">
                        <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
                            <ShoppingBag size={48} className="text-gray-200" />
                        </div>
                        <h2 className="text-3xl font-black text-slate-800 mb-2">আপনার ব্যাগ খালি!</h2>
                        <p className="text-slate-500 font-bold mb-10">ব্যাগ খালি রেখে যাবেন না, আমাদের সেরা পণ্যগুলো দেখুন।</p>
                        <Link
                            href="/shop"
                            className="bg-[#004d26] text-white px-10 py-4 rounded-2xl font-black shadow-lg hover:bg-[#003d1e] transition-all"
                        >
                            পণ্য দেখুন
                        </Link>
                    </div>
                )}
            </div>

            <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
      `}</style>
        </div>
    );
}