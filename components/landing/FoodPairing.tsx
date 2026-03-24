"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export const FoodPairing = ({ data, storageUrl }: { data: any, storageUrl: string }) => (
    <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-center mb-6 text-slate-900">কিভাবে ও কিসের সাথে খাবেন?</h2>
            <p className="text-center text-[#004d26] font-bold text-lg max-w-4xl mx-auto mb-10">{data.description}</p>

            <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={20} slidesPerView={1} loop={true}
                autoplay={{ delay: 3000 }} pagination={{ clickable: true }}
                breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
                className="pb-12"
            >
                {data.items?.map((item: any) => (
                    <SwiperSlide key={item.id}>
                        <div className="rounded-[2.5rem] overflow-hidden border-4 border-white shadow-xl aspect-square">
                            <img src={`${storageUrl}/${item.image_path}`} className="w-full h-full object-cover" alt={item.food_name} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    </section>
);