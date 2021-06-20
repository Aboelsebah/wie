import React, {Component} from 'react';
import Hero from "./Hero";
import HowTo from "./HowTo";
import Features from "./Features";
import Contact from "./Contact";
import ScrollToTop from "./ScrollToTop";
import Footer from "./Footer";

class Main extends Component {
    render() {
        return (
            <main>
                <ScrollToTop />
                <Hero/>
                <HowTo />
                <Features />
              <Footer />
            </main>
        );
    }
}

export default Main;