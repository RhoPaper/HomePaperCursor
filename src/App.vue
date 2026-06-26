<script setup>
import MorphCursor from './components/MorphCursor.vue'
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
        <a href="#about" class="js-cursor-target">关于</a>
      </div>
    </div>
  </nav>

  <!-- 英雄区 -->
  <section class="hero">
    <div class="hero-content">
      <span class="hero-badge js-cursor-target">✦ 开源项目</span>
      <h1 class="hero-title">
        打造<span class="hero-highlight">独特</span>的<br />交互体验
      </h1>
      <p class="hero-desc">
        HomePaper 是一个拥有变形光标交互的现代 Web 演示项目，
        基于 Vite + Vue 3 构建，让每个点击都充满惊喜。
      </p>
      <div class="hero-actions">
        <a href="#demos" class="btn-primary js-cursor-target">查看演示</a>
        <a href="https://github.com" target="_blank" class="btn-outline js-cursor-target">GitHub</a>
      </div>
    </div>
    <div class="hero-visual">
      <div class="hero-card">
        <div class="hero-card-icon">🖱️</div>
        <div class="hero-card-text">将鼠标悬停在任意带边框的元素上，体验光标的变形动画</div>
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
      <p class="section-sub">探索 HomePaper 带来的全新交互方式</p>
    </div>
    <div class="features-grid">
      <div class="feature-card js-cursor-target">
        <div class="feature-icon">✨</div>
        <h3 class="feature-title">形变动画</h3>
        <p class="feature-desc">光标悬停时平滑变形，包裹目标元素，带来流畅的视觉过渡。</p>
      </div>
      <div class="feature-card js-cursor-target">
        <div class="feature-icon">🎯</div>
        <h3 class="feature-title">精准吸附</h3>
        <p class="feature-desc">自动检测并吸附到交互元素中心，LERP 缓动算法确保丝滑跟随。</p>
      </div>
      <div class="feature-card js-cursor-target">
        <div class="feature-icon">🎨</div>
        <h3 class="feature-title">文字浮现</h3>
        <p class="feature-desc">吸附时元素文字反向悬浮显示，实现优雅的视觉反转效果。</p>
      </div>
      <div class="feature-card js-cursor-target">
        <div class="feature-icon">⚡</div>
        <h3 class="feature-title">高性能</h3>
        <p class="feature-desc">基于 requestAnimationFrame 和 CSS transform，60fps 流畅运行。</p>
      </div>
      <div class="feature-card js-cursor-target">
        <div class="feature-icon">🔧</div>
        <h3 class="feature-title">易集成</h3>
        <p class="feature-desc">仅需添加 css class 即可启用，零配置开箱即用。</p>
      </div>
      <div class="feature-card js-cursor-target">
        <div class="feature-icon">📱</div>
        <h3 class="feature-title">响应式</h3>
        <p class="feature-desc">完美适配桌面端和移动端，自动降级为原生光标。</p>
      </div>
    </div>
  </section>

  <!-- 演示区 -->
  <section id="demos" class="section section-alt">
    <div class="section-header">
      <h2 class="section-title">交互演示</h2>
      <p class="section-sub">试试下面的元素，感受变形光标的魅力</p>
    </div>
    <div class="demo-group">
      <h3 class="demo-label">链接样式</h3>
      <div class="demo-row">
        <a href="#" class="demo-link js-cursor-target">普通链接</a>
        <a href="#" class="demo-link pill js-cursor-target">胶囊链接</a>
        <a href="#" class="demo-link rounded js-cursor-target">圆角链接</a>
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

  <!-- 关于区 -->
  <section id="about" class="section">
    <div class="section-header">
      <h2 class="section-title">关于项目</h2>
      <p class="section-sub">技术栈与设计理念</p>
    </div>
    <div class="about-content">
      <div class="about-text">
        <p>
          HomePaper 是一个探索 Web 交互边界的实验性项目。通过自定义变形光标，
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
    <p>Made with ❤️ — <a href="#" class="js-cursor-target">HomePaper</a></p>
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
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
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
  color: #111;
  text-decoration: none;
  letter-spacing: -0.02em;
}

.nav-links {
  display: flex;
  gap: 0.25rem;
}

.nav-links a {
  color: #555;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  padding: 0.4rem 1rem;
  border-radius: 100px;
  transition: color 0.3s;
  border: 2px solid transparent;
}

.nav-links a:hover {
  color: #111;
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
  border: 2px solid #111;
  border-radius: 100px;
  font-size: 0.8rem;
  font-weight: 600;
  color: #111;
  margin-bottom: 1.5rem;
}

.hero-title {
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.03em;
  color: #111;
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
  color: #555;
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
  background: #111;
  color: #fff;
  text-decoration: none;
  border-radius: 100px;
  font-weight: 600;
  font-size: 0.95rem;
  border: 2px solid #111;
  transition: all 0.3s;
}

.btn-primary:hover {
  background: #333;
  border-color: #333;
}

.btn-outline {
  display: inline-block;
  padding: 0.75rem 2rem;
  background: transparent;
  color: #111;
  text-decoration: none;
  border-radius: 100px;
  font-weight: 600;
  font-size: 0.95rem;
  border: 2px solid #111;
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
  background: #f5f5f5;
  border: 2px solid #e0e0e0;
  border-radius: 24px;
  padding: 2.5rem 2rem;
  max-width: 340px;
  text-align: center;
}

.hero-card-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.hero-card-text {
  font-size: 0.95rem;
  line-height: 1.6;
  color: #555;
}

.hero-dots {
  display: flex;
  gap: 0.5rem;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #d0d0d0;
}

.dot:nth-child(2) {
  background: #111;
  width: 24px;
  border-radius: 100px;
}

/* ========== 通用 Section ========== */
.section {
  padding: 6rem 2rem;
}

.section-alt {
  background: #f9f9f9;
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
  color: #111;
  margin-bottom: 0.75rem;
}

.section-sub {
  font-size: 1.1rem;
  color: #666;
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
  background: #fff;
  border: 2px solid #e8e8e8;
  border-radius: 20px;
  padding: 2rem;
  transition: box-shadow 0.3s, border-color 0.3s;
}

.feature-card:hover {
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.06);
  border-color: #ccc;
}

.feature-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.feature-title {
  font-size: 1.15rem;
  font-weight: 700;
  color: #111;
  margin-bottom: 0.5rem;
}

.feature-desc {
  font-size: 0.9rem;
  line-height: 1.6;
  color: #666;
}

/* ========== 演示区 ========== */
.demo-group {
  max-width: 900px;
  margin: 0 auto 3rem;
}

.demo-label {
  font-size: 0.85rem;
  font-weight: 600;
  color: #999;
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
  border: 2px solid #111;
  color: #111;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  border-radius: 8px;
  transition: color 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.demo-link:hover {
  color: #fff;
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
  background: #111;
  color: #fff;
  border: 2px solid #111;
  font-family: inherit;
  font-weight: 600;
  font-size: 0.9rem;
  border-radius: 100px;
}

.demo-btn.outline {
  background: transparent;
  color: #111;
}

.demo-btn.ghost {
  background: transparent;
  color: #111;
  border-color: #d0d0d0;
}

.demo-btn.wide {
  padding: 0.65rem 3rem;
}

/* 标签演示 */
.demo-tag {
  display: inline-block;
  padding: 0.35rem 1rem;
  border: 2px solid #d0d0d0;
  border-radius: 100px;
  font-size: 0.85rem;
  font-weight: 500;
  color: #555;
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
  color: #555;
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
  border: 2px solid #e0e0e0;
  border-radius: 100px;
  font-size: 0.85rem;
  font-weight: 500;
  color: #555;
}

/* ========== 页脚 ========== */
.footer {
  text-align: center;
  padding: 3rem 2rem;
  border-top: 1px solid #eee;
}

.footer p {
  font-size: 0.9rem;
  color: #999;
}

.footer a {
  color: #555;
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

