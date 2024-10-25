export default function robots() {
    return {
      rules: {
        userAgent: '*',
        allow: '/',
        disallow: '/private/',
      },
      sitemap: 'https://www.xml-sitemaps.com/download/corpfield.vercel.app-a2add2bb5/sitemap.xml?view=1',
    }
  }