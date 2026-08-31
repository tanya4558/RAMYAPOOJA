import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaArrowRight,
  FaTruck,
  FaMedal,
  FaExchangeAlt,
  FaTrademark,
  FaQuoteLeft,
  FaLeaf,
  FaHandHoldingHeart,
} from 'react-icons/fa';
import ProductCard from '../ProductCard/ProductCard';
import { categories, getFeatured } from '../../data/products';
import Seo from '../../seo/Seo';
import { SITE_URL, SITE_NAME, BUSINESS, abs } from '../../seo/siteConfig';
import './Home.css';

const testimonials = [
  {
    text: 'The heart-print cami set is SO soft and true to size. I practically live in it now — best sleepwear I have bought online.',
    name: 'Ananya Sharma',
    place: 'Jaipur',
  },
  {
    text: 'Ordered the satin night suit and a slip nighty. Lovely fabric, neat stitching and quick delivery. Comfortable all night.',
    name: 'Priya Verma',
    place: 'Lucknow',
  },
  {
    text: 'The modal loungewear co-ord feels premium and breathable. Loved the personal help on WhatsApp for sizing too.',
    name: 'Sneha Mehta',
    place: 'Delhi',
  },
];

const Home = () => {
  const featured = getFeatured().slice(0, 3);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ClothingStore',
    name: SITE_NAME,
    legalName: BUSINESS.firm,
    url: SITE_URL,
    image: abs('/ProductImage/nightwear-1.jfif'),
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
    founder: BUSINESS.owner,
    areaServed: 'IN',
  };

  return (
    <div className="rp-home">
      <Seo jsonLd={jsonLd} />
      {/* ===== HERO ===== */}
      <section className="rp-hero">
        <div className="ramya-container rp-hero-grid">
          <div className="rp-hero-copy reveal">
            <span className="eyebrow">Est. Kasganj · Women's Nightwear</span>
            <h1>
              Soft nights, <em>sweet</em> dreams — made for her.
            </h1>
            <p>
              RAMYAPOOJA brings you cosy, cute and comfortable women's nightwear —
              cami sets, satin night suits, slip nighties and loungewear you'll
              never want to take off.
            </p>
            <div className="rp-hero-cta">
              <Link to="/shop" className="btn btn-solid">
                Shop Nightwear <FaArrowRight />
              </Link>
              <Link to="/contact" className="btn btn-ghost">
                Contact Us
              </Link>
            </div>
            <div className="rp-hero-stats">
              <div>
                <strong>10+</strong>
                <span>Nightwear Styles</span>
              </div>
              <div>
                <strong>100%</strong>
                <span>Soft-Touch Fabric</span>
              </div>
              <div>
                <strong>4.7★</strong>
                <span>Loved by Buyers</span>
              </div>
            </div>
          </div>

          <div className="rp-hero-art reveal">
            <div className="rp-hero-frame frame-a">
              <img src="/ProductImage/nightwear-1.jfif" alt="Heart print cami and shorts set" />
            </div>
            <div className="rp-hero-frame frame-b">
              <img src="/ProductImage/nightwear-6.jfif" alt="Camisole shorts set" />
            </div>
            <div className="rp-hero-frame frame-c">
              <img src="/ProductImage/nightwear-4.jfif" alt="Slip nighty" />
            </div>
            <span className="rp-hero-seal">
              <FaTrademark /> RAMYAPOOJA™
            </span>
          </div>
        </div>
      </section>

      {/* ===== MARQUEE ===== */}
      <div className="rp-marquee">
        <div className="rp-marquee-track">
          {Array.from({ length: 2 }).map((_, i) => (
            <React.Fragment key={i}>
              <span>Cami &amp; Shorts Sets</span>
              <span className="dot">✦</span>
              <span>Satin Night Suits</span>
              <span className="dot">✦</span>
              <span>Slip Nighties</span>
              <span className="dot">✦</span>
              <span>Cotton Sleepwear</span>
              <span className="dot">✦</span>
              <span>Loungewear Co-ords</span>
              <span className="dot">✦</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* ===== PERKS ===== */}
      <section className="rp-perks">
        <div className="ramya-container rp-perks-grid">
          <div className="rp-perk">
            <FaTruck />
            <div>
              <strong>Free Shipping</strong>
              <span>On all orders over ₹999</span>
            </div>
          </div>
          <div className="rp-perk">
            <FaExchangeAlt />
            <div>
              <strong>7-Day Returns</strong>
              <span>Easy size exchanges</span>
            </div>
          </div>
          <div className="rp-perk">
            <FaMedal />
            <div>
              <strong>Artisan Quality</strong>
              <span>Handpicked craftsmanship</span>
            </div>
          </div>
          <div className="rp-perk">
            <FaHandHoldingHeart />
            <div>
              <strong>COD Available</strong>
              <span>Pay on delivery</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CATEGORIES ===== */}
      <section className="rp-cats">
        <div className="ramya-container">
          <div className="section-head">
            <span className="eyebrow center">Shop by Category</span>
            <h2>Nightwear for every mood</h2>
            <p>From breezy cami sets to cosy full-length gowns and soft co-ords.</p>
          </div>

          <div className="rp-cats-grid">
            {categories.map((c, i) => (
              <Link
                to="/shop"
                key={c.key}
                className={`rp-cat rp-cat-${i}`}
              >
                <div className="rp-cat-art">
                  <img src={c.image} alt={c.name} loading="lazy" />
                </div>
                <div className="rp-cat-info">
                  <h3>{c.name}</h3>
                  <p>{c.tagline}</p>
                  <span className="rp-cat-link">
                    Shop {c.name} <FaArrowRight />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURED ===== */}
      <section className="rp-featured">
        <div className="ramya-container">
          <div className="section-head">
            <span className="eyebrow center">The Sleep Edit</span>
            <h2>Handpicked favourites</h2>
            <p>Our softest, most-loved nightwear — curated just for you.</p>
          </div>

          <div className="rp-grid">
            {featured.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>

          <div className="rp-center">
            <Link to="/shop" className="btn btn-gold">
              View Full Collection <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== STORY ===== */}
      <section className="rp-story">
        <div className="ramya-container rp-story-grid">
          <div className="rp-story-art">
            <div className="rp-story-badge">
              <FaLeaf />
              <span>Rooted in Kasganj, made soft for you</span>
            </div>
            <div className="rp-story-frame">
              <img src="/ProductImage/nightwear-5.jfif" alt="RAMYAPOOJA women's nightwear" loading="lazy" />
            </div>
          </div>
          <div className="rp-story-copy">
            <span className="eyebrow">Our Story</span>
            <h2>Govind Traders &amp; the RAMYAPOOJA promise</h2>
            <p>
              Born in Lov Kush Nagar, Kasganj, RAMYAPOOJA is the labour of love of{' '}
              <strong>Ram Krishan Singh</strong> and Govind Traders. Every cami set,
              nighty and co-ord is chosen for its softness, fit and finish — so
              every woman can unwind in comfort she'll love.
            </p>
            <ul className="rp-story-points">
              <li>
                <FaTrademark /> <span>Trademark <em>RAMYAPOOJA</em>™ — application filed &amp; protected</span>
              </li>
              <li>
                <FaMedal /> <span>Quality-checked, soft-touch fabrics</span>
              </li>
              <li>
                <FaHandHoldingHeart /> <span>Personal service over call &amp; WhatsApp</span>
              </li>
            </ul>
            <Link to="/contact" className="btn btn-solid">
              Talk to the Founder <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="rp-reviews">
        <div className="ramya-container">
          <div className="section-head">
            <span className="eyebrow center">Kind Words</span>
            <h2>Loved across India</h2>
          </div>
          <div className="rp-reviews-grid">
            {testimonials.map((t, i) => (
              <figure className="rp-review" key={i}>
                <FaQuoteLeft className="rp-quote" />
                <blockquote>{t.text}</blockquote>
                <figcaption>
                  <strong>{t.name}</strong>
                  <span>{t.place}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ===== NEWSLETTER ===== */}
      <section className="rp-news">
        <div className="ramya-container rp-news-inner">
          <div>
            <span className="eyebrow">Join the RAMYAPOOJA family</span>
            <h2>New nightwear drops &amp; early offers, first.</h2>
          </div>
          <form
            className="rp-news-form"
            onSubmit={(e) => e.preventDefault()}
          >
            <input type="email" placeholder="Your email address" aria-label="Email" required />
            <button type="submit" className="btn btn-gold">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
