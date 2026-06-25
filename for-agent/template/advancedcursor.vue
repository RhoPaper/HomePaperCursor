<template>
    <!-- 全局光标容器 -->
    <div class="cursor-container">
        
        <!-- 1. 动效层 (Cursor Div) - 负责形变、吸附、背景融合。带有 LERP 延迟 -->
        <div 
            class="cursor-dot" 
            ref="cursorRef"
            :class="{ 
                'is-active': isActive, 
                'leaving': isLeaving 
            }"
            @transitionend="onTransitionEnd"
        ></div>

        <!-- 2. 信息层 (Label Div) - 无大小，绝对零延迟跟随鼠标 -->
        <div 
            class="cursor-label" 
            ref="labelRef"
            :class="{ 'is-active': isActive }"
        >
            <div class="cursor-label-text">{{ labelText }}</div>
        </div>

    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

// DOM 引用
const cursorRef = ref(null);
const labelRef = ref(null);

// 状态机变量
const isActive = ref(false);
const isLeaving = ref(false);
const labelText = ref('');

// 坐标变量
let mouseX = 0, mouseY = 0;       // 鼠标绝对物理坐标（供 Label 零延迟使用）
let targetX = 0, targetY = 0;     // 动效层要去的目标坐标（鼠标坐标 or 目标元素中心点）
let currentX = 0, currentY = 0;   // 动效层当前的计算坐标（不断向 targetX/Y 逼近）

const speed = 0.2; // LERP 缓动系数，越小越顺滑延迟越高
let animationFrameId = null;
let currentTargetEl = null; // 当前正在交互的目标元素

// LERP 核心动画循环
const animate = () => {
    // 动效层 LERP 计算
    currentX += (targetX - currentX) * speed;
    currentY += (targetY - currentY) * speed;

    if (cursorRef.value) {
        // 【关键技巧】：用 translate3d 移动中心点，用 translate(-50%, -50%) 抵消自身尺寸。
        // 这样在 width/height 发生 transition 变化时，光标中心点依然保持绝对稳如泰山！
        cursorRef.value.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;
    }

    animationFrameId = requestAnimationFrame(animate);
};

// 鼠标移动监听 (无延迟更新 Label，更新 Cursor 目标点)
const onMouseMove = (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    // Label Div 永远零延迟跟随真实鼠标位置
    if (labelRef.value) {
        labelRef.value.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
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

        // 设置可能存在的 Label 文字 (例如：data-cursor-label="PLAY")
        labelText.value = target.dataset.cursorLabel || '';

        // 改变动效层形变样式，使其“吞噬”目标元素
        if (cursorRef.value) {
            cursorRef.value.style.width = `${rect.width}px`;
            cursorRef.value.style.height = `${rect.height}px`;
            // 完美复刻目标的圆角
            cursorRef.value.style.borderRadius = window.getComputedStyle(target).borderRadius || '0px';
        }

        // 让目标元素进行配合（如文字反色、滤镜反转等）
        target.classList.add('is-hovered');
    }
};

// 鼠标移出
const onMouseOut = (e) => {
    const target = e.target.closest('.js-cursor-target');
    
    // 确保是真的离开了该元素（而不是移动到其子元素上）
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
        labelText.value = '';

        // 解除目标元素的配合状态
        target.classList.remove('is-hovered');
        currentTargetEl = null;

        // 【细节】：脱离吸附后，目标点立刻切回当前鼠标的物理位置，防止乱跳
        targetX = mouseX;
        targetY = mouseY;
    }
};

// 监听 CSS 动画结束，移除 leaving 类名
const onTransitionEnd = (e) => {
    // 因为多个属性(width, height等)都在 transition，只拦截其中一个代表性的即可
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
    // 这里依然使用 mouseover/out 而不是 mouseenter/leave，是为了利用事件冒泡实现全局委托
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
/* 光标容器隔离 */
.cursor-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    pointer-events: none;
    z-index: 9999;
}

/* ============================
   1. 动效层 (Cursor Div)
   ============================ */
.cursor-dot {
    position: absolute;
    top: 0;
    left: 0;
    width: 20px;
    height: 20px;
    background: #000; /* 默认颜色 */
    border-radius: 50%;
    transform-origin: center center;
    /* transition 平日里只管形变，位置由 JS LERP 接管 */
    transition: 
        width 0.4s cubic-bezier(0.16, 1, 0.3, 1),
        height 0.4s cubic-bezier(0.16, 1, 0.3, 1),
        border-radius 0.4s cubic-bezier(0.16, 1, 0.3, 1),
        background-color 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

/* 处于入场/退场动画期间的特殊缓动 */
.cursor-dot.leaving {
    /* 配合你的发现，如果需要动画时有不同的曲线可以放在这里 */
}

/* Hover状态下的动效层 (它实际上垫在了 Target 元素下方或使用了混合模式) */
.cursor-dot.is-active {
    /* 例如：变成灰色或根据设计调整 */
    background: transparent; 
}


/* ============================
   2. 信息层 (Label Div)
   ============================ */
.cursor-label {
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 0;
    overflow: visible; /* 允许内部文本溢出展示 */
    display: flex;
    align-items: center;
    justify-content: center;
}

/* 文本容器，相对于鼠标绝对居中 */
.cursor-label-text {
    position: absolute;
    transform: translate(-50%, -50%) scale(0); /* 初始状态缩放隐藏 */
    color: #fff;
    font-size: 12px;
    font-weight: bold;
    letter-spacing: 1px;
    white-space: nowrap;
    opacity: 0;
    transition: 
        transform 0.4s cubic-bezier(0.16, 1, 0.3, 1),
        opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

/* 激活时显示文本 */
.cursor-label.is-active .cursor-label-text {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
}
</style>

<style>
/* ============================
   3. 目标元素配合 (需写在全局样式或父组件中)
   ============================ */

/* 给页面的目标元素提前预设好配合样式 */
.js-cursor-target {
    position: relative;
    cursor: none; /* 强制覆盖原生手型 */
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

/* 当目标元素被JS加上 is-hovered 配合样式时：
   此时 Cursor-dot 刚好变大贴合在下面，我们可以利用 filter: invert 反色 
   或者直接改变背景色，达到“光标融入元素”的视觉欺骗效果 */
.js-cursor-target.is-hovered {
    /* 完全复刻你扒出来的 Google CSS 代码 */
    background: var(--theme-foreground, #000); 
    border-color: var(--theme-foreground, #000); 
    color: var(--theme-background, #fff); 
    /* filter: invert(1); */
}
</style>