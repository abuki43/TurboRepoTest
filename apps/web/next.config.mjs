/** @type {import('next').NextConfig} */
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig = {
  transpilePackages: ["@workspace/ui"],
  
}

const withNextIntl = createNextIntlPlugin(
  "./i18n/request.ts"
)

export default withNextIntl(nextConfig)
