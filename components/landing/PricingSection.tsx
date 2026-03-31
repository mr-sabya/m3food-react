"use client";
import React from "react";
import { ShoppingCart, Zap, ArrowRight } from "lucide-react";

export const PricingSection = ({ productData }: { productData: any }) => {
    // Extracting data safely
    const product = productData?.data || productData;
    const variants = product?.variants || [];

    // If no variants exist, we don't show the table
    if (variants.length === 0) return null;

    return (
        <section className="bg-[#0b5d2a] py-14 px-4 overflow-hidden">
            <div className="max-w-4xl mx-auto">

                {/* Header Section */}
                <div className="text-center mb-10">
                    <div className="inline-flex items-center gap-2 bg-yellow-400/10 text-yellow-400 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-widest mb-4 border border-yellow-400/20">
                        <Zap size={14} fill="currentColor" /> Limited Time Special Offer
                    </div>
                    <h2 className="text-white text-2xl md:text-4xl font-black italic uppercase">
                        {product.name} অফার প্রাইজ
                    </h2>
                </div>

                {/* Pricing List - API Driven */}
                <div className="space-y-3">
                    {variants.map((variant: any) => (
                        <div
                            key={variant.id}
                            className="group flex flex-col md:flex-row md:items-center justify-between p-5 md:p-6 bg-white/5 border border-white/10 rounded-2xl md:rounded-full transition-all hover:bg-white/10 hover:border-yellow-400/40"
                        >
                            {/* Left Side: Name & Old Price */}
                            <div className="flex flex-wrap items-center gap-2 text-white text-lg md:text-xl font-bold">
                                <span className="text-yellow-400">●</span>
                                <span>{variant.attributes[0]?.value || variant.display_name} এর পূর্বের মূল্য</span>
                                <span className="relative inline-block text-red-500 font-black ml-1">
                                    ৳{variant.pricing.regular_price}/-
                                    {/* Red marker line replacement */}
                                    <span className="absolute inset-0 top-1/2 h-[3px] bg-red-600 -rotate-6 transform origin-center"></span>
                                </span>
                                <span>টাকা,</span>
                            </div>

                            {/* Right Side: Offer Price */}
                            <div className="mt-3 md:mt-0 flex items-center gap-3">
                                <ArrowRight className="hidden md:block text-yellow-400/30 group-hover:translate-x-2 transition-transform" />
                                <div className="text-white font-bold text-lg md:text-xl">
                                    বর্তমানে অফার মূল্যে মাত্র
                                    <span className="ml-2 inline-block bg-yellow-400 text-[#0b5d2a] px-5 py-1.5 rounded-full font-black text-2xl md:text-3xl shadow-[0_0_15px_rgba(250,213,0,0.3)]">
                                        ৳{variant.pricing.sale_price}/-
                                    </span>
                                    <span className="ml-1">টাকা।</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Call-to-Action */}
                <div className="mt-12 text-center">
                    <p className="text-white/90 text-lg md:text-2xl font-bold mb-8 flex items-center justify-center gap-3">
                        <span className="w-8 h-[1px] bg-yellow-400/40"></span>
                        লিমিটেড টাইম অফার, তাই দেরি না করে এখনই অর্ডার করুন
                        <span className="w-8 h-[1px] bg-yellow-400/40"></span>
                    </p>

                    <a
                        href="#checkout-section"
                        className="group relative inline-flex items-center gap-4 bg-yellow-400 text-[#0b5d2a] px-10 py-5 rounded-2xl text-2xl md:text-3xl font-black transition-all duration-300 hover:bg-white hover:scale-105 shadow-[0_15px_40px_rgba(0,0,0,0.4)]"
                    >
                        <ShoppingCart size={32} className="group-hover:rotate-12 transition-transform" />
                        অর্ডার করতে চাই
                    </a>
                </div>

            </div>
        </section>
    );
};