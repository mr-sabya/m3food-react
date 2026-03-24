import { Check } from 'lucide-react';

export const WhyDifferent = ({ data }: { data: any }) => (
    <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
            <div style={{ borderColor: data.border_color }} className="border-[3px] py-6 px-8 mb-10 text-center rounded-xl">
                <h2 style={{ color: data.title_color }} className="text-2xl md:text-4xl font-black uppercase">
                    {data.title}
                </h2>
            </div>
            <div className="space-y-4">
                {data.items?.map((item: any) => (
                    <div key={item.id} className="flex items-start gap-3">
                        <Check size={28} className="text-blue-500 shrink-0 mt-1" strokeWidth={4} />
                        <p className="text-[#004d26] text-xl font-bold leading-relaxed">{item.point_text}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);