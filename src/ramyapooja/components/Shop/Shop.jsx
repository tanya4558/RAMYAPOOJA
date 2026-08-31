import React, { useMemo, useState } from 'react';
import { FaFilter } from 'react-icons/fa';
import ProductCard from '../ProductCard/ProductCard';
import { products, categories } from '../../data/products';
import Seo from '../../seo/Seo';
import { SITE_NAME, abs } from '../../seo/siteConfig';
import './Shop.css';

const shopJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: `${SITE_NAME} — Women's Nightwear`,
  itemListElement: products.map((p, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'Product',
      name: p.title,
      image: abs(p.image),
      description: p.desc,
      brand: { '@type': 'Brand', name: SITE_NAME },
      offers: {
        '@type': 'Offer',
        price: p.price,
        priceCurrency: 'INR',
        availability: 'https://schema.org/InStock',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: p.rating,
        reviewCount: p.reviews,
      },
    },
  })),
};

const sorts = [
  { key: 'featured', label: 'Featured' },
  { key: 'low', label: 'Price: Low to High' },
  { key: 'high', label: 'Price: High to Low' },
  { key: 'rating', label: 'Top Rated' },
];

const Shop = () => {
  const [active, setActive] = useState('all');
  const [sort, setSort] = useState('featured');

  const list = useMemo(() => {
    let items = products.filter(
      (p) => active === 'all' || p.category === active
    );
    switch (sort) {
      case 'low':
        items = [...items].sort((a, b) => a.price - b.price);
        break;
      case 'high':
        items = [...items].sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        items = [...items].sort((a, b) => b.rating - a.rating);
        break;
      default:
        items = [...items].sort(
          (a, b) => Number(b.featured) - Number(a.featured)
        );
    }
    return items;
  }, [active, sort]);

  return (
    <div className="rp-shop">
      <Seo
        title="Shop Women's Nightwear"
        description="Browse RAMYAPOOJA women's nightwear — cami & shorts sets, satin night suits, slip nighties and cosy loungewear co-ords. Soft, comfortable and made for restful nights."
        jsonLd={shopJsonLd}
      />
      <section className="rp-shop-hero">
        <div className="ramya-container">
          <span className="eyebrow center">The Collection</span>
          <h1>Shop RAMYAPOOJA</h1>
          <p>Soft &amp; comfortable women's nightwear — made for restful nights.</p>
        </div>
      </section>

      <div className="ramya-container">
        <div className="rp-shop-bar">
          <div className="rp-chips">
            <button
              className={active === 'all' ? 'chip on' : 'chip'}
              onClick={() => setActive('all')}
            >
              All
            </button>
            {categories.map((c) => (
              <button
                key={c.key}
                className={active === c.key ? 'chip on' : 'chip'}
                onClick={() => setActive(c.key)}
              >
                {c.name}
              </button>
            ))}
          </div>

          <label className="rp-sort">
            <FaFilter />
            <select value={sort} onChange={(e) => setSort(e.target.value)}>
              {sorts.map((s) => (
                <option key={s.key} value={s.key}>
                  {s.label}
                </option>
              ))}
            </select>
          </label>
        </div>

        <p className="rp-count">
          Showing <strong>{list.length}</strong>{' '}
          {list.length === 1 ? 'piece' : 'pieces'}
        </p>

        <div className="rp-grid rp-shop-grid">
          {list.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
