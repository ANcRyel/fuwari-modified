---
title: Expressive Code 示例
published: 2024-04-10
updated: 2026-09-30
description: 了解 Expressive Code 如何增强 Markdown 代码块。
tags: [Markdown, 写作, 演示]
category: 示例文章
draft: false
---

本文展示本站通过 [Expressive Code](https://expressive-code.com/) 呈现代码块的效果。更多配置细节可参阅其官方文档。

## 代码块样式

### 语法高亮

[语法高亮文档](https://expressive-code.com/key-features/syntax-highlighting/)

#### 常规语法高亮

```js
console.log('这段代码会显示语法高亮')
```

#### ANSI 转义序列

```ansi
ANSI 颜色：
- 普通：[31m红[0m [32m绿[0m [33m黄[0m [34m蓝[0m [35m洋红[0m [36m青[0m
- 粗体：[1;31m红[0m [1;32m绿[0m [1;33m黄[0m [1;34m蓝[0m [1;35m洋红[0m [1;36m青[0m
- 暗色：[2;31m红[0m [2;32m绿[0m [2;33m黄[0m [2;34m蓝[0m [2;35m洋红[0m [2;36m青[0m

256 色（展示 160-177）：
[38;5;160m160 [38;5;161m161 [38;5;162m162 [38;5;163m163 [38;5;164m164 [38;5;165m165[0m
[38;5;166m166 [38;5;167m167 [38;5;168m168 [38;5;169m169 [38;5;170m170 [38;5;171m171[0m
[38;5;172m172 [38;5;173m173 [38;5;174m174 [38;5;175m175 [38;5;176m176 [38;5;177m177[0m

完整 RGB 颜色：
[38;2;34;139;34m森林绿 - RGB(34, 139, 34)[0m

文本格式：[1m粗体[0m [2m淡化[0m [3m斜体[0m [4m下划线[0m
```

### 编辑器与终端边框

[编辑器与终端边框文档](https://expressive-code.com/key-features/frames/)

#### 代码编辑器边框

```js title="示例文件.js"
console.log('代码块标题示例')
```

---

```html
<!-- src/content/index.html -->
<div>文件名注释示例</div>
```

#### 终端边框

```bash
echo "这个终端边框没有标题"
```

---

```powershell title="PowerShell 终端示例"
Write-Output "这个终端边框带有标题！"
```

#### 指定边框类型

```sh frame="none"
echo "这个代码块不显示边框"
```

---

```ps frame="code" title="PowerShell 配置文件.ps1"
# 如果不指定类型，这里会显示为终端边框
function Watch-Tail { Get-Content -Tail 20 -Wait $args }
New-Alias tail Watch-Tail
```

### 文本与行标记

[文本与行标记文档](https://expressive-code.com/key-features/text-markers/)

#### 标记指定行与行范围

```js {1, 4, 7-8}
// Line 1 - targeted by line number
// Line 2
// Line 3
// Line 4 - targeted by line number
// Line 5
// Line 6
// Line 7 - targeted by range "7-8"
// Line 8 - targeted by range "7-8"
```

#### 选择行标记类型（mark、ins、del）

```js title="line-markers.js" del={2} ins={3-4} {6}
function demo() {
  console.log('this line is marked as deleted')
  // This line and the next one are marked as inserted
  console.log('this is the second inserted line')

  return 'this line uses the neutral default marker type'
}
```

#### 为行标记添加说明

```jsx {"1":5} del={"2":7-8} ins={"3":10-12}
// 行标记说明示例.jsx
<button
  role="button"
  {...props}
  value={value}
  className={buttonClassName}
  disabled={disabled}
  active={active}
>
  {children &&
    !active &&
    (typeof children === 'string' ? <span>{children}</span> : children)}
</button>
```

#### 将较长说明单独显示

```jsx {"1. 在此处提供 value 属性：":5-6} del={"2. 移除 disabled 和 active 状态：":8-10} ins={"3. 在此处添加按钮子元素的渲染逻辑：":12-15}
// 行标记说明示例.jsx
<button
  role="button"
  {...props}

  value={value}
  className={buttonClassName}

  disabled={disabled}
  active={active}
>

  {children &&
    !active &&
    (typeof children === 'string' ? <span>{children}</span> : children)}
</button>
```

#### 使用 diff 风格语法

```diff
+这一行会标记为新增
-这一行会标记为删除
这是一行普通内容
```

---

```diff
--- a/README.md
+++ b/README.md
@@ -1,3 +1,4 @@
+这是一个实际的 diff 文件
-所有内容保持不变
 空格也不会被移除
```

#### 组合语法高亮与 diff 标记

```diff lang="js"
  function thisIsJavaScript() {
    // 整个代码块会按 JavaScript 高亮，
    // 同时也可以添加 diff 标记！
  -   console.log('即将删除的旧代码')
  +   console.log('新增的代码')
  }
```

#### 标记行内文本

```js "指定文本"
function demo() {
  // 可以标记行内任意文本
  return '同一文本可以匹配多处';
}
```

#### 正则表达式标记

```ts /ye[sp]/
console.log('yes 和 yep 这两个单词会被标记。')
```

#### 转义正斜杠

```sh /\/ho.*\//
echo "测试" > /home/test.txt
```

#### 选择行内标记类型（mark、ins、del）

```js "return true;" ins="新增" del="删除"
function demo() {
  console.log('此处演示新增与删除两种标记类型');
  // return 语句使用默认标记类型
  return true;
}
```

### 自动换行

[自动换行文档](https://expressive-code.com/key-features/word-wrap/)

#### 为代码块设置自动换行

```js wrap
// 启用自动换行的示例
function getLongString() {
  return '这确实是一段篇幅相当长、字数颇为可观、整体内容也显得比较长、看起来并不短的文本；在当前所处容器的宽度还没有达到足够宽、尚未扩展到足以将整段文字全部容纳下来的程度之前，它极有可能没有办法在同一行之中完整无缺地、毫无遗漏地、一个字符都不少地显示出来。'
}
```

---

```js wrap=false
// 禁用自动换行的示例
function getLongString() {
  return '这确实是一段篇幅相当长、字数颇为可观、整体内容也显得比较长、看起来并不短的文本；在当前所处容器的宽度还没有达到足够宽、尚未扩展到足以将整段文字全部容纳下来的程度之前，它极有可能没有办法在同一行之中完整无缺地、毫无遗漏地、一个字符都不少地显示出来。'
}
```

#### 设置换行后的缩进

```js wrap preserveIndent
// preserveIndent 示例（默认启用）
function getLongString() {
  return '这确实是一段篇幅相当长、字数颇为可观、整体内容也显得比较长、看起来并不短的文本；在当前所处容器的宽度还没有达到足够宽、尚未扩展到足以将整段文字全部容纳下来的程度之前，它极有可能没有办法在同一行之中完整无缺地、毫无遗漏地、一个字符都不少地显示出来。'
}
```

---

```js wrap preserveIndent=false
// 禁用 preserveIndent 的示例
function getLongString() {
  return '这确实是一段篇幅相当长、字数颇为可观、整体内容也显得比较长、看起来并不短的文本；在当前所处容器的宽度还没有达到足够宽、尚未扩展到足以将整段文字全部容纳下来的程度之前，它极有可能没有办法在同一行之中完整无缺地、毫无遗漏地、一个字符都不少地显示出来。'
}
```

## 可折叠代码段

[可折叠代码段文档](https://expressive-code.com/plugins/collapsible-sections/)

```js collapse={1-5, 12-14, 21-24}
// 这部分初始化样板代码会被折叠
import { someBoilerplateEngine } from '@example/some-boilerplate'
import { evenMoreBoilerplate } from '@example/even-more-boilerplate'

const engine = someBoilerplateEngine(evenMoreBoilerplate())

// 默认显示的代码部分
engine.doSomething(1, 2, 3, calcFn)

function calcFn() {
  // 可以包含多个可折叠代码段
  const a = 1
  const b = 2
  const c = a + b

  // 这部分保持可见
  console.log(`计算结果：${a} + ${b} = ${c}`)
  return c
}

// 直到代码块末尾的内容都会再次折叠
engine.closeConnection()
engine.freeMemory()
engine.shutdown({ reason: 'End of example boilerplate code' })
```

## 行号

[行号插件文档](https://expressive-code.com/plugins/line-numbers/)

### 为代码块显示行号

```js showLineNumbers
// 此代码块将显示行号
console.log('你好，我位于第 2 行！')
console.log('我位于第 3 行')
```

---

```js showLineNumbers=false
// 此代码块不显示行号
console.log('你好？')
console.log('请问你知道我位于哪一行吗？')
```

### 修改起始行号

```js showLineNumbers startLineNumber=5
console.log('你好，我位于第 5 行！')
console.log('我位于第 6 行')
```
