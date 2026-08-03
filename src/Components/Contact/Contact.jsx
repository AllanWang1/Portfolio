import React from "react";
import "./Contact.css";
import mail_icon from "../../assets/contact-icons/envelope.svg";
import phone_icon from "../../assets/contact-icons/phone.svg";
import github_icon from "../../assets/contact-icons/github.svg";
import linkedin_icon from "../../assets/contact-icons/linkedin.svg";

const Contact = () => {
  return (
    <div id="contact" className="contact">
      <h2>Contact Me</h2>
      <div className="contact-section">
        <div className="contact-details">
          <div className="contact-detail">
            <img src={mail_icon} alt="" />
            <p>allan357161@gmail.com</p>
          </div>
          <div className="contact-detail">
            <img src={phone_icon} alt="" />
            <p>+1 778-798-1233</p>
          </div>
          <div className="contact-detail">
            <img src={github_icon} alt="" />
            <a href="https://github.com/AllanWang1">
              https://github.com/AllanWang1
            </a>
          </div>
          <div className="contact-detail">
            <img src={linkedin_icon} alt="" />
            <a href="https://www.linkedin.com/in/allan-wang-b489a3222/">
              https://www.linkedin.com/in/allan-wang-b489a3222/
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
