import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { cache } from "react"; // API ডিডুপ্লিকেশনের জন্য
import "./globals.css";
import Header from "../components/template/Header";
import Footer from "../components/template/Footer";
import BottomBar from "../components/template/BottomBar";
import { CartProvider } from "../context/CartContext";

// --- SINGLE SHARED API CALL ---
// cache() ব্যবহারের ফলে একই রিকোয়েস্টে এই ফাংশন যতবারই কল হোক, fetch হবে মাত্র একবার।
const getSettings = cache(async () => {
    const API_URL = process.env.NEXT_PUBLIC_API_URL;
    const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
    console.log("Fetching settings from API...", API_URL);

    try {
        const res = await fetch(`${API_URL}/settings`, {
            headers: {
                'Accept': 'application/json',
                'X-API-KEY': API_KEY || ''
            },
            next: { revalidate: 3600 } // ১ ঘণ্টা ক্যাশ থাকবে
        });

        if (!res.ok) return null;

        const json = await res.json();
        return json.data;
    } catch (error) {
        console.error("Settings fetch failed:", error);
        return null;
    }
});

// --- GENERATE METADATA ---
export async function generateMetadata(): Promise<Metadata> {
    const settings = await getSettings();

    if (!settings) {
        return { title: "M3 Food | ১০০% খাঁটি ও অর্গানিক ফুড" };
    }

    return {
        title: settings.website_name || "M3 Food",
        description: settings.site_description || settings.tagline,
        icons: {
            icon: settings.favicon || '/images/favicon.jpg',
        },
        openGraph: {
            title: settings.website_name,
            description: settings.site_description,
            images: [settings.og_image || settings.logo || '/og-banner.jpg'],
            locale: 'bn_BD',
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: settings.website_name,
            images: [settings.og_image || settings.logo || '/og-banner.jpg'],
        }
    };
}

// --- FONTS ---
const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

// --- ROOT LAYOUT ---
export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    // এখানে কল করলেও এটি আগের ক্যাশ থেকে ডাটা নিবে, নতুন করে API হিট করবে না।
    const settings = await getSettings();

    return (
        <html lang="bn" suppressHydrationWarning>
            <body
                className={`${geistSans.variable} ${geistMono.variable} font-['Hind_Siliguri'] bg-white text-slate-900 antialiased`}
                suppressHydrationWarning
            >
                <CartProvider>
                    {/* Header-এ সেটিংস পাস করা হয়েছে */}
                    <Header settings={settings} />

                    <main className="min-h-screen">
                        {children}
                    </main>

                    <Footer settings={settings} />
                    <BottomBar settings={settings} />
                </CartProvider>
            </body>
        </html>
    );
}