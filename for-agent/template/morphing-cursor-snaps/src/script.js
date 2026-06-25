const cursor = document.querySelector('.cursor');
const snapLinks = document.querySelectorAll('.snap');

let targetX = 0;
let targetY = 0;
let currentX = 0;
let currentY = 0;
const speed = 0.2;

let activeLink = null;
let isSnapping = false;

function animate() {
  currentX += (targetX - currentX) * speed;
  currentY += (targetY - currentY) * speed;
  cursor.style.transform = `translate(${currentX}px, ${currentY}px)`;
  requestAnimationFrame(animate);
}

document.addEventListener('mousemove', (e) => {
  if (!isSnapping) {
    targetX = e.clientX;
    targetY = e.clientY;
  }
});

snapLinks.forEach(link => {
  link.addEventListener('mouseenter', () => {
    activeLink = link;
    isSnapping = true;

    const rect = link.getBoundingClientRect();

    // 🟡 Position at TOP LEFT instead of center
    targetX = rect.left;
    targetY = rect.top;

    // Match the link shape
    cursor.style.width = `${rect.width}px`;
    cursor.style.height = `${rect.height}px`;
    cursor.style.background = '#ff25db';
    cursor.style.opacity = '1';
    cursor.style.borderRadius = window.getComputedStyle(link).borderRadius || '0px';

    // Inherit background color
    const bgColor = window.getComputedStyle(link).backgroundColor;
    //cursor.style.background = bgColor !== 'rgba(0, 0, 0, 0)' ? bgColor : '#0ff';

    link.classList.add('is-snapped');
  });

  link.addEventListener('mouseleave', () => {
    activeLink = null;
    isSnapping = false;

    // Reset to small circle
    cursor.style.width = `20px`;
    cursor.style.height = `20px`;
    cursor.style.borderRadius = `50%`;
    cursor.style.background = `#fff`;
    cursor.style.opacity = `0`;
    link.classList.remove('is-snapped');
  });
});

animate();
