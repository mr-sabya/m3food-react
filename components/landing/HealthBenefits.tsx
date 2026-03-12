import { CheckCircle } from 'lucide-react';

const benefits = [
    "খাবারের রুচি বাড়িয়ে ক্ষুধামন্দা দূর করে।",
    "দেহে কোলেস্টেরলের মাত্রা কমায়।",
    "ক্যান্সার প্রতিরোধে সাহায্য করে।",
    "এটি ঘুমের ঔষধ হিসেবে চমৎকার কাজ করে।",
    "সর্দি ও খুসখুসে কাশি জাদুকরী মত সেরে যায়।",
    "পাকস্থলী ও অন্ত্রের প্রদাহ দূর করে।",
    "গ্যাস্ট্রিক ও কোষ্ঠকাঠিন্য দূর করে।",
    "শরীরের বিভিন্ন ধরনের ব্যথা দূর করে।",
    "মানসিক উত্তেজনা ও মানসিক অস্থিরতা দূর করে।",
    "শরীর সতেজ রাখে।",
    "শারীরিক দুর্বলতা কাটায়।",
    "প্রসূতি মায়ের প্রসব-পরবর্তী ব্যথা ম্যাজিকের মত কমায়।",
    "অ্যাজমা ও ব্রঙ্কাইটিস রোগে ঔষধের কাজ করে।",
    "কাশি, কফ, হাঁপানি, শ্বাসকষ্ট, জ্বর দূর করে।",
    "ডায়রিয়া ও রক্তস্বল্পতা দূর করে।"
];

export const HealthBenefits = () => (
    <section className="bg-[#004d26] py-12 px-4">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl p-6 md:p-12 shadow-2xl relative overflow-hidden">
            <h2 className="text-blue-600 text-xl md:text-2xl font-bold text-center mb-8 border-b-2 border-blue-100 pb-4">
                গুগল সার্চ দিয়ে মিলিয়ে নিন দেশীয় চুইঝালের স্বাস্থ্য উপকারিতা ⤵
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-3">
                {benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-2">
                        <CheckCircle className="text-green-600 shrink-0 w-5 h-5 mt-1" />
                        <p className="text-gray-700 font-bold text-sm md:text-base">{benefit}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);