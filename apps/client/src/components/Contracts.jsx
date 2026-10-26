import { projects } from '../content.js';
import openshipPlate from '../assets/plates/openship.jpg';
import mindwirePlate from '../assets/plates/mindwire.jpg';
import masroofPlate from '../assets/plates/masroof.jpg';
import watchlinkPlate from '../assets/plates/watchlink.jpg';

const PLATES = {
  openship: openshipPlate,
  mindwire: mindwirePlate,
  masroof: masroofPlate,
  watchlink: watchlinkPlate,
};

function Plate({ project }) {
  const src = PLATES[project.id];
  if (src) {
    return (
      <a
        className="plate"
        href={project.live}
        target="_blank"
        rel="noreferrer noopener"
        aria-label={`${project.name} — open live system`}
      >
        <img src={src} alt={`${project.name} — the live system in production`} loading="lazy" />
        <span className="plate-tag mono">LIVE CAPTURE — {project.live.replace(/^https:\/\//, '').toUpperCase()}</span>
      </a>
    );
  }
  return (
    <div className="plate plate-record" aria-label={`${project.name} — no public surface`}>
      <span className="plate-record-mark" aria-hidden="true">{project.index}</span>
      <span className="plate-tag mono">NO PUBLIC SURFACE — RECORD ON FILE</span>
    </div>
  );
}

function Evidence({ project }) {
  return (
    <div className="evidence">
      {project.live ? (
        <a href={project.live} target="_blank" rel="noreferrer noopener">
          OPEN LIVE ↗
        </a>
      ) : (
        <span className="null">LIVE — ON REQUEST</span>
      )}
      {project.repo ? (
        <a href={project.repo} target="_blank" rel="noreferrer noopener" className="ghost">
          CODE ↗
        </a>
      ) : (
        <span className="null">CODE — PRIVATE</span>
      )}
    </div>
  );
}

function Contract({ project, flip }) {
  return (
    <article className={`contract-row${flip ? ' flip' : ''}`} data-contract={project.id}>
      <Plate project={project} />
      <div className="contract-body">
        <span className="idx">CONTRACT {project.index} — {project.role.toUpperCase()}</span>
        <h3>{project.name}</h3>
        <p className="tagline">{project.tagline}</p>
        <p className="desc">{project.description}</p>
        <div className="stack">
          {project.stack.map((s) => (
            <span key={s}>{s}</span>
          ))}
        </div>
        <Evidence project={project} />
      </div>
    </article>
  );
}

export default function Contracts() {
  return (
    <section className="contracts" id="contracts" aria-label="Contracts">
      <div className="contracts-head">
        <div className="section-key">03 — CONTRACTS</div>
        <h2>The record</h2>
        <p>SIX ENTRIES — FOUR CAPTURED LIVE FROM PRODUCTION, 2026-10</p>
      </div>
      <div className="contracts-list">
        {projects.map((p, i) => (
          <Contract key={p.id} project={p} flip={i % 2 === 1} />
        ))}
      </div>
      <div className="margin-inline">
        <b>WITNESS NOTE</b>
        Captures above were taken from the running systems in October 2026 — not mockups.
        clinicai serves clinics in production; its code stays private by contract.
      </div>
    </section>
  );
}
