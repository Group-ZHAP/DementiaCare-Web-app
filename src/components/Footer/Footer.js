import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className="footer">
            <div>
                <div>
                    <div>
                        <p>Services</p>
                    </div>
                    <div>
                        <small>Emergency Call</small>
                        <br />
                        <small>Check Up</small>
                        <br />
                        <small>Personal Treatment</small>
                        <br />
                        <small>Memory Improvement</small>
                        <br />
                        <small>Brain Training</small>
                    </div>
                </div>
                <div>
                    <div>
                        <p>Fun Activities</p>
                    </div>
                    <div>
                        <small>Events</small>
                        <br />
                        <small>Appointments</small>
                        <br />
                        <small>Group Discussions</small>
                        <br />
                        <small>Family Meetup</small>
                        <br />
                        <small>Donation</small>
                    </div>
                </div>
                <div>
                    <div>
                        <p>Our Address</p>
                    </div>
                    <div>
                        <small>Mumbai, India</small>
                        <div className="brandIcon">
                            <FontAwesomeIcon icon={faFacebookF} />
                            <FontAwesomeIcon icon={faGooglePlusG} />
                            <FontAwesomeIcon icon={faTwitter} />
                        </div>
                        <small>Call Now</small>
                        <p className="callNow">+91 9869654701</p>
                    </div>
                </div>
            </div>
            <div style={{ textAlign: "center", marginTop: "30px" }}>
                <small>Copyright NOV 2022 All Right Reserved</small>
            </div>
        </div>
    );
};

export default Footer;