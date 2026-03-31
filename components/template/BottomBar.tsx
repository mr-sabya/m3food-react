"use client";

import { MessageCircle } from 'lucide-react';
import React from 'react';

interface BottomBarProps {
    settings?: {
        contact_phone?: string;
        website_name?: string;
    };
}

export default function BottomBar({ settings }: BottomBarProps) {
    // ফোন নাম্বার থেকে স্পেস বা ড্যাশ সরিয়ে শুধুমাত্র ডিজিট রাখা (WhatsApp API এর জন্য)
    const rawPhone = settings?.contact_phone || "01520101590";
    const cleanPhone = rawPhone.replace(/\D/g, '');

    // বাংলাদেশের কান্ট্রি কোড যোগ করা যদি না থাকে
    const whatsappNumber = cleanPhone.startsWith('88') ? cleanPhone : `88${cleanPhone}`;

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 font-['Hind_Siliguri']">

            {/* চ্যাট করুন টেক্সট (Hover করলে দেখা যাবে) */}
            <div className="group relative flex items-center gap-2">
                <span className="bg-white text-[#002b15] px-4 py-2 rounded-xl shadow-xl text-sm font-bold border border-green-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none mb-2">
                    সরাসরি কথা বলুন
                </span>

                {/* মেইন WhatsApp বাটন */}
                <a
                    href={`https://wa.me/${whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-[0_10px_25px_rgba(37,211,102,0.4)] hover:scale-110 active:scale-95 transition-all duration-300 group"
                    title="WhatsApp Chat"
                >
                    {/* পিন্ং এনিমেশন (নজর কাড়ার জন্য) */}
                    <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></span>

                    <MessageCircle size={32} className="relative z-10" />

                    {/* অনলাইন ডট */}
                    <span className="absolute top-1 right-1 w-4 h-4 bg-white rounded-full border-4 border-[#25D366] z-20"></span>
                </a>
            </div>
        </div>
    );
}