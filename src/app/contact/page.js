'use client';
import { useState } from 'react';
import '../about/about.css';
import './contact.css';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div>
      <section className="page-hero" style={{ backgroundImage: 'linear-gradient(rgba(80,0,60,0.78), rgba(40,0,30,0.88)), url(/assets/724446452_1331216712491653_7362932749039883262_n.jpg)' }}>
        <div className="container">
          <h1>Contact Us</h1>
          <p>We would love to hear from you. Reach out and let's connect.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container contact-layout">
          {/* Contact Info */}
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p>Whether you have a question, a prayer request, or want to visit us for the first time — our team is ready to welcome you.</p>
            <div className="info-cards">
              <div className="info-card">
                <div className="info-icon">📍</div>
                <div>
                  <h4>Location</h4>
                  <p>Kazizi Mall, Kwang Rayfield Road,<br/>Rayfield, Jos, Nigeria</p>
                </div>
              </div>
              <div className="info-card">
                <div className="info-icon">📅</div>
                <div>
                  <h4>Service Times</h4>
                  <p>Sundays: 9:00 AM<br/>Wednesdays: 5:30 PM<br/><em>Always Open for Prayer</em></p>
                </div>
              </div>
              <div className="info-card">
                <div className="info-icon">📞</div>
                <div>
                  <h4>Phone</h4>
                  <p><a href="tel:+2348135555643" style={{color:'var(--color-primary)',fontWeight:600}}>+234 813 555 5643</a></p>
                </div>
              </div>
              <div className="info-card">
                <div className="info-icon">📧</div>
                <div>
                  <h4>Email</h4>
                  <p><a href="mailto:wordalivemetanoia@gmail.com" style={{color:'var(--color-primary)',fontWeight:600}}>wordalivemetanoia@gmail.com</a></p>
                </div>
              </div>
              <div className="info-card">
                <div className="info-icon">📸</div>
                <div>
                  <h4>Instagram</h4>
                  <a href="https://www.instagram.com/wordalive_global" target="_blank" rel="noopener noreferrer" style={{color:'var(--color-primary)',fontWeight:600}}>@wordalive_global</a>
                </div>
              </div>
              <div className="info-card">
                <div className="info-icon">▶️</div>
                <div>
                  <h4>YouTube</h4>
                  <a href="https://www.youtube.com/@wordalive_global" target="_blank" rel="noopener noreferrer" style={{color:'var(--color-primary)',fontWeight:600}}>wordalive_global</a>
                </div>
              </div>
              <div className="info-card">
                <div className="info-icon">📘</div>
                <div>
                  <h4>Facebook</h4>
                  <a href="https://www.facebook.com/thespiritfamily7" target="_blank" rel="noopener noreferrer" style={{color:'var(--color-primary)',fontWeight:600}}>Word Alive Global</a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-wrap">
            {submitted ? (
              <div className="success-msg">
                <div style={{ fontSize: '3rem' }}>✅</div>
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. We will get back to you as soon as possible. God bless you!</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <h3>Send a Message</h3>
                <div className="form-row">
                  <div className="form-group">
                    <label>First Name</label>
                    <input type="text" placeholder="Your first name" required />
                  </div>
                  <div className="form-group">
                    <label>Last Name</label>
                    <input type="text" placeholder="Your last name" required />
                  </div>
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input type="email" placeholder="your@email.com" required />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input type="tel" placeholder="+234 XXX XXXX" />
                </div>
                <div className="form-group">
                  <label>Subject</label>
                  <select>
                    <option>General Enquiry</option>
                    <option>Prayer Request</option>
                    <option>Partnership</option>
                    <option>Giving / Tithes</option>
                    <option>Event Booking</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea rows={5} placeholder="Write your message here..." required />
                </div>
                <button type="submit" className="btn btn-accent" style={{ width: '100%', fontSize: '1.1rem' }}>Send Message</button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
