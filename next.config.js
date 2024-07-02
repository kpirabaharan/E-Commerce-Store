/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'ecommerce-admin-billboards.s3.amazonaws.com',
      'ecommerce-admin-products.s3.amazonaws.com',
    ],
  },
};

module.exports = nextConfig;
