import React, {Component} from 'react';
import Breadcrumbs from "./Breadcrumbs";
import {Link} from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Footer from "./Footer";

class Team extends Component {
    render() {
        return (
            <div>
                <ScrollToTop />
              <section className="breadcrumbs">
                <div className="container">

                  <ol>
                    <li><a href="/">Home</a></li>
                    <li>Team</li>
                  </ol>
                  <h2>Team</h2>

                </div>
              </section>                <section className="team"
                         id="team">

                    <div className="container"
                         data-aos="fade-up">

                        <header className="section-header">
                            <h2>Team</h2>
                            <p>Our hard working team</p>
                        </header>

                        <div className="row gy-4">

                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch"
                                 data-aos="fade-up"
                                 data-aos-delay="100">
                                <div className="member">
                                    <div className="member-img">
                                        <img alt=""
                                             className="img-fluid"
                                             src={process.env.PUBLIC_URL + "/imgs/team/vickyPic.jpeg"}/>
                                        <div className="social">
                                            <Link to=""><i className="bi bi-twitter"/></Link>
                                            <Link to=""><i className="bi bi-facebook"/></Link>
                                            <Link to=""><i className="bi bi-instagram"/></Link>
                                            <Link to=""><i className="bi bi-linkedin"/></Link>
                                        </div>
                                    </div>
                                    <div className="member-info">
                                        <h4>Victoria Winkler</h4>
                                        <span>Group leader</span>
                                        <p>Vicky is the believer in the project HelpMeOut! and tries to
                                            come up
                                            with innovative concepts for the project. Moreover, she is
                                            actively contributing to the front-end development and tries to
                                            keep an overview over all steps (including back-end) of the
                                            project at all times. Aside of Computer Science she is involved
                                            in several music projects, composes and helps others whenever
                                            she can.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch"
                                 data-aos="fade-up"
                                 data-aos-delay="200">
                                <div className="member">
                                    <div className="member-img">
                                        <img alt=""
                                             className="img-fluid"
                                             src={process.env.PUBLIC_URL + "/imgs/team/lisaPic.jpeg"}/>
                                        <div className="social">
                                            <Link to=""><i className="bi bi-twitter"/></Link>
                                            <Link to=""><i className="bi bi-facebook"/></Link>
                                            <Link to=""><i className="bi bi-instagram"/></Link>
                                            <Link to=""><i className="bi bi-linkedin"/></Link>
                                        </div>
                                    </div>
                                    <div className="member-info">
                                        <h4>Lisa Stuflesser</h4>
                                        <span>This is Lisa y'all</span>
                                        <p>Lisa is a Front-end and Back-end developer. She is intrigued to
                                            solve new problems and hangs herself into new technology such
                                            as Node and React. She also loves to play computer games and is
                                            ready for a battle on each console.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch"
                                 data-aos="fade-up"
                                 data-aos-delay="300">
                                <div className="member">
                                    <div className="member-img">
                                        <img alt=""
                                             className="img-fluid"
                                             src={process.env.PUBLIC_URL + "/imgs/team/moPic.jpg" } />
                                        <div className="social">
                                            <Link to=""><i className="bi bi-twitter"/></Link>
                                            <Link to=""><i className="bi bi-facebook"/></Link>
                                            <Link to=""><i className="bi bi-instagram"/></Link>
                                            <Link to=""><i className="bi bi-linkedin"/></Link>
                                        </div>
                                    </div>
                                    <div className="member-info">
                                        <h4>Mohamed Aboelsebah</h4>
                                        <span>We don't know him</span>
                                        <p>Mo, is the main web developer behind HelpMeOut!. He ensures
                                            everything runs smoothly and no matter what problem arises he
                                            will find a solution. He is very interested in optimization and
                                            therefore focuses on React, Node and Mongo. Moreover, he is a
                                            gifted painter, as one can see in our profile pictures.</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </section>
              <Footer />
            </div>
        );
    }
}

export default Team;