import React from 'react';
import { ShoppingBag, ArrowLeft } from 'lucide-react';
import Link from 'next/link'; // Import from next/link, NOT react-router-dom

interface EmptyStateProps {
    title: string;
    message: string;
    buttonText?: string;
    buttonLink?: string;
}

export default function EmptyState({ title, message, buttonText, buttonLink }: EmptyStateProps) {
    return (
        <div className="flex flex-col items-center justify-center py-20 px-4 text-center bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200 w-full">
            <div className="bg-white p-6 rounded-full shadow-sm mb-6">
                <ShoppingBag size={48} className="text-gray-300" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-2">{title}</h3>
            <p className="text-gray-500 max-w-xs mx-auto mb-8">{message}</p>

            {buttonText && buttonLink && (
                <Link
                    href={buttonLink} // Next.js uses 'href', not 'to'
                    className="flex items-center gap-2 bg-[#15803D] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#0e5a2a] transition-all"
                >
                    <ArrowLeft size={18} /> {buttonText}
                </Link>
            )}
        </div>
    );
}