

<h1 align="center">HomePaper Cursor</h1>

<p align="center">
  <em>让每一次hover，都成为设计的一部分。</em>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Vue-3.5-4FC08D?logo=vue.js&logoColor=white" alt="Vue 3" />
  <img src="https://img.shields.io/badge/Vite-8.0-646CFF?logo=vite&logoColor=white" alt="Vite 8" />
  <img src="https://img.shields.io/badge/Node-22%2B-339933?logo=node.js&logoColor=white" alt="Node 22+" />
  <img src="https://img.shields.io/badge/License-MIT-green" alt="MIT License" />
  <img src="https://img.shields.io/badge/Vibe_Coding-✨-ff69b4" alt="Vibe Coding" />
</p>

---

[English](#english) | [中文](#chinese)

---

<a id="chinese"></a>

## 🎯 简介

**HomePaper Cursor** 是 [HomePaper](https://github.com) 项目下的子项目，为 HomePaper 生态提供一套优雅、可自定义的**变形光标**组件。

> 💡 灵感来自 [Google Design](https://design.google) 中的微交互理念 — 光标不仅仅是"指着"，更是"表达"。

当你将鼠标悬停在目标元素上时，光标会**平滑变形**包裹该元素，并以 LERP 缓动算法实现 60fps 丝滑跟随。交互元素内的文字会反向"浮出"，形成一种微妙而精致的视觉反转效果。

---

## 🛠️ 诞生故事

- **用时**：一个上午 ☀️
- **模式**：Vibe Coding 🎧
- **大脑**：Gemini 3.1 Pro（策划、架构、文案）
- **双手**：DeepSeek V4 Pro（苦哈哈牛马打工人 💪）
- **心态**：萌新项目，不喜轻喷 😊

> 从零到一，两 AI 协作，二十杯咖啡的时间（什）。_It just works._

---

## ✨ 核心特性

| 特性 | 说明 |
|------|------|
| 🔄 **形变动画** | 光标悬停时平滑变形，包裹目标元素，流畅视觉过渡 |
| 🎯 **精准吸附** | 自动检测并吸附到交互元素中心，LERP 缓动算法确保丝滑跟随 |
| 💬 **文字浮现** | 吸附时元素文字反向悬浮显示，优雅视觉反转 |
| ⚡ **60fps** | 基于 `requestAnimationFrame` + CSS `transform`，高性能无卡顿 |
| 🔧 **零配置** | 仅需添加 `js-cursor-target` class 即可启用 |
| 📱 **响应式** | 完美适配桌面端，移动端自动降级为原生光标 |

---

## 📁 目录结构

```
HomePaperCursor/
├── public/
│   └── favicon.ico              # 站点图标
├── src/
│   ├── assets/
│   │   ├── base.css             # CSS 基础重置
│   │   ├── main.css             # 全局样式 & 光标样式
│   │   └── logo.svg             # Logo 资源
│   ├── components/
│   │   └── MorphCursor.vue      # 🔥 核心：变形光标组件
│   ├── App.vue                  # 主应用 & Demo 页面
│   └── main.js                  # 入口文件
├── for-agent/                   # AI 开发文档 & 参考
│   ├── docs/                    # Vite / Vue 参考文档
│   └── template/                # 光标实现参考模板
├── index.html                   # HTML 入口
├── vite.config.js               # Vite 配置
├── jsconfig.json                # 路径别名配置
├── package.json
├── pnpm-lock.yaml
└── README.md
```

---

## 🚀 快速开始

### 环境要求

- **Node.js** ≥ 22.18 或 ≥ 24.12
- **pnpm**（推荐）

### 安装与运行

```bash
# 1. 克隆项目
git clone https://github.com/your-org/HomePaperCursor.git
cd HomePaperCursor

# 2. 安装依赖
pnpm install

# 3. 启动开发服务器
pnpm dev

# 4. 构建生产版本
pnpm build

# 5. 预览生产构建
pnpm preview
```

---

## 📖 使用方法

在任意 HTML / Vue 元素上添加 `js-cursor-target` class 即可启用变形光标：

```html
<!-- 链接 -->
<a href="#" class="js-cursor-target">点我试试</a>

<!-- 按钮 -->
<button class="js-cursor-target">提交</button>

<!-- 卡片 -->
<div class="card js-cursor-target">
  <h3>卡片标题</h3>
  <p>卡片内容……</p>
</div>
```

就这么简单。无需额外配置，无需 JS 调用，纯 class 驱动。

---

## 📄 开源协议

本项目采用 [MIT License](https://opensource.org/licenses/MIT) 开源。

**MIT 协议要点：**
- ✅ **允许**：自由使用、复制、修改、合并、出版发行、再授权、销售
- ⚠️ **条件**：需保留原始版权声明和许可声明
- ❌ **免责**：软件按"原样"提供，不提供任何明示或暗示的担保

> 简而言之：随便用，但请保留原作者署名；出了事我不背锅 😄

---

## 🙏 致谢

- **Google Design** — 灵感源泉，微交互理念的布道者
- **Vue.js** & **Vite** — 让前端开发回归简单
- **Gemini 3.1 Pro** — 我的策划大脑 🧠
- **DeepSeek V4 Pro** — 我的编码之手 ⌨️
- **每一个 Star ⭐** — 你的认可，是我莫大的动力

---

<p align="center">
  <sub>Made with ❤️ by RhoPaper | © 2026 HomePaper Project</sub>
</p>

---

<a id="english"></a>

## 🎯 Introduction

**HomePaper Cursor** is a sub-project of [HomePaper](https://github.com), providing an elegant, customizable **morphing cursor** component for the HomePaper ecosystem.

> 💡 Inspired by the micro-interaction philosophy of [Google Design](https://design.google) — the cursor isn't just a pointer, it's an expression.

Hover over any target element and the cursor **smoothly morphs** to wrap it, driven by a LERP easing algorithm at a buttery 60fps. Text within the element floats outward in reverse — creating a subtle, refined visual inversion effect.

---

## 🛠️ Origin Story

- **Time spent**: One morning ☀️
- **Mode**: Vibe Coding 🎧
- **Brain**: Gemini 3.1 Pro (planning, architecture, copywriting)
- **Hands**: DeepSeek V4 Pro (the tireless coding workhorse 💪)
- **Attitude**: A rookie project — please be gentle 😊

> From zero to one, two AIs and a cup of coffee. _It just works._

---

## ✨ Core Features

| Feature | Description |
|---------|-------------|
| 🔄 **Morph Animation** | Cursor smoothly morphs on hover, wrapping target elements seamlessly |
| 🎯 **Snap Precision** | Auto-detects and snaps to the center of interactive elements via LERP |
| 💬 **Text Float** | Element text floats outward on snap, creating an elegant visual inversion |
| ⚡ **60fps** | Built on `requestAnimationFrame` + CSS `transform` for buttery performance |
| 🔧 **Zero Config** | Just add `js-cursor-target` class — plug and play |
| 📱 **Responsive** | Gracefully degrades to native cursor on mobile devices |

---

## 📁 Directory Structure

```
HomePaperCursor/
├── public/
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   ├── base.css
│   │   ├── main.css
│   │   └── logo.svg
│   ├── components/
│   │   └── MorphCursor.vue      # 🔥 Core: morphing cursor component
│   ├── App.vue                  # Main app & demo page
│   └── main.js                  # Entry point
├── for-agent/                   # AI dev docs & references
├── index.html
├── vite.config.js
├── jsconfig.json
├── package.json
├── pnpm-lock.yaml
└── README.md
```

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** ≥ 22.18 or ≥ 24.12
- **pnpm** (recommended)

### Install & Run

```bash
# 1. Clone
git clone https://github.com/your-org/HomePaperCursor.git
cd HomePaperCursor

# 2. Install dependencies
pnpm install

# 3. Start dev server
pnpm dev

# 4. Build for production
pnpm build

# 5. Preview production build
pnpm preview
```

---

## 📖 Usage

Simply add the `js-cursor-target` class to any HTML / Vue element:

```html
<a href="#" class="js-cursor-target">Try me</a>
<button class="js-cursor-target">Submit</button>
<div class="card js-cursor-target">
  <h3>Card Title</h3>
  <p>Card content...</p>
</div>
```

That's it. No configuration, no JS calls — purely class-driven.

---

## 📄 License

This project is open-sourced under the [MIT License](https://opensource.org/licenses/MIT).

- ✅ **Allowed**: Free use, copying, modification, merging, publishing, sublicensing, selling
- ⚠️ **Condition**: Must retain the original copyright and license notice
- ❌ **Disclaimer**: Software provided "as is", without warranty of any kind

> TL;DR: Use it however you like, just credit the author. If something breaks, don't blame me 😄

---

## 🙏 Acknowledgements

- **Google Design** — source of inspiration & micro-interaction philosophy
- **Vue.js** & **Vite** — making frontend simple again
- **Gemini 3.1 Pro** — my planning brain 🧠
- **DeepSeek V4 Pro** — my coding hands ⌨️
- **Every Star ⭐** — your support means the world

---

<p align="center">
  <sub>Made with ❤️ by RhoPaper | © 2026 HomePaper Project</sub>
</p>

