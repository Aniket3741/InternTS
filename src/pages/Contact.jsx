import { useState } from "react";
import support from "../images/support.png";
// import { useAuth } from "../store/auth";
import styles from '../assets/css/contact.module.css';

export const Contact = () => {
  // const { user } = useAuth();
  const [contact, setContact] = useState({
    Address: "",
    Phone: "",
    Email: "",
    InquiryType: "",
    Message: ""
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setContact((prevContact) => ({
      ...prevContact,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(contact);
  };

  return (
    <>
      <section className={styles.sectionContact}>
        <div className={styles.contactContent}>
          <h1 className={styles.mainHeading}>Contact Us</h1>
        </div>
        <p className={styles.pp}>Ready to recover your lost data? Get in touch with us today!</p>
        <div className={`${styles.grid} ${styles.gridTwoCols}`}>
          <div className={styles.contactImg}>
            <img src={support} alt="We are always ready to help" />
          </div>

          <section className={styles.sectionForm}>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  name="Address"
                  id="address"
                  value={contact.Address}
                  onChange={handleInput}
                />
              </div>

              <div>
                <label htmlFor="phone">Phone</label>
                <input
                  type="text"
                  name="Phone"
                  id="phone"
                  value={contact.Phone}
                  onChange={handleInput}
                />
              </div>

              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="Email"
                  id="email"
                  value={contact.Email}
                  onChange={handleInput}
                />
              </div>

              <div>
                <label htmlFor="inquiry-type">Inquiry Type</label>
                <select
                  name="InquiryType"
                  id="inquiry-type"
                  value={contact.InquiryType}
                  onChange={handleInput}
                >
                  <option value="">Select an option</option>
                  <option value="Data Recovery">Data Recovery</option>
                  <option value="System Repair">System Repair</option>
                  <option value="Software Installation">Software Installation</option>
                  <option value="Hardware Upgrade">Hardware Upgrade</option>
                  <option value="Others">Others</option>
                </select>
              </div>

              <div>
                <label htmlFor="msg">Message</label>
                <textarea
                  name="Message"
                  id="msg"
                  value={contact.Message}
                  onChange={handleInput}
                />
              </div>

              <div>
                <button type="submit">Submit</button>
              </div>
            </form>
          </section>
        </div>

        <section className="mb-3">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2613173278896!2d73.91411937501422!3d18.562253982539413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147b8b3a3bf%3A0x6f7fdcc8e4d6c77e!2sPhoenix%20Marketcity%20Pune!5e0!3m2!1sen!2sin!4v1697604225432!5m2!1sen!2sin"
            width="100%"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
      </section>
    </>
  );
};
