import { useEffect, useRef, useState } from 'react';

const SECTIONS = [
  { id: 'dossier', key: '01', label: 'DOSSIER' },
  { id: 'equipment', key: '02', label: 'EQUIP' },
  { id: 'contracts', key: '03', label: 'CONTRACTS' },
  { id: 'debrief', key: '04', label: 'DEBRIEF' },
];

export default function KeyRail() {
  const fillRef = useRef(null);
  const [active, setActive] = useState('dossier');

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let frame = null;

    const update = () => {
      frame = null;
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      if (fillRef.current) {
        fillRef.current.style.setProperty('--fill', progress.toFixed(4));
      }
      const probe = window.scrollY + window.innerHeight * 0.42;
      let current = SECTIONS[0].id;
      for (const s of SECTIONS) {
        const el = document.getElementById(s.id);
        if (el && el.offsetTop <= probe) current = s.id;
      }
      setActive(current);
    };

    const onScroll = () => {
      if (reduced) return update();
      if (frame === null) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="rail-spine" aria-hidden="true">
      <div className="rail-sticky">
        <div className="rail-track" />
        <div className="rail-fill" ref={fillRef} />
        <div className="rail-label">FIELD REFERENCE</div>
        <nav className="rail-keys">
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`rail-key${active === s.id ? ' active' : ''}`}
              tabIndex={-1}
            >
              <span className="sq">{s.key}</span>
              <span className="lb">{s.label}</span>
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
