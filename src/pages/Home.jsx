import React from 'react';
import home from '../images/home.png';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
import { Service } from './Service';
export const Home = () => {
    return (
        <>
            <main>
                <section className="section-hero py-5">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 text-center text-lg-start">
                                <h1 className="display-4 fw-bold">When Every Memory Seemed Lost, We Found a Way to Save Them.</h1>
                                <div className="btn-group mt-4">
                                    <a href='/contact' className="btn btn-primary me-2">
                                        Read More
                                    </a>
                                    <a href="/learn-more" className="btn btn-secondary">
                                        Recover Now
                                    </a>
                                </div>
                            </div>

                            <div className="col-lg-6 text-center">
                                <img src={home} alt="Home representation" className="img-fluid" style={{ maxWidth: '400px' }} />
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2nd section */}
                {/* <Analytics /> */}

                {/* 3rd Section */}
                <section className="section-hero py-5">
                    <div className="container text-center">
                        <p>We Don’t Just Recover Data; We Recover Moments.</p>
                        <p>If it's a software issue, we can recover up to 80%, but no guarantees. The cost could go up to ₹10,000. Do you wish to proceed?<br />For hardware problems, expect up to ₹20,000 with the same 80% recovery rate. Plus, there’s a risk the device could be wiped clean. You need to pay 50% upfront. Do you want to continue?</p>
                        <div className="btn-group mt-4">
                            <a href='/contact' className="btn btn-primary me-2">
                                Read More
                            </a>
                            <a href="/learn-more" className="btn btn-secondary">
                                Recover Now
                            </a>
                        </div>
                    </div>
                </section>

                {/* <About /> */}
                <Service />
            </main>
        </>
    );
};
