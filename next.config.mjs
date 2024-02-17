/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 's.talentrack.in',
              pathname: '**',
            },
          ],
    },
};

export default nextConfig;
