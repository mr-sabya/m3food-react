"use client";
import React from 'react';
import { ShoppingCart, ShieldCheck } from 'lucide-react';

export const CheckoutSection = ({ product }: { product: any }) => {
    return (
        <section className="py-20 px-4 bg-white" id="checkout-section">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div className="bg-white p-8 rounded-2xl border-2 border-gray-100 shadow-xl">
                    <h3 className="text-2xl font-bold mb-8 border-b pb-4">অর্ডার করতে নিচের ফর্মটি পূরণ করুন</h3>
                    <form className="space-y-6">
                        <input type="text" placeholder="আপনার নাম লিখুন *" className="w-full border-2 p-4 rounded-xl outline-none focus:border-[#004d26]" required />
                        <input type="tel" placeholder="আপনার মোবাইল নাম্বার লিখুন *" className="w-full border-2 p-4 rounded-xl outline-none focus:border-[#004d26]" required />
                        <textarea placeholder="আপনার সম্পূর্ণ ঠিকানা লিখুন *" className="w-full border-2 p-4 rounded-xl h-32 outline-none focus:border-[#004d26]" required />
                    </form>
                </div>

                <div className="bg-gray-50 p-8 rounded-2xl border-2 border-gray-100 shadow-xl">
                    <h3 className="text-2xl font-bold mb-8 border-b pb-4">অর্ডার ডিটেইলস</h3>
                    <div className="flex justify-between items-center py-4 border-b">
                        <div className="flex items-center gap-4">
                            <img src={product.thumbnail} className="w-20 h-20 rounded-xl border bg-white" alt="Product" />
                            <span className="font-bold text-lg">{product.name} × ১</span>
                        </div>
                        <span className="font-bold text-xl">৳{product.price}</span>
                    </div>
                    <div className="flex justify-between py-6 font-black text-3xl text-[#004d26]">
                        <span>সর্বমোট</span>
                        <span>৳{product.price} BDT</span>
                    </div>
                    <div className="bg-green-100 p-4 rounded-xl text-green-800 flex gap-2 items-center mb-6">
                        <ShieldCheck /> ক্যাশ অন ডেলিভারি (পণ্য হাতে পেয়ে টাকা পরিশোধ করুন)
                    </div>
                    <button className="w-full bg-[#004d26] text-white py-6 rounded-2xl text-2xl font-black hover:bg-[#00331a] transition-all shadow-xl flex items-center justify-center gap-3">
                        <ShoppingCart size={32} /> অর্ডার কনফার্ম করুন
                    </button>
                </div>
            </div>
        </section>
    );
};