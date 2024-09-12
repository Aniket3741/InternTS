import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

import DBR from "../assets/DBR.png";
import Hdr from "../assets/Hdr.png";
import mobile from "../assets/mobile.png";
import Raid from "../assets/Raid.png";
import usb from "../assets/usb.png";

export const Service = () => {
    return (
        <div className="container my-5">
            <h1 className="text-center mb-4">Our Services</h1>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                <div className="col">
                    <div className="card text-center p-4">
                        <img src={Hdr} alt="Hard Drive Recovery" className="card-img-top" style={{ height: '50px', objectFit: 'contain' }} />
                        <div className="card-body">
                            <h5 className="card-title">Hard Drive Recovery</h5>
                            <p className="card-text">
                                Whether it’s a mechanical failure, bad sectors, or corrupted files, we can recover data from all types of hard drives.
                            </p>
                            <NavLink to="/services/hard-drive-recovery" className="btn btn-primary">Read More</NavLink>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card text-center p-4">
                        <img src={DBR} alt="SSD Recovery" className="card-img-top" style={{ height: '50px', objectFit: 'contain' }} />
                        <div className="card-body">
                            <h5 className="card-title">SSD Recovery</h5>
                            <p className="card-text">
                                Specialized techniques for recovering data from SSDs, including those with physical damage or firmware issues.
                            </p>
                            <NavLink to="/services/ssd-recovery" className="btn btn-primary">Read More</NavLink>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card text-center p-4">
                        <img src={Raid} alt="RAID Recovery" className="card-img-top" style={{ height: '50px', objectFit: 'contain' }} />
                        <div className="card-body">
                            <h5 className="card-title">RAID Recovery</h5>
                            <p className="card-text">
                                Expertise in recovering data from complex RAID configurations, no matter the level of damage.
                            </p>
                            <NavLink to="/services/raid-recovery" className="btn btn-primary">Read More</NavLink>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card text-center p-4">
                        <img src={usb} alt="USB & External Drives" className="card-img-top" style={{ height: '50px', objectFit: 'contain' }} />
                        <div className="card-body">
                            <h5 className="card-title">USB & External Drives</h5>
                            <p className="card-text">
                                Quick and efficient recovery from all types of USB drives and external hard drives.
                            </p>
                            <NavLink to="/services/usb-external-drives" className="btn btn-primary">Read More</NavLink>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card text-center p-4">
                        <img src={mobile} alt="Mobile Devices" className="card-img-top" style={{ height: '50px', objectFit: 'contain' }} />
                        <div className="card-body">
                            <h5 className="card-title">Mobile Devices</h5>
                            <p className="card-text">
                                Recovery services for smartphones and tablets, including deleted photos, messages, and more.
                            </p>
                            <NavLink to="/services/mobile-devices" className="btn btn-primary">Read More</NavLink>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card text-center p-4">
                        <img src={DBR} alt="Database Recovery" className="card-img-top" style={{ height: '50px', objectFit: 'contain' }} />
                        <div className="card-body">
                            <h5 className="card-title">Database Recovery</h5>
                            <p className="card-text">
                                Specialized services for recovering critical data from damaged or corrupted databases.
                            </p>
                            <NavLink to="/services/database-recovery" className="btn btn-primary">Read More</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
