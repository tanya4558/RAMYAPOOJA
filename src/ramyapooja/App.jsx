import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import { WishlistProvider } from './context/WishlistContext';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';
import Wishlist from './components/Wishlist/Wishlist';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <WishlistProvider>
      <Router>
        <ScrollToTop />
        <div className="ramya-app">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </WishlistProvider>
  );
}
