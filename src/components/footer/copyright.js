import React from "react"
import { Link } from "react-router-dom"

export default function Copyright() {
    return (
        <div id="footer" className="copyright-area copyright-style-one">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-8 col-sm-12 col-12">
                        <div className="copyright-left">
                            <ul className="ft-menu link-hover">
                                <li>
                                    <Link to="/privacy-policy">
                                        <span>Privacy Policy</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/term-and-condition">
                                        <span>Terms And Condition</span>
                                    </Link>
                                </li>
                                <li>
                                    <a href="#/contact-us">Contact Us</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-4 col-sm-12 col-12">
                        <div className="copyright-right text-center text-md-end">
                            <p className="copyright-text">
                                Copyright © {new Date().getFullYear()} Untung 1
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
