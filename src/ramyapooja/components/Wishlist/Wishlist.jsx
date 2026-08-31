import React from 'react';
import { Link } from 'react-router-dom';
import { FaHeartBroken, FaArrowRight } from 'react-icons/fa';
import ProductCard from '../ProductCard/ProductCard';
import { products } from '../../data/products';
import { useWishlist } from '../../context/WishlistContext';
import Seo from '../../seo/Seo';
import './Wishlist.css';

const Wishlist = () => {
  const { wishlist } = useWishlist();
  const saved = products.filter((p) => wishlist.includes(p.id));

  return (
    <div className="rp-wishlist">
      <Seo title="My Wishlist" noindex />
      <section className="rp-wish-hero">
        <div className="ramya-container">
          <span className="eyebrow center">Saved for Later</span>
          <h1>My Wishlist</h1>
          <p>
            {saved.length > 0
              ? `You have ${saved.length} beautiful ${
                  saved.length === 1 ? 'piece' : 'pieces'
                } saved.`
              : 'Your curated edit starts here.'}
          </p>
        </div>
      </section>

      <div className="ramya-container">
        {saved.length > 0 ? (
          <div className="rp-grid rp-wish-grid">
            {saved.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        ) : (
          <div className="rp-wish-empty">
            <FaHeartBroken />
            <h2>Nothing saved yet</h2>
            <p>Tap the heart on any product to add it to your wishlist.</p>
            <Link to="/shop" className="btn btn-solid">
              Start Shopping <FaArrowRight />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
