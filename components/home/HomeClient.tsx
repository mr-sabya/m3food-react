// app/components/home/HomeClient.tsx
"use client";

import React, { useState } from 'react';
import Hero from './Hero';
import TrustBadges from './TrustBadges';
import FeaturedProducts from './FeaturedProducts';

export default function HomeClient() {
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
                onAddToCart={handleAddToCart}
            />
        </main>
    );
}