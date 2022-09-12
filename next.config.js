/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  images: {
    domains: ["links.papareact.com"],
  },
  nextConfig
};


/* Have to restart server everytime you mess with the config file */ 