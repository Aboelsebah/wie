import React, {Component} from 'react';
import {Link} from "react-router-dom";


class NavBar extends Component {
    render() {
        return (
            <header className="header fixed-top"
                    id="header">
                <div className="container-fluid container-xl d-flex nav-b align-items-center justify-content-between">
                    <Link className="logo d-flex align-items-center"
                          to="/">
                        <img alt=""
                             src={process.env.PUBLIC_URL + "imgs/logo.png"} />
                        <span>HelpMeOut</span>
                    </Link>

                    <nav className="navbar"
                         id="navbar">
                        <ul>
                            <li><Link className="nav-link scrollto active"
                                      to="/">Home</Link></li>
                            <li><Link className="nav-link scrollto"
                                      to="about">About</Link></li>
                            <li><Link className="nav-link scrollto"
                                      to="posts">Jobs</Link></li>
                            <li><Link className="nav-link scrollto"
                                      to="team">Team</Link></li>
                            <li><Link className="nav-link scrollto"
                                      to="contact">Contact</Link></li>
                            <li><Link className="getstarted scrollto"
                                      to="login">Login</Link></li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle" />
                    </nav>
                </div>
            </header>
        );
    }
}

export default NavBar;