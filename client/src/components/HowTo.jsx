import React, {Component} from 'react';

class HowTo extends Component {
    render() {
        return (
            <section className="howTo"
                     id="howTo">
                <div className="container"
                     data-aos="fade-up">

                    <header className="section-header">
                        <h2>How it works</h2>
                        <p>You are only 3 steps away from your next job.</p>
                    </header>

                    <div className="row">

                        <div className="col-lg-4">
                            <div className="box"
                                 data-aos="fade-up"
                                 data-aos-delay="200">
                                <img alt=""
                                     className="img-fluid"
                                     src={process.env.PUBLIC_URL + "/imgs/step-1.png" }/>
                                <h3>Registration</h3>
                                <p>First: SignUp and list your services on the
                                    website.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 mt-4 mt-lg-0">
                            <div className="box"
                                 data-aos="fade-up"
                                 data-aos-delay="400">
                                <img alt=""
                                     className="img-fluid"
                                     src={process.env.PUBLIC_URL + "/imgs/step-2.png" }/>
                                <h3>Search</h3>
                                <p>Second: check your area to find those in need around you.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 mt-4 mt-lg-0">
                            <div className="box"
                                 data-aos="fade-up"
                                 data-aos-delay="600">
                                <img alt=""
                                     className="img-fluid"
                                     src={process.env.PUBLIC_URL + "/imgs/step-3.png" }/>
                                <h3>Make a Deal</h3>
                                <p>Third: Specify the terms and finalize the deal.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default HowTo;