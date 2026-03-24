import { notFound } from "next/navigation";
import { SectionRenderer } from "../../../components/landing/SectionRenderer";
import { CheckoutSection } from "../../..//components/landing/CheckoutSection";
import { OrderButton } from "@/components/landing/OrderButton";

async function getProduct(slug: string) {
    // Adding a console log here to debug in your terminal
    console.log("Fetching from:", `${process.env.NEXT_PUBLIC_API_URL}/products/${slug}`);

    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${slug}`, {
            cache: 'no-store'
        });

        if (!res.ok) {
            console.error("API Error Status:", res.status);
            return null;
        }
        return res.json();
    } catch (error) {
        console.error("Fetch Connection Failed:", error);
        return null;
    }
}
export default async function ProductLandingPage({ params }: { params: { slug: string } }) {
    const { slug } = await params; // <--- ADD THIS LINE

    const response = await getProduct(slug);

    // If API returns null or doesn't have data, trigger 404
    if (!response || !response.data) {
        console.log("Product data missing, showing 404");
        notFound();
    }

    const product = response.data;


    return (
        <div className="bg-white font-['Hind_Siliguri'] text-slate-800 leading-relaxed overflow-x-hidden">
            {/* Dynamic Rendering of Laravel Sections */}
            {product.sections.map((section: any) => (
                <div key={section.id}>
                    <SectionRenderer section={section} />
                    {/* Optional: Add a floating order button after specific sections if needed */}
                </div>
            ))}

            {/* Final Price Section */}
            <section className="bg-[#004d26] py-16 px-4">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
                    <div className="text-white md:w-1/2 space-y-6 text-center md:text-left">
                        <h2 className="text-red-600 text-3xl md:text-5xl font-black">{product.name} এর দাম</h2>
                        <div className="text-2xl font-bold space-y-2">
                            <p>পূর্বের দাম <span className="line-through text-red-500 text-3xl">৳{product.regular_price}</span> টাকা।</p>
                            <p className="text-yellow-400">সাশ্রয়: ৳{product.savings} টাকা ({product.discount_percent}%)</p>
                        </div>
                        <div className="relative inline-block mt-4">
                            <div className="bg-white text-[#004d26] px-10 py-6 rounded-full text-2xl md:text-4xl font-black border-8 border-red-600 shadow-2xl">
                                বর্তমান দাম মাত্র <span className="text-red-600">৳{product.price}/-</span> টাকা।
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <img src={product.thumbnail} className="w-full rounded-3xl shadow-2xl border-4 border-yellow-500" alt={product.name} />
                    </div>
                </div>
            </section>

            {/* Checkout Form */}
            <CheckoutSection product={product} />

            <footer className="bg-[#00331a] text-white py-12 text-center border-t-4 border-yellow-500">
                <h2 className="text-3xl font-black mb-4">আমাদের অফিস</h2>
                <p className="text-lg opacity-80">এম থ্রি ফুড, খুলনা, বাংলাদেশ।</p>
            </footer>
        </div>
    );
}