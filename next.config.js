module.exports = {
  async rewrites() {
    return [
      {
        source: '/avocado/:path*',
        destination: '/product/:path*',
      },
    ]
  },
}
