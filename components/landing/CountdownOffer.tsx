"use client";
import React, { useState, useEffect } from 'react';

export const CountdownOffer = () => {
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

    return (
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
    );
};