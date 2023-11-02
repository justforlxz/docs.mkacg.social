import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "萌控二次元资料室",
  description: "misskey 相关的文档",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "文档", link: "/" },
      {
        text: "链接",
        items: [
          {
            text: "萌控二次元",
            link: "https://mkacg.social",
          },
          {
            text: "服务状态",
            link: "https://status.mkacg.social",
          },
        ],
      },
    ],

    sidebar: {
      "/": [
        {
          text: "基础规范",
          items: [
            {
              text: "加入我们",
              link: "/join/",
            },
            {
              text: "服务条款",
              link: "/tos/",
            },
            {
              text: "合理使用规约",
              link: "/aup/",
            },
            {
              text: "离开",
              link: "/leave/",
            },
          ],
        },
        {
          text: "其它",
          items: [
            {
              text: "服务架构",
              link: "/service-structure/",
            },
            {
              text: "品牌资源",
              link: "/brand-assets/",
            },
            {
              text: "联系我们",
              link: "/contact/",
            },
            {
              text: "赞助",
              link: "/sponsor/",
            },
          ],
        },
      ],
    },

    editLink: {
      pattern: "https://github.com/nyaone/docs/edit/main/:path",
      text: "在 GitHub 上编辑此页",
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
