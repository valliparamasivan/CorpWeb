import { ThemeProvider } from "@mui/material";
import Head from "next/head";
import ThemeHelper from "@/helpers/ThemeHelpers";
import WebHeader from "@/layouts/web-header";
import WebFooter from "@/layouts/web-footer";
import "../../public/font/css/satoshi.css";
import "../layouts/style.css";
import "./globals.css";

export const metadata = {
  title: 'Software Development and Engineering Services',
  description: 'Software development and Engineering Services, DevOps Services, SEO, SMO, Email Marketing, Ui/Ux Design, Mobile Apps Development, Wordpress Development, Java',
  keywords: 'Software development and Engineering Services, DevOps Services, SEO, SMO, Email Marketing, Ui/Ux Design, Mobile Apps Development, Wordpress Development, Java',
  author: 'Arumugam M',
};

const schema = {
  "@context": "https://corpfield.vercel.app",
  "@type": "Organization",
  "name": "Corpfield LLC",
  "url": "https://corpfield.vercel.app",
  "logo": "https://corpfield.vercel.app/images/logo.png",
  "contactPoint": {
    "@type": "website",
    "telephone": "+1-800-555-5555",
    "contactType": "customer service"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="canonical" href="https://corpfield.vercel.app" />
        <meta property="og:title" content="Software Development and Engineering Services" />
        <meta property="og:description" content="Software development and Engineering Services, DevOps Services, SEO, SMO, Email Marketing, Ui/Ux Design, Mobile Apps Development, Wordpress Development, Java" />
        <meta property="og:url" content="https://corpfield.vercel.app" />
        <meta property="og:image" content="https://corpfield.vercel.app/images/logo.png" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Example Site" />
        <link rel="preload" href="https://corpfield.vercel.app/font/fonts/Satoshi-Variable.woff2" as="font" type="font/woff2" crossorigin="anonymous"/>
        <link rel="preload" href="https://corpfield.vercel.app/images/1.jpg" as="image"/>
        <link rel="preload" href="https://corpfield.vercel.app/images/1.jpg" as="image"/>
        <link rel="preload" href="https://corpfield.vercel.app/images/1.jpg" as="image"/>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head>
      <body>
        <ThemeProvider theme={ThemeHelper}>
          <WebHeader/>
            <main className="main-section">
              {children}
            </main>
          <WebFooter/>
        </ThemeProvider>
      </body>
    </html>
  );
}
