---
title: "Personal Homepage Architecture"
description: "一个使用 Astro、内容集合与 GitHub Pages 部署的个人主页基础架构。"
date: 2026-03-25
github: "https://github.com/aquiloo/aquiloo.github.io"
demo: "https://aquiloo.github.io"
---

这个项目的目标不是只做一个静态首页，而是建立一套长期可维护的个人展示系统。

## 核心目标

- 使用静态站点方案，保持部署简单与运行稳定
- 把内容和页面代码分离，降低后续扩展成本
- 为项目、博客和论文统一建立列表页与详情页

## 当前实现

当前版本使用 Astro 内容集合保存核心内容，并通过统一的布局、卡片与详情模板完成渲染。

后续可以继续扩展标签、草稿、多语言和搜索能力，而不需要重写页面结构。
