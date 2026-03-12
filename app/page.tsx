"use client";

import React, { useState } from 'react';
import Hero from '../components/home/Hero';
import TrustBadges from '../components/home/TrustBadges';
import FeaturedProducts from '../components/home/FeaturedProducts';
import { featuredProducts } from '../data/products';

export default function M3FoodHome() {
    const [cartCount, setCartCount] = useState(0);

    const handleAddToCart = () => {
        setCartCount(prev => prev + 1);
        alert("পণ্যটি কার্টে যোগ করা হয়েছে!");
    };

    return (
        <main>
            {/* ১. হিরো সেকশন */}
            <Hero />

            {/* ২. ট্রাস্ট ব্যাজ সেকশন */}
            <TrustBadges />

            {/* ৩. পপুলার প্রোডাক্ট সেকশন */}
            <FeaturedProducts
                products={featuredProducts}
                onAddToCart={handleAddToCart}
            />

            {/* ভবিষ্যতে এখানে আরও সেকশন যোগ করতে পারবেন */}
        </main>
    );
}