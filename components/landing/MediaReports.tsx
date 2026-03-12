import React from 'react';

const reports = [
    {
        id: 1,
        thumbnail: "https://m3food.com/wp-content/uploads/2024/06/video_thumb_1.jpg",
        title: "বিজিবি’র চাকরি ছেড়ে ব্যতিক্রমী পেশা"
    },
    {
        id: 2,
        thumbnail: "https://m3food.com/wp-content/uploads/2024/06/video_thumb_2.jpg",
        title: "বিজিবি’র চাকরি ছেড়ে সফল উদ্যোক্তা"
    }
];

export const MediaReports = () => {
    return (
        <section className="py-10 px-4 bg-gray-50 text-center font-['Hind_Siliguri']">
            <div className="max-w-5xl mx-auto">
                {/* --- Section Header Badge --- */}
                <div className="bg-[#FCD34D] inline-block px-6 py-2 rounded-md font-bold text-[#004d26] mb-8 shadow-sm border border-yellow-500">
                    দেশের সংবাদ মাধ্যমে আমাদের নিয়ে প্রতিবেদন গুলো দেখুন 👇
                </div>

                {/* --- Grid Layout --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {reports.map((report) => (
                        <div
                            key={report.id}
                            className="group rounded-xl overflow-hidden shadow-2xl border-4 border-white transition-transform hover:scale-[1.02] duration-300"
                        >
                            {/* Image Container */}
                            <div className="relative aspect-video overflow-hidden bg-gray-200">
                                <img
                                    src={report.thumbnail}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    alt={report.title}
                                />
                                {/* Play Button Overlay (Optional UI touch) */}
                                <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/0 transition-colors">
                                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white shadow-lg">
                                        <div className="ml-1 border-y-[8px] border-y-transparent border-l-[12px] border-l-white"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Title Label */}
                            <div className="bg-red-600 text-white py-3 font-bold text-lg md:text-xl">
                                {report.title}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};