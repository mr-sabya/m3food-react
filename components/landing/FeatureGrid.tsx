export const FeatureGrid = ({ data, storageUrl }: { data: any, storageUrl: string }) => (
    <section className="pt-12 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
            <h2 className="text-center text-2xl font-bold mb-10 text-[#004d26]">{data.section_title}</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {data.cards?.map((card: any) => (
                    <div key={card.id} className="overflow-hidden rounded-xl shadow-md transition hover:scale-105 border">
                        <img src={`${storageUrl}/${card.image_path}`} className="w-full h-full object-cover" alt="Feature" />
                    </div>
                ))}
            </div>
        </div>
    </section>
);