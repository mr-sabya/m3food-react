import { CheckCircle } from 'lucide-react';

export const HealthBenefits = ({ data, storageUrl }: { data: any, storageUrl: string }) => (
    <section className="bg-[#004d26] py-16 px-4">
        <div className="max-w-5xl mx-auto bg-white rounded-[2.5rem] p-8 md:p-14 shadow-2xl">
            <h2 className="text-[#004d26] text-2xl md:text-4xl font-black text-center mb-10 border-b pb-6">
                {data.heading}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-4">
                    {data.items?.map((item: any) => (
                        <div key={item.id} className="flex items-start gap-3 group">
                            <CheckCircle className="text-green-600 shrink-0 mt-1" size={20} />
                            <p className="text-slate-700 font-bold text-lg">{item.benefit_text}</p>
                        </div>
                    ))}
                </div>
                {data.infographic_image && (
                    <div className="rounded-3xl overflow-hidden border-8 border-gray-50 shadow-lg">
                        <img src={`${storageUrl}/${data.infographic_image}`} className="w-full" alt="Health" />
                    </div>
                )}
            </div>
        </div>
    </section>
);