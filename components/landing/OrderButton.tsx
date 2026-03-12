"use client";
import React from 'react';

export const OrderButton = () => (
    <div className="text-center py-6">
        <button
            onClick={() => document.getElementById('checkout-section')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#004d26] hover:bg-[#00331a] text-white text-lg md:text-xl font-bold px-8 py-3 rounded-md shadow-lg flex items-center gap-2 mx-auto transition-transform active:scale-95 border-b-4 border-[#002211]"
        >
            <span className="animate-bounce">👉</span> অর্ডার করতে চাই
        </button>
    </div>
);