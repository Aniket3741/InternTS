import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import facebookIcon from '../images/f.png';
import twitterIcon from '../images/m.png';
import linkedinIcon from '../images/p.png';
import whatsappIcon from '../images/w.png';

export const Footer = () => {
    const [darkMode, setDarkMode] = useState(true);

    const toggleTheme = () => {
        setDarkMode(!darkMode);
    };

    return (
        <footer className={`py-4 ${darkMode ? 'bg-dark text-white' : 'bg-light text-dark'}`}>
            <div className="container">
                <div className="row">
                    {/* Left Section */}
                    <div className="col-lg-4 col-md-6 mb-4">
                        <h3>Data<span className="text-primary">Recovery</span></h3>
                        <ul className="list-unstyled">
                            <li><a href="/" className={`text-decoration-none ${darkMode ? 'text-white' : 'text-dark'}`}>Home</a></li>
                            <li><a href="/about" className={`text-decoration-none ${darkMode ? 'text-white' : 'text-dark'}`}>About</a></li>
                            <li><a href="/contact" className={`text-decoration-none ${darkMode ? 'text-white' : 'text-dark'}`}>Contact</a></li>
                            <li><a href="/service" className={`text-decoration-none ${darkMode ? 'text-white' : 'text-dark'}`}>Service</a></li>
                        </ul>
                        <p>&copy; 2021 DataRecovery. All rights reserved.</p>
                    </div>

                    {/* Center Section */}
                    <div className="col-lg-4 col-md-6 mb-4">
                        <h5 className="text-uppercase">Contact Info</h5>
                        <p><strong>Locations:</strong> Ghaziabad, Chennai</p>
                        <p><strong>Phone:</strong> +91 7498954258</p>
                        <p><strong>Email:</strong> <a href="mailto:DataRecovery@gmail.com" className={`text-decoration-none ${darkMode ? 'text-white' : 'text-dark'}`}>Info@gmail.com</a></p>
                    </div>

                    {/* Right Section */}
                    <div className="col-lg-4 col-md-12 mb-4">
                        <h5 className="text-uppercase">About the Company</h5>
                        <p>
                            Data recovery services focus on retrieving lost, deleted, or inaccessible data from various storage devices, offering reliable solutions for critical data loss.
                        </p>
                        <div className="d-flex gap-3">
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                <img src={facebookIcon} alt="Facebook icon" className="img-fluid" />
                            </a>
                            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                                <img src={twitterIcon} alt="Twitter icon" className="img-fluid" />
                            </a>
                            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <img src={linkedinIcon} alt="LinkedIn icon" className="img-fluid" />
                            </a>
                            <a href="https://wa.me/+1234567890" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                                <img src={whatsappIcon} alt="WhatsApp icon" className="img-fluid" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center mt-4">
                <button onClick={toggleTheme} className="btn btn-outline-primary">
                    Toggle {darkMode ? 'Light' : 'Dark'} Mode
                </button>
                <p className="text-muted mt-2">Designed by TenSketch</p>
            </div>
        </footer>
    );
};
