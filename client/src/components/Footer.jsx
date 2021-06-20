import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Footer extends Component {
    render() {
        return (
            <footer className="footer"
                    id="footer">

                <div className="footer-newsletter">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-12 text-center">
                                <h4>Our Newsletter</h4>
                                <p>Join our newsletter to stay updated with our news.</p>
                            </div>
                            <div className="col-lg-6">
                                <form action=""
                                      method="post">
                                    <input name="email"
                                           type="email" /><input type="submit"
                                                                 value="Subscribe"/>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-top">
                    <div className="container">
                        <div className="row gy-4">
                            <div className="col-lg-5 col-md-12 footer-info">
                                <Link className="logo d-flex align-items-center"
                                      to="/">
                                    <span>HelpMeOut!</span>
                                </Link>
                                <p>HelpMeOut! aims to connect those in need with someone who wants
                                    to help, keep up with our events and news by
                                    following us on the social media sites listed below.
                                </p>
                                <div className="social-links mt-3">
                                    <Link className="twitter"
                                          to="#"><i className="bi bi-twitter"/></Link>
                                    <Link className="facebook"
                                          to="#"><i className="bi bi-facebook"/></Link>
                                    <Link className="instagram"
                                          to="#"><i className="bi bi-instagram bx bxl-instagram"/></Link>
                                    <Link className="linkedin"
                                          to="#"><i className="bi bi-linkedin bx bxl-linkedin"/></Link>
                                </div>
                            </div>

                            <div className="col-lg-2 col-6 footer-links">
                                <h4>Useful Links</h4>
                                <ul>
                                    <li><i className="bi bi-chevron-right"/> <Link to="/">Home</Link></li>
                                    <li><i className="bi bi-chevron-right"/> <Link to="about">About us</Link>
                                    </li>
                                    <li><i className="bi bi-chevron-right"/> <Link to="team">Team</Link>
                                    </li>
                                    <li><i className="bi bi-chevron-right"/> <Link to="#">Terms of
                                        service</Link></li>
                                    <li><i className="bi bi-chevron-right"/> <Link to="#">Privacy
                                        policy</Link></li>
                                </ul>
                            </div>

                            <div className="col-lg-2 col-6 footer-links">
                                <h4>Quick access</h4>
                                <ul>
                                    <li><i className="bi bi-chevron-right"/> <Link to="posts">Explore all
                                        jobs</Link>
                                    </li>
                                    <li><i className="bi bi-chevron-right"/> <Link to="posts">Request a
                                        job</Link>
                                    </li>
                                    <li><i className="bi bi-chevron-right"/> <Link to="posts">Offer a job</Link>
                                    </li>
                                    <li><i className="bi bi-chevron-right"/> <Link to="posts">My profile</Link>
                                    </li>
                                    <li><i className="bi bi-chevron-right"/>
                                        <Link to="register">Register</Link></li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
                                <h4>Contact Us</h4>
                                <p>
                                    Piazza Università, 1<br/>
                                    Bolzano, BZ-39100<br/>
                                    Italy <br/><br/>
                                    <strong>Phone:</strong> +39 0471 012200<br/>
                                    <strong>Email:</strong> info@helpmeout.live<br/>
                                </p>

                            </div>

                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="copyright">
                        &copy; Copyright <strong><span>HelpMeOut!</span></strong>. All Rights
                        Reserved
                    </div>
                    <div className="credits">
                        Made for WIE @ UNIBZ
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;