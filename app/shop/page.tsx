"use client";

import React, { useState, useEffect } from 'react';
import { featuredProducts as products } from "../../data/products";
import ProductCard from "../../components/product/ProductCard";
import { Product } from "@/types/product";
import { SlidersHorizontal, X } from 'lucide-react';

export default function ShopPage() {
    // ডাটা কাস্টিং এরর এড়াতে unknown ব্যবহার করা হয়েছে
    const allProducts = products as unknown as Product[];

    const [filteredProducts, setFilteredProducts] = useState<Product[]>(allProducts);
    const [sortBy, setSortBy] = useState("default");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

    const categories = ["All", "Chuijhal", "Achar", "Honey", "Combo"];

    useEffect(() => {
        let result = [...allProducts];

        // ১. ক্যাটাগরি ফিল্টার
        if (selectedCategory !== "All") {
            result = result.filter(p => p.categories.includes(selectedCategory));
        }

        // ২. সর্টিং লজিক
        if (sortBy === "price-low") {
            result.sort((a, b) => a.price - b.price);
        } else if (sortBy === "price-high") {
            result.sort((a, b) => b.price - a.price);
        } else if (sortBy === "newest") {
            result.sort((a, b) => b.id - a.id);
        }

        setFilteredProducts(result);
    }, [sortBy, selectedCategory, allProducts]);

    return (
        <div className="bg-gray-50 min-h-screen font-['Hind_Siliguri']">

            {/* --- Banner --- */}
            <div className="bg-[#004d26] py-16 text-center text-white px-4">
                <h1 className="text-4xl md:text-6xl font-black mb-4">আমাদের পণ্য সম্ভার</h1>
                <p className="text-lg opacity-80 max-w-2xl mx-auto">খাঁটি চুইঝাল এবং ঘরোয়া আচারের শুদ্ধতায় আপনার প্রতিদিনের খাবার হোক আরও সুস্বাদু।</p>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-10">
                <div className="flex flex-col lg:flex-row gap-8">

                    {/* --- Sidebar Filter (Desktop) --- */}
                    <aside className="hidden lg:block w-1/4">
                        <div className="sticky top-24 space-y-6">
                            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                                <h3 className="text-xl font-bold mb-6 text-slate-900 border-b pb-3">ফিল্টার বাই ক্যাটাগরি</h3>
                                <div className="space-y-2">
                                    {categories.map((cat) => (
                                        <button
                                            key={cat}
                                            onClick={() => setSelectedCategory(cat)}
                                            className={`w-full text-left px-4 py-3 rounded-xl font-bold transition-all flex justify-between items-center ${selectedCategory === cat
                                                ? "bg-[#004d26] text-white shadow-lg"
                                                : "text-slate-600 hover:bg-gray-50"
                                                }`}
                                        >
                                            {cat}
                                            {selectedCategory === cat && <span className="w-2 h-2 bg-white rounded-full"></span>}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-[#004d26] p-6 rounded-3xl text-white">
                                <h4 className="font-bold text-lg mb-2">বিশেষ অফার!</h4>
                                <p className="text-sm opacity-80">যেকোনো ৩টি পণ্য অর্ডারে সারা দেশে ডেলিভারি ফ্রি!</p>
                            </div>
                        </div>
                    </aside>

                    {/* --- Main Grid Area --- */}
                    <main className="lg:w-3/4">

                        {/* --- Sort Bar --- */}
                        <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 mb-8 flex flex-wrap items-center justify-between gap-4">
                            <div className="flex items-center gap-4">
                                <button
                                    onClick={() => setIsMobileFilterOpen(true)}
                                    className="lg:hidden flex items-center gap-2 bg-[#004d26] text-white px-5 py-2.5 rounded-xl font-bold"
                                >
                                    <SlidersHorizontal size={18} /> ফিল্টার
                                </button>
                                <p className="text-slate-500 font-medium">মোট {filteredProducts.length} টি পণ্য</p>
                            </div>

                            <div className="flex items-center gap-3">
                                <span className="text-sm font-bold text-slate-700">সর্ট করুন:</span>
                                <select
                                    onChange={(e) => setSortBy(e.target.value)}
                                    className="bg-gray-50 border-none rounded-xl px-4 py-2.5 text-sm font-bold outline-none ring-1 ring-gray-200 focus:ring-2 focus:ring-[#004d26]"
                                >
                                    <option value="default">ডিফল্ট</option>
                                    <option value="newest">নতুন পণ্য</option>
                                    <option value="price-low">দাম: কম থেকে বেশি</option>
                                    <option value="price-high">দাম: বেশি থেকে কম</option>
                                </select>
                            </div>
                        </div>

                        {/* --- Product Grid --- */}
                        {filteredProducts.length > 0 ? (
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
                                {filteredProducts.map(p => (
                                    <ProductCard key={p.id} product={p} />
                                ))}
                            </div>
                        ) : (
                            <div className="bg-white rounded-3xl py-32 text-center border-2 border-dashed border-gray-200">
                                <p className="text-slate-400 text-lg">এই ক্যাটাগরিতে কোনো পণ্য খুঁজে পাওয়া যায়নি!</p>
                            </div>
                        )}
                    </main>
                </div>
            </div>

            {/* --- Mobile Sidebar Overlay --- */}
            {isMobileFilterOpen && (
                <div className="fixed inset-0 z-50 lg:hidden">
                    <div className="absolute inset-0 bg-black/50" onClick={() => setIsMobileFilterOpen(false)}></div>
                    <div className="absolute left-0 top-0 bottom-0 w-4/5 bg-white p-6 shadow-2xl animate-slideRight">
                        <div className="flex justify-between items-center mb-8">
                            <h3 className="text-xl font-bold">ফিল্টার</h3>
                            <button onClick={() => setIsMobileFilterOpen(false)}><X /></button>
                        </div>
                        <div className="space-y-3">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => { setSelectedCategory(cat); setIsMobileFilterOpen(false); }}
                                    className={`w-full text-left px-4 py-4 rounded-xl font-bold ${selectedCategory === cat ? "bg-[#004d26] text-white" : "bg-gray-50 text-slate-600"
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            <style jsx>{`
                @keyframes slideRight {
                    from { transform: translateX(-100%); }
                    to { transform: translateX(0); }
                }
                .animate-slideRight {
                    animation: slideRight 0.3s ease-out forwards;
                }
            `}</style>
        </div>
    );
}