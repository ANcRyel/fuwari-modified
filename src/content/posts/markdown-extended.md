---
title: Markdown 扩展功能
published: 2024-05-01
updated: 2026-09-30
description: '了解 Fuwari Modified 中 Markdown 扩展功能'
image: ''
tags: [演示, 示例, Markdown, Fuwari Modified]
category: 示例文章
draft: false
---

## GitHub 仓库卡片

使用仓库卡片展示 GitHub 项目。页面载入时，组件会尝试从 GitHub API 获取仓库信息。

::github{repo="github/github-mcp-server"}

语法为 `::github{repo="<所有者>/<仓库名>"}`：

```markdown
::github{repo="ANcRyel/fuwari-modified"}
```

## 提示框

支持以下提示框类型：`note`（说明）、`tip`（提示）、`important`（重要）、`warning`（警告）和 `caution`（注意）。

:::note
即使快速浏览文章，也值得留意这条补充说明。
:::

:::tip
一个能让操作更顺利的小技巧。
:::

:::important
完成这项操作前，请确认必要条件都已满足。
:::

:::warning
修改站点配置后，建议先运行 `pnpm check`，确认没有引入错误。
:::

:::caution
删除文章或静态资源前，请确认没有其他页面依赖它们。
:::

### 基本语法

```markdown
:::note
这是一条说明。
:::

:::tip
这是一条提示。
:::
```

### 自定义标题

可以为提示框设置自定义标题。

:::note[写作建议]
把一篇文章聚焦在一个主题上，读起来会更清晰。
:::

```markdown
:::note[写作建议]
把一篇文章聚焦在一个主题上，读起来会更清晰。
:::
```

### GitHub 提示框语法

> [!TIP]
> 也支持 [GitHub 风格的提示框语法](https://github.com/orgs/community/discussions/16925)。

```
> [!NOTE]
> 也支持 GitHub 风格的提示框语法。

> [!TIP]
> 也支持 GitHub 风格的提示框语法。
```

### 剧透文本

可以将部分内容折叠为剧透文本，内部也支持 **Markdown** 格式。

隐藏内容在这里：:spoiler[这段文字默认会被隐藏]。

```markdown
隐藏内容在这里：:spoiler[这段文字默认会被隐藏]。

```