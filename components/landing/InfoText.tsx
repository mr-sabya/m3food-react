export const InfoText = ({ data }: { data: any }) => (
    <section style={{ backgroundColor: data.bg_color }} className="py-12 px-4 text-center">
        <div className="max-w-4xl mx-auto">
            <h3 style={{ color: data.text_color }} className="text-2xl font-bold mb-4">{data.question}</h3>
            <p style={{ color: data.text_color }} className="text-lg md:text-xl leading-relaxed opacity-90">
                {data.answer}
            </p>
        </div>
    </section>
);