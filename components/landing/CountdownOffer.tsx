"use client";
import { useState, useEffect } from 'react';

export const CountdownOffer = ({ data }: { data: any }) => {
    const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const target = new Date(data.end_time).getTime();
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = target - now;
            if (distance < 0) return clearInterval(interval);
            setTimeLeft({
                hours: Math.floor((distance / (1000 * 60 * 60))),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000),
            });
        }, 1000);
        return () => clearInterval(interval);
    }, [data.end_time]);

    return (
        <section className="pt-12 px-4">
            <div>
                <div style={{ backgroundColor: data.bg_color || '#004d26' }} className='max-w-5xl mx-auto text-center p-3 rounded-[10px]'>
                    <h3 style={{ color: data.offer_title_color }} className="text-2xl md:text-3xl font-black mb-2 "
                        dangerouslySetInnerHTML={{ __html: data.offer_title }} />
                </div>
                <div className='text-center my-5'>
                    <div className="bg-[#FFF8E7] rounded-xl p-6 border-4 border-orange-400 inline-block w-full max-w-sm">
                        <div className="text-5xl md:text-7xl font-black text-red-600 flex justify-center gap-2">
                            <span>{String(timeLeft.hours).padStart(2, '0')}</span>:
                            <span>{String(timeLeft.minutes).padStart(2, '0')}</span>:
                            <span>{String(timeLeft.seconds).padStart(2, '0')}</span>
                        </div>
                    </div>
                </div>
                <div className='text-center'>
                    <p className="text-[#ff0000] text-xl md:text-2xl font-bold mb-4">{data.stock_count_text}</p>
                </div>
            </div>
        </section>
    );
};