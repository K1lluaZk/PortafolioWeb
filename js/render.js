import {
  technologies,
  projects,
  experience,
  education,
  certifications,
  about,
  profile,
  statusLabels,
} from '../data/content.js';

function getTechIconUrl(icon) {
  return `https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/${icon}.svg`;
}

function createTechSection() {
  const container = document.getElementById('tech-grid');
  if (!container) return;

  container.innerHTML = technologies
    .map(
      (cat) => `
    <div class="card-surface p-6 reveal" data-delay="0">
      <h3 class="font-manrope text-lg font-medium text-white mb-5">${cat.category}</h3>
      <div class="flex flex-wrap gap-4">
        ${cat.items
          .map(
            (tech) => `
          <div class="group flex flex-col items-center gap-2" title="${tech.name}">
            <div class="w-10 h-10 flex items-center justify-center rounded-md bg-white/[0.03] border border-white/5 transition-all duration-[400ms] group-hover:border-white/15 group-hover:bg-white/[0.06] group-hover:-translate-y-0.5">
              <img src="${getTechIconUrl(tech.icon)}" alt="" class="w-5 h-5 invert opacity-70 group-hover:opacity-100 transition-opacity duration-300" width="20" height="20" loading="lazy" aria-hidden="true" />
            </div>
            <span class="text-xs text-gray-500 group-hover:text-gray-400 transition-colors duration-300">${tech.name}</span>
          </div>
        `
          )
          .join('')}
      </div>
    </div>
  `
    )
    .join('');
}

function createProjectsSection() {
  const container = document.getElementById('projects-grid');
  if (!container) return;

  container.innerHTML = projects
    .map(
      (project, i) => `
    <article class="card-surface overflow-hidden reveal group" data-delay="${(i % 2) * 100}">
      <div class="aspect-video overflow-hidden bg-surface-2">
        <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-white/[0.02] to-white/[0.05] transition-transform duration-500 group-hover:scale-[1.03]">
          <span class="text-gray-600 text-sm font-manrope">${project.title}</span>
        </div>
      </div>
      <div class="p-6">
        <div class="flex items-start justify-between gap-4 mb-3">
          <div>
            <span class="text-xs text-gray-500">${project.year}</span>
            <h3 class="font-manrope text-xl font-medium text-white mt-1">${project.title}</h3>
          </div>
          <span class="status-badge ${project.status} shrink-0">${statusLabels[project.status]}</span>
        </div>
        <p class="text-gray-400 text-sm leading-relaxed mb-4">${project.description}</p>
        <div class="flex flex-wrap gap-2 mb-5">
          ${project.technologies.map((t) => `<span class="tag">${t}</span>`).join('')}
        </div>
        <div class="flex items-center gap-4 text-sm">
          <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-white transition-colors duration-300" aria-label="Ver ${project.title} en GitHub">GitHub</a>
          ${
            project.demo
              ? `<a href="${project.demo}" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-white transition-colors duration-300" aria-label="Ver demo de ${project.title}">Demo</a>`
              : '<span class="text-gray-600">Demo próximamente</span>'
          }
        </div>
      </div>
    </article>
  `
    )
    .join('');
}

function createTimeline(items, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <div class="timeline">
      ${items
        .map(
          (item) => `
        <div class="timeline-item timeline-reveal reveal">
          <div class="timeline-dot"></div>
          <div>
            <h3 class="font-manrope text-lg font-medium text-white">${item.title}</h3>
            <p class="text-sm text-gray-500 mt-1">${item.company} · ${item.period}</p>
            <p class="text-gray-400 text-sm leading-relaxed mt-3">${item.description}</p>
            ${
              item.bullets
                ? `<ul class="mt-3 space-y-2">${item.bullets.map((b) => `<li class="text-sm text-gray-500 flex items-start gap-2"><span class="text-white/30 mt-1.5 shrink-0">—</span>${b}</li>`).join('')}</ul>`
                : ''
            }
          </div>
        </div>
      `
        )
        .join('')}
    </div>
  `;
}

function createCertificationsSection() {
  const container = document.getElementById('cert-grid');
  if (!container) return;

  container.innerHTML = certifications
    .map(
      (cert, i) => `
    <div class="card-surface p-5 flex items-center gap-4 reveal" data-delay="${i * 80}">
      <div class="w-10 h-10 flex items-center justify-center rounded-md bg-white/[0.03] border border-white/5 shrink-0">
        <img src="${getTechIconUrl(cert.icon)}" alt="" class="w-5 h-5 invert opacity-60" width="20" height="20" loading="lazy" aria-hidden="true" />
      </div>
      <div class="min-w-0">
        <h3 class="font-manrope text-sm font-medium text-white truncate">${cert.name}</h3>
        <p class="text-xs text-gray-500 mt-0.5">${cert.issuer} · ${cert.year}</p>
      </div>
    </div>
  `
    )
    .join('');
}

function createAboutValues() {
  const container = document.getElementById('about-values');
  if (!container) return;

  const icons = {
    code: '<path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />',
    stack: '<path stroke-linecap="round" stroke-linejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-4.179 2.25" />',
    design: '<path stroke-linecap="round" stroke-linejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.364 15.364 0 01-4.773 1.41M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />',
    team: '<path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />',
  };

  container.innerHTML = about.values
    .map(
      (value, i) => `
    <div class="card-surface p-5 reveal" data-delay="${i * 100}">
      <svg class="w-5 h-5 text-gray-500 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
        ${icons[value.icon]}
      </svg>
      <h3 class="font-manrope text-sm font-medium text-white mb-1">${value.title}</h3>
      <p class="text-xs text-gray-500 leading-relaxed">${value.description}</p>
    </div>
  `
    )
    .join('');
}

export function renderDynamicContent() {
  createAboutValues();
  createTechSection();
  createProjectsSection();
  createTimeline(experience, 'experience-timeline');
  createTimeline(education, 'education-timeline');
  createCertificationsSection();

  const yearEl = document.getElementById('footer-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const emailLink = document.getElementById('contact-email');
  if (emailLink) {
    emailLink.href = `mailto:${profile.email}`;
    emailLink.textContent = profile.email;
  }
}
