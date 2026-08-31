import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes, FaHeart, FaWhatsapp } from 'react-icons/fa';
import { useWishlist } from '../../context/WishlistContext';
import { WHATSAPP } from '../../data/products';
import './Navbar.css';

const WHATSAPP_URL = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
  'Namaste RAMYAPOOJA! I would like to know more about your collection.'
)}`;

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { wishlist } = useWishlist();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className={`rp-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="rp-announce">
        <span>✦ Festive Edit is live — Free shipping over ₹999 across India ✦</span>
      </div>

      <nav className="rp-nav">
        <div className="ramya-container rp-nav-inner">
          <button
            className="rp-burger"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>

          <Link to="/" className="rp-logo" onClick={close}>
            <span className="rp-logo-mark">R</span>
            <span className="rp-logo-text">
              RAMYAPOOJA
              <small>clothing · footwear · headwear</small>
            </span>
          </Link>

          <ul className={`rp-menu ${open ? 'open' : ''}`}>
            <li>
              <NavLink to="/" end onClick={close}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/shop" onClick={close}>
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink to="/wishlist" onClick={close}>
                Wishlist
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={close}>
                Contact
              </NavLink>
            </li>
          </ul>

          <div className="rp-actions">
            <NavLink to="/wishlist" className="rp-wish" aria-label="Wishlist">
              <FaHeart />
              {wishlist.length > 0 && (
                <span className="rp-wish-count">{wishlist.length}</span>
              )}
            </NavLink>
            <a
              className="rp-wa"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp /> <span>Order</span>
            </a>
          </div>
        </div>
      </nav>

      {open && <div className="rp-backdrop" onClick={close} />}
    </header>
  );
};

export default Navbar;
