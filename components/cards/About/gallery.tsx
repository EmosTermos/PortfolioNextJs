import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css"
import "swiper/css/pagination"
import { Pagination, Autoplay } from 'swiper/modules'
import { galleryImages } from '@/data'
import Image from 'next/image'

export default function GalleryCard() {
  return (
    <div className="h-[550px] sm:h-[650px] md:h-[650px] 2xl:h-[650px] w-full">
        <Swiper 
            modules={ [Pagination, Autoplay]}
            pagination={{
                clickable: true,
            }}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            className="my-swaper rounded-2xl"
            >
                {
                    galleryImages.map((img) => (
                        <SwiperSlide key={img.id}>
                            <Image
                                src={img.img}
                                alt=""
                                className="object-cover w-full h-full object-left-top" />
                        </SwiperSlide>
                    ))
                }
        </Swiper>
    </div>
  )
}
