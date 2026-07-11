const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches;

export function initScrollReveal() {
  if (prefersReducedMotion) {
    document.querySelectorAll('.reveal').forEach((el) => {
      el.classList.add('visible');
    });
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const delay = entry.target.dataset.delay || 0;
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, Number(delay));
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
}

export function initHeroEntrance() {
  const items = document.querySelectorAll('.hero-item');

  if (prefersReducedMotion) {
    items.forEach((item) => item.classList.add('visible'));
    return;
  }

  items.forEach((item, index) => {
    setTimeout(() => {
      item.classList.add('visible');
    }, 200 + index * 150);
  });
}

export function initTimelineReveal() {
  const items = document.querySelectorAll('.timeline-reveal');

  if (prefersReducedMotion) {
    items.forEach((el) => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const siblings = entry.target.parentElement.querySelectorAll(
            '.timeline-reveal'
          );
          siblings.forEach((sibling, index) => {
            setTimeout(() => {
              sibling.classList.add('visible');
            }, index * 100);
          });
          observer.unobserve(entry.target.parentElement);
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll('.timeline').forEach((timeline) => {
    const firstItem = timeline.querySelector('.timeline-reveal');
    if (firstItem) observer.observe(firstItem);
  });
}
