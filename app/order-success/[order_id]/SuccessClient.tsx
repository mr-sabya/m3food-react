// app/order-success/[order_id]/SuccessClient.tsx
"use client";
import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { CheckCircle2, Home, PhoneCall, Package, Calendar, MapPin } from 'lucide-react';

const SuccessClient = () => {
    const params = useParams();
    const orderId = params.order_id;

    return (
        <main className="min-h-screen bg-[#f0f4f2] flex items-center justify-center p-4 font-['Hind_Siliguri']">
            <div className="w-full max-w-2xl bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-green-100">

                {/* Header: Success Message */}
                <div className="bg-[#004d26] p-8 text-center text-white relative">
                    <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/leaf.png')]"></div>

                    <div className="relative inline-block">
                        <div className="bg-white/20 p-3 rounded-full backdrop-blur-sm mb-4">
                            <CheckCircle2 size={50} className="text-[#fad500]" />
                        </div>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-black mb-1">অর্ডার সফল হয়েছে!</h1>
                    <p className="text-green-100 text-lg">M3 Food-এ কেনাকাটা করার জন্য ধন্যবাদ।</p>
                </div>

                {/* Order Summary Card */}
                <div className="p-6 md:p-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                        <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 flex items-center gap-4">
                            <div className="bg-green-100 p-2 rounded-xl text-[#004d26]">
                                <Package size={24} />
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 font-bold uppercase">অর্ডার নম্বর</p>
                                <p className="font-black text-[#004d26] text-lg">#{orderId}</p>
                            </div>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 flex items-center gap-4">
                            <div className="bg-green-100 p-2 rounded-xl text-[#004d26]">
                                <Calendar size={24} />
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 font-bold uppercase">অর্ডার তারিখ</p>
                                <p className="font-bold text-gray-800">{new Date().toLocaleDateString('bn-BD')}</p>
                            </div>
                        </div>
                    </div>

                    {/* Compact Next Steps */}
                    <div className="space-y-4 mb-8">
                        <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                            <span className="w-1.5 h-6 bg-[#fad500] rounded-full inline-block"></span>
                            এরপর কী হবে?
                        </h3>
                        <div className="grid grid-cols-1 gap-3">
                            <div className="flex items-start gap-3 bg-blue-50/50 p-3 rounded-xl border border-blue-50">
                                <div className="w-6 h-6 rounded-full bg-[#004d26] text-white flex items-center justify-center shrink-0 font-bold text-xs">১</div>
                                <p className="text-sm text-gray-700">আমাদের প্রতিনিধি আপনাকে কল করে অর্ডারটি নিশ্চিত করবেন।</p>
                            </div>
                            <div className="flex items-start gap-3 bg-blue-50/50 p-3 rounded-xl border border-blue-50">
                                <div className="w-6 h-6 rounded-full bg-[#004d26] text-white flex items-center justify-center shrink-0 font-bold text-xs">২</div>
                                <p className="text-sm text-gray-700">আগামী ২-৩ কর্মদিবসের মধ্যে আপনার ঠিকানায় পণ্য পৌঁছে যাবে।</p>
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            href="/"
                            className="flex-1 flex items-center justify-center gap-2 bg-gray-100 text-gray-700 py-4 rounded-xl font-bold hover:bg-gray-200 transition-all active:scale-95"
                        >
                            <Home size={20} /> হোম পেজে যান
                        </Link>
                        <a
                            href="tel:01XXXXXXXXX" // এখানে আপনার আসল নাম্বার দিন
                            className="flex-1 flex items-center justify-center gap-2 bg-[#fad500] text-[#004d26] py-4 rounded-xl font-black hover:shadow-lg transition-all active:scale-95"
                        >
                            <PhoneCall size={20} /> সাহায্য পেতে কল করুন
                        </a>
                    </div>

                    {/* Small Footer Message */}
                    <div className="mt-8 pt-6 border-t border-gray-100 text-center">
                        <p className="text-gray-400 text-sm flex items-center justify-center gap-2">
                            আমাদের পণ্য পছন্দ হলে বন্ধুদের সাথে শেয়ার করুন <span className="text-red-400">♥</span>
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default SuccessClient;