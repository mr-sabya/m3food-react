"use client";

import React from 'react';
import { ShieldCheck, Truck, Utensils, Heart, Award, Users } from 'lucide-react';

export default function AboutPage() {
    const features = [
        {
            icon: <ShieldCheck size={32} />,
            title: "১০০% খাঁটি পণ্য",
            desc: "আমরা সরাসরি উৎস থেকে সেরা মানের চুইঝাল এবং আচার সংগ্রহ করি।"
        },
        {
            icon: <Utensils size={32} />,
            title: "ঘরোয়া স্বাদ",
            desc: "একদম মায়ের হাতের রান্নার মতো ঘরোয়া স্বাদের নিশ্চয়তা দিচ্ছি।"
        },
        {
            icon: <Truck size={32} />,
            title: "দ্রুত ডেলিভারি",
            desc: "সারা বাংলাদেশে খুব দ্রুত এবং নিরাপদে আপনার পণ্য পৌঁছে দেই।"
        }
    ];

    return (
        <div className="bg-gray-50 min-h-screen font-['Hind_Siliguri'] pb-20">

            {/* --- Banner --- */}
            <div className="bg-[#004d26] py-20 text-center text-white px-4">
                <h1 className="text-4xl md:text-4xl font-black mb-4">আমাদের সম্পর্কে</h1>
                <p className="text-lg opacity-80 max-w-2xl mx-auto font-medium italic">
                    "শুদ্ধতায় মোড়ানো ঐতিহ্যের স্বাদ"
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-4 -mt-12">
                {/* --- Story Section --- */}
                <div className="bg-white rounded-[40px] shadow-xl border border-gray-100 overflow-hidden mb-16">
                    <div className="flex flex-col lg:flex-row items-center">
                        <div className="lg:w-1/2 p-8 md:p-16">
                            <span className="text-[#004d26] font-black tracking-widest text-sm uppercase mb-4 block">আমাদের পথচলা</span>
                            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 leading-tight">
                                ঐতিহ্যবাহী স্বাদের শুদ্ধতা নিয়ে আপনাদের পাশে
                            </h2>
                            <div className="space-y-4 text-slate-600 font-bold leading-relaxed text-lg">
                                <p>
                                    আমরা বিশ্বাস করি খাবারের স্বাদ আর গুণগত মান কখনও আপসযোগ্য নয়। বিশেষ করে যখন কথা হয় চুইঝাল আর ঘরোয়া আচারের মতো ঐতিহ্যবাহী খাবার নিয়ে।
                                </p>
                                <p>
                                    আমাদের লক্ষ্য হলো বাংলাদেশের প্রান্তিক অঞ্চলের আসল স্বাদগুলো সরাসরি আপনাদের দোরগোড়ায় পৌঁছে দেওয়া। প্রতিটি পণ্য অত্যন্ত যত্নসহকারে বাছাই এবং স্বাস্থ্যসম্মত উপায়ে প্যাকিং করা হয়।
                                </p>
                            </div>
                        </div>
                        <div className="lg:w-1/2 h-[400px] lg:h-[600px] bg-gray-200 relative">
                            {/* এখানে আপনার টিমের বা পণ্যের বড় ছবি বসাবেন */}
                            <div className="absolute inset-0 bg-[#004d26]/5 flex items-center justify-center">
                                <Utensils size={80} className="text-[#004d26] opacity-10" />
                            </div>
                            <img
                                src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=1000"
                                alt="Our Story"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* --- Features Grid --- */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {features.map((f, i) => (
                        <div key={i} className="bg-white p-10 rounded-[35px] text-center border border-gray-100 shadow-sm hover:shadow-lg transition-all">
                            <div className="w-20 h-20 bg-green-50 text-[#004d26] rounded-3xl flex items-center justify-center mx-auto mb-6">
                                {f.icon}
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 mb-3">{f.title}</h3>
                            <p className="text-slate-500 font-bold">{f.desc}</p>
                        </div>
                    ))}
                </div>

                {/* --- Mission/Vision Card --- */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="bg-[#004d26] p-12 rounded-[40px] text-white shadow-2xl">
                        <div className="flex items-center gap-4 mb-6">
                            <Heart size={32} className="text-red-400" />
                            <h3 className="text-3xl font-black">আমাদের লক্ষ্য</h3>
                        </div>
                        <p className="text-lg opacity-90 font-bold leading-relaxed">
                            খাঁটি খাবারের মাধ্যমে সুস্বাস্থ্য নিশ্চিত করা এবং গ্রাম বাংলার হারিয়ে যাওয়া ঐতিহ্যের স্বাদকে নতুন প্রজন্মের কাছে পৌঁছে দেওয়া। গ্রাহকের সন্তুষ্টিই আমাদের প্রধান মূলধন।
                        </p>
                    </div>
                    <div className="bg-white p-12 rounded-[40px] border border-gray-100 shadow-sm">
                        <div className="flex items-center gap-4 mb-6">
                            <Award size={32} className="text-orange-500" />
                            <h3 className="text-3xl font-black text-slate-900">কেন আমরা সেরা?</h3>
                        </div>
                        <ul className="space-y-4 text-slate-600 font-bold">
                            <li className="flex gap-3"><Users size={20} className="text-[#004d26] shrink-0" /> ১০০০+ নিয়মিত সন্তুষ্ট গ্রাহক</li>
                            <li className="flex gap-3"><ShieldCheck size={20} className="text-[#004d26] shrink-0" /> কোনো প্রকার রাসায়নিক বা প্রিজারভেটিভ বিহীন</li>
                            <li className="flex gap-3"><Truck size={20} className="text-[#004d26] shrink-0" /> ৬৪ জেলায় ক্যাশ অন ডেলিভারি সুবিধা</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}