"use client";

import React from 'react';
import { Facebook, Youtube, Instagram, Mail, MapPin, Phone, Send, ExternalLink } from 'lucide-react';
import Link from 'next/link';

interface FooterProps {
    settings?: {
        website_name?: string;
        logo?: string;
        tagline?: string;
        site_description?: string;
        facebook_url?: string;
        youtube_url?: string;
        instagram_url?: string;
        address?: string;
        contact_email?: string;
        contact_phone?: string;
    };
}

export default function Footer({ settings }: FooterProps) {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#002b15] text-white pt-20 pb-10 font-['Hind_Siliguri'] border-t-8 border-[#fad500]">
            <div className="container mx-auto px-4">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-white/10">

                    {/* Brand Section */}
                    <div className="space-y-6">
                        <Link href="/" className="inline-block">
                            {settings?.logo ? (
                                <img
                                    src={settings.logo}
                                    alt={settings?.website_name || "M3 Food"}
                                    className="h-16 w-auto brightness-0 invert" // লোগো সাদা দেখানোর জন্য
                                />
                            ) : (
                                <div className="text-3xl font-black tracking-tighter flex items-center">
                                    <span className="text-white">{settings?.website_name || "M3"}</span>
                                    <span className="text-[#fad500]">FOOD</span>
                                </div>
                            )}
                        </Link>

                        <p className="text-gray-300 text-sm leading-relaxed">
                            {settings?.site_description || settings?.tagline || "সুস্থ জীবনের জন্য খাঁটি ও প্রাকৃতিক খাবার। আমরা সরাসরি উৎপাদনকারী থেকে সেরা মানের পণ্য আপনার দ্বারে পৌঁছে দেই।"}
                        </p>

                        {/* Social Links */}
                        <div className="flex gap-4">
                            <a href={settings?.facebook_url || "#"} target="_blank" className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-[#1877F2] hover:scale-110 transition-all duration-300">
                                <Facebook size={20} />
                            </a>
                            <a href={settings?.youtube_url || "#"} target="_blank" className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-[#FF0000] hover:scale-110 transition-all duration-300">
                                <Youtube size={20} />
                            </a>
                            <a href={settings?.instagram_url || "#"} target="_blank" className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-[#E4405F] hover:scale-110 transition-all duration-300">
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-black text-xl mb-8 flex items-center gap-2">
                            <span className="w-2 h-6 bg-[#fad500] rounded-full"></span>
                            যোগাযোগ
                        </h4>
                        <ul className="space-y-5 text-gray-300 text-sm">
                            <li className="flex items-start gap-4">
                                <div className="p-2 bg-white/5 rounded-lg text-[#fad500]">
                                    <MapPin size={20} />
                                </div>
                                <span className="pt-1">{settings?.address || "আরংঘাটা বাইপাস রোড, খুলনা, বাংলাদেশ।"}</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <div className="p-2 bg-white/5 rounded-lg text-[#fad500]">
                                    <Phone size={20} />
                                </div>
                                <a href={`tel:${settings?.contact_phone || "01520101590"}`} className="hover:text-[#fad500] transition-colors">{settings?.contact_phone || "01520-101590"}</a>
                            </li>
                            <li className="flex items-center gap-4">
                                <div className="p-2 bg-white/5 rounded-lg text-[#fad500]">
                                    <Mail size={20} />
                                </div>
                                <a href={`mailto:${settings?.contact_email || "m3foodchuijhal@gmail.com"}`} className="hover:text-[#fad500] transition-colors overflow-hidden text-ellipsis">{settings?.contact_email || "m3food@gmail.com"}</a>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-black text-xl mb-8 flex items-center gap-2">
                            <span className="w-2 h-6 bg-[#fad500] rounded-full"></span>
                            প্রয়োজনীয় লিংক
                        </h4>
                        <ul className="text-gray-300 text-sm space-y-4">
                            <li><Link href="/about" className="hover:text-[#fad500] hover:translate-x-2 flex items-center gap-2 transition-all group"><ExternalLink size={14} className="opacity-0 group-hover:opacity-100" /> আমাদের সম্পর্কে</Link></li>
                            <li><Link href="/shop" className="hover:text-[#fad500] hover:translate-x-2 flex items-center gap-2 transition-all group"><ExternalLink size={14} className="opacity-0 group-hover:opacity-100" /> শপ (পণ্যসমূহ)</Link></li>
                            <li><Link href="/return-policy" className="hover:text-[#fad500] hover:translate-x-2 flex items-center gap-2 transition-all group"><ExternalLink size={14} className="opacity-0 group-hover:opacity-100" /> রিটার্ন পলিসি</Link></li>
                            <li><Link href="/privacy-policy" className="hover:text-[#fad500] hover:translate-x-2 flex items-center gap-2 transition-all group"><ExternalLink size={14} className="opacity-0 group-hover:opacity-100" /> প্রাইভেসি পলিসি</Link></li>
                            <li><Link href="/terms" className="hover:text-[#fad500] hover:translate-x-2 flex items-center gap-2 transition-all group"><ExternalLink size={14} className="opacity-0 group-hover:opacity-100" /> শর্তাবলী</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter & Payments */}
                    <div className="space-y-8">
                        <div className="bg-white/5 p-6 rounded-3xl border border-white/10">
                            <h4 className="font-black text-lg mb-2 text-white">নিউজলেটার</h4>
                            <p className="text-xs text-gray-400 mb-4">অফার ও নতুন পণ্যের আপডেট পেতে সাবস্ক্রাইব করুন।</p>
                            <div className="flex bg-white/10 rounded-xl p-1 overflow-hidden focus-within:ring-2 ring-[#fad500] transition-all">
                                <input
                                    type="email"
                                    placeholder="আপনার ইমেইল"
                                    className="bg-transparent border-none py-2 px-3 text-xs flex-1 outline-none text-white placeholder:text-gray-500"
                                />
                                <button className="bg-[#fad500] text-[#002b15] px-4 rounded-lg hover:bg-white transition-colors duration-300">
                                    <Send size={18} />
                                </button>
                            </div>
                        </div>

                        <div>
                            <p className="text-[10px] text-gray-400 mb-4 uppercase tracking-[0.2em] font-black">নিরাপদ পেমেন্ট গেটওয়ে</p>
                            <div className="flex flex-wrap gap-2">
                                <img src="https://securepay.sslcommerz.com/gw/asset/img/node/bKash.png" alt="bkash" className="h-8 bg-white rounded-lg px-1.5 py-1" />
                                <img src="https://securepay.sslcommerz.com/gw/asset/img/node/nagad.png" alt="nagad" className="h-8 bg-white rounded-lg px-1.5 py-1" />
                                <img src="https://securepay.sslcommerz.com/gw/asset/img/node/rocket.png" alt="rocket" className="h-8 bg-white rounded-lg px-1.5 py-1" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-400 text-sm font-bold">
                    <p>© {currentYear} {settings?.website_name || "M3 FOOD"}. All Rights Reserved.</p>
                    <div className="flex items-center gap-1.5 group">
                        <span className="opacity-60">Developed By</span>
                        <a
                            href="https://sabyaroy.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-[#fad500] transition-colors border-b border-white/20 hover:border-[#fad500]"
                        >
                            Sabya Roy
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}