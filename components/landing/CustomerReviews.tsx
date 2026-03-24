export const CustomerReviews = ({ data, storageUrl }: { data: any, storageUrl: string }) => (
    <section style={{ backgroundColor: data.bg_color }} className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
            <h2 style={{ color: data.text_color }} className="text-3xl md:text-5xl font-black text-center mb-12">
                {data.heading}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {data.items?.map((review: any) => (
                    <div key={review.id} className="rounded-2xl overflow-hidden border-4 border-white shadow-lg">
                        <img src={`${storageUrl}/${review.image_path}`} className="w-full" alt="Review" />
                    </div>
                ))}
            </div>
        </div>
    </section>
);