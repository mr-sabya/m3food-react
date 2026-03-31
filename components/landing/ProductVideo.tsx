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

export const ProductVideo = ({ data }: { data: any }) => {
    const embedUrl = getEmbedUrl(data.video_url);

    // Skip rendering if URL is empty or invalid
    if (!embedUrl) return null;

    return (
        <section className="pt-12 px-4 bg-white">
            <OrderButton />
            <div className="max-w-5xl mx-auto text-center">
                {data.video_title && (
                    <h2 className="text-2xl md:text-4xl font-black text-[#004d26] mb-8 inline-block border-b-4 border-yellow-400 pb-2">
                        {data.video_title}
                    </h2>
                )}

                <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border-[6px] border-gray-100 bg-black group transition-all">
                    <iframe
                        className="w-full h-full"
                        src={embedUrl}
                        title="Product Video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>

            <div className="mt-10">
                <OrderButton />
            </div>
        </section>
    );
};