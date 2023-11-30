import React from "react";
import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <div className="newsletter-main-div">
      <div className="newsletter-text">
        <h1>Subscribe our Newsletter & Get every updates.</h1>
      </div>
      <div className="newsletter-items">
        <input
          className="newsletter-input"
          type="text"
          placeholder="Write Your E-mail"
        />
        <button className="newsletter-btn">SUBSCRIBE NOW</button>
      </div>
    </div>
  );
};

export default NewsLetter;
