import Link from "next/link";

const Footer = ()=> {
    return(
        <>
         <footer id="section-6" data-theme="black" className="section bg-dark footer section">
            <div className="container">
                <div className="row flex-100 align-items-center">
                    <div className="col-md-12">
                        <div className="row mb-5">
                            <div className="col-md-6">
                                <h5>Shall we chat? </h5>
                                <h2> L<span className="text-brand"><span className="rotate-30">e</span></span>t's talk about your
                                    product </h2>
                            </div>
        
                            <div className="col-md-6">
                                <div className="d-flex justify-content-end">
                                    <img src="img/d-logo.svg" style={{height:"70px"}} className="img-fluid" alt="" />
                                </div>
                            </div>
                        </div>
        
                        <div className="row">
                            <div className="col-md-4 col-6">
                                <div className="footer-content">
                                    <h3> Quick Links </h3>
                                    <ul className="list-unstyled">
                                        <li>
                                            <a href="/services"> Services </a>
                                        </li>
                                        <li>
                                            <a href="/approches"> Approach </a>
                                        </li>
                                        <li>
                                            <a href="/about"> Teams </a>
                                        </li>
                                        <li>
                                            <a href="/works"> Works </a>
                                        </li>
                                        <li>
                                            <a href="/career"> Career </a>
                                        </li>
                                       
                                        <li>
                                            <a href="/contact"> Contact Us </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-4 col-6">
                                <div className="footer-content">
                                    <h3> Services </h3>
                                    <ul className="list-unstyled">
                                        <li>
                                            <a href="/services.html#api"> API's </a>
                                        </li>
                                        <li>
                                            <a href="/services#monolith"> Monolith to Microservices </a>
                                        </li>
                                        <li>
                                            <a href="/services#mvp"> MVP </a>
                                        </li>
                                        <li>
                                            <a href="/services#web-app"> Web Application </a>
                                        </li>
                                        <li>
                                            <a href="/services#maintainance"> Maintainance </a>
                                        </li>
                                        <li>
                                            <a href="/services#business-automation"> Business Automation </a>
                                        </li>
                                        <li>
                                            <a href="/services#mobile-app"> Mobile App </a>
                                        </li>
                                        <li>
                                            <a href="/services#cloud-services"> Cloud Services </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-4 col-6">
                                <div className="footer-content">
                                    <h3> Locations </h3>
                                    <ul className="list-unstyled">
                                        <li className="locations">
                                            <div className="d-flex align-items-center">
                                                <span className="me-3">Nepal</span>
                                                <img src="img/icons/nepal-flag.svg" alt="" />
                                            </div>
                                          
                                            <span className="d-block text-grey brand-location"> Kathmandu</span>
                                            <span className="d-block">+977 9860591288</span>
                                        </li>
                                        <li className="locations">
                                            <div className="d-flex align-items-center">
                                                <span className="me-3">Australia</span>
                                                <img src="img/icons/australia-flag.svg" alt="" />
                                            </div>
                                            
                                            <span className="d-block text-grey brand-location"> Griffin, QLD </span>
                                            <span className="d-block">  +07 38115074 </span>
                                        </li>
        
                                        <li className="locations">
                                            <div className="d-flex align-items-center">
                                                <span className="me-3">USA</span>
                                                <img src="img/icons/usa-flag.svg" height="20" alt="" />
                                            </div>
                                           
                                            <span className="d-block text-grey brand-location"> Texas</span>
                                            <span className="d-block">+1 832 335 1524</span>
                                        </li>
        
        
        
                                    </ul>
                                </div>
                            </div>
                        </div>
        
                        <div className="row mt-2">
                            <div className="col-md-12 text-center">
                                <p className="copyright mb-0 mt-4">Copyright ©2020. LeanQ Digital Pvt Ltd | <a href="">Privacy Policy </a>|<a
                                        href=""> Terms of Use</a> </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </footer>
        
        </>
    )
}

export default Footer;