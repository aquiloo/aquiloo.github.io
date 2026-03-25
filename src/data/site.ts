export const siteConfig = {
  title: "Aquiloo",
  description: "A personal homepage for projects, writing, and research.",
  url: "https://aquiloo.github.io",
  navigation: [
    { href: "/", label: "首页" },
    { href: "/projects", label: "项目" },
    { href: "/blog", label: "博客" },
    { href: "/papers", label: "论文" }
  ],
  socialLinks: [
    { href: "https://github.com/aquiloo", label: "GitHub" },
    { href: "mailto:hello@aquiloo.dev", label: "Email" }
  ]
} as const;
