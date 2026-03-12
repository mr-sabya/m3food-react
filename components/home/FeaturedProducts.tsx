import React from 'react';
import { ChevronRight } from 'lucide-react';
import ProductCard from '../product/ProductCard';
import { Product } from '../../types/product';
import Link from 'next/link';

interface Props {
    products: Product[];
    onAddToCart: () => void;
}

export default function FeaturedProducts({ products, onAddToCart }: Props) {
    return (
        <section className="container mx-auto px-4 py-20">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                <div>
                    <h2 className="text-3xl font-black text-slate-900">আমাদের জনপ্রিয় পণ্য</h2>
                    <div className="h-1.5 w-20 bg-[#C41E3A] mt-2 rounded-full"></div>
                </div>
                <Link href="/shop" className="text-[#C41E3A] font-bold flex items-center gap-1 hover:gap-2 transition-all">
                    সবগুলো দেখুন <ChevronRight size={20} />
                </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                {products.map((p) => (
                    <div key={p.id} className="w-[calc(50%-8px)] lg:w-[calc(25%-24px)] min-w-[160px] max-w-[300px]">
                        <ProductCard
                            product={p}
                            onAddToCart={onAddToCart}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}