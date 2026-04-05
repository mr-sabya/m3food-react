"use client";

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { ChevronLeft, FileText, Loader2 } from 'lucide-react';
import Link from 'next/link';

// 1. Define the Interface for the API response
interface PageData {
    id: number;
    title: string;
    slug: string;
    content: string;
    published_at: string | null;
    updated_at: string;
    seo: {
        meta_title: string;
        meta_description: string;
        meta_keywords: string;
        meta_robots: string;
        canonical_url: string;
        og_image: string | null;
    };
}

export default function DynamicPolicyPage() {
    const params = useParams();
    const slug = params.slug as string;

    // 2. Explicitly type the state
    const [page, setPage] = useState<PageData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);

    useEffect(() => {
        const fetchPage = async () => {
            try {
                setLoading(true);
                const API_URL = process.env.NEXT_PUBLIC_API_URL;
                const API_KEY = process.env.NEXT_PUBLIC_API_KEY; // Get key from env

                const response = await fetch(`${API_URL}/pages/${slug}`, {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json',
                        'X-API-KEY': API_KEY || '' // মিডলওয়্যারের সাথে মিল রেখে সরাসরি কি পাঠানো হচ্ছে
                    }
                });

                if (!response.ok) {
                    throw new Error('Page not found');
                }

                const result = await response.json();
                setPage(result.data);
                setError(false);
            } catch (err) {
                console.error("Fetch error:", err);
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        if (slug) {
            fetchPage();
        }
    }, [slug]);

    // 3. Type the date string parameter
    const formatDate = (dateString: string | null | undefined): string => {
        if (!dateString) return "অজানা";
        try {
            const date = new Date(dateString);
            return date.toLocaleDateString('bn-BD', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
        } catch (e) {
            return "অজানা";
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <Loader2 className="animate-spin text-[#004d26]" size={48} />
            </div>
        );
    }

    if (error || !page) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
                <div className="text-center bg-white p-12 rounded-[40px] shadow-xl max-w-md w-full">
                    <h1 className="text-6xl font-black text-[#004d26] mb-4">৪০৪</h1>
                    <p className="text-slate-500 font-bold mb-8 text-lg">পেজটি খুঁজে পাওয়া যায়নি!</p>
                    <Link href="/" className="bg-[#004d26] text-white px-8 py-4 rounded-2xl font-black">
                        হোমে ফিরে যান
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-gray-50 min-h-screen font-['Hind_Siliguri'] pb-20">

            <div className="bg-[#004d26] pt-20 pb-28 text-center text-white px-4 relative overflow-hidden">
                <div className="max-w-4xl mx-auto relative z-10">
                    <h1 className="text-3xl md:text-5xl font-black mb-4">{page.title}</h1>
                    <p className="text-sm md:text-base opacity-80 font-bold tracking-widest uppercase bg-black/10 inline-block px-4 py-2 rounded-full">
                        সর্বশেষ আপডেট: {formatDate(page.published_at || page.updated_at)}
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 -mt-16 relative z-20">
                <div className="bg-white rounded-[40px] shadow-2xl border border-gray-100 p-8 md:p-16">

                    <Link href="/" className="inline-flex items-center gap-2 text-slate-400 font-bold mb-10 hover:text-[#004d26] transition-colors text-sm group">
                        <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        হোমে ফিরে যান
                    </Link>

                    {/* Content using dangerouslySetInnerHTML */}
                    <article className="prose prose-slate prose-lg max-w-none font-medium text-slate-600 leading-relaxed">
                        <div
                            dangerouslySetInnerHTML={{ __html: page.content }}
                            className="space-y-4"
                        />
                    </article>

                    <div className="mt-20 p-8 bg-emerald-50 rounded-[32px] border border-dashed border-[#004d26]/20 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div>
                            <h4 className="font-black text-slate-900 mb-1 text-xl">বুঝতে অসুবিধা হচ্ছে?</h4>
                            <p className="text-sm text-slate-500 font-bold">যেকোনো পলিসি সম্পর্কে বিস্তারিত জানতে সরাসরি আমাদের সাথে যোগাযোগ করুন।</p>
                        </div>
                        <Link href="tel:+8801XXXXXXX" className="bg-[#004d26] text-white px-8 py-4 rounded-2xl font-black hover:bg-black transition-all shadow-md text-sm whitespace-nowrap">
                            কল করুন
                        </Link>
                    </div>
                </div>
            </div>

            <style jsx>{`
                article :global(h1), article :global(h2), article :global(h3) {
                    color: #0f172a;
                    font-weight: 900;
                    margin-top: 2rem;
                    margin-bottom: 1rem;
                }
                article :global(p) {
                    margin-bottom: 1.2rem;
                }
                article :global(ul) {
                    list-style-type: disc;
                    padding-left: 1.5rem;
                    margin-bottom: 1.2rem;
                }
            `}</style>
        </div>
    );
}