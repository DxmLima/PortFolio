import Link from 'next/link'

export default function About4() {
    return (
        <>
            <section className="about__area-six bg-black mt-3">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-6 col-md-8">
                            <div className="about__img-wrap-six">
                                <img src="/assets/img/images/h4_about_img01.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about__content-six">
                                <div className="section-title mb-25 tg-heading-subheading animation-style3">
                                    <h2 className="title tg-element-title text-white">About me</h2>
                                </div>
                                <h6 className='text-secondary'>We successfully cope with tasks of varying complexity provide area longerty guarantees and regularly master new Practice Following gies heur portfolio includes.</h6>
                                <div className="about__content-inner-four pt-3">
                                    <div className="about__list-box">
                                        <p className='about-title'> Currently learning </p>
                                        <ul className="list-wrap">
                                            <li>Next JS 14</li>
                                            <li>Analysis  Research</li>
                                            <li>100% Secure Money Back</li>
                                        </ul>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               
            </section>
        </>
    )
}
