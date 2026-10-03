---
title: Fuwari Modified 简易指南
published: 2024-04-01
updated: 2026-09-30
description: "如何使用此博客模板。"
image: "./guide/cover.jpeg"
tags: ["Fuwari Modified", "写作", "自定义"]
category: 使用指南
lang: zh-CN
draft: false
---

> 封面图来源：[来源](https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/208fc754-890d-4adb-9753-2c963332675d/width=2048/01651-1456859105-(colour_1.5),girl,_Blue,yellow,green,cyan,purple,red,pink,_best,8k,UHD,masterpiece,male%20focus,%201boy,gloves,%20ponytail,%20long%20hair,.jpeg)

本站基于 [Fuwari](https://github.com/saicaca/fuwari) 修改，使用 [Astro](https://astro.build/) 构建。项目源码和定制内容可在 [GitHub 仓库](https://github.com/ANcRyel/fuwari-modified) 查看；有关 Astro 的更多信息，请参阅 [Astro 文档](https://docs.astro.build/)。

## 文章 Frontmatter

```yaml
---
title: 我的第一篇博客文章
published: 2026-09-30
description: 这是我新 Astro 博客的第一篇文章。
image: ./cover.jpg
tags: [示例, 占位]
category: 随笔
draft: false
---
```

| 字段 | 说明 |
| --- | --- |
| `title` | 文章标题，必填。 |
| `published` | 发布日期，必填。 |
| `updated` | 更新日期，可选。 |
| `description` | 文章摘要，会显示在文章列表中。 |
| `image` | 封面图片。填写网络图片 URL、`public` 目录下以 `/` 开头的路径，或相对于 `content/posts` 的路径。 |
| `tags` | 标签列表，例如 `[示例, 占位]`。 |
| `category` | 文章分类。 |
| `draft` | 是否为草稿；设为 `true` 时文章不会公开显示。 |
| `lang` | 文章语言标识，可选。 |

## 文章文件放在哪里

文章保存在 `src/content/posts/`，可使用子目录整理文章及其图片。目录中的 Markdown 文件会自动作为文章载入。

```
src/content/posts/
├── post-1.md
└── post-2/
    ├── cover.png
    └── index.md
```

## 创建文章

在项目根目录运行以下命令，会在文章目录中创建带有基础 Frontmatter 的 Markdown 文件：

```sh
pnpm new-post 我的文章
```

本地预览和检查项目可使用：

```sh
pnpm dev
pnpm check
pnpm build
```

站点标题、语言、导航、个人资料和主题等设置位于 `src/config.ts`。新增文章字段的校验规则位于 `src/content.config.ts`。
