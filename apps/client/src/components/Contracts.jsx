import { projects } from '../content.js';

function Evidence({ project }) {
  return (
    <div className="evidence">
      {project.live ? (
        <a href={project.live} target="_blank" rel="noreferrer noopener">
          LIVE ↗
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

function Contract({ project, delay }) {
  return (
    <article className="contract" data-reveal style={{ '--reveal-delay': `${delay}ms` }}>
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
    </article>
  );
}

export default function Contracts() {
  return (
    <section className="contracts" id="contracts" aria-label="Contracts">
      <div className="contracts-head" data-reveal>
        <div className="section-key">03 — CONTRACTS</div>
        <h2>The record</h2>
        <p>SIX ENTRIES — FIVE RESPONDING, ONE ON REQUEST — VERIFIED 2026-10</p>
      </div>
      <div className="contracts-grid">
        {projects.map((p, i) => (
          <Contract key={p.id} project={p} delay={(i % 2) * 60} />
        ))}
      </div>
      <div className="margin-inline" data-reveal>
        <b>WITNESS NOTE</b>
        Every LIVE link above was opened and answered from this machine in October 2026.
        clinicai runs in production; its code stays private by contract.
      </div>
    </section>
  );
}
