export default function sitemap() {
    return [
      {
        url: 'https://corpfield.vercel.app',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 1,
      },
      {
        url: 'https://corpfield.vercel.app/home',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 1,
      },
      {
        url: 'https://corpfield.vercel.app/about',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: 'https://corpfield.vercel.app/development',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: 'https://corpfield.vercel.app/engineering',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: 'https://corpfield.vercel.app/terms-and-condition',
        changeFrequency: 'weekly',
        priority: 0.8,
      },
      {
        url: 'https://corpfield.vercel.app/privacy-policy',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      },
      {
        url: 'https://corpfield.vercel.app/contact-us',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      },
    ]
  }