/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        {
          source: '/flyers/dr-strings-nickel-lo-rider',
          destination: 'https://ideaguide.net/',
          permanent: true,
        },
        {
          source: '/blogs/baby-must-haves/BabyBjorn-small-baby-bib',
          destination: 'https://ideaguide.net/',
          permanent: true,
        },
        {
          source: '/blogs/back-to-school/large-college-backpack',
          destination: 'https://ideaguide.net/',
          permanent: true,
        },
        {
          source: '/blogs/baby-must-haves/retractable-baby-gate',
          destination: 'https://ideaguide.net/',
          permanent: true,
        },
        {
          source: '/blogs/back-to-school/shower-caddy-tote-bag',
          destination: 'https://ideaguide.net/',
          permanent: true,
        },
        {
          source: '/blogs/home-decor/facts-on-having-a-cozy-home',
          destination: 'https://ideaguide.net/',
          permanent: true,
        },
        {
          source: '/blogs/healthy-recipes/top-5-brunch-ideas',
          destination: 'https://ideaguide.net/',
          permanent: true,
        },
        {
          source: '/blogs/baby-must-haves/baby-electric-nail-trimmer',
          destination: 'https://ideaguide.net/',
          permanent: true,
        },
        {
          source: '/blogs/gardening/leaf-sweepers',
          destination: 'https://ideaguide.net/',
          permanent: true,
        },
        {
          source: '/blogs/back-to-school',
          destination: 'https://ideaguide.net/',
          permanent: true,
        },
        {
          source: '/blogs/healthy-recipes',
          destination: 'https://ideaguide.net/',
          permanent: true,
        },
        {
          source: '/blogs/home-decor',
          destination: 'https://ideaguide.net/',
          permanent: true,
        },
        {
          source: '/blogs/baby-must-haves',
          destination: 'https://ideaguide.net/',
          permanent: true,
        },
        {
          source: '/blogs/gardening',
          destination: 'https://ideaguide.net/',
          permanent: true,
        },
        {
          source: '/blogs/music-tech',
          destination: 'https://ideaguide.net/blogs/music-tech',
          permanent: true,
        },
        {
          source: '/blogs/music',
          destination: 'https://ideaguide.net/blogs/music-tech',
          permanent: true,
        },
        {
          source: '/blogs/music-tech/build-your-home-studio',
          destination: 'https://ideaguide.net/blogs/music-tech/build-your-home-studio',
          permanent: true,
        },
        {
          source: '/blogs/music-tech/ultimate-guide-music-production-software-daws',
          destination: 'https://ideaguide.net/blogs/music-tech/ultimate-guide-music-production-software-daws',
          permanent: true,
        },
        {
          source: '/blogs/music-tech/home-studio-computer',
          destination: 'https://ideaguide.net/blogs/music-tech/home-studio-computer',
          permanent: true,
        },
        {
          source: '/blogs/music/build-your-home-studio',
          destination: 'https://ideaguide.net/blogs/music-tech/home-studio-computer',
          permanent: true,
        }
      ]
    }
  }
export default nextConfig;
