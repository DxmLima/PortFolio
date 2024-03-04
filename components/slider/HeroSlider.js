'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    spaceBetween: 0,
    effect: "fade",
    loop: true,
    autoplay: {
        delay: 6000,
    },

};

export default function HeroSlider() {
    return (
        <div className='bg-black'>
            <Swiper {...swiperOptions}>
                <SwiperSlide className="swiper-slide slider__single ">
                    <div className="slider__bg" data-background="/assets/img/slider/slider01.png" />
                    <div className="container"> 
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide slider__single">
                    <div className="slider__bg" data-background="/assets/img/slider/slider01.ppg" />
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="slider__content">
                                    <span className="sub-title">We Are Expert In This Field</span>
                                    <h2 className="title">Transforming Dreams into Financial Reality</h2>
                                    <p>Agilos helps you to convert your data into a strategic asset and get business insights Agilos helps you to convert.</p>
                                    <Link href="/contact" className="btn">Free Consulting</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                  
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
