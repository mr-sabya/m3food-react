import { Metadata } from "next";
import SuccessClient from "./SuccessClient";

export async function generateMetadata({ params }: any): Promise<Metadata> {
    const resolvedParams = await params;
    const orderId = resolvedParams.order_id;

    return {
        title: `অর্ডার সফল - #${orderId} | M3 Food`,
        description: "আপনার অর্ডারটি সফলভাবে গ্রহণ করা হয়েছে।",
        robots: { index: false, follow: false }, // সাকসেস পেজ ইনডেক্স হওয়া উচিত নয়
    };
}

export default function Page() {
    return <SuccessClient />;
}