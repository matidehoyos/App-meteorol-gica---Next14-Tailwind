/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      remotePatterns: [
        {
          protocol: 'http',
          hostname: 'openweathermap.org',
          pathname: '/img/wn/**', 
        },
      ],
    },
  };

export default nextConfig;
