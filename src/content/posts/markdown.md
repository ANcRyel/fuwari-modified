---
title: Markdown 基础语法示例
published: 2023-10-01
updated: 2026-09-30
description: 一个简单的 Markdown 博客文章示例。
tags: [Markdown, 写作, 演示]
category: 示例文章
draft: false
---

# 一级标题

段落之间空一行即可分段。这里是第二句话，用来展示普通文本的排版效果。

文字可以设为 _斜体_、**粗体**或 `等宽代码`。无序列表如下：

- 第一项
- 第二项
- 第三项

也可以在段落中使用分隔线、行内代码和链接等常见 Markdown 格式。

> 引用内容可以这样书写。
>
> 引用也可以包含多个段落，适合摘录资料或突出说明。

中文、标点和 Unicode 字符均可正常使用。示例：你好，Markdown！

## 二级标题

有序列表可以用来列出步骤：

1. 在 `src/content/posts/` 中新建 Markdown 文件。
2. 填写标题、发布日期和文章内容。
3. 运行 `pnpm dev`，在本地预览文章。

代码既可以缩进书写，也可以使用带语言标记的围栏代码块：

```python
for index in range(1, 4):
    print(f"第 {index} 步")
```

### 三级标题

列表可以嵌套，展示更细的内容层级：

1. 准备文章素材：

   - 标题和摘要
   - 正文与配图

2. 编写并预览文章。

3. 检查 Frontmatter，并确认文章不是草稿。

链接可以指向[项目仓库](https://github.com/ANcRyel/fuwari-modified)、[本地指南](./guide/)或[本文的二级标题](#二级标题)。

## 表格

GitHub 风格的 Markdown 表格可用于整理简短信息：

| 命令 | 用途 |
| --- | --- |
| `pnpm dev` | 启动本地开发服务器。 |
| `pnpm check` | 检查 Astro 项目。 |
| `pnpm build` | 构建生产站点。 |

---

## 数学公式

行内公式可以写成 $\omega = d\phi / dt$。独立公式单独占一行，并用双美元符号包围：

$$I = \int \rho R^{2} dV$$

$$
e^{i\pi} + 1 = 0
$$
