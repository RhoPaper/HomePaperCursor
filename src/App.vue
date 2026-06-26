<script setup>
import { ref, onMounted, watch } from 'vue'
import MorphCursor from './components/MorphCursor.vue'

// 深色模式切换
const isDark = ref(false)

const applyTheme = (dark) => {
  document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light')
  isDark.value = dark
}

const toggleTheme = () => {
  const next = !isDark.value
  applyTheme(next)
  try { localStorage.setItem('theme', next ? 'dark' : 'light') } catch (_) { /* noop */ }
}

onMounted(() => {
  // 读取本地存储 → 回退系统偏好
  let saved
  try { saved = localStorage.getItem('theme') } catch (_) { saved = null }
  if (saved === 'dark' || saved === 'light') {
    applyTheme(saved === 'dark')
  } else {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    applyTheme(prefersDark)
  }
})
</script>

<template>
  <MorphCursor />

  <!-- 导航栏 -->
  <nav class="navbar">
    <div class="nav-inner">
      <a href="#" class="nav-logo js-cursor-target">HomePaper</a>
      <div class="nav-links">
        <a href="#features" class="js-cursor-target">特性</a>
        <a href="#demos" class="js-cursor-target">演示</a>
        <a href="#story" class="js-cursor-target">故事</a>
        <button class="theme-toggle js-cursor-target" @click="toggleTheme" :aria-label="isDark ? '切换到浅色模式' : '切换到深色模式'">
          <svg v-if="!isDark" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
          <svg v-else width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </svg>
        </button>
      </div>
    </div>
  </nav>

  <!-- 英雄区 -->
  <section class="hero">
    <div class="hero-content">
      <!-- <span class="hero-badge js-cursor-target"><a href="https://github.com/RhoPaper/HomePaperCursor" target="_blank">GitHub</a></span> -->
      <h1 class="hero-title">
        让每一次<span class="hero-highlight">hover</span><br />都成为<br /><span class="hero-highlight">设计</span>的一部分
      </h1>
      <p class="hero-desc">
        光标不只是"指着"，更是"表达"。灵感源自 Google Design 的微交互理念，
        用 LERP 缓动算法实现 60fps 丝滑跟随，让指针拥有情绪。
      </p>
      <div class="hero-actions">
        <a href="#demos" class="btn-primary js-cursor-target">查看演示</a>
        <a href="https://github.com/RhoPaper/HomePaperCursor" target="_blank"
          class="btn-outline js-cursor-target">GitHub</a>
      </div>
    </div>
    <div class="hero-visual">
      <div class="hero-card js-cursor-target">
        <div class="hero-card-label">hover me ~</div>
        <div class="hero-card-text">将鼠标悬停在任意带边框的元素上，光标会平滑变形包裹它</div>
      </div>
      <div class="hero-dots">
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
      </div>
    </div>
  </section>

  <!-- 特性区 -->
  <section id="features" class="section">
    <div class="section-header">
      <h2 class="section-title">核心特性</h2>
      <p class="section-sub">一组精心打磨的交互细节，让光标不再无聊 ( •̀ ω •́ )✧</p>
    </div>
    <div class="features-grid">
      <div class="feature-card js-cursor-target">
        <div class="feature-icon">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <rect x="4" y="4" width="24" height="24" rx="6" stroke="currentColor" stroke-width="2"
              stroke-dasharray="4 3" />
            <rect x="10" y="10" width="12" height="12" rx="3" fill="currentColor" opacity="0.15" />
          </svg>
        </div>
        <h3 class="feature-title">形变动画</h3>
        <p class="feature-desc">光标悬停时平滑变形，包裹目标元素，带来流畅的视觉过渡。</p>
      </div>
      <div class="feature-card js-cursor-target">
        <div class="feature-icon">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="12" stroke="currentColor" stroke-width="2" />
            <circle cx="16" cy="16" r="4" fill="currentColor" />
            <circle cx="16" cy="16" r="1.5" fill="var(--color-bg-card)" />
          </svg>
        </div>
        <h3 class="feature-title">精准吸附</h3>
        <p class="feature-desc">自动检测并吸附到交互元素中心，LERP 缓动算法确保丝滑跟随。</p>
      </div>
      <div class="feature-card js-cursor-target">
        <div class="feature-icon">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <rect x="6" y="8" width="20" height="16" rx="4" stroke="currentColor" stroke-width="2" />
            <line x1="11" y1="14" x2="21" y2="14" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
            <line x1="11" y1="18" x2="18" y2="18" stroke="currentColor" stroke-width="2" stroke-linecap="round"
              opacity="0.4" />
          </svg>
        </div>
        <h3 class="feature-title">文字浮现</h3>
        <p class="feature-desc">吸附时元素文字反向悬浮显示，实现优雅的视觉反转效果。</p>
      </div>
      <div class="feature-card js-cursor-target">
        <div class="feature-icon">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <polyline points="4,20 10,8 16,16 22,6 28,18" stroke="currentColor" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round" fill="none" />
            <circle cx="22" cy="6" r="2" fill="currentColor" />
          </svg>
        </div>
        <h3 class="feature-title">高性能</h3>
        <p class="feature-desc">基于 requestAnimationFrame 和 CSS transform，60fps 流畅运行无卡顿。</p>
      </div>
      <div class="feature-card js-cursor-target">
        <div class="feature-icon">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <rect x="4" y="6" width="24" height="20" rx="3" stroke="currentColor" stroke-width="2" />
            <path d="M10 14 L14 18 L22 10" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"
              stroke-linejoin="round" fill="none" />
          </svg>
        </div>
        <h3 class="feature-title">零配置</h3>
        <p class="feature-desc">仅需添加 <code>js-cursor-target</code> class 即可启用，开箱即用。</p>
      </div>
      <div class="feature-card js-cursor-target">
        <div class="feature-icon">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <rect x="3" y="6" width="26" height="20" rx="4" stroke="currentColor" stroke-width="2" />
            <rect x="7" y="9" width="18" height="14" rx="2" fill="currentColor" opacity="0.08" />
            <circle cx="16" cy="16" r="3" fill="currentColor" />
          </svg>
        </div>
        <h3 class="feature-title">响应式</h3>
        <p class="feature-desc">完美适配桌面端与移动端，移动端自动降级为原生光标体验。</p>
      </div>
    </div>
  </section>

  <!-- 演示区 -->
  <section id="demos" class="section section-alt">
    <div class="section-header">
      <h2 class="section-title">交互演示</h2>
      <p class="section-sub">把鼠标放上来试试，感受变形光标的魅力吧 (╹ڡ╹ )</p>
    </div>
    <div class="demo-group">
      <h3 class="demo-label">链接样式</h3>
      <div class="demo-row">
        <a href="#demos" class="demo-link js-cursor-target">普通链接</a>
        <a href="#demos" class="demo-link pill js-cursor-target">胶囊链接</a>
        <a href="#demos" class="demo-link rounded js-cursor-target">圆角链接</a>
      </div>
    </div>
    <div class="demo-group">
      <h3 class="demo-label">按钮样式</h3>
      <div class="demo-row">
        <button class="demo-btn js-cursor-target">主要按钮</button>
        <button class="demo-btn outline js-cursor-target">边框按钮</button>
        <button class="demo-btn ghost js-cursor-target">幽灵按钮</button>
        <button class="demo-btn wide js-cursor-target">宽按钮</button>
      </div>
    </div>
    <div class="demo-group">
      <h3 class="demo-label">标签 & 徽章</h3>
      <div class="demo-row">
        <span class="demo-tag js-cursor-target">Vue 3</span>
        <span class="demo-tag js-cursor-target">Vite</span>
        <span class="demo-tag js-cursor-target">JavaScript</span>
        <span class="demo-tag js-cursor-target">CSS</span>
        <span class="demo-tag js-cursor-target">动画</span>
      </div>
    </div>
  </section>

  <!-- 诞生故事区 -->
  <section id="story" class="section">
    <div class="section-header">
      <h2 class="section-title">诞生故事</h2>
      <p class="section-sub">一个上午，两杯咖啡，两个 AI 的协作结晶</p>
    </div>
    <div class="story-content">
      <div class="story-card">
        <ul class="story-list">
          <li>
            <span class="story-key">用时</span>
            <span class="story-val">一个阳光正好的上午</span>
          </li>
          <li>
            <span class="story-key">模式</span>
            <span class="story-val">Vibe Coding —— 听着 Lo-Fi，敲着代码</span>
          </li>
          <li>
            <span class="story-key">大脑</span>
            <span class="story-val">Gemini 3.1 Pro（策划、架构、文案担当）</span>
          </li>
          <li>
            <span class="story-key">双手</span>
            <span class="story-val">DeepSeek V4 Pro（苦哈哈牛马打工人）</span>
          </li>
          <li>
            <span class="story-key">心态</span>
            <span class="story-val">萌新项目，不喜轻喷 ~</span>
          </li>
        </ul>
        <p class="story-note">
          从零到一，两 AI 协作，二十杯咖啡的时间（并没有）。<br />
          但总之，<em>It just works.</em> (´▽`ʃ♡ƪ)
        </p>
      </div>
    </div>
    <div class="about-content" style="margin-top: 4rem;">
      <div class="about-text">
        <p>
          HomePaper Cursor 是一个探索 Web 交互边界的实验性项目。通过自定义变形光标，
          我们试图打破传统鼠标指针的局限，让光标成为界面叙事的一部分。
        </p>
        <div class="tech-stack">
          <span class="tech-item js-cursor-target">Vue 3</span>
          <span class="tech-item js-cursor-target">Vite 8</span>
          <span class="tech-item js-cursor-target">CSS Transform</span>
          <span class="tech-item js-cursor-target">LERP 算法</span>
          <span class="tech-item js-cursor-target">rAF</span>
        </div>
      </div>
    </div>
  </section>

  <!-- 页脚 -->
  <footer class="footer">
    <p>Made with love — <a href="#" class="js-cursor-target">HomePaper</a> (ᗜ ˰ ᗜ)</p>
  </footer>
</template>

<style scoped>
/* ========== 导航栏 ========== */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  background: var(--color-nav-bg);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--color-nav-border);
}

.nav-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
}

.nav-logo {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-text);
  text-decoration: none;
  letter-spacing: -0.02em;
}

.nav-links {
  display: flex;
  gap: 0.25rem;
}

.nav-links a {
  color: var(--color-text-secondary);
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  padding: 0.4rem 1rem;
  border-radius: 100px;
  transition: color 0.3s;
  border: 2px solid transparent;
}

.nav-links a:hover {
  color: var(--color-text);
}

/* 主题切换按钮 */
.theme-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border: 2px solid transparent;
  border-radius: 50%;
  background: transparent;
  color: var(--color-text-secondary);
  cursor: none;
  transition: color 0.3s, border-color 0.3s;
  padding: 0;
  margin-left: 0.25rem;
}

.theme-toggle:hover {
  color: var(--color-text);
  border-color: var(--color-border);
}

/* ========== 英雄区 ========== */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 100px 2rem 4rem;
  gap: 4rem;
}

.hero-content {
  flex: 1;
}

.hero-badge {
  display: inline-block;
  padding: 0.3rem 1rem;
  border: 2px solid var(--color-border-strong);
  border-radius: 100px;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 1.5rem;
}

.hero-title {
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.03em;
  color: var(--color-text);
  margin-bottom: 1.5rem;
}

.hero-highlight {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-desc {
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--color-text-secondary);
  max-width: 480px;
  margin-bottom: 2rem;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.btn-primary {
  display: inline-block;
  padding: 0.75rem 2rem;
  background: var(--color-btn-primary-bg);
  color: var(--color-btn-primary-text);
  text-decoration: none;
  border-radius: 100px;
  font-weight: 600;
  font-size: 0.95rem;
  border: 2px solid var(--color-btn-primary-bg);
  transition: all 0.3s;
}

.btn-primary:hover {
  opacity: 0.85;
}

.btn-outline {
  display: inline-block;
  padding: 0.75rem 2rem;
  background: transparent;
  color: var(--color-btn-outline-text);
  text-decoration: none;
  border-radius: 100px;
  font-weight: 600;
  font-size: 0.95rem;
  border: 2px solid var(--color-border-strong);
  transition: all 0.3s;
}

/* 英雄区视觉 */
.hero-visual {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.hero-card {
  background: var(--color-bg-hero-card);
  border: 2px solid var(--color-border);
  border-radius: 24px;
  padding: 2.5rem 2rem;
  max-width: 340px;
  text-align: center;
}

.hero-card-label {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: 0.75rem;
}

.hero-card-text {
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--color-text-secondary);
}

.hero-dots {
  display: flex;
  gap: 0.5rem;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--color-dot);
}

.dot:nth-child(2) {
  background: var(--color-dot-active);
  width: 24px;
  border-radius: 100px;
}

/* ========== 通用 Section ========== */
.section {
  padding: 6rem 2rem;
}

.section-alt {
  background: var(--color-bg-alt);
}

.section-header {
  text-align: center;
  max-width: 600px;
  margin: 0 auto 4rem;
}

.section-title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  color: var(--color-text);
  margin-bottom: 0.75rem;
}

.section-sub {
  font-size: 1.1rem;
  color: var(--color-text-secondary);
}

/* ========== 特性网格 ========== */
.features-grid {
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}

.feature-card {
  background: var(--color-bg-card);
  border: 2px solid var(--color-border);
  border-radius: 20px;
  padding: 2rem;
  transition: box-shadow 0.3s, border-color 0.3s;
}

.feature-card:hover {
  box-shadow: 0 8px 40px var(--color-shadow);
  border-color: var(--color-text-muted);
}

.feature-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: var(--color-text);
}

.feature-title {
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 0.5rem;
}

.feature-desc {
  font-size: 0.9rem;
  line-height: 1.6;
  color: var(--color-text-secondary);
}

/* ========== 演示区 ========== */
.demo-group {
  max-width: 900px;
  margin: 0 auto 3rem;
}

.demo-label {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 1rem;
}

.demo-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  align-items: center;
}

/* 链接演示 */
.demo-link {
  display: inline-block;
  padding: 0.6rem 1.5rem;
  border: 2px solid var(--color-border-strong);
  color: var(--color-text);
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  border-radius: 8px;
  transition: color 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.demo-link:hover {
  color: var(--color-cursor-text);
}

.demo-link.pill {
  border-radius: 100px;
}

.demo-link.rounded {
  border-radius: 20px;
}

/* 按钮演示 */
.demo-btn {
  display: inline-block;
  padding: 0.65rem 1.8rem;
  background: var(--color-btn-primary-bg);
  color: var(--color-btn-primary-text);
  border: 2px solid var(--color-btn-primary-bg);
  font-family: inherit;
  font-weight: 600;
  font-size: 0.9rem;
  border-radius: 100px;
}

.demo-btn.outline {
  background: transparent;
  color: var(--color-btn-outline-text);
}

.demo-btn.ghost {
  background: transparent;
  color: var(--color-btn-outline-text);
  border-color: var(--color-tag-border);
}

.demo-btn.wide {
  padding: 0.65rem 3rem;
}

/* 标签演示 */
.demo-tag {
  display: inline-block;
  padding: 0.35rem 1rem;
  border: 2px solid var(--color-tag-border);
  border-radius: 100px;
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--color-tag-text);
}

/* ========== 关于区 ========== */
.about-content {
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
}

.about-text p {
  font-size: 1.05rem;
  line-height: 1.8;
  color: var(--color-text-secondary);
  margin-bottom: 2rem;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  justify-content: center;
}

.tech-item {
  display: inline-block;
  padding: 0.4rem 1.2rem;
  border: 2px solid var(--color-tech-border);
  border-radius: 100px;
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--color-tag-text);
}

/* ========== 诞生故事 ========== */
.story-content {
  max-width: 640px;
  margin: 0 auto;
}

.story-card {
  background: var(--color-bg-card);
  border: 2px solid var(--color-border);
  border-radius: 20px;
  padding: 2rem 2.5rem;
}

.story-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.story-list li {
  display: flex;
  gap: 1rem;
  align-items: baseline;
}

.story-key {
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  min-width: 60px;
  flex-shrink: 0;
}

.story-val {
  font-size: 0.95rem;
  color: var(--color-text-secondary);
  line-height: 1.5;
}

.story-note {
  margin-top: 1.5rem;
  padding-top: 1.25rem;
  border-top: 1px solid var(--color-border-light);
  font-size: 0.9rem;
  color: var(--color-text-secondary);
  line-height: 1.7;
  text-align: center;
}

.story-note em {
  font-style: italic;
  color: var(--color-text);
}

/* ========== 页脚 ========== */
.footer {
  text-align: center;
  padding: 3rem 2rem;
  border-top: 1px solid var(--color-border-light);
}

.footer p {
  font-size: 0.9rem;
  color: var(--color-text-muted);
}

.footer a {
  color: var(--color-text-secondary);
  font-weight: 600;
  text-decoration: none;
}

/* ========== 响应式 ========== */
@media (max-width: 768px) {
  .hero {
    flex-direction: column;
    gap: 3rem;
    padding-top: 80px;
    min-height: auto;
  }

  .hero-visual {
    width: 100%;
  }

  .hero-card {
    max-width: 100%;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }

  .nav-links {
    display: none;
  }
}
</style>
