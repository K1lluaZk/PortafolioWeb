const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches;

function createStars(count, width, height, options = {}) {
  const { minSize = 0.5, maxSize = 1.5, minOpacity = 0.2, maxOpacity = 0.8 } =
    options;

  return Array.from({ length: count }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    size: minSize + Math.random() * (maxSize - minSize),
    baseOpacity: minOpacity + Math.random() * (maxOpacity - minOpacity),
    opacity: minOpacity + Math.random() * (maxOpacity - minOpacity),
    twinkleSpeed: 0.0003 + Math.random() * 0.0008,
    twinkleOffset: Math.random() * Math.PI * 2,
    phase: Math.random() * Math.PI * 2,
  }));
}

function resizeCanvas(canvas) {
  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();
  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;
  const ctx = canvas.getContext('2d');
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  return { width: rect.width, height: rect.height, ctx };
}

export function initStarfield() {
  const farCanvas = document.getElementById('stars-far');
  const nearCanvas = document.getElementById('stars-near');
  const cssStars = document.querySelector('.stars-css');

  if (!farCanvas || !nearCanvas) return;

  if (!prefersReducedMotion && cssStars) {
    cssStars.classList.add('twinkle');
  }

  let farStars = [];
  let nearStars = [];
  let animationId = null;
  let lastTime = 0;

  let farSize = { width: 0, height: 0 };
  let nearSize = { width: 0, height: 0 };

  function setup() {
    const far = resizeCanvas(farCanvas);
    const near = resizeCanvas(nearCanvas);
    farSize = { width: far.width, height: far.height };
    nearSize = { width: near.width, height: near.height };

    farStars = createStars(100, far.width, far.height, {
      minSize: 0.5,
      maxSize: 1.2,
      minOpacity: 0.15,
      maxOpacity: 0.5,
    });

    nearStars = createStars(40, near.width, near.height, {
      minSize: 1,
      maxSize: 2.5,
      minOpacity: 0.3,
      maxOpacity: 0.9,
    });
  }

  function drawStars(ctx, stars, time, width, height) {
    ctx.clearRect(0, 0, width, height);

    stars.forEach((star) => {
      let opacity = star.baseOpacity;

      if (!prefersReducedMotion) {
        opacity =
          star.baseOpacity *
          (0.5 +
            0.5 *
              Math.sin(
                time * star.twinkleSpeed + star.twinkleOffset + star.phase
              ));
      }

      ctx.beginPath();
      ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
      ctx.fill();
    });
  }

  function animate(time) {
    if (time - lastTime < 50 && !prefersReducedMotion) {
      animationId = requestAnimationFrame(animate);
      return;
    }
    lastTime = time;

    const farCtx = farCanvas.getContext('2d');
    const nearCtx = nearCanvas.getContext('2d');

    drawStars(farCtx, farStars, time, farSize.width, farSize.height);
    drawStars(nearCtx, nearStars, time, nearSize.width, nearSize.height);

    animationId = requestAnimationFrame(animate);
  }

  setup();

  if (prefersReducedMotion) {
    const farCtx = farCanvas.getContext('2d');
    const nearCtx = nearCanvas.getContext('2d');
    drawStars(farCtx, farStars, 0, farSize.width, farSize.height);
    drawStars(nearCtx, nearStars, 0, nearSize.width, nearSize.height);
  } else {
    animationId = requestAnimationFrame(animate);
  }

  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      if (animationId) cancelAnimationFrame(animationId);
      setup();
      if (!prefersReducedMotion) {
        animationId = requestAnimationFrame(animate);
      } else {
        const farCtx = farCanvas.getContext('2d');
        const nearCtx = nearCanvas.getContext('2d');
        drawStars(farCtx, farStars, 0, farSize.width, farSize.height);
        drawStars(nearCtx, nearStars, 0, nearSize.width, nearSize.height);
      }
    }, 200);
  });
}
