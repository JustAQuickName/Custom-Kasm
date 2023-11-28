/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Nicks Repo',
    description: 'My personal store of Kasm-supported Docker Containers.',
    icon: '/img/logo.svg',
    listUrl: 'https://github.com/JustAQuickName/Custom-Kasm/',
    contactUrl: 'https://github.com/JustAQuickName/Custom-Kasm',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
