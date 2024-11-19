import React from 'react'
import "./Contact.css"
import mail_icon from "../../assets/envelope.svg"
import phone_icon from "../../assets/phone.svg"
import github_icon from "../../assets/github.svg"

const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "eb5928a4-4c70-432c-943f-9642d54cc85b");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message);
        }
    };


  return (
    <div id='contact' className='contact'>
      <h2>Contact Me</h2>
      <div className="contact-section">
        <div className="contact-left">
            <h3>Let's talk</h3>
            <div className="contact-details">
                <div className="contact-detail">
                    <img src={ mail_icon } alt="" />
                    <p>allan357161@gmail.com</p>
                </div>
                <div className="contact-detail">
                    <img src={ phone_icon } alt="" />
                    <p>+1 778-798-1233</p>
                </div>
                <div className="contact-detail">
                    <img src={ github_icon } alt="" />
                    <p>https://github.com/AllanWang1</p>
                </div>
            </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder="Enter your name" name='name'/>
            <label htmlFor="">Your Email</label>
            <input type="email" placeholder="Enter your email" name='email'/>
            <label htmlFor="">Write your message here</label>
            <textarea name="message" rows="8" placeholder="Enter your message"></textarea>
            <button type="submit" className="contact-submit">Send message</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
