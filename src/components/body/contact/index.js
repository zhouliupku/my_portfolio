import React from "react";
import "./contact.css";
import SocialContact from "../../common/social-contact/index";
import Separator from "../../common/separator/index";
function Contact() {
  return (
    <div className="contact">
      <Separator />
      <label className="section-title">Contact</label>
      <div className="contact-container">
        <div className="contact-left">

          <a>
          <i class="fi fi-rr-phone-call"></i> +1 (617) 909 8598
          </a>
          <br></br>
          <a>
          <i class="fi fi-rr-envelope"></i> zhouliupku@gmail.com
          </a>
          <SocialContact />
        </div>
        <div className="download">
          <a download href={require("../../../assets/resume.pdf")}>
            <i class="fi-rr-cloud-download download-icon" />
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;