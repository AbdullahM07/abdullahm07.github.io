import { profile, stats } from '../content.js';

export function Opening() {
  return (
    <section aria-label="Dossier opening">
      <div className="section-key" data-reveal>01 — DOSSIER</div>
      <h2 data-reveal style={{ '--reveal-delay': '40ms' }}>Builds whole products, twice over</h2>
      <p className="prose" data-reveal style={{ '--reveal-delay': '80ms' }}>
        <span className="lead">Interface in React, services in Node and Express, data in Mongo
        and Postgres, deployment in Docker and CI.</span> Five systems are live today — a
        deployment platform, an AI harness, a finance manager, a watch-together service, a
        clinic workspace.
      </p>
      <p className="prose" data-reveal style={{ '--reveal-delay': '120ms' }}>
        The work is judged where it runs: every claim in this file is checked against a
        system that answers when you visit it. Nothing here is a mock.
      </p>
      <div className="stat-block" data-reveal style={{ '--reveal-delay': '160ms' }}>
        {stats.map((s) => (
          <div className="stat" key={s.label}>
            <div className="n">{s.value}</div>
            <div className="l">{s.label}</div>
          </div>
        ))}
      </div>
      <div className="status-line" data-reveal style={{ '--reveal-delay': '200ms' }}>
        <span className="dot">●</span> {profile.status} — OPERATING FROM {profile.location.toUpperCase()}
      </div>
      <div className="margin-inline" data-reveal style={{ '--reveal-delay': '240ms' }}>
        <b>EVIDENCE A–E</b>
        openship.io · mindwire.sh · masroof · watchlink · clinicai (private)
      </div>
    </section>
  );
}

const FACTS = [
  ['NAME', profile.name],
  ['CODENAME', `@${profile.codename}`],
  ['LOCATION', profile.location],
  ['EMPLOYER', profile.employer],
  ['TRAINING', 'B.Sc. Computer Science — SCU'],
  ['ROLE', profile.role],
];

export function Facts() {
  return (
    <section aria-label="Personnel facts">
      <div className="section-key" data-reveal>01·B — THE OPERATIVE</div>
      <h2 data-reveal style={{ '--reveal-delay': '40ms' }}>On file</h2>
      <div className="ledger" data-reveal style={{ '--reveal-delay': '80ms' }}>
        {FACTS.map(([k, v]) => (
          <div className="row" key={k}>
            <span className="k">{k}</span>
            <span className="v">{v}</span>
          </div>
        ))}
      </div>
      <p className="prose" data-reveal style={{ '--reveal-delay': '140ms' }}>
        Working language: English and Arabic product surfaces alike — ClinicAI ships
        bilingually to clinics across Egypt.
      </p>
    </section>
  );
}
