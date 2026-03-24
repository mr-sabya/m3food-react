"use client"; // This must be a client component to handle clicks/props

import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import ProductCard from '../product/ProductCard';
import { Product } from '../../types/product';
import Link from 'next/link';
import EmptyState from '../shared/EmptyState';

interface Props {
    // If you are fetching inside this component, 
    // you might not need 'products' as a prop anymore.
    onAddToCart: (product: Product) => void;
}

export default function FeaturedProducts({ onAddToCart }: Props) {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`);
                const json = await res.json();
                setProducts(json.data || []);
            } catch (error) {
                console.error("Fetch error:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    if (loading) return <div className="py-20 text-center">লোড হচ্ছে...</div>;

    return (
        <section className="container mx-auto px-4 py-20">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                <div>
                    <h2 className="text-3xl font-black text-slate-900">আমাদের জনপ্রিয় পণ্য</h2>
                    <div className="h-1.5 w-20 bg-[#C41E3A] mt-2 rounded-full"></div>
                </div>
                {products.length > 0 && (
                    <Link href="/shop" className="text-[#C41E3A] font-bold flex items-center gap-1 hover:gap-2 transition-all">
                        সবগুলো দেখুন <ChevronRight size={20} />
                    </Link>
                )}
            </div>

            {products.length > 0 ? (
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
                <EmptyState
                    title="দুঃখিত, কোনো পণ্য পাওয়া যায়নি"
                    message="এই মুহূর্তে আমাদের কাছে কোনো জনপ্রিয় পণ্য নেই।"
                    buttonText="শপ পেজে যান"
                    buttonLink="/shop"
                />
            )}
        </section>
    );
}