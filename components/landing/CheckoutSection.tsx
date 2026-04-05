"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ShoppingCart, ShieldCheck, CheckCircle2, Truck, Loader2, MapPin } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export const CheckoutSection = ({ productData }: { productData: any }) => {
    const router = useRouter();
    const { refreshCart, addToCart } = useCart(); // Use addToCart from context
    const product = productData?.data || productData;

    const [selectedVariant, setSelectedVariant] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    const [locationLoading, setLocationLoading] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        address: '',
        district: '',
        latitude: null as number | null,
        longitude: null as number | null
    });

    useEffect(() => {
        if (product?.variants?.length > 0) {
            setSelectedVariant(product.variants[0]);
        }
    }, [product]);

    useEffect(() => {
        detectLocation();
    }, []);

    const detectLocation = () => {
        if (!navigator.geolocation) return;
        setLocationLoading(true);
        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const { latitude, longitude } = position.coords;
                try {
                    const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`);
                    const data = await res.json();
                    const districtName = data.address.state_district || data.address.city || '';
                    setFormData(prev => ({ ...prev, latitude, longitude, district: districtName }));
                } catch (error) { console.error(error); } finally { setLocationLoading(false); }
            },
            () => setLocationLoading(false)
        );
    };

    if (!product || !product.name) return null;

    const activePrice = selectedVariant ? selectedVariant.pricing?.sale_price : product.price;
    const regularPrice = selectedVariant ? selectedVariant.pricing?.regular_price : product.regular_price;

    // --- UPDATED API HANDLER ---
    const handleOrder = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.name || !formData.phone || !formData.address) {
            alert("অনুগ্রহ করে সব তথ্য প্রদান করুন");
            return;
        }

        setLoading(true);

        try {
            const API_URL = process.env.NEXT_PUBLIC_API_URL;
            const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
            const sessionId = localStorage.getItem('cart_session_id');

            // 1. Force add THIS specific product to the cart first
            // This ensures the Multi-item API finds the item in the database
            const addSuccess = await addToCart(
                product.id, 
                activePrice, 
                1, 
                selectedVariant ? { variant_id: selectedVariant.id } : null
            );

            if (!addSuccess) {
                alert("অর্ডার প্রসেস করা যাচ্ছে না। আবার চেষ্টা করুন।");
                setLoading(false);
                return;
            }

            // 2. Submit the Order using session_id
            const response = await fetch(`${API_URL}/orders`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'X-API-KEY': API_KEY || ''
                },
                body: JSON.stringify({
                    name: formData.name,
                    phone: formData.phone,
                    address: formData.address,
                    district: formData.district,
                    latitude: formData.latitude,
                    longitude: formData.longitude,
                    session_id: sessionId, // API handles multiple items via this
                })
            });

            const result = await response.json();

            if (result.success) {
                localStorage.removeItem('cart_session_id'); // Clear after purchase
                refreshCart(); 
                router.push(`/order-success/${result.order_number}`);
            } else {
                alert(result.message || "অর্ডারটি সম্পন্ন করা সম্ভব হয়নি।");
            }
        } catch (error) {
            console.error("Order Error:", error);
            alert("সার্ভার সমস্যা!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="py-12 md:py-20 px-4 bg-[#f4f7f6]" id="checkout-section">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-black text-[#004d26] mb-3">
                        অর্ডার কনফার্ম করতে নিচের ফর্মটি পূরণ করুন
                    </h2>
                    <p className="text-gray-600 font-bold leading-relaxed">সঠিক তথ্য দিয়ে ফর্মটি পূরণ করুন, আমাদের প্রতিনিধি আপনাকে কল করবে।</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    <form onSubmit={handleOrder} className="bg-white p-6 md:p-8 rounded-3xl shadow-xl border border-gray-100">
                        <h3 className="text-xl font-bold mb-6 flex items-center gap-3 text-gray-800 border-b pb-4">
                            <span className="bg-[#004d26] text-white w-8 h-8 rounded-full flex items-center justify-center shadow-md">১</span>
                            শিপিং এড্রেস (Shipping Address)
                        </h3>

                        <div className="space-y-5">
                            <div className={`hidden p-3 rounded-xl items-center gap-3 text-sm font-bold transition-all ${formData.district ? 'bg-blue-50 text-blue-700 border border-blue-100' : 'bg-gray-50 text-gray-500'}`}>
                                <MapPin size={18} className={locationLoading ? "animate-bounce" : ""} />
                                {locationLoading ? "আপনার লোকেশন খোঁজা হচ্ছে..." :
                                    formData.district ? `লোকেশন পাওয়া গেছে: ${formData.district}` :
                                        "সঠিক ডেলিভারির জন্য লোকেশন পারমিশন দিন (ঐচ্ছিক)"}
                            </div>

                            <div className="group">
                                <label className="block text-sm font-bold mb-2 text-gray-700">আপনার নাম লিখুন *</label>
                                <input
                                    type="text"
                                    placeholder="নাম"
                                    className="w-full border-2 p-4 rounded-2xl outline-none focus:border-[#004d26] bg-gray-50 focus:bg-white transition-all font-bold"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-bold mb-2 text-gray-700">আপনার মোবাইল নাম্বার লিখুন *</label>
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
                                <label className="block text-sm font-bold mb-2 text-gray-700">আপনার সম্পূর্ণ ঠিকানা লিখুন *</label>
                                <textarea
                                    placeholder="গ্রাম, ডাকঘর, থানা ও জেলা"
                                    className="w-full border-2 p-4 rounded-2xl h-28 outline-none focus:border-[#004d26] bg-gray-50 focus:bg-white transition-all font-bold shadow-inner"
                                    required
                                    value={formData.address}
                                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="space-y-3 mt-4">
                            <div className="flex items-center gap-3 p-4 rounded-2xl bg-green-50 text-[#004d26] border border-green-100 font-bold text-sm md:text-base transition-all">
                                <ShieldCheck className="shrink-0 text-green-600" size={22} />
                                <span>ক্যাশ অন ডেলিভারি (পণ্য হাতে পেয়ে টাকা দিন)</span>
                            </div>

                            <div className="flex items-center gap-3 p-4 rounded-2xl bg-orange-50 text-orange-700 border border-orange-100 font-bold text-sm md:text-base transition-all">
                                <Truck className="shrink-0 text-orange-600" size={22} />
                                <span>সারা বাংলাদেশে ডেলিভারী চার্জ ফ্রি</span>
                            </div>
                        </div>
                    </form>

                    <div className="bg-white p-6 md:p-8 rounded-3xl shadow-xl border border-gray-100 lg:sticky lg:top-10">
                        <h3 className="text-xl font-bold mb-8 flex items-center gap-3 text-gray-800 border-b pb-4">
                            <span className="bg-[#004d26] text-white w-8 h-8 rounded-full flex items-center justify-center shadow-md">২</span>
                            অর্ডার ডিটেইলস (Order Details)
                        </h3>

                        <div className="flex items-center justify-between gap-4 mb-5 bg-gray-50 p-4 rounded-2xl border border-gray-100">
                            <div className="flex items-center gap-4">
                                <img
                                    src={selectedVariant?.thumbnail_url || product.thumbnail}
                                    className="w-20 h-20 md:w-24 md:h-24 rounded-2xl border-2 border-white shadow-lg object-cover bg-white"
                                    alt="Product"
                                />
                                <div>
                                    <h4 className="font-bold text-gray-800 text-lg md:text-xl leading-tight mb-1">{product.name}</h4>
                                    <p className="text-gray-500 font-bold text-sm md:text-base border-b-2 border-gray-200 inline-block pb-0.5">
                                        ভ্যারিয়েন্ট: {selectedVariant?.attributes?.[0]?.value || 'Standard'}
                                    </p>
                                </div>
                            </div>
                            <div className="text-right shrink-0">
                                <p className="text-gray-400 line-through text-sm md:text-base">৳{regularPrice}</p>
                                <p className="font-black text-2xl md:text-3xl text-slate-800">৳{activePrice}</p>
                            </div>
                        </div>

                        <div className="mb-8">
                            <label className="block text-sm font-black text-gray-600 mb-4 uppercase tracking-wider">প্যাকেজ নির্বাচন করুন:</label>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {product.variants?.map((variant: any) => (
                                    <div
                                        key={variant.id}
                                        onClick={() => setSelectedVariant(variant)}
                                        className={`cursor-pointer relative p-3 rounded-2xl border-2 transition-all duration-300 flex items-center gap-4 ${selectedVariant?.id === variant.id
                                            ? "border-[#004d26] bg-green-50 ring-4 ring-green-100"
                                            : "border-gray-100 bg-gray-50 hover:border-gray-200"
                                            }`}
                                    >
                                        <div className="shrink-0">
                                            <img
                                                src={variant.thumbnail_url || product.thumbnail}
                                                alt={variant.display_name}
                                                className="w-14 h-14 md:w-16 md:h-16 rounded-xl object-cover border-2 border-white shadow-sm bg-white"
                                            />
                                        </div>
                                        <div className="flex-grow">
                                            <div className="font-black text-[12px] text-gray-800 leading-tight">
                                                {variant.attributes?.[0]?.value || variant.name}
                                            </div>
                                            <div className="font-bold text-[#004d26] mt-1 text-lg">
                                                ৳{variant.pricing?.sale_price}
                                            </div>
                                        </div>
                                        {selectedVariant?.id === variant.id && (
                                            <div className="absolute -top-2 -right-2 bg-[#004d26] text-white rounded-full p-0.5 shadow-md">
                                                <CheckCircle2 size={20} />
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="flex justify-between items-center px-4 py-5 bg-[#004d26] rounded-2xl text-white shadow-lg">
                                <span className="text-xl font-bold">সর্বমোট:</span>
                                <span className="text-3xl font-black">৳{activePrice} BDT</span>
                            </div>

                            <button
                                onClick={handleOrder}
                                disabled={loading}
                                className="w-full bg-[#fad500] text-[#004d26] py-6 rounded-2xl text-2xl font-black hover:bg-[#e6c300] transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-4 transform hover:-translate-y-1 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {loading ? (
                                    <Loader2 className="animate-spin" size={32} />
                                ) : (
                                    <><ShoppingCart size={32} /> অর্ডার কনফার্ম করুন</>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};