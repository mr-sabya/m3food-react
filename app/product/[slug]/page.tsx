import { notFound } from "next/navigation";
import { Metadata } from "next";
import { SectionRenderer } from "@/components/landing/SectionRenderer";
import { CheckoutSection } from "@/components/landing/CheckoutSection";
import { PricingSection } from "@/components/landing/PricingSection";

// --- COMMON API HANDLER ---
// This handles security, headers, and error logging for both Metadata and UI
async function getProductData(slug: string) {
    const API_URL = process.env.NEXT_PUBLIC_API_URL;
    const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

    try {
        const res = await fetch(`${API_URL}/products/${slug}`, {
            headers: {
                'Accept': 'application/json',
                'X-API-KEY': API_KEY || '', // Added security key
            },
            // Revalidate every 1 hour (3600s) or use { cache: 'no-store' } for real-time
            next: { revalidate: 3600 }
        });

        if (!res.ok) {
            console.error(`API Fetch Error: ${res.status} for slug: ${slug}`);
            return null;
        }

        const json = await res.json();
        return json.data || json; // Standardize response
    } catch (error) {
        console.error("Connection to Laravel failed:", error);
        return null;
    }
}

// --- GENERATE METADATA ---
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const product = await getProductData(slug);

    if (!product) {
        return { title: "Product Not Found | M3FOOD" };
    }

    return {
        title: `${product.name} - M3FOOD | খাঁটি অর্গানিক ফুড`,
        description: product.short_description || "সেরা মানের স্বাস্থ্যসম্মত পণ্য কিনুন M3 Food থেকে।",
        openGraph: {
            title: product.name,
            description: product.short_description,
            images: [product.thumbnail],
            type: 'website',
            url: `https://m3food.com/products/${slug}`,
        },
        twitter: {
            card: 'summary_large_image',
            images: [product.thumbnail],
        }
    };
}

// --- MAIN PAGE COMPONENT ---
export default async function ProductLandingPage({ params }: { params: Promise<{ slug: string }> }) {
    // Next.js 15 requirement: await params
    const { slug } = await params;

    const product = await getProductData(slug);

    // If product doesn't exist, trigger 404
    if (!product) {
        notFound();
    }

    return (
        <div className="bg-white font-['Hind_Siliguri'] text-slate-800 leading-relaxed overflow-x-hidden">

            {/* 1. Dynamic Rendering of Laravel Sections */}
            {product.sections?.length > 0 ? (
                product.sections.map((section: any) => (
                    <div key={section.id} className="w-full">
                        <SectionRenderer section={section} />
                    </div>
                ))
            ) : (
                /* Fallback if no sections exist */
                <div className="py-20 text-center">
                    <h1 className="text-4xl font-black text-[#004d26]">{product.name}</h1>
                </div>
            )}

            {/* 2. Final Price Section (Anchor for "Order Now" buttons) */}
            <div id="pricing">
                <PricingSection productData={product} />
            </div>

            {/* 3. Checkout Form */}
            <div id="checkout">
                <CheckoutSection productData={product} />
            </div>

            {/* 4. M3FOOD Footer */}
            <footer className="bg-[#002b15] text-white py-16 text-center border-t-8 border-[#fad500]">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl font-black mb-4">আমাদের সাথে থাকার জন্য ধন্যবাদ</h2>
                    <p className="text-lg opacity-80 mb-6">
                        এম থ্রি ফুড (M3 Food) - আমরা অঙ্গীকারবদ্ধ আপনাকে সেরা মানের এবং ১০০% খাঁটি পণ্য সরবরাহ করতে।
                    </p>
                    <div className="h-px bg-white/20 w-full mb-6"></div>
                    <p className="text-sm opacity-60">
                        সদর দপ্তর: খুলনা, বাংলাদেশ। <br />
                        সর্বস্বত্ব সংরক্ষিত &copy; {new Date().getFullYear()} - M3 Food
                    </p>
                </div>
            </footer>
        </div>
    );
}