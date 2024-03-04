import Link from "next/link"

export default function Footer5() {
    return (
        <>
            <footer>
                <div className="footer__area-two">
                    <div className="footer__top-two">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-4 col-lg-5 col-md-6">
                                    <div className="footer-widget">
                                        <div className="footer__content-two">
                                            <div className="fw-logo mb-25">
                                                <Link href="/"><img src="/assets/img/logo/logoportfolio.png" alt="" /></Link>
                                            </div>
                                            <p>This website is best viewed on desktop</p>

                                           
                                            <p> </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-3 col-sm-6">
                                    <div className="footer-widget">
                                        <div className="footer-link-list">
                                            <h4 className='fw-title'> Contact me </h4>
                                            <ul className="list-wrap">
                                                <li><Link href="https://www.linkedin.com/in/devmateuslima/" target='_blank'>Linkedln</Link></li>
                                                <li><Link href="https://www.instagram.com/dev_mateuslima/" target='_blank'>Instagram</Link></li>
                                                <li><Link href="https://github.com/DxmLima" target='_blank'>GitHub</Link></li>
                                                <li><Link href="/Resume">Resume</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-sm-6">
                                    <div className="footer-link-list">
                                        <h4 className="fw-title">Let's Build Something Together</h4>
                                        <div className="list-wrap">
                                          <p className='text-white'> mateuslimadeev@gmail.com </p>
                                        </div>
                                    </div>
                                </div>
                           
                            </div>
                        </div>
                    </div>
                    <div className="footer__bottom-two">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="copyright-text-two">
                                        <p>Copyright © <Link href="/">Mateus Lima</Link> | All Right Reserved</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
