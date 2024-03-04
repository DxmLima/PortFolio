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
                                <h2 className="title text-white text-center fw-bold" data-aos="fade-up" data-aos-delay={100}>AutoPlacas</h2>
                                <h5 className='text-secondary text-center'> Web Devlopment | 2024 </h5>
                               
                            </div>
                        </div>
                        <div className=" d-flex justify-content-center ">
                            <div className="pt-3 banner__img-two  ">
                            <img src="/assets/img/banner/casetest.png" alt="test" />                                
                            </div>
                        </div>

                        <div className='container mt-3 '> 

                        <div class="  text-left justify-content-center space-2 ">
                            <div class="row">
                                <div class="col">
                                <h3 className='text-white'> My Progress </h3>
                                    <p className='text-secondary'> <span> Developer | Code, fix design and images</span></p>

                                 <div className='pt-2'> 

                                 <h3 className='text-white'> Timeline </h3>
                                <p className='text-secondary'> 1 Month </p>
                                 </div>
                                </div>
                                <div class="col order-5">
                                <h3 className='text-white'> OverView </h3>
                                 <p className='text-secondary text-left'>Developing a landing page to improve the 
                                                                aesthetics of the website and the user experience, including a 
                                                                administrative panel to facilitate the registration of new stores, 
                                                                together with their respective information, in accordance with the 
                                                                customer needs.</p>
                                </div>
                            </div>
                            </div>
                        </div>

                        <div className=" d-flex justify-content-center space">
                        <img src="/assets/img/banner/case02.png" alt="test" />                            
                        </div>        

                          <div class="  text-left justify-content-center space-2 ">
                            <div class="row">
                                <div class="col">
                                <h3 className='text-white'> Initial Thinking </h3>
                                <h6 className='text-white'> Define target users </h6>
                                    <p className='text-secondary'> Customers who will use the website to consult store information</p>
                                </div>

                                <div class="col order-5">
                                <h3 className='text-white'> Research Methods </h3>
                                 <p className='text-secondary text-left'>Find the best way to provide performance so that customers can easily find the nearest store and the website has well-defined products, avoiding any type of doubt.</p>
                                </div>
                              
                            </div>
                            </div>
                        

                            <div className=" d-flex justify-content-center space">
                            <video width="930" height="520" autoPlay muted loop>
                                    <source src="/assets/video/case01.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                    </video>                              
                        </div>
                                            
                    </div>
                </div>
            </section>
        </>
    )
}
