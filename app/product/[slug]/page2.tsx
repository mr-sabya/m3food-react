"use client";

import React, { useState, useEffect } from 'react';
import { CheckCircle, ShoppingCart, MousePointer2, Check } from 'lucide-react';

// Swiper Imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const ProductLandingPage = () => {
    // --- Countdown Timer Logic ---
    const [timeLeft, setTimeLeft] = useState({ hours: 8, minutes: 40, seconds: 9 });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
                if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
                if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
                return prev;
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    // Reusable Order Button
    const OrderButton = () => (
        <div className="text-center py-6">
            <button
                onClick={() => document.getElementById('checkout-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-[#004d26] hover:bg-[#00331a] text-white text-lg md:text-xl font-bold px-8 py-3 rounded-md shadow-lg flex items-center gap-2 mx-auto transition-transform active:scale-95 border-b-4 border-[#002211]"
            >
                <span className="animate-bounce">👉</span> অর্ডার করতে চাই
            </button>
        </div>
    );

    const foodPairingItems = [
        { id: 1, img: "/images/চুইঝালের-খিচুড়ি-scaled-rjy63oea89nnc42wyheqclqkua2twszgy5ecm2yq7c.webp", title: "চুইঝালে গরুর মাংস" },
        { id: 2, img: "/images/চুইঝালের-মাছের-ঝোল-1-scaled-rjy66u4r77zccxhpickl8b1cpwi8s6izpsc3oka3ag.webp", title: "চুইঝালের ডাল" },
        { id: 3, img: "/images/চুইঝালের-খিচুড়ি-scaled-rjy63oea89nnc42wyheqclqkua2twszgy5ecm2yq7c.webp", title: "চুইঝালে মাছের তরকারি" },
        { id: 4, img: "/images/চুইঝালের-মাছের-ঝোল-1-scaled-rjy66u4r77zccxhpickl8b1cpwi8s6izpsc3oka3ag.webp", title: "চুইঝালের ভুনা মাংস" },
    ];

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
        <div className="bg-white font-['Hind_Siliguri'] text-slate-800 leading-relaxed overflow-x-hidden">

            {/* --- Section 1: Top Warning --- */}
            <section className="bg-[#004d26] py-6 px-4">
                <div className="max-w-4xl mx-auto border-2 border-dashed border-yellow-400 p-4 text-center">
                    <h1 className="text-white text-xl md:text-3xl font-bold leading-snug">
                        সর্দি-কাশি <span className="text-yellow-400">“যত পুরাতনই হোক”</span> জাস্ট <span className="text-yellow-400">“০৫ মিনিটের চ্যালেঞ্জ।”</span> তবে এটা <span className="bg-red-600 text-white px-2 py-0.5">ঔষধ নয়।</span> এটা খাবার। খেতে পারবেন সবাই।🔥
                    </h1>
                </div>
            </section>

            {/* --- Section 2: Innovation Bar --- */}
            <section className="bg-[#FCD34D] py-4 px-4 text-center shadow-inner">
                <p className="max-w-4xl mx-auto text-[#004d26] font-extrabold text-sm md:text-lg">
                    বাংলাদেশে আমরাই সর্বপ্রথম চুইঝালের মিষ্টি মসলার উদ্ভাবক। আমরা ০১ টুকরো চুইঝালে ৩টি স্বাদ আনতে সক্ষম হয়েছি।
                </p>
            </section>

            {/* --- Section 3: Media Reports --- */}
            <section className="py-10 px-4 bg-gray-50 text-center">
                <div className="max-w-5xl mx-auto">
                    <div className="bg-[#FCD34D] inline-block px-6 py-2 rounded-md font-bold text-[#004d26] mb-8 shadow-sm border border-yellow-500">
                        দেশের সংবাদ মাধ্যমে আমাদের নিয়ে প্রতিবেদন গুলো দেখুন 👇
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl overflow-hidden shadow-2xl border-4 border-white">
                            <img src="https://m3food.com/wp-content/uploads/2024/06/video_thumb_1.jpg" className="w-full aspect-video object-cover bg-gray-200" alt="News 1" />
                            <div className="bg-red-600 text-white py-3 font-bold text-lg">বিজিবি’র চাকরি ছেড়ে ব্যতিক্রমী পেশা</div>
                        </div>
                        <div className="rounded-xl overflow-hidden shadow-2xl border-4 border-white">
                            <img src="https://m3food.com/wp-content/uploads/2024/06/video_thumb_2.jpg" className="w-full aspect-video object-cover bg-gray-200" alt="News 2" />
                            <div className="bg-red-600 text-white py-3 font-bold text-lg">বিজিবি’র চাকরি ছেড়ে সফল উদ্যোক্তা</div>
                        </div>
                    </div>
                </div>
            </section>

            <OrderButton />

            {/* --- Section 4: Main Product Video --- */}
            <section className="py-6 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="relative aspect-video rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-4 border-white">
                        <iframe className="w-full h-full" src="https://www.youtube.com/embed/YOUR_VIDEO_ID" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>
            </section>

            <OrderButton />

            {/* --- Section 5: Countdown Offer --- */}
            <section className="bg-[#004d26] py-12 px-4">
                <div className="max-w-3xl mx-auto text-center border-2 border-yellow-500 rounded-2xl p-6 md:p-10">
                    <h2 className="text-yellow-400 text-2xl md:text-4xl font-black mb-2">অফারটি আজই শেষ।</h2>
                    <p className="text-white text-xl md:text-2xl font-bold mb-4">স্টক সীমিত। <br /> আর মাত্র ১১ জন নিতে পারবেন।</p>

                    <div className="bg-[#FFF8E7] rounded-xl p-6 border-4 border-orange-400 shadow-inner inline-block w-full max-w-sm">
                        <p className="text-gray-700 font-bold mb-2">অফার শেষ হতে বাকি</p>
                        <div className="text-5xl md:text-7xl font-black text-red-600 flex justify-center gap-2">
                            <span>{String(timeLeft.hours).padStart(2, '0')}</span>:
                            <span>{String(timeLeft.minutes).padStart(2, '0')}</span>:
                            <span>{String(timeLeft.seconds).padStart(2, '0')}</span>
                        </div>
                    </div>
                    <p className="text-red-400 mt-6 text-lg font-bold">নতুন দাম ১৪৯০/- টাকা নির্ধারিত হওয়ার আগে দ্রুত অর্ডার করুন</p>
                </div>
            </section>

            {/* --- Section 6: Challenges Grid --- */}
            <section className="py-12 px-4">
                <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
                    <img src="/images/card-1.1.webp" className="rounded-lg shadow-md" alt="Challenge 1" />
                    <img src="/images/card-2.1.webp" className="rounded-lg shadow-md" alt="Challenge 2" />
                    <img src="/images/card-3.webp" className="rounded-lg shadow-md" alt="Challenge 3" />
                    <img src="/images/card-4.webp" className="rounded-lg shadow-md" alt="Challenge 4" />
                </div>
            </section>

            <OrderButton />

            {/* --- Section 7: Text Info --- */}
            <section className="py-10 px-4 text-center max-w-4xl mx-auto">
                <p className="text-lg md:text-xl font-medium leading-relaxed">
                    চুইঝাল খুলনাঞ্চলের একটি <span className="text-red-600 font-bold">ঐতিহ্যবাহী ঔষধি খাবার।</span> বাছাইকৃত চুইঝাল, তাল মিসরি, গোল মরিচ এবং এমথ্রি ফুডের একটি স্পেশাল মসলা দিয়ে সম্পূর্ণ ঘরোয়া পদ্ধতিতে তৈরি করছি চুইঝাল মিষ্টি মসলা।
                </p>
                <div className="mt-10">
                    <h3 className="text-red-600 text-2xl font-bold mb-4">আপনি কি ভাবছেন এটা কোন ঔষধ?</h3>
                    <p className="text-lg">
                        এটা কোন ঔষধ না। এটা খাবার। খেতে পারবে সবাই। খুলনার চুইঝালের <span className="text-red-600 font-bold">ইনস্ট্যান্ট</span> রোগ প্রতিরোধ ক্ষমতাকে কাজে লাগিয়ে <span className="text-red-600 font-bold underline">০৪-০৫ টি</span> রোগকে মাথায় রেখে মিষ্টি মসলাটি বিশেষ উপায়ে তৈরি করা হয়েছে।
                    </p>
                </div>
            </section>



            {/* --- Section 8: Health Benefits List --- */}
            <section className="bg-[#004d26] py-12 px-4">
                <div className="max-w-5xl mx-auto bg-white rounded-3xl p-6 md:p-12 shadow-2xl relative overflow-hidden">
                    <h2 className="text-blue-600 text-xl md:text-2xl font-bold text-center mb-8 border-b-2 border-blue-100 pb-4">
                        গুগল সার্চ দিয়ে মিলিয়ে নিন দেশীয় চুইঝালের স্বাস্থ্য উপকারিতা ⤵
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-3">
                        {[
                            "খাবারের রুচি বাড়িয়ে ক্ষুধামন্দা দূর করে।", "দেহে কোলেস্টেরলের মাত্রা কমায়।", "ক্যান্সার প্রতিরোধে সাহায্য করে।",
                            "এটি ঘুমের ঔষধ হিসেবে চমৎকার কাজ করে।", "সর্দি ও খুসখুসে কাশি জাদুকরী মত সেরে যায়।", "পাকস্থলী ও অন্ত্রের প্রদাহ দূর করে।",
                            "গ্যাস্ট্রিক ও কোষ্ঠকাঠিন্য দূর করে।", "শরীরের বিভিন্ন ধরনের ব্যথা দূর করে।", "মানসিক উত্তেজনা ও মানসিক অস্থিরতা দূর করে।",
                            "শরীর সতেজ রাখে।", "শারীরিক দুর্বলতা কাটায়।", "প্রসূতি মায়ের প্রসব-পরবর্তী ব্যথা ম্যাজিকের মত কমায়।",
                            "অ্যাজমা ও ব্রঙ্কাইটিস রোগে ঔষধের কাজ করে।", "কাশি, কফ, হাঁপানি, শ্বাসকষ্ট, জ্বর দূর করে।", "ডায়রিয়া ও রক্তস্বল্পতা দূর করে।"
                        ].map((benefit, i) => (
                            <div key={i} className="flex items-start gap-2">
                                <CheckCircle className="text-green-600 shrink-0 w-5 h-5 mt-1" />
                                <p className="text-gray-700 font-bold text-sm md:text-base">{benefit}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-10 text-center p-6 bg-yellow-50 rounded-xl border-2 border-dashed border-yellow-300">
                        <p className="text-lg font-bold">
                            কি ভাবছেন এতোগুলো গুণ থাকতে মাত্র <span className="text-red-600">“০৪-০৫ টি”</span> গুণের কথা বলছি, বাকি গুলো গেল কোথায়? সকল গুণই আছে আমাদের মিষ্টি মসলাতে। <span className="text-red-600">“এগুলো আপনার বোনাস!”</span>
                        </p>
                    </div>
                </div>
            </section>

            <OrderButton />

            {/* --- Section 9: Quote --- */}
            <section className="py-10 px-4 text-center max-w-4xl mx-auto">
                <p className="text-xl font-bold">
                    কেমন <span className="text-red-600 underline">১৮ টি রোগ থেকে ফার্মেসী মুক্ত থাকতে</span> “দেশ প্রেম শুধু মুরগীর” প্রতি না করে চুইঝালের প্রতিও করুন। কারণ এটা আপনার দেশেরই উৎপাদিত পণ্য। <span className="text-red-600">“আপনার গর্ব করা উচিত!”</span>
                </p>
            </section>

            {/* --- Section 10: Customer Reviews Slider --- */}
            <section className="bg-gray-100 py-16 px-4">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="bg-[#004d26] text-white inline-block px-8 py-3 rounded-md text-xl font-bold mb-10">আলহামদুলিল্লাহ, আমাদের সম্মানিত ক্লায়েন্টদের মতামত</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <img src="/images/review/review_1.webp" className="rounded-xl shadow-lg border-4 border-white" alt="Review 1" />
                        <img src="/images/review/review_2.webp" className="rounded-xl shadow-lg border-4 border-white" alt="Review 2" />
                        <img src="/images/review/review_3.webp" className="rounded-xl shadow-lg border-4 border-white" alt="Review 3" />
                    </div>
                </div>
            </section>

            {/* --- NEW SECTION: Food Pairing (আপনার দেওয়া ইমেজ অনুযায়ী) --- */}
            <section className="bg-white py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-black text-center text-slate-900 mb-10">
                        কোন কোন খাবারের সাথে খেতে পারি ?
                    </h2>

                    <div className="max-w-5xl mx-auto mb-12">
                        <p className="text-[#004d26] text-lg md:text-xl font-bold text-center leading-relaxed">
                            যে কোন মসলা জাতীয় খাবারের সাথে চুইঝাল খেতে পারেন। আপনি জানলে অবাক হবেন, খুলনাঞ্চলের মানুষ মুলার তরকারির সাথেও চুইঝাল খেয়ে থাকে। মাছ, মাংস, ডাল, তরকারি, চটপটি, হালিম, ভুনা খিচুড়ি সহ সকল প্রকার মসলা জাতীয় খাবারের সাথে খেতে পারেন। এতে করে আপনার খাবারে আসবে বৈচিত্র্য, খাবারের স্বাদ বাড়বে বহুগুণে। আপনি একদিকে পাবেন তৃপ্তি অন্যদিকে পাবেন স্বাস্থ্যগুণ।
                        </p>
                    </div>

                    {/* Food Slider */}
                    <div className="relative pb-12">
                        <Swiper
                            modules={[Pagination, Autoplay, Navigation]}
                            spaceBetween={20}
                            slidesPerView={1}
                            loop={true}
                            autoplay={{ delay: 3000 }}
                            pagination={{ clickable: true }}
                            navigation={true}
                            breakpoints={{
                                640: { slidesPerView: 2 },
                                1024: { slidesPerView: 3 },
                            }}
                            className="food-swiper"
                        >
                            {foodPairingItems.map((item) => (
                                <SwiperSlide key={item.id}>
                                    <div className="bg-white p-2 rounded-[2.5rem] shadow-lg border border-gray-100 overflow-hidden">
                                        <img
                                            src={item.img}
                                            alt={item.title}
                                            className="w-full aspect-square object-cover rounded-[2.2rem]"
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    {/* Warning Text */}
                    <div className="mt-12 text-center">
                        <h4 className="text-red-600 text-4xl md:text-7xl font-black uppercase tracking-tighter">
                            xx সাবধান xx
                        </h4>
                    </div>
                </div>
                <style jsx global>{`
                    .food-swiper .swiper-pagination-bullet { background: #000; opacity: 0.2; }
                    .food-swiper .swiper-pagination-bullet-active { background: #000 !important; opacity: 1; }
                    .food-swiper .swiper-button-next, .food-swiper .swiper-button-prev { color: #ccc; transform: scale(0.6); }
                `}</style>
            </section>

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
                                {/* Check Icon with specific Blue Color */}
                                <div className="mt-1 shrink-0">
                                    <Check
                                        size={24}
                                        strokeWidth={4}
                                        className="text-[#5AC8FA]"
                                    />
                                </div>

                                {/* Text with Deep Green Color */}
                                <p className="text-[#004d26] text-lg md:text-xl font-bold leading-relaxed">
                                    {point}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* --- Section 11: Pricing (Big Image Section) --- */}
            <section className="bg-[#004d26] py-16 px-4 relative">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
                    <div className="text-white md:w-1/2 space-y-6">
                        <h2 className="text-red-600 text-3xl md:text-5xl font-black">চুইঝাল মিষ্টি মসলার দাম</h2>
                        <div className="text-2xl font-bold space-y-2">
                            <p>পূর্বের দাম <span className="line-through text-red-500 text-3xl">১১৪০</span> টাকা।</p>
                            <p className="text-yellow-400">৪-৫ জনের একটি পরিবারের জন্য ৫০০ গ্রাম ১ থেকে ১.৫ মাস হয়ে যাবে।</p>
                        </div>
                        <div className="relative inline-block">
                            <div className="bg-white text-[#004d26] px-10 py-6 rounded-full text-3xl md:text-4xl font-black border-8 border-red-600 shadow-2xl">
                                ৫০০ গ্রাম মিষ্টি মসলা মাত্র <span className="text-red-600">১০৯০/-</span> টাকা।
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <img src="/images/cbfbd0c6-d9dd-4a12-8289-97c59d3ecca2-1.webp" className="w-full rounded-3xl shadow-2xl border-4 border-yellow-500" alt="Product Main" />
                    </div>
                </div>
            </section>

            {/* --- Section 12: Checkout Form --- */}
            <section className="py-20 px-4 bg-white" id="checkout-section">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {/* Billing Details (Keep your existing form here) */}
                    <div className="bg-white p-6 md:p-10 rounded-2xl border border-gray-200 shadow-xl">
                        <h3 className="text-2xl font-bold mb-8 border-b pb-4">Billing details</h3>
                        <form className="space-y-6">
                            <div>
                                <label className="block font-bold mb-2">আপনার নাম লিখুন *</label>
                                <input type="text" className="w-full border-2 border-gray-100 p-4 rounded-lg bg-gray-50 focus:border-[#004d26] outline-none transition" placeholder="উদাঃ মোঃ রহিম আলী" />
                            </div>
                            <div>
                                <label className="block font-bold mb-2">আপনার মোবাইল নাম্বার লিখুন *</label>
                                <input type="text" className="w-full border-2 border-gray-100 p-4 rounded-lg bg-gray-50 focus:border-[#004d26] outline-none transition" placeholder="উদাঃ 017XXXXXXXX" />
                            </div>
                            <div>
                                <label className="block font-bold mb-2">আপনার সম্পূর্ণ ঠিকানা লিখুন *</label>
                                <textarea className="w-full border-2 border-gray-100 p-4 rounded-lg bg-gray-50 focus:border-[#004d26] outline-none transition h-32" placeholder="আপনার গ্রাম, থানা এবং জেলার নাম লিখুন"></textarea>
                            </div>
                        </form>
                    </div>

                    {/* Order Summary */}
                    <div className="bg-gray-50 p-6 md:p-10 rounded-2xl border border-gray-200 shadow-xl">
                        <h3 className="text-2xl font-bold mb-8 border-b pb-4">Your order</h3>
                        <div className="space-y-4">
                            <div className="flex justify-between font-black text-lg pb-2 border-b">
                                <span>Product</span>
                                <span>Subtotal</span>
                            </div>
                            <div className="flex justify-between items-center py-4 border-b">
                                <div className="flex items-center gap-4">
                                    <img src="https://m3food.com/wp-content/uploads/2024/06/thumb.jpg" alt="thumb" className="w-16 h-16 rounded-lg object-cover border" />
                                    <span className="font-bold">চুইঝাল মিষ্টি মসলা × ১</span>
                                </div>
                                <span className="font-bold">1,090.00 BDT</span>
                            </div>
                            <div className="flex justify-between py-3 border-b">
                                <span className="font-bold">Subtotal</span>
                                <span className="font-bold">1,090.00 BDT</span>
                            </div>
                            <div className="flex justify-between py-4 border-b font-black text-xl text-[#004d26]">
                                <span>Total</span>
                                <span>1,090.00 BDT</span>
                            </div>

                            <div className="bg-white p-5 rounded-xl border border-dashed border-green-300 text-sm text-gray-600 mt-6 italic">
                                “কোন প্রকার অগ্রিম ছাড়াই ফ্রি হোম ডেলিভারি। আমরা শতভাগ গ্যারান্টি দিয়ে বলছি, আপনি মিষ্টি মসলা খেয়ে সন্তুষ্ট হবেন।”
                            </div>

                            <button className="w-full bg-[#004d26] text-white py-5 rounded-xl text-2xl font-black mt-8 hover:bg-[#00331a] transition-all flex items-center justify-center gap-3 shadow-xl transform active:scale-95">
                                <ShoppingCart /> অর্ডার করুন
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Footer --- */}
            <footer className="bg-[#00331a] text-white py-12 text-center border-t-4 border-yellow-500">
                <h2 className="text-3xl font-black mb-4">আমাদের অফিস</h2>
                <p className="text-lg opacity-80">এম থ্রি ফুড, খুলনা, বাংলাদেশ।</p>
                <div className="mt-8 flex justify-center gap-4">
                    <div className="bg-green-600 p-3 rounded-full animate-pulse cursor-pointer">
                        <MousePointer2 size={24} />
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default ProductLandingPage;