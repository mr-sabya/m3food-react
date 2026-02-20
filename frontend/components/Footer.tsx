import React from 'react';
import { Facebook, Youtube, Instagram, Mail, MapPin, Phone, Send } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-[#111827] text-white pt-16 pb-8 font-['Hind_Siliguri']">
            <div className="container mx-auto px-4">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-slate-800">
                    
                    {/* Brand Section */}
                    <div className="space-y-6">
                        <Link href="/" className="text-3xl font-black tracking-tighter flex items-center">
                            <span className="text-[#C41E3A]">M3</span>
                            <span className="text-[#15803D]">FOOD</span>
                        </Link>
                        <p className="text-slate-400 text-sm leading-relaxed italic">
                            “আপনাদের বিশ্বাস আমাদের অর্জন” — আমরা সরাসরি মাঠ থেকে সেরা মানের বিশুদ্ধ চুইঝাল ও মসলা সরবরাহ করি।
                        </p>
                        <div className="flex gap-3">
                            <a href="https://facebook.com" className="p-2.5 bg-slate-800 rounded-full hover:bg-[#1877F2] transition-all duration-300">
                                <Facebook size={18} />
                            </a>
                            <a href="https://youtube.com" className="p-2.5 bg-slate-800 rounded-full hover:bg-[#FF0000] transition-all duration-300">
                                <Youtube size={18} />
                            </a>
                            <a href="https://instagram.com" className="p-2.5 bg-slate-800 rounded-full hover:bg-[#E4405F] transition-all duration-300">
                                <Instagram size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-bold text-lg mb-6 border-l-4 border-[#C41E3A] pl-3">যোগাযোগ</h4>
                        <ul className="space-y-4 text-slate-400 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-[#C41E3A] shrink-0" />
                                <span>Arangghata Bypass Road,<br />Khulna, Bangladesh.</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="text-[#C41E3A] shrink-0" />
                                <a href="tel:01520101590" className="hover:text-white transition">01520-101590</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="text-[#C41E3A] shrink-0" />
                                <a href="mailto:m3foodchuijhal@gmail.com" className="hover:text-white transition">m3foodchuijhal@gmail.com</a>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold text-lg mb-6 border-l-4 border-[#15803D] pl-3">জরুরী লিংক</h4>
                        <ul className="text-slate-400 text-sm space-y-3">
                            <li><Link href="/about" className="hover:text-white hover:pl-2 transition-all">আমাদের সম্পর্কে</Link></li>
                            <li><Link href="/shop" className="hover:text-white hover:pl-2 transition-all">শপ (পণ্যসমূহ)</Link></li>
                            <li><Link href="/return-policy" className="hover:text-white hover:pl-2 transition-all">রিটার্ন পলিসি</Link></li>
                            <li><Link href="/terms" className="hover:text-white hover:pl-2 transition-all">টার্মস এন্ড কন্ডিশন</Link></li>
                            <li><Link href="/privacy" className="hover:text-white hover:pl-2 transition-all">গোপনীয়তা নীতি</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter & Payments */}
                    <div className="space-y-6">
                        <div className="bg-slate-800/40 p-5 rounded-2xl border border-slate-700/50">
                            <h4 className="font-bold text-base mb-3 text-white">নিউজলেটার</h4>
                            <p className="text-xs text-slate-400 mb-4">নতুন অফার ও আপডেট পেতে আমাদের সাথে থাকুন।</p>
                            <div className="flex gap-1">
                                <input 
                                    type="email" 
                                    placeholder="আপনার ইমেইল" 
                                    className="bg-slate-900 border border-slate-700 rounded-l-lg py-2 px-3 text-xs flex-1 outline-none focus:border-[#C41E3A]" 
                                />
                                <button className="bg-[#C41E3A] hover:bg-red-700 px-3 rounded-r-lg transition flex items-center justify-center">
                                    <Send size={16} />
                                </button>
                            </div>
                        </div>
                        
                        {/* Payment Method Icons Placeholder */}
                        <div>
                            <p className="text-xs text-slate-500 mb-3 uppercase tracking-wider font-bold">We Accept:</p>
                            <div className="flex flex-wrap gap-2 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                                <img src="https://securepay.sslcommerz.com/gw/asset/img/node/bKash.png" alt="bkash" className="h-6 bg-white rounded px-1" />
                                <img src="https://securepay.sslcommerz.com/gw/asset/img/node/nagad.png" alt="nagad" className="h-6 bg-white rounded px-1" />
                                <img src="https://securepay.sslcommerz.com/gw/asset/img/node/rocket.png" alt="rocket" className="h-6 bg-white rounded px-1" />
                                <img src="https://securepay.sslcommerz.com/gw/asset/img/node/visa.png" alt="visa" className="h-6 bg-white rounded px-1" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-xs text-center">
                    <p>© {new Date().getFullYear()} M3 FOOD. All Rights Reserved.</p>
                    <p className="flex items-center gap-1">
                        Made with ❤️ in Bangladesh | Developed with React & Laravel
                    </p>
                </div>
            </div>
        </footer>
    );
}