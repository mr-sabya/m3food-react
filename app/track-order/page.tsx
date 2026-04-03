"use client";

import React, { useState } from 'react';
import {
    Search, Package, Truck, CheckCircle, MapPin,
    Clock, Box, ChevronRight
} from 'lucide-react';

// সংশোধিত মক ডাটা (ইংরেজি সংখ্যা ব্যবহার করা হয়েছে)
const MOCK_ORDER = {
    id: "ORD-992817",
    status: "In Transit",
    currentStep: 2,
    estimatedDate: "২৪ অক্টোবর, ২০২৪",
    customer: {
        name: "আরিফ হোসেন",
        address: "সেক্টর ৭, উত্তরা, ঢাকা ১২৩০",
        phone: "017XXXXXXXX"
    },
    items: [
        { name: "খাঁটি চুইঝাল স্পেশাল", price: 450, qty: 1 },
        { name: "মধু মিশ্রিত ঘরোয়া আচার", price: 320, qty: 1 }
    ],
    timeline: [
        { title: "অর্ডার কনফার্ম করা হয়েছে", time: "২০ Oct, ০৯:৩০ AM", active: true },
        { title: "প্যাকিং সম্পন্ন", time: "২১ Oct, ০২:১৫ PM", active: true },
        { title: "কুরিয়ারে পাঠানো হয়েছে", time: "২২ Oct, ১১:০০ AM", active: true },
        { title: "আপনার শহরে পৌঁছেছে", time: "অপেক্ষমান", active: false },
        { title: "ডেলিভারি সম্পন্ন", time: "অপেক্ষমান", active: false },
    ]
};

// সংখ্যাকে বাংলায় রূপান্তর করার ফাংশন (ঐচ্ছিক, সৌন্দর্যের জন্য)
const toBengaliNumber = (num: number) => {
    const symbols: { [key: string]: string } = {
        '0': '০', '1': '১', '2': '২', '3': '৩', '4': '৪', '5': '৫', '6': '৬', '7': '৭', '8': '৮', '9': '৯'
    };
    return num.toString().replace(/\d/g, (d) => symbols[d]);
};

export default function OrderTracking() {
    const [orderId, setOrderId] = useState("");
    const [order, setOrder] = useState<typeof MOCK_ORDER | null>(null);
    const [loading, setLoading] = useState(false);

    const handleTrack = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setOrder(MOCK_ORDER);
            setLoading(false);
        }, 1000);
    };

    return (
        <div className="bg-gray-50 min-h-screen font-['Hind_Siliguri'] pb-20">

            {/* Header */}
            <div className="bg-[#004d26] py-16 text-center text-white px-4">
                <h1 className="text-3xl md:text-4xl font-black mb-4">অর্ডার ট্র্যাকিং</h1>
                <p className="text-lg opacity-80 max-w-2xl mx-auto">
                    আপনার অর্ডার আইডি ব্যবহার করে পার্সেলের বর্তমান অবস্থা জেনে নিন।
                </p>
            </div>

            <div className="max-w-6xl mx-auto px-4 -mt-10">
                <div className="bg-white p-6 rounded-3xl shadow-xl border border-gray-100 max-w-3xl mx-auto mb-12">
                    <form onSubmit={handleTrack} className="flex flex-col md:flex-row gap-4">
                        <div className="relative flex-grow">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                            <input
                                type="text"
                                placeholder="অর্ডার আইডি দিন (যেমন: ORD-992817)"
                                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-gray-50 border-none ring-1 ring-gray-200 focus:ring-2 focus:ring-[#004d26] outline-none font-bold transition-all"
                                value={orderId}
                                onChange={(e) => setOrderId(e.target.value)}
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={loading}
                            className="bg-[#004d26] text-white px-8 py-4 rounded-2xl font-black hover:bg-[#003d1e] transition-all shadow-lg"
                        >
                            {loading ? "খুঁজছি..." : "ট্র্যাক করুন"}
                        </button>
                    </form>
                </div>

                {order && (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-fadeIn">
                        <div className="lg:col-span-2 space-y-6">
                            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                                <div className="flex justify-between items-center mb-10">
                                    <div>
                                        <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">অর্ডার স্ট্যাটাস</p>
                                        <h2 className="text-2xl font-black text-[#004d26] mt-1">{order.status}</h2>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-sm text-slate-500 font-bold">সম্ভাব্য ডেলিভারি</p>
                                        <p className="text-lg font-black text-slate-900">{order.estimatedDate}</p>
                                    </div>
                                </div>

                                <div className="relative flex justify-between mb-12">
                                    <div className="absolute top-5 left-0 w-full h-1 bg-gray-100 -z-0"></div>
                                    <div
                                        className="absolute top-5 left-0 h-1 bg-[#004d26] -z-0 transition-all duration-1000"
                                        style={{ width: `${(order.currentStep / (order.timeline.length - 1)) * 100}%` }}
                                    ></div>

                                    {order.timeline.map((step, i) => (
                                        <div key={i} className="relative z-10 flex flex-col items-center">
                                            <div className={`w-10 h-10 rounded-full flex items-center justify-center border-4 border-white shadow-md ${i <= order.currentStep ? "bg-[#004d26] text-white" : "bg-gray-200 text-gray-500"
                                                }`}>
                                                {i < order.currentStep ? <CheckCircle size={18} /> : <Box size={18} />}
                                            </div>
                                            <p className={`mt-3 text-xs font-black hidden md:block ${i <= order.currentStep ? "text-slate-900" : "text-gray-400"}`}>
                                                {step.title}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                <div className="space-y-8 mt-10">
                                    {order.timeline.slice().reverse().map((step, i) => (
                                        <div key={i} className="flex gap-6">
                                            <div className="flex flex-col items-center">
                                                <div className={`w-4 h-4 rounded-full ${step.active ? "bg-[#004d26] ring-4 ring-green-100" : "bg-gray-300"}`}></div>
                                                {i !== order.timeline.length - 1 && <div className="w-0.5 h-16 bg-gray-100 mt-2"></div>}
                                            </div>
                                            <div className="-mt-1">
                                                <h4 className={`font-black ${step.active ? "text-slate-900" : "text-gray-400"}`}>{step.title}</h4>
                                                <p className="text-sm text-slate-500 font-bold">{step.time}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="bg-[#004d26] text-white p-8 rounded-3xl shadow-lg">
                                <h3 className="text-xl font-black mb-6 border-b border-white/20 pb-4">অর্ডার সামারি</h3>
                                <div className="space-y-4">
                                    {order.items.map((item, idx) => (
                                        <div key={idx} className="flex justify-between items-center">
                                            <div>
                                                <p className="font-bold">{item.name}</p>
                                                <p className="text-xs opacity-70">পরিমাণ: {toBengaliNumber(item.qty)}</p>
                                            </div>
                                            <p className="font-black">৳{toBengaliNumber(item.price)}</p>
                                        </div>
                                    ))}
                                    <div className="pt-4 border-t border-white/20 flex justify-between items-center text-xl font-black">
                                        <span>মোট</span>
                                        <span>৳{toBengaliNumber(770)}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                                <div className="flex items-center gap-3 mb-4 text-[#004d26]">
                                    <MapPin size={20} />
                                    <h4 className="font-black">ডেলিভারি ঠিকানা</h4>
                                </div>
                                <div className="text-slate-600 font-bold text-sm">
                                    <p className="text-slate-900 mb-1">{order.customer.name}</p>
                                    <p>{order.customer.address}</p>
                                    <p className="mt-2 text-xs">মোবাইল: {order.customer.phone}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {!order && !loading && (
                    <div className="max-w-3xl mx-auto mt-8">
                        <div className="bg-white rounded-3xl py-20 px-6 text-center border-2 border-dashed border-gray-200 shadow-sm animate-fadeIn">
                            <div className="bg-green-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Package className="text-[#004d26] opacity-40" size={40} />
                            </div>
                            <h3 className="text-2xl font-black text-slate-800 mb-3">
                                আপনার অর্ডার ট্র্যাক করুন
                            </h3>
                            <p className="text-slate-500 font-bold max-w-sm mx-auto leading-relaxed">
                                অর্ডার করার সময় আপনি যে <span className="text-[#004d26]">অর্ডার আইডি (Order ID)</span> পেয়েছেন সেটি উপরের বক্সে লিখুন এবং "ট্র্যাক করুন" বাটনে ক্লিক করুন।
                            </p>
                            <div className="mt-8 flex items-center justify-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest">
                                <Clock size={14} />
                                <span>২৪/৭ রিয়েল-টাইম আপডেট</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
        </div>
    );
}