import React, { createContext, useContext, useEffect, useState } from 'react';

const STORAGE_KEY = 'ramyapooja_wishlist';

const WishlistContext = createContext(null);

const readStored = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState(readStored);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(wishlist));
    } catch {
      /* storage may be disabled — ignore */
    }
  }, [wishlist]);

  const toggleWish = (id) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const isWished = (id) => wishlist.includes(id);

  return (
    <WishlistContext.Provider value={{ wishlist, toggleWish, isWished }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const ctx = useContext(WishlistContext);
  if (!ctx) throw new Error('useWishlist must be used within WishlistProvider');
  return ctx;
};
