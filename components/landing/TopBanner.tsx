export const TopBanner = ({ data }: { data: any }) => (
    <>
        <section className="mb-5">
            <div style={{ backgroundColor: data.title_bg || '#004d26' }} className="max-w-5xl mx-auto rounded-[10px] py-6 px-4 ">
                <div className="max-w-4xl mx-auto p-4 text-center">
                    <h1 style={{ color: data.title_color || '#fff' }}
                        className="text-xl md:text-3xl font-bold leading-snug"
                        dangerouslySetInnerHTML={{ __html: data.title }}
                    />
                </div>
            </div>
        </section>
        <section>
            <div style={{ backgroundColor: data.subtitle_bg || '#FCD34D' }} className="max-w-5xl mx-auto text-center shadow-inner py-6 px-4 rounded-[10px]">
                <p style={{ color: data.subtitle_color || '#004d26' }} className="max-w-4xl mx-auto font-extrabold text-sm md:text-lg">
                    {data.subtitle}
                </p>
            </div>
        </section>
    </>
);