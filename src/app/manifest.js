import Logo from "../../public/images/logo.png";


export default function manifest() {
    return {
      name: 'Corpfield LLC',
      short_name: 'CF',
      description: 'Software development and Engineering Services, DevOps Services, SEO, SMO, Email Marketing, Ui/Ux Design, Mobile Apps Development, Wordpress Development, Java',
      start_url: '/',
      display: 'standalone',
      background_color: '#fff',
      theme_color: '#fff',
      icons: [
        {
          src: Logo,
          sizes: 'any',
          type: 'image/x-icon',
        },
      ],
    }
  }