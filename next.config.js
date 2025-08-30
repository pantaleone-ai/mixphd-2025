/** @type {import('next').NextConfig} */

const nextConfig = {
  async redirects() {
    return [
      {
        source: '/products/:path*',
        destination: '/recipes/:path*',
        permanent: true,
      },
      {
        source: '/products',
        destination: '/recipes',
        permanent: true,
      },
    ]
  },
  images: {
    remotePatterns: [
      // {
      //   protocol: "https",
      //   hostname: "**",
      //   port: "",
      //   pathname: "**",
      // },
      // {
      //   protocol: "http",
      //   hostname: "**",
      //   port: "",
      //   pathname: "**",
      // },
      {
        protocol: "https",
        hostname: "**.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/product-logos/**/**",
      },
    ],
  },
}

module.exports = nextConfig
