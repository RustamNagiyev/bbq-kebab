import React from "react";
import "./contact.css"
const Contact = () => {
  return (
    <div className="background">
      <section className="contact" id="contact">
        <select>
          <option>Contact Us</option>
          <option>Delivery</option>
          <option>Beverages</option>
          <option>Menu</option>
          <option>About</option>
        </select>
        <iframe 
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d396369.7968760607!2d-94.5757195!3d39.091919000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c0f75eafe99997%3A0x558525e66aaa51a2!2sKansas%20City%2C%20Missouri%2C%20Amerika%20Birle%C5%9Fik%20Devletleri!5e0!3m2!1str!2saz!4v1697195915357!5m2!1str!2saz"
          width="70%"
          height="450"
          style={{ border: "0", margin: "0 auto" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;
