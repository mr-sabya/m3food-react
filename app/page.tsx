// app/page.tsx
import HomeClient from '../components/home/HomeClient';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/settings`, {
            next: { revalidate: 3600 }
        });

        let siteData = null;
        if (res.ok) {
            const json = await res.json();
            siteData = json.data || json;
        }

        return {
            title: siteData?.site_name
                ? `${siteData.site_name} | ১০০% খাঁটি ও অর্গানিক ফুড`
                : "M3 Food | ১০০% খাঁটি ও স্বাস্থ্যসম্মত অর্গানিক ফুড অনলাইন শপ",

            description: siteData?.meta_description ||
                "এম ৩ ফুড (M3 Food) দিচ্ছে ১০০% খাঁটি মধু, প্রিমিয়াম ড্রাই ফ্রুটস, চিয়া সিডস এবং স্বাস্থ্যসম্মত অর্গানিক খাবার। সারা বাংলাদেশে ক্যাশ অন ডেলিভারি।",

            alternates: {
                canonical: 'https://m3food.com',
            },

            openGraph: {
                title: "M3 Food - সুস্থ জীবনের জন্য খাঁটি ও প্রাকৃতিক খাবার",
                description: "প্রিমিয়াম কোয়ালিটির মধু, ঘি, খেজুর এবং বাদাম সহ সকল অর্গানিক ফুড এখন আপনার হাতের নাগালে। সারা বাংলাদেশে হোম ডেলিভারি।",
                url: 'https://m3food.com',
                siteName: 'M3 Food',
                images: [
                    {
                        url: siteData?.og_image || 'https://m3food.com/og-banner.jpg',
                        width: 1200,
                        height: 630,
                    },
                ],
                locale: 'bn_BD',
                type: 'website',
            },
            twitter: {
                card: 'summary_large_image',
                title: "M3 Food | Best Organic Food Shop in Bangladesh",
                images: [siteData?.og_image || 'https://m3food.com/og-banner.jpg'],
            },
        };
    } catch (error) {
        return {
            title: "M3 Food | ১০০% খাঁটি ও স্বাস্থ্যসম্মত অর্গানিক ফুড",
            description: "সেরা মানের মধু, ঘি এবং ড্রাই ফ্রুটস কিনুন M3 Food থেকে।",
        };
    }
}

export default function M3FoodHome() {
    return <HomeClient />;
}