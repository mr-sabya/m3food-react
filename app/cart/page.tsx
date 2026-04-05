"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight, ShieldCheck, Truck, ChevronLeft, Loader2 } from 'lucide-react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

export default function CartPage() {
    const { refreshCart, updateQuantity, removeItem } = useCart();
    const [cartItems, setCartItems] = useState<any[]>([]);
    const [totalAmount, setTotalAmount] = useState(0);
    const [loading, setLoading] = useState(true);
    const [updatingId, setUpdatingId] = useState<number | null>(null);

    const API_URL = process.env.NEXT_PUBLIC_API_URL;
    const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

    const fetchCart = useCallback(async () => {
        const sessionId = localStorage.getItem('cart_session_id');
        console.log("Fetching cart with session ID:", sessionId);
        if (!API_URL || !sessionId) { setLoading(false); return; }

        try {
            const res = await fetch(`${API_URL}/cart?session_id=${sessionId}`, {
                method: 'GET',
                headers: { 'Accept': 'application/json', 'X-API-KEY': API_KEY || '' }
            });
            const result = await res.json();
            if (result.success) {
                setCartItems(result.data);
                setTotalAmount(result.total_amount);
            }
        } catch (error) { console.error(error); } finally { setLoading(false); }
    }, [API_URL, API_KEY]);

    useEffect(() => { fetchCart(); }, [fetchCart]);

    const handleUpdate = async (id: number, action: 'increase' | 'decrease') => {
        setUpdatingId(id);
        await updateQuantity(id, action);
        await fetchCart();
        setUpdatingId(null);
    };

    const handleRemove = async (id: number) => {
        if (!confirm('রিমুভ করতে চান?')) return;
        await removeItem(id);
        await fetchCart();
    };

    if (loading) return <div className="min-h-screen flex items-center justify-center"><Loader2 className="animate-spin text-[#004d26]" size={40} /></div>;

    return (
        <div className="bg-gray-50 min-h-screen font-['Hind_Siliguri'] pb-20">
            <div className="bg-[#004d26] py-12 md:py-20 text-center text-white px-4">
                <h1 className="text-3xl md:text-4xl font-black mb-2 flex items-center justify-center gap-3">
                    <ShoppingBag size={32} /> আপনার শপিং ব্যাগ
                </h1>
                <p className="opacity-80 font-bold">অর্ডার সম্পন্ন করতে নিচের ধাপগুলো অনুসরণ করুন</p>
            </div>

            <div className="max-w-7xl mx-auto px-4 -mt-10">
                {cartItems.length > 0 ? (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2 space-y-4">
                            <div className="bg-white p-6 rounded-[32px] shadow-sm border border-gray-100">
                                {cartItems.map((item) => (
                                    <div key={item.id} className="py-6 flex flex-col md:flex-row items-center gap-6 border-b last:border-0 relative">
                                        {updatingId === item.id && <div className="absolute inset-0 bg-white/60 z-10 flex items-center justify-center"><Loader2 className="animate-spin text-[#004d26]" /></div>}
                                        <img src={`${process.env.NEXT_PUBLIC_STORAGE_URL}/${item.product.thumbnail_image_path}`} className="w-24 h-24 rounded-2xl object-cover" alt="" />
                                        <div className="flex-grow text-center md:text-left">
                                            <h3 className="font-black text-lg text-slate-900">{item.product.name}</h3>
                                            <button onClick={() => handleRemove(item.id)} className="text-red-500 text-xs font-bold mt-2 flex items-center gap-1 mx-auto md:mx-0"><Trash2 size={14} /> রিমুভ</button>
                                        </div>
                                        <div className="flex items-center gap-3 bg-gray-100 p-1 rounded-xl">
                                            <button onClick={() => handleUpdate(item.id, 'decrease')} className="w-8 h-8 bg-white rounded-lg shadow-sm flex items-center justify-center"><Minus size={14} /></button>
                                            <span className="w-8 text-center font-black">{item.quantity}</span>
                                            <button onClick={() => handleUpdate(item.id, 'increase')} className="w-8 h-8 bg-white rounded-lg shadow-sm flex items-center justify-center"><Plus size={14} /></button>
                                        </div>
                                        <div className="text-right"><p className="font-black text-xl text-[#004d26]">৳{item.price * item.quantity}</p></div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="lg:col-span-1">
                            <div className="bg-white p-8 rounded-[32px] shadow-xl border border-gray-100 sticky top-24">
                                <h3 className="text-xl font-black mb-6 border-b pb-4">অর্ডার সামারি</h3>
                                <div className="space-y-4 mb-8 font-bold text-slate-600">
                                    <div className="flex justify-between"><span>সাব-টোটাল</span><span>৳{totalAmount}</span></div>
                                    <div className="flex justify-between"><span>ডেলিভারি</span><span>৳০</span></div>
                                    <div className="pt-4 border-t flex justify-between text-2xl font-black text-slate-900"><span>মোট</span><span className="text-[#004d26]">৳{totalAmount + 0}</span></div>
                                </div>
                                <Link href="/checkout" className="w-full bg-[#004d26] text-white py-5 rounded-2xl font-black flex items-center justify-center gap-3 hover:bg-black transition-all shadow-lg">
                                    চেকআউট করুন <ArrowRight size={20} />
                                </Link>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="bg-white rounded-[40px] shadow-xl py-24 text-center max-w-2xl mx-auto">
                        <ShoppingBag size={64} className="mx-auto text-gray-200 mb-6" />
                        <h2 className="text-3xl font-black mb-10">আপনার ব্যাগ খালি!</h2>
                        <Link href="/shop" className="bg-[#004d26] text-white px-12 py-4 rounded-2xl font-black">শপিং করুন</Link>
                    </div>
                )}
            </div>
        </div>
    );
}