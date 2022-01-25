// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Selleradise - documentation",
  tagline: "Detailed guide for users of Selleradise.",
  url: "https://docs.selleradise.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "RedOxbird", // Usually your GitHub org/user name.
  projectName: "selleradise", // Usually your repo name.
  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Selleradise",
        logo: {
          alt: "Selleradise",
          src: "img/icon.svg",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "User Guide",
          },
          {
            href: "https://github.com/zarhasan/selleradise-docs",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "light",
        copyright: `All right reserved by Selleradise © ${new Date().getFullYear()}`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        // If Algolia did not provide you any appId, use 'BH4D9OD16A'
        appId: "7TX0JBTZWD",

        // Public API key: it is safe to commit it
        apiKey: "6ca21dc4162a67792b98fcdd890ad276",

        indexName: "selleradise_docs",

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Algolia search parameters
        searchParameters: {},

        //... other Algolia params
      },
    }),
};

module.exports = config;
