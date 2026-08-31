import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaTrademark,
} from 'react-icons/fa';
import { WHATSAPP } from '../../data/products';
import './Footer.css';

const Footer = () => (
  <footer className="rp-footer">
    <div className="ramya-container rp-footer-grid">
      <div className="rp-footer-brand">
        <div className="rp-footer-logo">
          <span className="rp-logo-mark">R</span>
          <span>RAMYAPOOJA</span>
        </div>
        <p>
          Soft, cute &amp; comfortable women's nightwear — cami sets, night suits,
          nighties &amp; loungewear from Kasganj, Uttar Pradesh.
        </p>
        <div className="rp-socials">
          <a
            href={`https://wa.me/${WHATSAPP}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>
          <a href="#" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="#" aria-label="Facebook">
            <FaFacebookF />
          </a>
        </div>
      </div>

      <div className="rp-footer-col">
        <h4>Explore</h4>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/wishlist">Wishlist</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <div className="rp-footer-col">
        <h4>Categories</h4>
        <Link to="/shop">Night Suits</Link>
        <Link to="/shop">Nighties</Link>
        <Link to="/shop">Loungewear</Link>
        <Link to="/shop">The Sleep Edit</Link>
      </div>

      <div className="rp-footer-col rp-footer-contact">
        <h4>Reach Us</h4>
        <a href="tel:+919917869761">
          <FaPhoneAlt /> +91 99178 69761
        </a>
        <a href="mailto:kasganjgovind@gmail.com">
          <FaEnvelope /> kasganjgovind@gmail.com
        </a>
        <span>
          <FaMapMarkerAlt /> Lov Kush Nagar, Kasganj, UP - 207123
        </span>
      </div>
    </div>

    <div className="rp-footer-bar">
      <div className="ramya-container rp-footer-bar-inner">
        <span>
          © {new Date().getFullYear()} RAMYAPOOJA · Govind Traders. All rights
          reserved.
        </span>
        <span className="rp-footer-tm">
          <FaTrademark /> RAMYAPOOJA™ — Trademark application filed
        </span>
      </div>
    </div>
  </footer>
);

export default Footer;
