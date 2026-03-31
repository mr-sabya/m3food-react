"use client";

import React, { useState, useEffect } from 'react';
import { ChevronRight, Loader2 } from 'lucide-react';
import ProductCard from '../product/ProductCard';
import { Product } from '../../types/product';
import Link from 'next/link';
import EmptyState from '../shared/EmptyState';

interface FeaturedProductsProps {
    onAddToCart: (product: Product) => void;
}

export default function FeaturedProducts({ onAddToCart }: FeaturedProductsProps) {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            try {
                const API_URL = process.env.NEXT_PUBLIC_API_URL;
                const API_KEY = process.env.NEXT_PUBLIC_API_KEY; // Get key from env

                const res = await fetch(`${API_URL}/products`, {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json',
                        'X-API-KEY': API_KEY || '' // মিডলওয়্যারের সাথে মিল রেখে সরাসরি কি পাঠানো হচ্ছে
                    }
                });

                if (!res.ok) throw new Error("Failed to fetch");

                const json = await res.json();
                setProducts(json.data || []);
            } catch (err) {
                console.error("Fetch error:", err);
                setError(true);
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    return (
        <section className="container mx-auto px-4 py-20 font-['Hind_Siliguri']">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                <div>
                    <h2 className="text-3xl font-black text-slate-900 leading-tight">আমাদের জনপ্রিয় পণ্য</h2>
                    <div className="h-1.5 w-20 bg-[#C41E3A] mt-2 rounded-full"></div>
                </div>
                {!loading && products.length > 0 && (
                    <Link href="/shop" className="text-[#C41E3A] font-bold flex items-center gap-1 hover:gap-2 transition-all">
                        সবগুলো দেখুন <ChevronRight size={20} />
                    </Link>
                )}
            </div>

            {/* Conditional Rendering Logic */}
            {loading ? (
                /* Professional Loading State */
                <div className="flex flex-col items-center justify-center py-20">
                    <Loader2 className="animate-spin text-[#15803D] mb-4" size={48} />
                    <p className="text-gray-500 font-bold animate-pulse">পণ্য লোড হচ্ছে, দয়া করে অপেক্ষা করুন...</p>
                </div>
            ) : error ? (
                /* Error State */
                <EmptyState
                    title="সার্ভারের সাথে সংযোগ বিচ্ছিন্ন"
                    message="দুঃখিত, এই মুহূর্তে পণ্যগুলো লোড করা সম্ভব হচ্ছে না। দয়া করে কিছুক্ষণ পর আবার চেষ্টা করুন।"
                    buttonText="রিলোড দিন"
                    buttonLink="/"
                />
            ) : products.length > 0 ? (
                /* Products Grid */
                <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                    {products.map((p) => (
                        <div key={p.id} className="w-[calc(50%-8px)] lg:w-[calc(25%-24px)] min-w-[160px] max-w-[300px]">
                            <ProductCard
                                product={p}
                                onAddToCart={() => onAddToCart(p)}
                            />
                        </div>
                    ))}
                </div>
            ) : (
                /* Empty State (No Products found) */
                <EmptyState
                    title="দুঃখিত, কোনো পণ্য পাওয়া যায়নি"
                    message="এই মুহূর্তে আমাদের কাছে কোনো জনপ্রিয় পণ্য নেই। নিয়মিত আপডেট পেতে আমাদের সাথেই থাকুন।"
                    buttonText="শপ পেজে যান"
                    buttonLink="/shop"
                />
            )}
        </section>
    );
}