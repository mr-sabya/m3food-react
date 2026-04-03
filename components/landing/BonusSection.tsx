"use client";

import React from 'react';

export const BonusSection = () => {
    return (
        <section className="py-12 px-4 bg-white font-['Hind_Siliguri']">
            <div className="max-w-6xl mx-auto text-center">

                {/* --- Top Paragraph --- */}
                <p className="text-[#004d26] text-xl md:text-2xl font-black leading-relaxed mb-10">
                    কি ভাবছেন এতগুলো গুণ থাকতে মাত্র <span className="text-red-600 underline decoration-2 underline-offset-4">“০৪-০৫ টি”</span> গুণের কথা বলছি, বাকি গুলো গেল কোথায়? সকল গুণই আছে আমাদের মিষ্টি মসলাতে। <span className="text-red-600 underline decoration-2 underline-offset-4">“এগুলো আপনার বোনাস।”</span>
                </p>

                {/* --- Order Button (Same as image) --- */}
                <div className="flex justify-center mb-12">
                    <button
                        onClick={() => document.getElementById('checkout-section')?.scrollIntoView({ behavior: 'smooth' })}
                        className="bg-[#004d26] text-[#ffcc00] px-8 py-3 rounded-lg font-black text-xl md:text-3xl shadow-[0_10px_20px_rgba(0,0,0,0.3)] flex items-center gap-2 border-b-4 border-black hover:bg-[#00331a] transition active:scale-95"
                    >
                        <span>👉</span> অর্ডার করতে চাই
                    </button>
                </div>

                {/* --- Bottom Paragraph --- */}
                <p className="text-[#004d26] text-xl md:text-2xl font-black leading-relaxed">
                    কমন <span className="text-red-600 underline decoration-2 underline-offset-4">১৮</span> টি রোগ থেকে <span className="text-red-600 underline decoration-2 underline-offset-4">ফার্মেসী</span> মুক্ত থাকতে <span className="text-red-600 underline decoration-2 underline-offset-4">“দেশ প্রেম শুধু মুরগীর”</span> প্রতি না করে চুইঝালের প্রতিও করুন। কারণ এটা আপনার দেশেরই উৎপাদিত পণ্য। <span className="text-red-600 underline decoration-2 underline-offset-4">“আপনার গর্ব করা উচিত।”</span>
                </p>

            </div>
        </section>
    );
};