import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Hero extends Component {
    render() {
        return (
            <section className="hero d-flex align-items-center"
                     id="hero">

                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 d-flex flex-column justify-content-center">
                            <h1 data-aos="fade-up">Small efforts for a Stronger community.</h1>
                            <h2 data-aos="fade-up"
                                data-aos-delay="300">Getting work done is easier than ever before</h2>
                            <div data-aos="fade-up"
                                 data-aos-delay="400">
                                <div className="text-center text-lg-start">
                                    <Link className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center"
                                          to="#about">
                                        <span>Get Started</span>
                                        <i className="bi bi-arrow-right"/>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 hero-img"
                             data-aos="zoom-out"
                             data-aos-delay="100">
                            <img alt=""
                                 className="img-fluid"
                                 src={process.env.PUBLIC_URL + "/imgs/help.png" }/>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Hero;