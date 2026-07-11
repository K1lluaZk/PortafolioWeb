import { initStarfield } from './starfield.js';
import { initScrollReveal, initHeroEntrance, initTimelineReveal } from './animations.js';
import { initNavigation } from './navigation.js';
import { initContact } from './contact.js';
import { renderDynamicContent } from './render.js';

document.addEventListener('DOMContentLoaded', () => {
  initStarfield();
  renderDynamicContent();
  initNavigation();
  initHeroEntrance();
  initScrollReveal();
  initTimelineReveal();
  initContact();
});
