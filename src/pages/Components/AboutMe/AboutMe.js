import React from "react";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div className="about-container">
      <div className="about-text">
        <h2>Hello, I'm</h2>
        <h1>Dr. Israt</h1>
        <p>
          Whether you are looking for a family dentist or a smile makeover, I
          have completed the training and experience necessary to give you
          remarkable results.
        </p>
        <p>
          I offer a unique blend of patient-first dentistry with a strong
          esthetic focus. I truly care about your comfort and health and want
          you to feel confident in your smile. By combining my love of art and
          science, I can help you achieve your smile goals in my comfortable,
          family-style office setting.
        </p>
        <p>
          I am really proud to take care of all of your dental needs, Whether
          you’re in need of a cleaning, a root canal, or a dental implant.
          Please let me know how I can help.
        </p>
        <br />
        <button>ONLINE SCHEDULING</button>
      </div>
      <div className="about-img-container">
        <img
          className="about-img"
          src="https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
        />
      </div>
    </div>
  );
};

export default AboutMe;
