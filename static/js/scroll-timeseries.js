(function() {
  function init() {
    const svg = document.getElementById('scroll-curve-svg');
    const path = document.getElementById('scroll-curve-path');
    const dot = document.getElementById('scroll-curve-dot');
    if (!svg || !path || !dot) return;

    const points = [];
    const n = 60;
    for (let i = 0; i <= n; i++) {
      const x = 20 + 50 * Math.sin(i * 0.5) * 0.5 + 25 * Math.sin(i * 0.21) + 45;
      points.push({ x: Math.max(8, Math.min(82, x)), yFrac: i / n });
    }

    function buildPath(upToFrac, height) {
      let d = '';
      let lastPt = null;
      for (const p of points) {
        if (p.yFrac > upToFrac) break;
        const y = p.yFrac * height;
        d += (d === '' ? `M ${p.x} ${y}` : ` L ${p.x} ${y}`);
        lastPt = { x: p.x, y };
      }
      return { d, lastPt };
    }

    function update() {
      const height = window.innerHeight;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const frac = max > 0 ? window.scrollY / max : 0;
      const { d, lastPt } = buildPath(frac, height);
      path.setAttribute('d', d);
      if (lastPt) {
        dot.setAttribute('cx', lastPt.x);
        dot.setAttribute('cy', lastPt.y);
      }
    }

    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    update();
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
