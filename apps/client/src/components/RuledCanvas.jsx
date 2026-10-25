import { useEffect, useRef } from 'react';

/**
 * The ruling engine: draws the book's structural hairlines at exact device
 * pixels — the two outer edges of the reference block — and re-solves on
 * resize. Section rules stay in CSS; these are the long structural rules.
 */
export default function RuledCanvas() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const host = canvas.parentElement;
    const ctx = canvas.getContext('2d');

    const draw = () => {
      const dpr = window.devicePixelRatio || 1;
      const w = host.clientWidth;
      const h = host.scrollHeight;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);
      ctx.strokeStyle = 'rgba(242, 242, 242, 0.10)';
      ctx.lineWidth = 1;
      const x0 = 0.5;
      const x1 = w - 0.5;
      ctx.beginPath();
      ctx.moveTo(x0, 0);
      ctx.lineTo(x0, h);
      ctx.moveTo(x1, 0);
      ctx.lineTo(x1, h);
      ctx.stroke();
    };

    draw();
    const ro = new ResizeObserver(draw);
    ro.observe(host);
    return () => ro.disconnect();
  }, []);

  return <canvas ref={ref} className="ruled-canvas" aria-hidden="true" />;
}
