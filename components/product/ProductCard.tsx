"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // Added for redirection
import { Heart, Loader2, ShoppingCart, Zap } from 'lucide-react';
import { Product } from '../../types/product';
import { useCart } from '../../context/CartContext';

type Props = {
    product: Product;
};

export default function ProductCard({ product }: Props) {
    const { addToCart } = useCart();
    const router = useRouter(); // Initialize router
    const [loading, setLoading] = useState(false);
    const [isOrdering, setIsOrdering] = useState(false);

    // 1. Add to Cart only
    const handleAdd = async () => {
        setLoading(true);
        // Passing product.id and product.price to the context
        await addToCart(product.id, product.price);
        setLoading(false);
    };

    // 2. Add to Cart and Redirect to Cart Page (Direct Order)
    const handleOrderNow = async () => {
        setIsOrdering(true);
        const success = await addToCart(product.id, product.price);
        if (success) {
            router.push('/cart'); // Redirect to cart or checkout
        }
        setIsOrdering(false);
    };

    return (
        <div className="group relative bg-white border border-gray-100 rounded-3xl p-3 md:p-5 hover:shadow-2xl transition duration-500 flex flex-col items-center w-full">

            {/* Image Container */}
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-gray-50 mb-4 w-full">
                <Link href={`/product/${product.slug}`}>
                    <img
                        src={product.thumbnail}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                    />
                </Link>

                {product.tag && (
                    <span className="absolute top-3 left-3 bg-[#C41E3A] text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-tighter">
                        {product.tag}
                    </span>
                )}

                <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md text-gray-300 hover:text-red-500 transition opacity-0 group-hover:opacity-100">
                    <Heart size={18} />
                </button>
            </div>

            {/* Text & Price Info */}
            <div className="text-center space-y-2 w-full flex flex-col flex-grow">
                <Link href={`/product/${product.slug}`}>
                    <h3 className="font-bold text-sm md:text-base text-slate-800 line-clamp-2 leading-snug hover:text-[#004d26] transition">
                        {product.name}
                    </h3>
                </Link>

                <div className="flex items-center justify-center gap-2">
                    {product.oldPrice && (
                        <span className="text-gray-300 line-through text-xs md:text-sm">৳{product.oldPrice}</span>
                    )}
                    <span className="text-[#C41E3A] font-black text-lg md:text-xl">৳{product.price}</span>
                </div>

                <div className="mt-auto pt-3 space-y-2">
                    {/* Add to Cart Button */}
                    <button
                        onClick={handleAdd}
                        disabled={loading || isOrdering}
                        className="w-full border-2 border-[#15803D] text-[#15803D] py-2 rounded-xl font-bold text-xs md:text-sm flex items-center justify-center gap-2 hover:bg-[#15803D] hover:text-white transition-all disabled:opacity-50"
                    >
                        {loading ? <Loader2 className="animate-spin" size={16} /> : <ShoppingCart size={16} />}
                        কার্টে যোগ করুন
                    </button>

                    <Link
                        href={`/product/${product.slug}`}
                        className="w-full bg-[#15803D] text-white py-2.5 rounded-xl font-bold text-xs md:text-sm shadow-md hover:bg-[#0e5a2a] transition active:scale-95 flex items-center justify-center gap-2"
                    >
                        <Zap size={16} fill="white" /> অর্ডার করুন
                    </Link>
                </div>
            </div>
        </div>
    );
}