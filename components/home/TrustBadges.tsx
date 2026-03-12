import React from 'react';
import { Truck, ShieldCheck, CreditCard } from 'lucide-react';

export default function TrustBadges() {
    const badges = [
        { icon: <Truck className="text-[#C41E3A]" />, title: "সারা দেশে ডেলিভারি", desc: "খুব দ্রুত হোম ডেলিভারি সুবিধা" },
        { icon: <ShieldCheck className="text-[#C41E3A]" />, title: "১০০% বিশুদ্ধ পণ্য", desc: "কোনো প্রকার ভেজাল নেই" },
        { icon: <CreditCard className="text-[#C41E3A]" />, title: "ক্যাশ অন ডেলিভারি", desc: "পণ্য বুঝে নিয়ে পেমেন্ট করুন" },
    ];

    return (
        <section className="container mx-auto px-4 -mt-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {badges.map((item, i) => (
                    <div key={i} className="bg-white p-6 rounded-2xl shadow-xl flex items-center gap-5 border border-gray-50">
                        <div className="p-4 bg-gray-50 rounded-xl">{item.icon}</div>
                        <div>
                            <h4 className="font-bold text-slate-900">{item.title}</h4>
                            <p className="text-xs text-gray-500">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}