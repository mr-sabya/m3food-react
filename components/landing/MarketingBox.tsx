import { OrderButton } from "./OrderButton";

export const MarketingBox = ({ data }: { data: any }) => (
    <section className="py-12 px-4 space-y-8 max-w-6xl mx-auto font-['Hind_Siliguri']">
        <div className="text-center">
            {/* Exactly 19px on mobile, 21px on desktop */}
            <p className="text-[17px] md:text-[18px] font-black text-[#004d26] leading-relaxed"
                dangerouslySetInnerHTML={{ __html: data.top_boxed_text }} />
        </div>

        <OrderButton />

        <div className="text-center">
            <p className="text-[17px] md:text-[18px] font-black text-[#004d26] leading-relaxed"
                dangerouslySetInnerHTML={{ __html: data.bottom_boxed_text }} />

        </div>
    </section>
);