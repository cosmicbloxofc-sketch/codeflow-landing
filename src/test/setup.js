import '@testing-library/jest-dom/vitest';

if (!window.scrollTo) window.scrollTo = () => {};

if (!Element.prototype.scrollIntoView) {
  Element.prototype.scrollIntoView = function () {};
}

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor(callback) {
    this.callback = callback;
  }
  observe() {
    // Simula elemento visível imediatamente
    this.callback([{ isIntersecting: true }]);
  }
  unobserve() {}
  disconnect() {}
};

// Mock canvas para FloatingOrbs
HTMLCanvasElement.prototype.getContext = function() {
  return {
    clearRect: () => {},
    fillRect: () => {},
    createRadialGradient: () => ({
      addColorStop: () => {}
    }),
    beginPath: () => {},
    arc: () => {},
    fill: () => {},
    fillStyle: '',
    filter: ''
  };
};

// Mock matchMedia para prefers-reduced-motion
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => {}
  })
});
