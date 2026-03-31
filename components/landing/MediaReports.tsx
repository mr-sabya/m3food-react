import React from "react";
import { OrderButton } from "./OrderButton";

/**
 * Helper function to extract YouTube ID and format as Embed URL
 * Handles: https://www.youtube.com/watch?v=ID, https://youtu.be/ID, etc.
 */
const getEmbedUrl = (url: string | null | undefined) => {
    if (!url || url.trim() === "") return null;

    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);

    return (match && match[2].length === 11)
        ? `https://www.youtube.com/embed/${match[2]}`
        : null;
};

export const MediaReports = ({ data }: { data: any }) => {
    // Filter out items with no valid links
    const validVideos = data.videos?.filter((v: any) => getEmbedUrl(v.video_link)) || [];

    if (validVideos.length === 0) return null;

    return (
        <section className="py-16 px-4 bg-gray-50 text-center">
            <OrderButton />
            <div className="max-w-5xl mx-auto">
                <div className="inline-block px-8 py-3 rounded-2xl font-black text-xl md:text-2xl bg-[#004d26] text-[#FCD34D] mb-12 shadow-lg transform -rotate-1">
                    {data.title}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {validVideos.map((video: any) => (
                        <div key={video.id} className="bg-white p-3 rounded-3xl shadow-xl border border-gray-100 transition-transform hover:scale-[1.02]">
                            <div className="relative aspect-video bg-black rounded-2xl overflow-hidden mb-4">
                                <iframe
                                    className="w-full h-full"
                                    src={getEmbedUrl(video.video_link)!}
                                    allowFullScreen
                                    title={video.video_title}
                                ></iframe>
                            </div>
                            {video.video_title && (
                                <h4 className="font-bold text-gray-700 px-2">{video.video_title}</h4>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};