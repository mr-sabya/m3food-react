"use client";

import React from 'react';
import { useParams } from 'next/navigation';
import { FileText, ChevronLeft, ShieldCheck, Scale, RotateCcw } from 'lucide-react';
import Link from 'next/link';

// ডাইনামিক কন্টেন্ট ডাটা (এগুলো আপনি চাইলে আলাদা ফাইলে রাখতে পারেন)
const PAGE_DATA: Record<string, { title: string; icon: any; content: React.ReactNode; updateDate: string }> = {
    "terms": {
        title: "শর্তাবলী (Terms & Conditions)",
        icon: <Scale size={24} />,
        updateDate: "০১ জানুয়ারি, ২০২৪",
        content: (
            <div className="space-y-6">
                <section>
                    <h3 className="text-xl font-black text-slate-900 mb-3">১. সাধারণ নিয়মাবলী</h3>
                    <p>আমাদের ওয়েবসাইট ব্যবহার করার মাধ্যমে আপনি আমাদের সকল শর্তাবলী মেনে নিচ্ছেন বলে গণ্য হবে। আমরা যেকোনো সময় এই শর্তাবলী পরিবর্তন করার অধিকার রাখি।</p>
                </section>
                <section>
                    <h3 className="text-xl font-black text-slate-900 mb-3">২. অর্ডার প্রক্রিয়া</h3>
                    <p>অর্ডার কনফার্ম করার জন্য সঠিক নাম, ঠিকানা এবং মোবাইল নম্বর প্রদান করা বাধ্যতামূলক। ভুল তথ্যের কারণে ডেলিভারি দেরি হলে কর্তৃপক্ষ দায়ী থাকবে না।</p>
                </section>
            </div>
        )
    },
    "privacy-policy": {
        title: "গোপনীয়তা নীতি (Privacy Policy)",
        icon: <ShieldCheck size={24} />,
        updateDate: "০৫ জানুয়ারি, ২০২৪",
        content: (
            <div className="space-y-6">
                <section>
                    <h3 className="text-xl font-black text-slate-900 mb-3">১. তথ্য সংগ্রহ</h3>
                    <p>আমরা আপনার নাম, ফোন নম্বর এবং ঠিকানা সংগ্রহ করি শুধুমাত্র আপনার অর্ডারটি সঠিকভাবে পৌঁছে দেওয়ার জন্য।</p>
                </section>
                <section>
                    <h3 className="text-xl font-black text-slate-900 mb-3">২. তথ্যের নিরাপত্তা</h3>
                    <p>আপনার ব্যক্তিগত তথ্য আমাদের কাছে নিরাপদ। আমরা কোনো তৃতীয় পক্ষের কাছে আপনার তথ্য বিক্রি বা শেয়ার করি না।</p>
                </section>
            </div>
        )
    },
    "return-policy": {
        title: "রিটার্ন ও রিফান্ড পলিসি",
        icon: <RotateCcw size={24} />,
        updateDate: "১০ জানুয়ারি, ২০২৪",
        content: (
            <div className="space-y-6">
                <section>
                    <h3 className="text-xl font-black text-slate-900 mb-3">১. রিটার্ন শর্ত</h3>
                    <p>পণ্য হাতে পাওয়ার পর যদি কোনো ত্রুটি বা ভুল পণ্য পান, তবে অবশ্যই ডেলিভারি ম্যান থাকা অবস্থায় আমাদের জানান। প্যাকেট খোলার পর কোনো অভিযোগ গ্রহণ করা হবে না (যদি না সেটি গুণগত মানের সমস্যা হয়)।</p>
                </section>
                <section>
                    <h3 className="text-xl font-black text-slate-900 mb-3">২. রিফান্ড সময়সীমা</h3>
                    <p>রিটার্ন কনফার্ম হওয়ার ৩-৫ কার্যদিবসের মধ্যে আপনার রিফান্ড প্রক্রিয়া সম্পন্ন করা হবে।</p>
                </section>
            </div>
        )
    }
};

export default function DynamicPolicyPage() {
    const params = useParams();
    const slug = params.slug as string;
    const page = PAGE_DATA[slug];

    // যদি ভুল স্লাগ দেওয়া হয়
    if (!page) {
        return (
            <div className="min-h-screen flex items-center justify-center font-['Hind_Siliguri']">
                <div className="text-center">
                    <h1 className="text-4xl font-black text-[#004d26] mb-4">৪০৪</h1>
                    <p className="text-slate-500 font-bold mb-6">পেজটি খুঁজে পাওয়া যায়নি!</p>
                    <Link href="/" className="bg-[#004d26] text-white px-6 py-3 rounded-2xl font-bold">হোমে ফিরে যান</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-gray-50 min-h-screen font-['Hind_Siliguri'] pb-20">

            {/* --- Page Header --- */}
            <div className="bg-[#004d26] pt-20 pb-24 text-center text-white px-4">
                <div className="max-w-4xl mx-auto">
                    
                    <h1 className="text-3xl md:text-4xl font-black mb-4">{page.title}</h1>
                    <p className="text-sm opacity-70 font-bold tracking-widest uppercase">সর্বশেষ আপডেট: {page.updateDate}</p>
                </div>
            </div>

            {/* --- Content Card --- */}
            <div className="max-w-4xl mx-auto px-4 -mt-12">
                <div className="bg-white rounded-[40px] shadow-xl border border-gray-100 p-8 md:p-16 animate-fadeIn">

                    {/* Back Button */}
                    <Link href="/" className="inline-flex items-center gap-2 text-slate-400 font-bold mb-10 hover:text-[#004d26] transition-colors text-sm">
                        <ChevronLeft size={16} />
                        হোমে ফিরে যান
                    </Link>

                    {/* Main Content Render */}
                    <article className="prose prose-slate prose-lg max-w-none font-bold text-slate-600 leading-relaxed">
                        {page.content}
                    </article>

                    {/* Bottom Contact Tip */}
                    <div className="mt-16 p-8 bg-gray-50 rounded-3xl border border-dashed border-gray-200 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div>
                            <h4 className="font-black text-slate-900 mb-1 text-lg">বুঝতে অসুবিধা হচ্ছে?</h4>
                            <p className="text-sm text-slate-500 font-bold">যেকোনো পলিসি সম্পর্কে বিস্তারিত জানতে আমাদের কল করুন।</p>
                        </div>
                        <Link href="/contact" className="bg-white text-[#004d26] ring-1 ring-[#004d26] px-6 py-3 rounded-xl font-black hover:bg-[#004d26] hover:text-white transition-all text-sm">
                            যোগাযোগ করুন
                        </Link>
                    </div>
                </div>
            </div>

            <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
        </div>
    );
}