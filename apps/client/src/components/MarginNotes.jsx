import { useEffect, useRef, useState } from 'react';
import { projects } from '../content.js';

const NOTES = [
  {
    anchor: 'dossier',
    title: 'EVIDENCE A–E',
    body: (liveProjects) =>
      liveProjects.slice(0, 4).map((p) => (
        <a key={p.id} href={p.live} target="_blank" rel="noreferrer noopener">
          {p.name.toLowerCase()}
        </a>
      )),
  },
  {
    anchor: 'contracts',
    title: 'WITNESS NOTE',
    body: () => 'every LIVE link answered from this machine, October 2026. clinicai runs in production; code private by contract.',
  },
  {
    anchor: 'debrief',
    title: 'DEBRIEF KIT',
    body: () => 'cv.pdf — one page, evidence-backed. print it or forward it.',
  },
];

/** Margin apparatus: hangs off the right edge of the book, one note per
 *  section, anchored to its section's measured offset. Always visible;
 *  hidden under 1380px (inline variants render inside the sections there). */
export default function MarginNotes() {
  const colRef = useRef(null);
  const [tops, setTops] = useState(null);

  useEffect(() => {
    const measure = () => {
      const col = colRef.current;
      if (!col) return;
      const host = col.closest('.folios-inner');
      const hostTop = host.getBoundingClientRect().top + window.scrollY;
      const next = {};
      for (const n of NOTES) {
        const el = document.getElementById(n.anchor);
        if (el) next[n.anchor] = el.getBoundingClientRect().top + window.scrollY - hostTop + 8;
      }
      setTops(next);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(document.getElementById('folios-inner'));
    return () => ro.disconnect();
  }, []);

  return (
    <div className="margin-col" ref={colRef} aria-hidden="true">
      {NOTES.map((n) => (
        <aside
          key={n.anchor}
          className="margin-note"
          style={{ top: tops ? `${tops[n.anchor] ?? 0}px` : '0px', visibility: tops ? undefined : 'hidden' }}
        >
          <b>{n.title}</b>
          {n.body(projects.filter((p) => p.live))}
        </aside>
      ))}
    </div>
  );
}
