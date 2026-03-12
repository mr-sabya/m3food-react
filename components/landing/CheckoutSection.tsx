"use client";

import React from 'react';
import { ShoppingCart } from 'lucide-react';

export const CheckoutSection = () => {
    return (
        <section className="py-20 px-4 bg-white font-['Hind_Siliguri']" id="checkout-section">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">

                {/* --- Left Column: Billing Details --- */}
                <div className="bg-white p-6 md:p-10 rounded-2xl border border-gray-200 shadow-xl">
                    <h3 className="text-2xl font-bold mb-8 border-b pb-4 text-slate-800 uppercase tracking-wide">
                        Billing details
                    </h3>
                    <form className="space-y-6">
                        <div>
                            <label className="block font-bold mb-2 text-slate-700">আপনার নাম লিখুন *</label>
                            <input
                                type="text"
                                required
                                className="w-full border-2 border-gray-100 p-4 rounded-lg bg-gray-50 focus:border-[#004d26] focus:bg-white outline-none transition"
                                placeholder="উদাঃ মোঃ রহিম আলী"
                            />
                        </div>
                        <div>
                            <label className="block font-bold mb-2 text-slate-700">আপনার মোবাইল নাম্বার লিখুন *</label>
                            <input
                                type="tel"
                                required
                                className="w-full border-2 border-gray-100 p-4 rounded-lg bg-gray-50 focus:border-[#004d26] focus:bg-white outline-none transition"
                                placeholder="উদাঃ 017XXXXXXXX"
                            />
                        </div>
                        <div>
                            <label className="block font-bold mb-2 text-slate-700">আপনার সম্পূর্ণ ঠিকানা লিখুন *</label>
                            <textarea
                                required
                                className="w-full border-2 border-gray-100 p-4 rounded-lg bg-gray-50 focus:border-[#004d26] focus:bg-white outline-none transition h-32"
                                placeholder="আপনার গ্রাম, থানা এবং জেলার নাম লিখুন"
                            ></textarea>
                        </div>
                    </form>
                </div>

                {/* --- Right Column: Your Order --- */}
                <div className="bg-gray-50 p-6 md:p-10 rounded-2xl border border-gray-200 shadow-xl">
                    <h3 className="text-2xl font-bold mb-8 border-b pb-4 text-slate-800 uppercase tracking-wide">
                        Your order
                    </h3>

                    <div className="space-y-4">
                        {/* Header */}
                        <div className="flex justify-between font-black text-lg pb-2 border-b text-slate-600">
                            <span>Product</span>
                            <span>Subtotal</span>
                        </div>

                        {/* Product Row */}
                        <div className="flex justify-between items-center py-4 border-b">
                            <div className="flex items-center gap-4">
                                <div className="relative w-16 h-16 rounded-lg overflow-hidden border bg-white">
                                    <img
                                        src="https://m3food.com/wp-content/uploads/2024/06/thumb.jpg"
                                        alt="M3Food Product"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <span className="font-bold text-slate-800">চুইঝাল মিষ্টি মসলা × ১</span>
                            </div>
                            <span className="font-bold text-slate-800">1,090.00 BDT</span>
                        </div>

                        {/* Subtotal Row */}
                        <div className="flex justify-between py-3 border-b text-slate-700">
                            <span className="font-bold">Subtotal</span>
                            <span className="font-bold">1,090.00 BDT</span>
                        </div>

                        {/* Total Row */}
                        <div className="flex justify-between py-4 border-b font-black text-2xl text-[#004d26]">
                            <span>Total</span>
                            <span>1,090.00 BDT</span>
                        </div>

                        {/* Trust Message Box */}
                        <div className="bg-white p-5 rounded-xl border border-dashed border-green-300 text-sm text-gray-600 mt-6 italic leading-relaxed">
                            “কোন প্রকার অগ্রিম ছাড়াই ফ্রি হোম ডেলিভারি। আমরা শতভাগ গ্যারান্টি দিয়ে বলছি, আপনি মিষ্টি মসলা খেয়ে সন্তুষ্ট হবেন।”
                        </div>

                        {/* Main Action Button */}
                        <button
                            type="submit"
                            className="w-full bg-[#004d26] text-white py-5 rounded-xl text-2xl font-black mt-8 hover:bg-[#00331a] transition-all flex items-center justify-center gap-3 shadow-[0_10px_30px_rgba(0,77,38,0.3)] transform active:scale-95"
                        >
                            <ShoppingCart size={28} strokeWidth={3} /> অর্ডার সম্পন্ন করুন
                        </button>

                        <p className="text-center text-xs text-gray-400 mt-4">
                            Your personal data will be used to process your order as described in our privacy policy.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};