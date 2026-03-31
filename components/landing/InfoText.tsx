export const InfoText = ({ data }: { data: any }) => (
    <section className="py-12 px-4 text-center">
        <div className="max-w-4xl mx-auto">
            <h3 className="text-[#ff0000] text-2xl font-bold mb-4">{data.question}</h3>
            <p className="text-[17px] md:text-[18px] font-black text-[#004d26] leading-relaxed">
                {data.answer}
            </p>
        </div>
    </section>
);