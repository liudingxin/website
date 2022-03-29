// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'TamaRive玉川',
  tagline: '科学仪器',
  url: 'https://tamarive.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          
          blogSidebarCount: 10,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'TamaRive',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: '产品目录',
          },
          {to: '/blog', label: '技术社区', position: 'left'},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '产品',
            items: [
              {
                label: '检漏仪喷枪',
                to: '/docs/intro',
              },
              {
                label: '液氮冷阱',
                to: '/docs/intro',
              },
              {
                label: '更多...',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: '社区',
            items: [
              {
                label: '一百个真空专业词汇',
                href: '/blog/vacuum',
              },
              {
                label: '和小朋友一起建立科学博物馆',
                href: '/blog/museum',
              },
              {
                label: '更多...',
                to: '/blog',
              },
            ],
          },
          {
            title: '其他',
            items: [
              {
                label: '公众号',
                href: 'https://www.tamarive.com/img/tiktok.jpg',
              },
              {
                label: '抖音',
                href: 'https://www.tamarive.com/img/qrcode.jpg',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} TamaRive, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
