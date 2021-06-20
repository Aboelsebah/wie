import React, {Component} from 'react';
import ScrollToTop from "./ScrollToTop";
import {Link, Route} from "react-router-dom";
import Footer from "./Footer";

class About extends Component {
  render() {
    return (
      <>
        <ScrollToTop />
        <section className="breadcrumbs">
          <div className="container">

            <ol>
              <li><a href="/">Home</a></li>
              <li>About</li>
            </ol>
            <h2>About</h2>

          </div>
        </section>        <section className="about">
          <div className="container">
            <div className="row gx-0">
              <div className="col-lg-6 d-flex flex-column justify-content-center">
                <div className="content">
                  <h2>How did this project arise?
                  </h2>
                  <p>
                    The idea of a platform like HelpMeOut is based on personal
                    experience.
                    Helping neighbors and friends is something people do on a
                    day-to-day basis.
                    However, it is impossible to help if one does not know someone is
                    in need of help.
                    And this is where HelpMeOut! helps out: It connects these people
                    and even more so
                    gives people the possibility to enlarge their social network.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*End Project Idea Section*/}

        {/*F.A.Q Section*/}
        <section className="faq"
                 id="faq">

          <div className="container"
               data-aos="fade-up">

            <header className="section-header">
              <h2>F.A.Q</h2>
              <p>Frequently Asked Questions</p>
            </header>

            <div className="row">
              <div className="col-lg-6">
                {/*F.A.Q List 1*/}
                <div className="accordion accordion-flush"
                     id="faqlist1">
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed"
                              data-bs-target="#faq-content-1"
                              data-bs-toggle="collapse"
                              type="button">
                        What is the aim?
                      </button>
                    </h2>
                    <div className="accordion-collapse collapse"
                         data-bs-parent="#faqlist1"
                         id="faq-content-1">
                      <div className="accordion-body">
                        HelpMeOut! is not just a job marketplace but instead tries to
                        bring people together. These days everything is about money
                        and many equally or even more important values are forgotten.
                        Making someone happy with a simple fix can be as rewarding to
                        humans as money. And why not make two people happy at the same
                        time?
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed"
                              data-bs-target="#faq-content-2"
                              data-bs-toggle="collapse"
                              type="button">
                        What is out of the scope of this website?
                      </button>
                    </h2>
                    <div className="accordion-collapse collapse"
                         data-bs-parent="#faqlist1"
                         id="faq-content-2">
                      <div className="accordion-body">
                        This website is not intended to post full or part time jobs,
                        or for established companies to fish new clients. Moreover,
                        inappropriate offers or services will be taken down
                        immediately. If you see something that you think should not be
                        on this page please alert us either using the alert button on
                        the post or writing to contact@helpmeout.live or by clicking
                        on
                        this <Link to="/#contact">link</Link>.
                      </div>
                    </div>
                  </div>


                </div>
              </div>

              <div className="col-lg-6">

                {/*F.A.Q List 2*/}
                <div className="accordion accordion-flush"
                     id="faqlist2">

                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed"
                              data-bs-target="#faq2-content-1"
                              data-bs-toggle="collapse"
                              type="button">
                        Is HelpMeOut! free of charge?
                      </button>
                    </h2>
                    <div className="accordion-collapse collapse"
                         data-bs-parent="#faqlist2"
                         id="faq2-content-1">
                      <div className="accordion-body">
                        Yes, it is a 100%! It is our joy to connect people and
                        therefore we encourage as many people as possible to use the
                        service!
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed"
                              data-bs-target="#faq2-content-2"
                              data-bs-toggle="collapse"
                              type="button">
                        How can I contribute to the webpage?
                      </button>
                    </h2>
                    <div className="accordion-collapse collapse"
                         data-bs-parent="#faqlist2"
                         id="faq2-content-2">
                      <div className="accordion-body">
                        If you want to make suggestions to make the user experience
                        better please email helpmeout@gmail.com. If you would like
                        to support the founders you can make a donation by clicking on
                        this <Link to="#">link</Link>.
                      </div>
                    </div>
                  </div>


                </div>
              </div>

            </div>

          </div>

        </section>
      <Footer />
      </>
    );
  }
}

export default About;