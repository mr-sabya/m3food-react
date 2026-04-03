"use client";

import React, { useState } from 'react';
import {
    Mail, Phone, MapPin, MessageSquare,
    Send, Clock, CheckCircle2, Facebook, Youtube, Instagram
} from 'lucide-react';

interface ContactClientProps {
    settings?: {
        website_name?: string;
        tagline?: string;
        facebook_url?: string;
        youtube_url?: string;
        instagram_url?: string;
        address?: string;
        contact_email?: string;
        contact_phone?: string;
        whatsapp_number?: string;
        google_map?: string;
    };
}

export default function ContactClient({ settings }: ContactClientProps) {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 5000);
    };

    // ডাটা প্রসেসিং
    const phone = settings?.contact_phone || "নম্বর পাওয়া যায়নি";
    const email = settings?.contact_email || "ইমেইল পাওয়া যায়নি";
    const address = settings?.address || "ঠিকানা পাওয়া যায়নি";
    const whatsapp = settings?.whatsapp_number || settings?.contact_phone || "";

    const contactCards = [
        {
            icon: <Phone size={24} />,
            title: "ফোন করুন",
            detail: phone,
            subDetail: "সকাল ১০টা - রাত ১০টা",
            link: `tel:${phone}`
        },
        {
            icon: <MessageSquare size={24} />,
            title: "হোয়াটসঅ্যাপ",
            detail: "চ্যাট শুরু করুন",
            subDetail: "দ্রুত উত্তরের জন্য",
            link: `https://wa.me/${whatsapp.replace(/\D/g, '')}`
        },
        {
            icon: <Mail size={24} />,
            title: "ইমেইল করুন",
            detail: email,
            subDetail: "যেকোনো জিজ্ঞাসায় লিখুন",
            link: `mailto:${email}`
        }
    ];

    return (
        <div className="bg-gray-50 min-h-screen font-['Hind_Siliguri'] pb-20">

            {/* --- Header Banner --- */}
            <div className="bg-[#004d26] py-20 text-center text-white px-4">
                <h1 className="text-3xl md:text-4xl font-black mb-4 tracking-tight">
                    যোগাযোগ করুন
                </h1>
                <p className="text-lg opacity-80 max-w-2xl mx-auto font-medium">
                    আমাদের পণ্য সম্পর্কে যেকোনো প্রশ্ন থাকলে সরাসরি যোগাযোগ করুন।
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-4 -mt-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* --- Left Side: Info Cards --- */}
                    <div className="lg:col-span-1 space-y-4">
                        {contactCards.map((item, index) => (
                            <a
                                href={item.link}
                                key={index}
                                target={item.title === "হোয়াটসঅ্যাপ" ? "_blank" : "_self"}
                                className="block bg-white p-6 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-all group"
                            >
                                <div className="flex items-center gap-5">
                                    <div className="bg-green-50 p-4 rounded-2xl text-[#004d26] group-hover:bg-[#004d26] group-hover:text-white transition-all">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{item.title}</p>
                                        <p className="text-lg font-black text-slate-900 leading-tight">{item.detail}</p>
                                        <p className="text-sm text-slate-500 font-bold">{item.subDetail}</p>
                                    </div>
                                </div>
                            </a>
                        ))}

                        {/* Address & Socials */}
                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                            <div className="flex items-start gap-4 mb-8">
                                <div className="bg-orange-50 p-3 rounded-xl text-orange-600">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <h4 className="font-black text-slate-900 mb-1">অফিস ঠিকানা</h4>
                                    <p className="text-slate-500 font-bold text-sm leading-relaxed">{address}</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                {settings?.facebook_url && (
                                    <a href={settings.facebook_url} target="_blank" className="bg-gray-50 p-3 rounded-xl text-slate-400 hover:text-blue-600 transition-all"><Facebook size={20} /></a>
                                )}
                                {settings?.youtube_url && (
                                    <a href={settings.youtube_url} target="_blank" className="bg-gray-50 p-3 rounded-xl text-slate-400 hover:text-red-600 transition-all"><Youtube size={20} /></a>
                                )}
                                {settings?.instagram_url && (
                                    <a href={settings.instagram_url} target="_blank" className="bg-gray-50 p-3 rounded-xl text-slate-400 hover:text-pink-600 transition-all"><Instagram size={20} /></a>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* --- Right Side: Contact Form --- */}
                    <div className="lg:col-span-2">
                        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 h-full">
                            {isSubmitted ? (
                                <div className="flex flex-col items-center justify-center h-full text-center py-20 animate-fadeIn">
                                    <div className="w-20 h-20 bg-green-100 text-[#004d26] rounded-full flex items-center justify-center mb-6">
                                        <CheckCircle2 size={48} />
                                    </div>
                                    <h2 className="text-3xl font-black text-slate-900 mb-2">ধন্যবাদ!</h2>
                                    <p className="text-slate-500 font-bold text-lg">আপনার মেসেজটি সফলভাবে পাঠানো হয়েছে।</p>
                                    <button onClick={() => setIsSubmitted(false)} className="mt-8 text-[#004d26] font-black underline">আরেকটি মেসেজ পাঠান</button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-8">সরাসরি মেসেজ পাঠান</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-black text-slate-700 ml-1">আপনার নাম</label>
                                            <input type="text" placeholder="নাম লিখুন" className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-none ring-1 ring-gray-200 focus:ring-2 focus:ring-[#004d26] outline-none font-bold" required />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-black text-slate-700 ml-1">মোবাইল নম্বর</label>
                                            <input type="tel" placeholder="০১৭XXXXXXXX" className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-none ring-1 ring-gray-200 focus:ring-2 focus:ring-[#004d26] outline-none font-bold" required />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-black text-slate-700 ml-1">মেসেজ লিখুন</label>
                                        <textarea rows={5} placeholder="আপনার জিজ্ঞাসা এখানে লিখুন..." className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-none ring-1 ring-gray-200 focus:ring-2 focus:ring-[#004d26] outline-none font-bold resize-none" required></textarea>
                                    </div>
                                    <button type="submit" className="w-full md:w-auto bg-[#004d26] text-white px-10 py-5 rounded-2xl font-black flex items-center justify-center gap-3 hover:shadow-lg transition-all">
                                        <Send size={20} /> মেসেজ পাঠান
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>

                {/* --- Google Map --- */}
                {settings?.google_map && (
                    <div className="mt-12 bg-white p-4 rounded-3xl shadow-sm border border-gray-100 overflow-hidden h-[450px]">
                        <div
                            className="w-full h-full rounded-2xl overflow-hidden shadow-inner"
                            dangerouslySetInnerHTML={{ __html: settings.google_map }}
                        />
                    </div>
                )}
            </div>

            <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
      `}</style>
        </div>
    );
}