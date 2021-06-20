import React, {Component} from 'react';

class Features extends Component {
    render() {
        return (
            <section className="features"
                     id="features">

                <div className="container"
                     data-aos="fade-up">

                    <header className="section-header">
                        <h2>Features</h2>
                        <p>Why HelpMeOut! ?</p>
                    </header>

                    <div className="row">

                        <div className="col-lg-6">
                            <img alt=""
                                 className="img-fluid"
                                 src={process.env.PUBLIC_URL + "/imgs/features.png"} />
                        </div>

                        <div className="col-lg-6 mt-5 mt-lg-0 d-flex">
                            <div className="row align-self-center gy-4">

                                <div className="col-md-6"
                                     data-aos="zoom-out"
                                     data-aos-delay="200">
                                    <div className="feature-box d-flex align-items-center">
                                        <i className="bi bi-check"></i>
                                        <h3>It's Completely Free!</h3>
                                    </div>
                                </div>

                                <div className="col-md-6"
                                     data-aos="zoom-out"
                                     data-aos-delay="300">
                                    <div className="feature-box d-flex align-items-center">
                                        <i className="bi bi-check"></i>
                                        <h3>Supporting local community</h3>
                                    </div>
                                </div>

                                <div className="col-md-6"
                                     data-aos="zoom-out"
                                     data-aos-delay="400">
                                    <div className="feature-box d-flex align-items-center">
                                        <i className="bi bi-check"></i>
                                        <h3>No middle man</h3>
                                    </div>
                                </div>

                                <div className="col-md-6"
                                     data-aos="zoom-out"
                                     data-aos-delay="500">
                                    <div className="feature-box d-flex align-items-center">
                                        <i className="bi bi-check"></i>
                                        <h3>Anyone can join</h3>
                                    </div>
                                </div>

                                <div className="col-md-6"
                                     data-aos="zoom-out"
                                     data-aos-delay="600">
                                    <div className="feature-box d-flex align-items-center">
                                        <i className="bi bi-check"></i>
                                        <h3>Safe and secure</h3>
                                    </div>
                                </div>

                                <div className="col-md-6"
                                     data-aos="zoom-out"
                                     data-aos-delay="700">
                                    <div className="feature-box d-flex align-items-center">
                                        <i className="bi bi-check"></i>
                                        <h3>Easy to Use</h3>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>

                    <div className="row feture-tabs"
                         data-aos="fade-up">
                        <div className="col-lg-6">
                            <h3>Is HelpMeOut save and trustworthy?</h3>

                            <ul className="nav nav-pills mb-3">
                                <li>
                                    <a className="nav-link active"
                                       data-bs-toggle="pill"
                                       href="#tab1">Trust and Security</a>
                                </li>
                                <li>
                                    <a className="nav-link"
                                       data-bs-toggle="pill"
                                       href="#tab2">Payments</a>
                                </li>
                                <li>
                                    <a className="nav-link"
                                       data-bs-toggle="pill"
                                       href="#tab3">Personal Safety</a>
                                </li>
                            </ul>

                            <div className="tab-content">

                                <div className="tab-pane fade show active"
                                     id="tab1">
                                    <p>HelpMeOut! wants to make sure everyone is having a great
                                        experience.
                                        Therefore, there is a rating and testimony section for each
                                        user, which
                                        should be reviewed before agreeing to carry out a job.</p>
                                    <div className="d-flex align-items-center mb-2">
                                        <i className="bi bi-check2"></i>
                                        <h4>Unbiased and reliable rating system</h4>
                                    </div>
                                    <p>Each person can only have 3 jobs running at the same time and
                                        when finished
                                        the jobs need to be confirmed by both parties again.
                                    </p>
                                    <div className="d-flex align-items-center mb-2">
                                        <i className="bi bi-check2"></i>
                                        <h4>No overbooking of services to guarantee quality</h4>
                                    </div>
                                    <p>In case of any issues, HelpMeOut steps in to mediate the
                                        problem and tries to solve it free of charge.</p>
                                </div>

                                <div className="tab-pane fade show"
                                     id="tab2">
                                    <p>HelpMeOut! has the goal to bring people together and believes
                                        that it is not
                                        always about the money.</p>
                                    <div className="d-flex align-items-center mb-2">
                                        <i className="bi bi-check2"></i>
                                        <h4>Pay in kindness</h4>
                                    </div>
                                    <p> Sometimes a homemade good, a service in exchange
                                        or a coupon can be just as valuable. We encourage our users to
                                        consider these
                                        possibilities and hope to arise friendships.</p>

                                    <h6>When money is involved, every user is responsible to act
                                        within legal terms of their country.</h6>
                                </div>

                                <div className="tab-pane fade show"
                                     id="tab3">
                                    <p>Personal safety is important to HelpMeOut. This is why we
                                        encourage you to follow common sense before completing any
                                        deal.</p>
                                    <div className="d-flex align-items-center mb-2">
                                        <i className="bi bi-check2"></i>
                                        <h4>All interactions and deals are recorded</h4>
                                    </div>
                                    <p>For safety reasons, all interactions are recorded to
                                        protect our users, thus discouraging potential criminals
                                        from using the platform. To protect the client the data is
                                        stored encrypted on a hidden away
                                        off-server.</p>
                                    <div className="d-flex align-items-center mb-2">
                                        <i className="bi bi-check2"></i>
                                        <h4>We closely monitor suspicious activity</h4>
                                    </div>
                                    <p>In addition to all of this, we keep close eye on our
                                        clients, and we ban any user who has a track of
                                        unsatisfactory services or suspicious activity</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <img alt=""
                                 className="img-fluid"
                                 src={process.env.PUBLIC_URL + "imgs/features-2.png"} />
                        </div>

                    </div>
                </div>
            </section>
        );
    }
}

export default Features;