import React, { Component } from "react";
import {Link, withRouter} from "react-router-dom";

class ScrollToTop extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    componentDidUpdate() {
        window.scrollTo(0, 0);
    }

    render() {
        return <Link className="back-to-top d-flex align-items-center justify-content-center"
                     to="#"><i className="bi bi-arrow-up-short"/></Link>
    }
}

export default withRouter(ScrollToTop)