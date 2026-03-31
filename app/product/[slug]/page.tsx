import { notFound } from "next/navigation";
import { SectionRenderer } from "../../../components/landing/SectionRenderer";
import { CheckoutSection } from "../../..//components/landing/CheckoutSection";
import { OrderButton } from "@/components/landing/OrderButton";
import { PricingSection } from "@/components/landing/PricingSection";

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
            <PricingSection productData={product} />

            {/* Checkout Form */}
            <CheckoutSection productData={product} />

            <footer className="bg-[#00331a] text-white py-12 text-center border-t-4 border-yellow-500">
                <h2 className="text-3xl font-black mb-4">আমাদের অফিস</h2>
                <p className="text-lg opacity-80">এম থ্রি ফুড, খুলনা, বাংলাদেশ।</p>
            </footer>
        </div>
    );
}