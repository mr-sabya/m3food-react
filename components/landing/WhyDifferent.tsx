import React from 'react';
import { Check } from 'lucide-react';

export const WhyDifferent = () => {
    const points = [
        "অর্ডার প্রাপ্তির পর সরাসরি ক্ষেতে গিয়ে চুইঝাল সংগ্রহ করি।",
        "সংগৃহীত চুইঝাল ক্ষেত থেকে ঐদিনই আমরা কুরিয়ারে ডেলিভারী করে দিই।",
        "আমাদের চুইঝাল হাতে নিলেই বুঝবেন, কতটা প্রিমিয়াম ও তাজা।",
        "আমরা কোন তৃতীয় পক্ষ থেকে চুইঝাল গ্রহণ করি না।",
        "আমরা কোন চুইঝাল স্টক করে ০১ দিনের মাল ০৭ দিন ০৮ দিন পর সরবরাহ করি না।",
        "সংরক্ষণ বা সৌন্দর্য বর্ধায়নের জন্য কোন রসায়নিক দ্রব্য ব্যবহার করি না।",
        "খুলনাঞ্চলের চুইঝাল ব্যাতিত অন্য কোন চুইঝাল আমরা সরবরাহ করি না।",
        "খুলনাঞ্চলের চুইঝাল না অথবা রসায়নিক দ্রব্য ব্যবহার করেছি প্রমাণ সাপেক্ষে ১০০ গুন টাকা ফেরত দিয়ে থাকি। ১০০% গ্যারান্টি।",
        "চুইঝাল কাটার সাথে সাথে পানির ছিটা দিয়ে তাজা রাখি। প্রোডাক্ট হাতে পাবার পর দেখবেন হালকা ভেজা এবং তাজা।",
        "সারা দেশে হোম ডেলিভারী দিয়ে থাকি।",
        "অগ্ৰীম কোন টাকা পে করা লাগবে না।",
        "ডেলিভারীম্যান দাঁড়িয়ে থাকাবস্থায় প্রোডাক্ট চেক করে নিতে পারবেন।",
        "শুধু চুইঝাল বিক্রিই নয়, বরং চুইঝালের চারা এবং উৎপাদন প্রক্রিয়ার সাথেও আমরা জড়িত।",
        "যদি কথার সাথে কাজের মিল না থাকে তাহলে প্রোডাক্ট রিটার্ন করতে পারবেন।"
    ];

    return (
        <section className="py-12 px-4 bg-white font-['Hind_Siliguri']">
            <div className="max-w-5xl mx-auto">
                {/* --- Title with Black Border --- */}
                <div className="border-[3px] border-black py-4 px-6 mb-10 text-center">
                    <h2 className="text-2xl md:text-4xl font-black text-slate-900 tracking-tight">
                        আমরা কেন সবার থেকে আলাদা ??
                    </h2>
                </div>

                {/* --- List of Points --- */}
                <div className="space-y-4">
                    {points.map((point, index) => (
                        <div key={index} className="flex items-start gap-3">
                            <div className="mt-1 shrink-0">
                                <Check size={24} strokeWidth={4} className="text-[#5AC8FA]" />
                            </div>
                            <p className="text-[#004d26] text-lg md:text-xl font-bold leading-relaxed">
                                {point}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};