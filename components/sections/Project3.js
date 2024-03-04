'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    spaceBetween: 0,
    loop: true,
    autoplay: {
        delay: 6000,
    },
     // Navigation arrows
    navigation: {
        nextEl: '.project-button-next',
        prevEl: '.project-button-prev',
    },
};

export default function Project3() {
    return (
        <>
            <section className="project__area-three project__bg-three bg-black" >
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-7 col-lg-8">
                            <div className="section-title text-center mb-50 tg-heading-subheading animation-style3">
                                <h3 className="title tg-element-title text-white"> Explore Experience </h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="swiper-container project-active">
                                <Swiper {...swiperOptions} className="swiper-wrapper">
                                    <SwiperSlide>
                                        <div className="project__item-three ">
                                            
                                            <div className="project__thumb-three ">
                                                <img src="/assets/img/banner/casetest.png" alt="" />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="project__item-three ">
                                            <div className="project__content-three">  
                                                <h2 className="title"><Link href="/project-details">Inventory Management</Link></h2>
                                                <p>when anner unknown printer took type and scramble to make specimen book.</p>  
                                            </div>
                                            <div className="project__thumb-three ">
                                                <img src="/assets/img/project/h3_project_img01.jpg" alt="" />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                                <div className="project__nav-wrap">
                                    <div className="project-button-prev"><i className="flaticon-right-arrow" /></div>
                                    <div className="project-button-next"><i className="flaticon-right-arrow" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
