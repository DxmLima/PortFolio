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
                                <h2 className="title text-white text-center fw-bold" data-aos="fade-up" data-aos-delay={100}>SeleNoticias</h2>
                                <h5 className='text-secondary text-center'> Web Devlopment | 2023 </h5>
                               
                            </div>
                        </div>
                        <div className=" d-flex justify-content-center ">
                            <div className="pt-3 banner__img-two  ">
                            <img src="/assets/img/banner/casetest3.png" alt="test" />                                
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
                                 <p className='text-secondary text-left'>Development of a website focused on news mode and aggregating content for the end user with several posts and categories for the user to choose from </p>
                                </div>
                            </div>
                            </div>
                        </div>

                              

                          <div class="  text-left justify-content-center space-2 ">
                            <div class="row">
                                <div class="col">
                                <h3 className='text-white'> Initial Thinking </h3>
                                <h6 className='text-white'> Define target users </h6>
                                    <p className='text-secondary'> The best experience a user could have when accessing the website and searching for desired news</p>
                                </div>

                              
                            </div>
                            </div>
                        

                           
                                            
                    </div>
                </div>
            </section>
        </>
    )
}
