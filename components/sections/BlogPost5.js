import Link from 'next/link'

export default function BlogPost5() {
    return (
        <>
            <section className="blog__post-area-five bg-black">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6">
                            <div className="section-title text-center mb-50 tg-heading-subheading animation-style3">
                                <h2 className="title tg-element-title text-white">Selected Work</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row gutter-24 justify-content-center">
                        <div className="col-lg-4 col-md-6">
                            <div className="blog__post-four shine-animate-item">
                                <div className="blog__post-thumb-four">
                                    <Link href="/blog-details" className="shine-animate"><img src="/assets/img/blog/blog01.png" alt="" /></Link>
                                </div>
                                <div className="blog__post-content-four mt-3">
                                    <h3 className='title fw-bold text-white'>Web Development</h3>
                                </div>
                            </div>
                        </div>
                     
                        <div className="col-lg-4 col-md-6">
                            <div className="blog__post-four shine-animate-item">
                                <div className="blog__post-thumb-four">
                                    <Link href="/blog-details" className="shine-animate"><img src="/assets/img/blog/h5_blog_post03.jpg" alt="" /></Link>
                                </div>
                                <div className="blog__post-content-four mt-3">
                                <h3 className='title fw-bold text-white'> UX / UI</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               
            </section>
        </>
    )
}
