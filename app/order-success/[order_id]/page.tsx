"use client";
import React from 'react';
import Link from 'next/link';
import { CheckCircle, Home, PhoneCall, Package, Calendar, ArrowRight } from 'lucide-react';
import { useParams } from 'next/navigation';

const SuccessPage = () => {
    const params = useParams();
    const orderNumber = params.order_id;

    return (
        <main className="min-h-screen bg-gray-50 py-12 px-4">
            <div className="max-w-3xl mx-auto">
                {/* Main Success Card */}
                <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-gray-100">

                    {/* Header Section */}
                    <div className="bg-[#004d26] py-12 px-6 text-center text-white relative">
                        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                            <svg width="100%" height="100%"><pattern id="pattern" width="40" height="40" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="white" /></pattern><rect width="100%" height="100%" fill="url(#pattern)" /></svg>
                        </div>

                        <div className="inline-flex items-center justify-center bg-white/20 backdrop-blur-md p-4 rounded-full mb-6">
                            <CheckCircle size={60} className="text-yellow-400" />
                        </div>
                        <h1 className="text-3xl md:text-5xl font-black mb-2">ধন্যবাদ!</h1>
                        <p className="text-xl opacity-90">আপনার অর্ডারটি সফলভাবে গ্রহণ করা হয়েছে।</p>
                    </div>

                    {/* Content Section */}
                    <div className="p-8 md:p-12">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10 pb-10 border-b border-gray-100">
                            <div className="text-center md:text-left">
                                <p className="text-gray-500 font-bold uppercase tracking-wider text-sm">অর্ডার নম্বর</p>
                                <h3 className="text-2xl font-black text-red-600">#{orderNumber}</h3>
                            </div>
                            <div className="flex items-center gap-4 bg-green-50 px-6 py-3 rounded-2xl border border-green-100">
                                <Calendar className="text-[#004d26]" />
                                <div>
                                    <p className="text-xs text-gray-500 font-bold uppercase">অর্ডার তারিখ</p>
                                    <p className="font-bold text-[#004d26]">{new Date().toLocaleDateString('bn-BD')}</p>
                                </div>
                            </div>
                        </div>

                        {/* What's Next? */}
                        <div className="space-y-6">
                            <h4 className="text-xl font-bold text-gray-800 mb-4">পরবর্তী পদক্ষেপ:</h4>

                            <div className="flex gap-4">
                                <div className="w-10 h-10 rounded-full bg-yellow-100 text-[#004d26] flex items-center justify-center shrink-0 font-bold">১</div>
                                <p className="text-gray-600 leading-relaxed pt-1">
                                    আমাদের কাস্টমার কেয়ার প্রতিনিধি খুব শীঘ্রই আপনাকে কল করে অর্ডারটি কনফার্ম করবেন।
                                </p>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-10 h-10 rounded-full bg-yellow-100 text-[#004d26] flex items-center justify-center shrink-0 font-bold">২</div>
                                <p className="text-gray-600 leading-relaxed pt-1">
                                    অর্ডার কনফার্ম হওয়ার ২-৩ কর্মদিবসের মধ্যে আপনার ঠিকানায় পণ্য পৌঁছে যাবে।
                                </p>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-10 h-10 rounded-full bg-yellow-100 text-[#004d26] flex items-center justify-center shrink-0 font-bold">৩</div>
                                <p className="text-gray-600 leading-relaxed pt-1">
                                    পণ্য হাতে পেয়ে চেক করে ডেলিভারি ম্যানকে টাকা পরিশোধ করবেন (ক্যাশ অন ডেলিভারি)।
                                </p>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <Link href="/" className="flex items-center justify-center gap-3 bg-gray-100 text-gray-700 py-5 rounded-2xl font-bold hover:bg-gray-200 transition-all">
                                <Home size={20} /> কেনাকাটা চালিয়ে যান
                            </Link>
                            <a href="tel:01XXXXXXXXX" className="flex items-center justify-center gap-3 bg-[#004d26] text-white py-5 rounded-2xl font-bold hover:bg-[#00331a] transition-all shadow-lg">
                                <PhoneCall size={20} /> সরাসরি কল করুন
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Trust Badge */}
                <p className="mt-10 text-center text-gray-400 font-medium flex items-center justify-center gap-2">
                    <Package size={18} /> এম ৩ ফুড এর সাথেই থাকুন
                </p>
            </div>
        </main>
    );
};

export default SuccessPage;