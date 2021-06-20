import React, {Component} from 'react';
import Footer from "./Footer";

class Contact extends Component {
    render() {
        return (
          <>
            <section className="breadcrumbs">
              <div className="container">

                <ol>
                  <li><a href="/">Home</a></li>
                  <li>Contact</li>
                </ol>
                <h2>Contact</h2>

              </div>
            </section>
            <section className="contact"
                     id="contact">

                <div className="container"
                     data-aos="fade-up">

                    <header className="section-header">
                        <h2>Contact</h2>
                        <p>Contact Us</p>
                    </header>

                    <div className="row gy-4">

                        <div className="col-lg-6">

                            <div className="row gy-4">
                                <div className="col-md-6">
                                    <div className="info-box">
                                        <i className="bi bi-geo-alt"/>
                                        <h3>Address</h3>
                                        <p>Piazza Università, 1<br />Bolzano, BZ-39100 </p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="info-box">
                                        <i className="bi bi-telephone"/>
                                        <h3>Call Us</h3>
                                        <p>+39 0471 012200<br />+39 0471 012209</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="info-box">
                                        <i className="bi bi-envelope"/>
                                        <h3>Email Us</h3>
                                        <p>info@helpmeout.live<br />contact@helpmeout.live</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="col-lg-6">
                            <form action="forms/contact.php"
                                  className="php-email-form"
                                  method="post">
                                <div className="row gy-4">

                                    <div className="col-md-6">
                                        <input className="form-control"
                                               name="name"
                                               placeholder="Your Name"
                                               required
                                               type="text" />
                                    </div>

                                    <div className="col-md-6 ">
                                        <input className="form-control"
                                               name="email"
                                               placeholder="Your Email"
                                               required
                                               type="email" />
                                    </div>

                                    <div className="col-md-12">
                                        <input className="form-control"
                                               name="subject"
                                               placeholder="Subject"
                                               required
                                               type="text" />
                                    </div>

                                    <div className="col-md-12">
                <textarea className="form-control"
                          name="message"
                          placeholder="Message"
                          required
                          rows="6" />
                                    </div>

                                    <div className="col-md-12 text-center">
                                        <div className="loading">Loading</div>
                                        <div className="sent-message">Your message has been sent. Thank
                                            you!
                                        </div>
                                        <button type="submit">Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
          <Footer />
      </>
        );
    }
}

export default Contact;