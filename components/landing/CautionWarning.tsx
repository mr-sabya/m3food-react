import { AlertTriangle } from 'lucide-react';

export const CautionWarning = ({ data }: { data: any }) => (
    <section className="py-12 px-4 max-w-6xl mx-auto">
        <div style={{ borderColor: data.border_color }} className="border-4 border-dashed rounded-3xl p-8 bg-red-50 text-center">
            <div className="flex justify-center mb-4">
                <AlertTriangle size={60} className="text-red-600 animate-pulse" />
            </div>
            <h2 className="text-red-600 text-3xl font-black mb-4 uppercase tracking-tighter">সাবধানতা</h2>
            <p style={{ color: data.text_color }} className="text-xl font-bold leading-relaxed">
                {data.description}
            </p>
        </div>
    </section>
);