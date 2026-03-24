import { OrderButton } from "./OrderButton";

export const ProductVideo = ({ data }: { data: any }) => (
    <section className="pt-12 px-4 bg-white">
        <OrderButton />
        <div className="max-w-5xl mx-auto">
            {data.video_title && (
                <h2 className="text-2xl md:text-3xl font-black text-[#004d26] text-center mb-8 border-b-4 border-yellow-400 inline-block pb-2">
                    {data.video_title}
                </h2>
            )}
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-black">
                <iframe
                    className="w-full h-full"
                    src={data.video_url.replace("watch?v=", "embed/")}
                    allowFullScreen
                ></iframe>
            </div>
        </div>
        <OrderButton />
    </section>
);