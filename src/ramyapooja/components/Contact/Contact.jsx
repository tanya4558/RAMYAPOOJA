import React, { useState } from 'react';
import {
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaPaperPlane,
  FaTrademark,
  FaClock,
} from 'react-icons/fa';
import { WHATSAPP } from '../../data/products';
import Seo from '../../seo/Seo';
import { SITE_URL, SITE_NAME, BUSINESS } from '../../seo/siteConfig';
import './Contact.css';

const contactJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ClothingStore',
  name: SITE_NAME,
  legalName: BUSINESS.firm,
  url: SITE_URL,
  email: BUSINESS.email,
  telephone: BUSINESS.phone,
  address: {
    '@type': 'PostalAddress',
    streetAddress: BUSINESS.street,
    addressLocality: BUSINESS.city,
    addressRegion: BUSINESS.region,
    postalCode: BUSINESS.postalCode,
    addressCountry: BUSINESS.country,
  },
};

const info = {
  brand: 'RAMYAPOOJA',
  firm: 'Govind Traders',
  owner: 'Ram Krishan Singh',
  email: 'kasganjgovind@gmail.com',
  phone: '9917869761',
  address: 'Lov Kush Nagar, Kasganj, Uttar Pradesh - 207123',
};

const countries = [
  { code: 'IN', name: 'India', dial: '+91', len: 10 },
  { code: 'US', name: 'United States', dial: '+1', len: 10 },
  { code: 'GB', name: 'United Kingdom', dial: '+44', len: 10 },
  { code: 'AE', name: 'United Arab Emirates', dial: '+971', len: 9 },
  { code: 'AU', name: 'Australia', dial: '+61', len: 9 },
  { code: 'SG', name: 'Singapore', dial: '+65', len: 8 },
];

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    countryCode: 'IN',
    phone: '',
    message: '',
  });
  const [error, setError] = useState('');

  const country =
    countries.find((c) => c.code === form.countryCode) || countries[0];

  const onChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const onPhone = (e) => {
    const digits = e.target.value.replace(/\D/g, '').slice(0, country.len);
    setForm({ ...form, phone: digits });
    setError('');
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (form.phone.length !== country.len) {
      setError(
        `Please enter a valid ${country.len}-digit number for ${country.name}.`
      );
      return;
    }
    const full = `${country.dial} ${form.phone}`;
    const msg =
      `Namaste ${info.brand}! 🙏%0A` +
      `Name: ${encodeURIComponent(form.name)}%0A` +
      `Phone: ${encodeURIComponent(full)}%0A` +
      `${encodeURIComponent(form.message)}`;
    window.open(`https://wa.me/${WHATSAPP}?text=${msg}`, '_blank');
  };

  return (
    <div className="rp-contact">
      <Seo
        title="Contact Us"
        description="Get in touch with RAMYAPOOJA (Govind Traders) in Kasganj, Uttar Pradesh for sizing help, bulk orders and custom women's nightwear sets. Call, email or message on WhatsApp."
        jsonLd={contactJsonLd}
      />
      <section className="rp-contact-hero">
        <div className="ramya-container">
          <span className="eyebrow center">We'd Love to Hear From You</span>
          <h1>Get in Touch</h1>
          <p>
            Questions about sizing, bulk orders or a custom nightwear set? Reach
            {` ${info.brand} `} directly.
          </p>
        </div>
      </section>

      <section className="rp-contact-main">
        <div className="ramya-container rp-contact-grid">
          {/* Info panel */}
          <div className="rp-contact-info">
            <h2>Contact Information</h2>
            <p className="rp-contact-sub">
              Handcrafted with care in Kasganj, Uttar Pradesh.
            </p>

            <ul className="rp-info-list">
              <li>
                <span className="rp-info-ic">
                  <FaUser />
                </span>
                <div>
                  <strong>Proprietor</strong>
                  <span>
                    {info.owner} · {info.firm}
                  </span>
                </div>
              </li>
              <li>
                <a href={`mailto:${info.email}`}>
                  <span className="rp-info-ic">
                    <FaEnvelope />
                  </span>
                  <div>
                    <strong>Email</strong>
                    <span>{info.email}</span>
                  </div>
                </a>
              </li>
              <li>
                <a href={`tel:+91${info.phone}`}>
                  <span className="rp-info-ic">
                    <FaPhoneAlt />
                  </span>
                  <div>
                    <strong>Phone</strong>
                    <span>+91 {info.phone}</span>
                  </div>
                </a>
              </li>
              <li>
                <span className="rp-info-ic">
                  <FaMapMarkerAlt />
                </span>
                <div>
                  <strong>Address</strong>
                  <span>{info.address}</span>
                </div>
              </li>
              <li>
                <span className="rp-info-ic">
                  <FaClock />
                </span>
                <div>
                  <strong>Hours</strong>
                  <span>Mon – Sat · 10:00 AM to 8:00 PM</span>
                </div>
              </li>
            </ul>

            <a
              className="rp-wa-big"
              href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
                'Namaste RAMYAPOOJA! I have a query about your collection.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp /> Chat on WhatsApp
            </a>

            <div className="rp-tm-card">
              <FaTrademark />
              <div>
                <strong>RAMYAPOOJA™</strong>
                <span>Trademark application filed · Class 25 · Word mark</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="rp-contact-form-wrap">
            <h2>Send us a Message</h2>
            <p className="rp-contact-sub">
              Fill in the details and we'll continue the chat on WhatsApp.
            </p>

            <form className="rp-form" onSubmit={onSubmit}>
              <label className="rp-field">
                <span>Full Name</span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  placeholder="Your name"
                  required
                />
              </label>

              <div className="rp-field-row">
                <label className="rp-field rp-field-code">
                  <span>Country</span>
                  <select
                    name="countryCode"
                    value={form.countryCode}
                    onChange={(e) => {
                      onChange(e);
                      setError('');
                    }}
                  >
                    {countries.map((c) => (
                      <option key={c.code} value={c.code}>
                        {c.name} ({c.dial})
                      </option>
                    ))}
                  </select>
                </label>

                <label className="rp-field rp-field-phone">
                  <span>Phone Number</span>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={onPhone}
                    placeholder={`${country.len}-digit number`}
                    required
                  />
                </label>
              </div>
              {error && <p className="rp-error">{error}</p>}

              <label className="rp-field">
                <span>Message</span>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={onChange}
                  rows="4"
                  placeholder="Tell us what you're looking for…"
                  required
                />
              </label>

              <button type="submit" className="btn btn-solid rp-form-btn">
                <FaPaperPlane /> Send via WhatsApp
              </button>
            </form>
          </div>
        </div>

        {/* Map */}
        <div className="ramya-container">
          <div className="rp-map">
            <div className="rp-map-head">
              <FaMapMarkerAlt />
              <div>
                <strong>Visit our boutique</strong>
                <span>{info.address}</span>
              </div>
            </div>
            <iframe
              title="RAMYAPOOJA Location - Kasganj"
              src="https://www.google.com/maps?q=Lov%20Kush%20Nagar%2C%20Kasganj%2C%20Uttar%20Pradesh%2C%20207123&output=embed"
              width="100%"
              height="340"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
