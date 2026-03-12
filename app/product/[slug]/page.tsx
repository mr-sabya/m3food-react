"use client";

import React from 'react';
import { MousePointer2 } from 'lucide-react';

// কম্পোনেন্টগুলো ইমপোর্ট করুন (পাথ আপনার প্রজেক্ট অনুযায়ী চেক করে নিন)
import { TopBanner } from '@/components/landing/TopBanner';
import { MediaReports } from '@/components/landing/MediaReports';
import { OrderButton } from '@/components/landing/OrderButton';
import { ProductVideo } from '@/components/landing/ProductVideo';
import { CountdownOffer } from '@/components/landing/CountdownOffer';
import { HealthBenefits } from '@/components/landing/HealthBenefits';
import { FoodPairing } from '@/components/landing/FoodPairing';
import { WhyDifferent } from '@/components/landing/WhyDifferent';
import { CheckoutSection } from '@/components/landing/CheckoutSection';
import { BonusSection } from '@/components/landing/BonusSection';
import { CustomerReviews } from '@/components/landing/CustomerReviews';
import { ProductGallerySlider } from '@/components/landing/ProductGallery';

export default function ProductLandingPage() {
    return (
        <div className="bg-white font-['Hind_Siliguri'] text-slate-800 leading-relaxed overflow-x-hidden">

            {/* ১. টপ ব্যানার ও ইনোভেশন বার */}
            <TopBanner />

            {/* ২. মিডিয়া রিপোর্ট সেকশন */}
            <MediaReports />

            <OrderButton />

            {/* ৩. প্রোডাক্ট ভিডিও সেকশন */}
            <ProductVideo />

            <OrderButton />

            {/* ৪. অফার কাউন্টডাউন সেকশন */}
            <CountdownOffer />

            {/* ৫. গ্যালারি সেকশন (৪টি বক্স ইমেজ) */}
            <section className="py-12 px-4">
                <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
                    <img src="/images/card-1.1.webp" className="rounded-lg shadow-md hover:scale-105 transition" alt="Info 1" />
                    <img src="/images/card-2.1.webp" className="rounded-lg shadow-md hover:scale-105 transition" alt="Info 2" />
                    <img src="/images/card-3.webp" className="rounded-lg shadow-md hover:scale-105 transition" alt="Info 3" />
                    <img src="/images/card-4.webp" className="rounded-lg shadow-md hover:scale-105 transition" alt="Info 4" />
                </div>
            </section>

            <OrderButton />

            {/* ৬. টেক্সট ইনফো সেকশন (ঔষধ না খাবার) */}
            <section className="py-10 px-4 text-center max-w-4xl mx-auto">
                <p className="text-lg md:text-xl font-medium leading-relaxed">
                    চুইঝাল খুলনাঞ্চলের একটি <span className="text-red-600 font-bold">ঐতিহ্যবাহী ঔষধি খাবার।</span> বাছাইকৃত চুইঝাল, তাল মিসরি, গোল মরিচ এবং এমথ্রি ফুডের একটি স্পেশাল মসলা দিয়ে সম্পূর্ণ ঘরোয়া পদ্ধতিতে তৈরি করছি চুইঝাল মিষ্টি মসলা।
                </p>
                <div className="mt-10">
                    <h3 className="text-red-600 text-2xl font-bold mb-4">আপনি কি ভাবছেন এটা কোন ঔষধ?</h3>
                    <p className="text-lg">
                        এটা কোন ঔষধ না। এটা খাবার। খেতে পারবে সবাই। খুলনার চুইঝালের <span className="text-red-600 font-bold">ইনস্ট্যান্ট</span> রোগ প্রতিরোধ ক্ষমতাকে কাজে লাগিয়ে <span className="text-red-600 font-bold underline">০৪-০৫ টি</span> রোগকে মাথায় রেখে মিষ্টি মসলাটি বিশেষ উপায়ে তৈরি করা হয়েছে।
                    </p>
                </div>
            </section>

            {/* ৭. স্বাস্থ্য উপকারিতা লিস্ট */}
            <HealthBenefits />

            <BonusSection />  {/* এই নতুন সেকশনটি এখানে বসবে */}

            {/* --- আপনার কাঙ্ক্ষিত গ্যালারি সেকশন --- */}
            <ProductGallerySlider />

            <CustomerReviews />  {/* এই নতুন রিভিউ সেকশনটি এখানে বসবে */}

            <OrderButton />

            {/* ৮. খাবারের সাথে খাওয়ার নির্দেশিকা (Swiper Slider) */}
            <FoodPairing />

            {/* ৯. কেন আমরা আলাদা (Blue Check List) */}
            <WhyDifferent />

            {/* ১০. প্রাইসিং সেকশন (প্রোডাক্ট ইমেজ ও দাম) */}
            <section className="bg-[#004d26] py-16 px-4">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
                    <div className="text-white md:w-1/2 space-y-6">
                        <h2 className="text-red-600 text-3xl md:text-5xl font-black">চুইঝাল মিষ্টি মসলার দাম</h2>
                        <div className="text-2xl font-bold space-y-2">
                            <p>পূর্বের দাম <span className="line-through text-red-500 text-3xl">১১৪০</span> টাকা।</p>
                            <p className="text-yellow-400">৪-৫ জনের একটি পরিবারের জন্য ৫০০ গ্রাম ১ থেকে ১.৫ মাস হয়ে যাবে।</p>
                        </div>
                        <div className="relative inline-block">
                            <div className="bg-white text-[#004d26] px-10 py-6 rounded-full text-3xl md:text-4xl font-black border-8 border-red-600 shadow-2xl">
                                ৫০০ গ্রাম মিষ্টি মসলা মাত্র <span className="text-red-600">১০৯০/-</span> টাকা।
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <img src="/images/cbfbd0c6-d9dd-4a12-8289-97c59d3ecca2-1.webp" className="w-full rounded-3xl shadow-2xl border-4 border-yellow-500" alt="M3Food Product" />
                    </div>
                </div>
            </section>

            {/* ১১. অর্ডার ফর্ম ও সামারি (Checkout) */}
            <CheckoutSection />

            {/* ১২. ফুটার */}
            <footer className="bg-[#00331a] text-white py-12 text-center border-t-4 border-yellow-500">
                <h2 className="text-3xl font-black mb-4">আমাদের অফিস</h2>
                <p className="text-lg opacity-80">এম থ্রি ফুড, খুলনা, বাংলাদেশ।</p>
                <div className="mt-8 flex justify-center gap-4">
                    <div className="bg-green-600 p-3 rounded-full animate-pulse cursor-pointer">
                        <MousePointer2 size={24} />
                    </div>
                </div>
            </footer>
        </div>
    );
}