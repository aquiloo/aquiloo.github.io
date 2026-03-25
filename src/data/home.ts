export const homeProfile = {
  name: "Aquiloo",
  headline: "软件开发者 / 研究者 / 长期主义建设者",
  bio: "我专注于人工智能、Web 开发与开放协作，希望把项目、写作与研究沉淀为一套清晰、可持续的个人知识与作品展示体系。",
  avatar: "/images/avatar.svg",
  experience: [
    {
      title: "研究兴趣",
      detail: "人工智能应用、开发者工具、可持续的个人知识系统"
    },
    {
      title: "工作方式",
      detail: "偏好结构化设计、静态站点架构，以及可持续维护的内容工作流"
    },
    {
      title: "当前目标",
      detail: "建设一个长期可扩展的主页，用于整理项目、博客与论文"
    }
  ],
  featured: {
    projects: ["homepage-architecture"],
    blog: ["building-in-public"],
    papers: ["knowledge-systems"]
  },
  contactLinks: [
    { href: "mailto:hello@aquiloo.dev", label: "Email" },
    { href: "https://github.com/aquiloo", label: "GitHub" }
  ]
} as const;
