---
title: 在文章中嵌入视频
published: 2023-08-01
updated: 2026-09-30
description: 本文演示如何在博客文章中嵌入视频。
tags: [示例, 视频]
category: 示例文章
draft: false
---

从 YouTube、哔哩哔哩等平台获取嵌入代码，粘贴到 Markdown 文件中即可。发布前请确认视频允许嵌入，并在不同屏幕尺寸下检查显示效果。

```yaml
---
title: 在文章中嵌入视频
published: 2026-09-30
// ...
---

<iframe width="100%" height="468" src="https://www.youtube.com/embed/5gIf0_xpFPI?si=N1WTorLKL0uwLsU_" title="YouTube 视频播放器" frameborder="0" allowfullscreen></iframe>
```

## YouTube 示例

<iframe width="100%" height="468" src="https://www.youtube.com/embed/5gIf0_xpFPI?si=N1WTorLKL0uwLsU_" title="YouTube 视频播放器" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## 哔哩哔哩示例

<iframe width="100%" height="468" src="//player.bilibili.com/player.html?bvid=BV1fK4y1s7Qf&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
