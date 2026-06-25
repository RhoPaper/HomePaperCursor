<template>
    <!-- 全局光标容器 -->
    <div class="cursor-container">

        <!-- 1. 动效层 (Cursor Div) - 负责形变、吸附、背景融合。带有 LERP 延迟 -->
        <div class="cursor-dot" ref="cursorRef" :class="{
            'is-active': isActive,
            'leaving': isLeaving
        }" @transitionend="onTransitionEnd"></div>

    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

// DOM 引用
const cursorRef = ref(null);

// 状态机变量
const isActive = ref(false);
const isLeaving = ref(false);

// 坐标变量
let mouseX = 0, mouseY = 0;       // 鼠标绝对物理坐标
let targetX = 0, targetY = 0;     // 动效层要去的目标坐标（鼠标坐标 or 目标元素中心点）
let currentX = 0, currentY = 0;   // 动效层当前的计算坐标（不断向 targetX/Y 逼近）

let labelTargetX = 0, labelTargetY = 0;   // 伪元素内文本的偏移目标
let labelCurrentX = 0, labelCurrentY = 0; // 伪元素内文本当前的 LERP 偏移坐标

const speed = 0.2; // LERP 缓动系数，越小越顺滑延迟越高
let animationFrameId = null;
let currentTargetEl = null; // 当前正在交互的目标元素

// LERP 核心动画循环
const animate = () => {
    // 动效层 LERP 计算
    currentX += (targetX - currentX) * speed;
    currentY += (targetY - currentY) * speed;

    if (cursorRef.value) {
        // 用 translate3d 移动中心点，用 translate(-50%, -50%) 抵消自身尺寸。
        // 这样在 width/height 发生 transition 变化时，光标中心点依然保持稳定。
        cursorRef.value.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;
    }

    // 文本偏移 LERP 计算（使内部文本平滑偏移）
    labelCurrentX += (labelTargetX - labelCurrentX) * speed;
    labelCurrentY += (labelTargetY - labelCurrentY) * speed;

    if (isActive.value && currentTargetEl) {
        currentTargetEl.style.setProperty('--cursor-tx', `${labelCurrentX}px`);
        currentTargetEl.style.setProperty('--cursor-ty', `${labelCurrentY}px`);
    }

    animationFrameId = requestAnimationFrame(animate);
};

// 鼠标移动监听
const onMouseMove = (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    // 当吸附在目标上时，计算目标文字的偏移量
    if (isActive.value && currentTargetEl) {
        const rect = currentTargetEl.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        // 鼠标距离偏移中心的距离 * 10%
        labelTargetX = (mouseX - centerX) * 0.1;
        labelTargetY = (mouseY - centerY) * 0.1;
    } else {
        labelTargetX = 0;
        labelTargetY = 0;
    }

    // 如果不在吸附状态，动效层的目标点也就是当前鼠标位置
    if (!isActive.value) {
        targetX = mouseX;
        targetY = mouseY;
    }
};

// 鼠标悬停进入 - 全局事件委托
const onMouseOver = (e) => {
    const target = e.target.closest('.js-cursor-target');

    if (target && currentTargetEl !== target) {
        currentTargetEl = target;

        // 触发进入状态机
        isActive.value = true;
        isLeaving.value = true; // 启动入场缓动动画

        // 获取目标元素的尺寸和位置
        const rect = target.getBoundingClientRect();

        // 将动效层目标点锁定为目标元素的【中心点】
        targetX = rect.left + rect.width / 2;
        targetY = rect.top + rect.height / 2;

        // 2. 动态捕获目标元素标签内的真实文本，赋给伪元素 content
        target.setAttribute('data-cursor-text', target.innerText.trim());

        // 改变动效层形变样式，使其包裹目标元素
        if (cursorRef.value) {
            cursorRef.value.style.width = `${rect.width}px`;
            cursorRef.value.style.height = `${rect.height}px`;
            // 复刻目标的圆角
            cursorRef.value.style.borderRadius = window.getComputedStyle(target).borderRadius || '0px';
        }

        target.classList.add('is-hovered');
    }
};

// 鼠标移出
const onMouseOut = (e) => {
    const target = e.target.closest('.js-cursor-target');

    // 确保是真的离开了该元素
    if (target && !target.contains(e.relatedTarget)) {

        // 触发退出状态机
        isActive.value = false;
        isLeaving.value = true; // 启动退场缓动动画

        // 动效层恢复初始圆点状态
        if (cursorRef.value) {
            cursorRef.value.style.width = '20px';
            cursorRef.value.style.height = '20px';
            cursorRef.value.style.borderRadius = '50%';
        }

        // 清理目标元素的属性
        if (currentTargetEl) {
            currentTargetEl.style.removeProperty('--cursor-tx');
            currentTargetEl.style.removeProperty('--cursor-ty');
            currentTargetEl.removeAttribute('data-cursor-text');
        }

        // 解除目标元素的配合状态
        target.classList.remove('is-hovered');
        currentTargetEl = null;

        // 脱离吸附后，目标点立刻切回当前鼠标的物理位置，防止乱跳
        targetX = mouseX;
        targetY = mouseY;
    }
};

// 监听 CSS 动画结束
const onTransitionEnd = (e) => {
    if (e.propertyName === 'width') {
        isLeaving.value = false;
    }
};

onMounted(() => {
    // 初始化居中或屏幕外
    targetX = mouseX = window.innerWidth / 2;
    targetY = mouseY = window.innerHeight / 2;
    currentX = targetX;
    currentY = targetY;

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseout', onMouseOut);

    animate();

    // 隐藏系统原生光标
    document.documentElement.style.cursor = 'none';
});

onUnmounted(() => {
    window.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseover', onMouseOver);
    document.removeEventListener('mouseout', onMouseOut);
    if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
    }
    document.documentElement.style.cursor = 'auto';
});
</script>

<style scoped>
.cursor-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    pointer-events: none;
    z-index: 2;
}

.cursor-dot {
    position: absolute;
    top: 0;
    left: 0;
    width: 20px;
    height: 20px;
    background: #000;
    border-radius: 50%;
    transform-origin: center center;
    transition:
        width 0.4s cubic-bezier(0.16, 1, 0.3, 1),
        height 0.4s cubic-bezier(0.16, 1, 0.3, 1),
        border-radius 0.4s cubic-bezier(0.16, 1, 0.3, 1),
        background-color 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.cursor-dot.is-active {
    background: #000;
}
</style>

<style>
/* 目标元素配合：全局样式 */
.js-cursor-target {
    position: relative;
    z-index: 1;
    cursor: none !important;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

/* 使用 ::before 伪元素生成完美居中的悬浮文字 */
.js-cursor-target::before {
    content: attr(data-cursor-text);
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--theme-background, #fff);
    /* 悬浮文字反白 */
    opacity: 0;
    pointer-events: none;
    /* 应用 JS 里计算出的平滑 LERP 偏移量 */
    transform: translate3d(var(--cursor-tx, 0px), var(--cursor-ty, 0px), 0);
    transition: opacity 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.js-cursor-target.is-hovered {
    /* 为了能看到底下黑色的 cursor-dot 变形背景，目标自身背景变透明 */
    background: transparent !important;
    border-color: transparent !important;
    /* 隐藏原文字，由 ::before 接管显示 */
    color: transparent !important;
    /* hover时层级必须高于全局光标容器 (z-index: 2)，否则 ::before 文字会被盖住 */
    z-index: 3;
}

.js-cursor-target.is-hovered::before {
    opacity: 1;
}
</style>
