"use client";

import React from 'react';

export const ProductVideo = () => {
    // এখানে আপনার ইউটিউব ভিডিওর আইডি বসান
    const videoId = "YOUR_VIDEO_ID"; // উদাঃ dQw4w9WgXcQ

    return (
        <section className="py-12 px-4 bg-white font-['Hind_Siliguri']">
            <div className="max-w-4xl mx-auto">

                {/* --- Video Heading (Optional) --- */}
                <div className="text-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-black text-[#004d26] inline-block border-b-4 border-yellow-400 pb-2">
                        আমাদের চুইঝাল মিষ্টি মসলার রিভিউ দেখুন
                    </h2>
                </div>

                {/* --- Video Container with Premium Styling --- */}
                <div className="relative group">
                    {/* Decorative Background Glow */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-green-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>

                    {/* Main Iframe Wrapper */}
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-4 border-white bg-black">
                        <iframe
                            className="w-full h-full"
                            src={`https://www.youtube.com/embed/${videoId}?rel=0&showinfo=0&controls=1`}
                            title="M3Food Product Video"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>

                {/* --- Trust Badge under Video --- */}
                <p className="text-center mt-6 text-gray-500 font-bold italic">
                    "ভিডিওটি দেখলে আপনি আমাদের পণ্যের মান সম্পর্কে নিশ্চিত হতে পারবেন"
                </p>
            </div>
        </section>
    );
};