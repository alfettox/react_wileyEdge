import React from "react";

function Contact({ name, telNumber, email, imgSrc }) {
  return (
    <div className="contact">
      <img className="contact-image" src={imgSrc} alt={`${name}'s headshot`} />
      <h2 className="contact-name">{name}</h2>
      <p className="contact-info">{telNumber}</p>
      <p className="contact-info">{email}</p>
    </div>
  );
}

export default Contact;
