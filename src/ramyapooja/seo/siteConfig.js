// Central SEO / business config for RAMYAPOOJA.
// IMPORTANT: change SITE_URL to your real production domain before deploying.
export const SITE_URL = 'https://www.ramyapooja.com';

export const SITE_NAME = 'RAMYAPOOJA';
export const DEFAULT_TITLE = "RAMYAPOOJA | Women's Nightwear & Loungewear";
export const DEFAULT_DESCRIPTION =
  "RAMYAPOOJA by Govind Traders — soft, cute & comfortable women's nightwear. Cami sets, satin night suits, slip nighties & loungewear. Kasganj, Uttar Pradesh.";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/ProductImage/nightwear-1.jfif`;

export const BUSINESS = {
  brand: 'RAMYAPOOJA',
  firm: 'Govind Traders',
  owner: 'Ram Krishan Singh',
  email: 'kasganjgovind@gmail.com',
  phone: '+919917869761',
  street: 'Lov Kush Nagar',
  city: 'Kasganj',
  region: 'Uttar Pradesh',
  postalCode: '207123',
  country: 'IN',
};

// Build an absolute URL from a site-relative path.
export const abs = (path = '/') =>
  `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
