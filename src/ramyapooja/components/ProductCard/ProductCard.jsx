import React from 'react';
import {
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
  FaHeart,
  FaRegHeart,
  FaWhatsapp,
} from 'react-icons/fa';
import { WHATSAPP, formatINR } from '../../data/products';
import { useWishlist } from '../../context/WishlistContext';
import './ProductCard.css';

const Stars = ({ rating }) => {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);
  return (
    <span className="rp-stars" aria-label={`${rating} out of 5`}>
      {Array.from({ length: full }).map((_, i) => (
        <FaStar key={`f${i}`} />
      ))}
      {half && <FaStarHalfAlt />}
      {Array.from({ length: empty }).map((_, i) => (
        <FaRegStar key={`e${i}`} />
      ))}
    </span>
  );
};

const ProductCard = ({ product: p }) => {
  const { isWished, toggleWish } = useWishlist();
  const wished = isWished(p.id);
  const off = Math.round(((p.original - p.price) / p.original) * 100);

  const enquire = () => {
    const msg = `Namaste RAMYAPOOJA! 🙏\nI'm interested in *${p.title}* (${formatINR(
      p.price
    )}).\nPlease share size availability & delivery details.`;
    window.open(
      `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`,
      '_blank'
    );
  };

  return (
    <article className="rp-card">
      <div className="rp-card-media">
        <span className={`rp-badge badge-${p.badge}`}>{p.tag}</span>
        <span className="rp-off">{off}% OFF</span>
        <button
          className={`rp-heart ${wished ? 'on' : ''}`}
          onClick={() => toggleWish(p.id)}
          aria-label={wished ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          {wished ? <FaHeart /> : <FaRegHeart />}
        </button>
        <img
          className="rp-card-img"
          src={p.image}
          alt={p.title}
          loading="lazy"
        />
      </div>

      <div className="rp-card-body">
        <span className="rp-card-cat">{p.category.replace('-', ' ')}</span>
        <h3>{p.title}</h3>

        <div className="rp-card-rating">
          <Stars rating={p.rating} />
          <span>{p.rating}</span>
          <small>({p.reviews})</small>
        </div>

        <p className="rp-card-desc">{p.desc}</p>

        <div className="rp-sizes">
          {p.sizes.map((s) => (
            <span key={s}>{s}</span>
          ))}
        </div>

        <div className="rp-card-foot">
          <div className="rp-price">
            <span className="now">{formatINR(p.price)}</span>
            <span className="was">{formatINR(p.original)}</span>
          </div>
          <button className="rp-enquire" onClick={enquire}>
            <FaWhatsapp /> Enquire
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
