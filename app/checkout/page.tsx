"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ShoppingCart, ShieldCheck, Truck, Loader2, MapPin, ShoppingBag, ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

export default function CheckoutPage() {
    const router = useRouter();
    const { refreshCart } = useCart();

    // Data States
    const [cartItems, setCartItems] = useState<any[]>([]);
    const [totalAmount, setTotalAmount] = useState(0);
    const [pageLoading, setPageLoading] = useState(true);
    const [loading, setLoading] = useState(false);
    const [locationLoading, setLocationLoading] = useState(false);

    // Form States
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        address: '',
        district: '',
        latitude: null as number | null,
        longitude: null as number | null
    });

    const API_URL = process.env.NEXT_PUBLIC_API_URL;
    const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
    const STORAGE_URL = process.env.NEXT_PUBLIC_STORAGE_URL || 'http://127.0.0.1:8000/storage';

    // --- 1. Fetch Cart Data ---
    useEffect(() => {
        const fetchCart = async () => {
            const sessionId = localStorage.getItem('cart_session_id');
            if (!sessionId) {
                router.push('/cart');
                return;
            }

            try {
                const res = await fetch(`${API_URL}/cart?session_id=${sessionId}`, {
                    headers: {
                        'Accept': 'application/json',
                        'X-API-KEY': API_KEY || ''
                    }
                });
                const result = await res.json();

                if (result.success && result.data.length > 0) {
                    setCartItems(result.data);
                    setTotalAmount(result.total_amount);
                } else {
                    router.push('/cart'); // Redirect if cart is empty
                }
            } catch (error) {
                console.error("Cart fetch error:", error);
            } finally {
                setPageLoading(false);
            }
        };

        fetchCart();
        detectLocation();
    }, [API_URL, API_KEY, router]);

    // --- 2. Auto-detect Location Logic ---
    const detectLocation = () => {
        if (!navigator.geolocation) return;

        setLocationLoading(true);
        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const { latitude, longitude } = position.coords;
                try {
                    const res = await fetch(
                        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
                    );
                    const data = await res.json();
                    const districtName = data.address.state_district || data.address.city || data.address.county || '';

                    setFormData(prev => ({
                        ...prev,
                        latitude: latitude,
                        longitude: longitude,
                        district: districtName
                    }));
                } catch (error) {
                    console.error("Location error:", error);
                } finally {
                    setLocationLoading(false);
                }
            },
            () => setLocationLoading(false)
        );
    };

    // --- 3. Handle Order Submission ---
    const handleOrder = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.name || !formData.phone || !formData.address) {
            alert("অনুগ্রহ করে আপনার নাম, মোবাইল এবং ঠিকানা প্রদান করুন।");
            return;
        }

        setLoading(true);

        const payload = {
            name: formData.name,
            phone: formData.phone,
            address: formData.address,
            district: formData.district,
            latitude: formData.latitude,
            longitude: formData.longitude,
            session_id: localStorage.getItem('cart_session_id'), // Send session ID
        };

        try {
            const response = await fetch(`${API_URL}/orders`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'X-API-KEY': API_KEY || ''
                },
                body: JSON.stringify(payload)
            });

            const result = await response.json();

            if (result.success) {
                // IMPORTANT: Clear cart locally and in header
                localStorage.removeItem('cart_session_id');
                refreshCart();
                router.push(`/order-success/${result.order_number}`);
            } else {
                alert(result.message || "অর্ডারটি সম্পন্ন করা সম্ভব হয়নি।");
            }
        } catch (error) {
            console.error("Order Error:", error);
            alert("দুঃখিত, সার্ভারে সমস্যা হয়েছে। কিছুক্ষণ পর চেষ্টা করুন।");
        } finally {
            setLoading(false);
        }
    };

    if (pageLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#f4f7f6]">
                <Loader2 className="animate-spin text-[#004d26]" size={40} />
            </div>
        );
    }

    return (
        <section className="py-12 md:py-20 px-4 bg-[#f4f7f6] font-['Hind_Siliguri']">
            <div className="max-w-6xl mx-auto">
                {/* Header info */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-5xl font-black text-[#004d26] mb-4">
                        অর্ডার কনফার্ম করুন
                    </h2>
                    <p className="text-gray-600 font-bold max-w-lg mx-auto leading-relaxed">
                        নিচের ফর্মে আপনার সঠিক তথ্য দিন। আমাদের প্রতিনিধি আপনাকে ফোন করে অর্ডারটি কনফার্ম করবে।
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

                    {/* LEFT COLUMN: Shipping Form */}
                    <form onSubmit={handleOrder} className="bg-white p-8 rounded-[40px] shadow-2xl border border-gray-100">
                        <div className="flex items-center justify-between mb-8 border-b pb-4">
                            <h3 className="text-xl font-black text-gray-800 flex items-center gap-3">
                                <span className="bg-[#004d26] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">১</span>
                                শিপিং এড্রেস (Shipping)
                            </h3>
                            <Link href="/cart" className="text-xs font-bold text-[#004d26] flex items-center gap-1 hover:underline">
                                <ChevronLeft size={14} /> কার্টে ফিরে যান
                            </Link>
                        </div>

                        <div className="space-y-6">
                            {/* Location Detection Status */}
                            <div className={`p-4 rounded-2xl flex items-center gap-3 text-sm font-bold transition-all ${formData.district ? 'bg-green-50 text-green-700 border border-green-100' : 'bg-gray-50 text-gray-400 border border-dashed'}`}>
                                <MapPin size={20} className={locationLoading ? "animate-bounce" : ""} />
                                {locationLoading ? "আপনার লোকেশন খোঁজা হচ্ছে..." :
                                    formData.district ? `শনাক্তকৃত জেলা: ${formData.district}` :
                                        "সঠিক ডেলিভারির জন্য আপনার লোকেশন শনাক্ত করা হচ্ছে..."}
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-black mb-2 text-gray-700">আপনার পূর্ণ নাম লিখুন *</label>
                                    <input
                                        type="text"
                                        placeholder="উদা: আব্দুল্লাহ আল মামুন"
                                        className="w-full border-2 p-4 rounded-2xl outline-none focus:border-[#004d26] bg-gray-50 focus:bg-white transition-all font-bold"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-black mb-2 text-gray-700">মোবাইল নাম্বার লিখুন *</label>
                                    <input
                                        type="tel"
                                        placeholder="01XXXXXXXXX"
                                        className="w-full border-2 p-4 rounded-2xl outline-none focus:border-[#004d26] bg-gray-50 focus:bg-white transition-all font-bold"
                                        required
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-black mb-2 text-gray-700">সম্পূর্ণ ঠিকানা লিখুন *</label>
                                    <textarea
                                        placeholder="গ্রাম, ডাকঘর, থানা ও জেলা"
                                        className="w-full border-2 p-4 rounded-2xl h-32 outline-none focus:border-[#004d26] bg-gray-50 focus:bg-white transition-all shadow-inner font-bold"
                                        required
                                        value={formData.address}
                                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="space-y-3 pt-4">
                                <div className="flex items-center gap-4 p-5 rounded-3xl bg-green-50 text-[#004d26] border border-green-100 font-black shadow-sm">
                                    <ShieldCheck className="shrink-0 text-green-600" size={24} />
                                    <span>ক্যাশ অন ডেলিভারি (পণ্য হাতে পেয়ে টাকা দিন)</span>
                                </div>
                                <div className="flex items-center gap-4 p-5 rounded-3xl bg-orange-50 text-orange-700 border border-orange-100 font-black shadow-sm">
                                    <Truck className="shrink-0 text-orange-600" size={24} />
                                    <span>সারা বাংলাদেশে ডেলিভারী চার্জ একদম ফ্রি</span>
                                </div>
                            </div>
                        </div>
                    </form>

                    {/* RIGHT COLUMN: Order Summary */}
                    <div className="bg-white p-8 rounded-[40px] shadow-2xl border border-gray-100 lg:sticky lg:top-10">
                        <h3 className="text-xl font-black mb-8 flex items-center gap-3 text-gray-800 border-b pb-4">
                            <span className="bg-[#004d26] text-white w-8 h-8 rounded-full flex items-center justify-center shadow-md text-sm">২</span>
                            অর্ডার ডিটেইলস (Summary)
                        </h3>

                        {/* Item List Scrollable */}
                        <div className="max-h-[350px] overflow-y-auto mb-8 space-y-4 pr-3 custom-scrollbar">
                            {cartItems.map((item) => (
                                <div key={item.id} className="flex items-center gap-5 bg-gray-50 p-4 rounded-[24px] border border-gray-100 group">
                                    <div className="w-20 h-20 rounded-2xl overflow-hidden shrink-0 border-4 border-white shadow-md">
                                        <img
                                            src={`${STORAGE_URL}/${item.product.thumbnail_image_path}`}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                            alt={item.product.name}
                                        />
                                    </div>
                                    <div className="flex-grow">
                                        <h4 className="font-black text-gray-800 text-base leading-tight mb-1">{item.product.name}</h4>
                                        <p className="text-sm text-gray-500 font-bold">{item.quantity} টি × ৳{item.price}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-black text-[#004d26] text-lg">৳{item.price * item.quantity}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Totals Section */}
                        <div className="space-y-4 pt-6 border-t-2 border-dashed border-gray-100">
                            <div className="flex justify-between items-center text-gray-500 font-bold px-2">
                                <span>সাব-টোটাল (Subtotal):</span>
                                <span className="text-slate-800">৳{totalAmount}</span>
                            </div>
                            <div className="flex justify-between items-center text-orange-600 font-black px-2 text-sm uppercase tracking-tighter">
                                <span>ডেলিভারি চার্জ (Delivery):</span>
                                <span>ফ্রি (FREE)</span>
                            </div>

                            <div className="flex justify-between items-center px-6 py-6 bg-[#004d26] rounded-3xl text-white shadow-xl mt-8">
                                <span className="text-xl font-bold">সর্বমোট:</span>
                                <span className="text-4xl font-black tracking-tight">৳{totalAmount}</span>
                            </div>

                            <button
                                onClick={handleOrder}
                                disabled={loading}
                                className="w-full bg-[#fad500] text-[#004d26] py-6 rounded-3xl text-2xl font-black hover:bg-yellow-400 transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-4 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed mt-6 transform hover:-translate-y-1"
                            >
                                {loading ? (
                                    <Loader2 className="animate-spin" size={32} />
                                ) : (
                                    <><ShoppingCart size={32} /> অর্ডার কনফার্ম করুন</>
                                )}
                            </button>

                            <p className="text-center text-[10px] font-bold text-gray-400 mt-4 uppercase tracking-widest">
                                নিরাপদ পেমেন্ট এবং ১০০% গুণগত মানের নিশ্চয়তা
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 5px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: #f8fafc;
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #cbd5e1;
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: #004d26;
                }
            `}</style>
        </section>
    );
}