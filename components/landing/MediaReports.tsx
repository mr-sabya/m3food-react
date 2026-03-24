export const MediaReports = ({ data }: { data: any }) => (
    <section className="pt-10 px-4 text-center">
        <div className="max-w-5xl mx-auto">
            <div className="text-[#FCD34D] inline-block px-6 py-2 rounded-md font-bold bg-[#004d26] mb-8 shadow-sm">
                {data.title}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {data.videos?.map((video: any) => (
                    <div key={video.id} className="rounded-xl overflow-hidden shadow-2xl border-4 border-white">
                        <div className="relative aspect-video bg-black">
                            <iframe className="w-full h-full" src={video.video_link.replace('watch?v=', 'embed/')} allowFullScreen></iframe>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);