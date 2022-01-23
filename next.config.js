module.exports = {
  webpack: (config, options) => {
        config.optimization.minimize = false;
      return config
    },
  reactStrictMode: false,
  images: {
    domains: ['localhost'],
    domains: ['cyberscourse.herokuapp.com'],
    domains: ['res.cloudinary.com'],
  },
}
