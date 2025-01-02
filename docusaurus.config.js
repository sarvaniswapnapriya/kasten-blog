// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Building Resilience in AI Workflows on Kubernetes', 
  // tagline: 'Building Resilience in AI Workflows on Kubernetes', 
  favicon: 'img/favicon.ico', 

  // Set the production URL of your site here
  url: 'https://your-docusaurs-test-site.com', // Correct URL
  baseUrl: '/', // Correct base URL for your repository

  organizationName: 'sarvaniswapnapriya', // Your GitHub username
  projectName: 'kasten-blog', // Your repository name

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/sarvaniswapnapriya/kasten-blog/edit/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/sarvaniswapnapriya/kasten-blog/edit/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Kasten Blog',
      logo: {
        alt: 'Kasten Blog',
        src: 'img/logo.svg',
      },
      items: [
       
          // ...
        {to: '/blog', label: 'Blog', position: 'left'}, 
        {
          href: 'https://github.com/sarvaniswapnapriya/kasten-blog',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
        
    footer: {
      links: [
        {
          items: [
          
          ],
        },
      ],
    },
    

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
