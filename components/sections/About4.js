import Link from 'next/link'

export default function About4() {
    return (
        <>
            <section className="about__area-six bg-black mt-3">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-6 col-md-8">
                            <div className="about__img-wrap-six">
                                <img src="/assets/img/about/about.jpeg" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about__content-six">
                                <div className="section-title mb-25 tg-heading-subheading animation-style3">
                                    <h2 className="title tg-element-title text-white">About me</h2>
                                </div>
                                <h6 className='text-secondary'>I am a technology enthusiast passionate about creating innovative and functional solutions. With more than 3 years of experience in the development world, I have dedicated myself to improving my skills and offering high-quality services. My main focus is on React, NextJS and React Native technologies, where I constantly seek to innovate and overcome challenges to meet my clients' expectations.</h6>
                                <div className="about__content-inner-four pt-3">
                                    <div className="about__list-box">
                                        <p className='about-title'> Currently learning </p>
                                        <ul className="list-wrap">
                                            <li>Next JS 14</li>
                                            <li>Service Design</li>
                                            <li>IA</li>
                                        </ul>
                                    </div>
                                    
                                   
                                </div>

                                <div className="about__content-inner-four pt-3">
                                    <div className="about__list-box">
                                        <p className='about-title'> Areas of expertise </p>
                                        <ul className="list-wrap">
                                            <li>Development amazing websites</li>
                                            <li>Design</li>
                                            <li>Branding</li>
                                            <li>Build Systems | Automation</li>
                                            <li>Video Editing</li>                                  
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
