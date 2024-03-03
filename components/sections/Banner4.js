'use client'
import Link from 'next/link'
import Spline from '@splinetool/react-spline';

export default function Banner4() {
    return (
        <>
            <section className="banner__area-four banner__bg-four" data-background="/assets/img/banner/bgfolio.png">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-6">
                            <div className="banner__content-four">
                                <h2 className="title text-white" data-aos="fade-up" data-aos-delay={100}>Hi, I'm Mateus, a <span>Software Developer</span> currently working with <span className='text-secondary'>Next JS </span></h2>
                               
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="banner__img-two d-none d-lg-block ">
                            <Spline scene="https://prod.spline.design/TXsDknloIx6AGHaW/scene.splinecode" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
