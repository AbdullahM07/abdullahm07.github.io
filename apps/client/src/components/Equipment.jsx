import { skills } from '../content.js';

const NOTE = { LANGUAGES: 'PRIMARY', FRONTEND: 'SURFACE', BACKEND: 'SERVICE', TOOLING: 'SHIP' };
const TITLES = { LANGUAGES: '02 — LANGUAGES', FRONTEND: '02·A — SURFACE', BACKEND: '02·B — SERVICE', TOOLING: '02·C — SHIP' };

export default function Equipment({ groups, offset = false }) {
  const list = groups.map((i) => skills[i]);
  return (
    <section aria-label="Equipment">
      <div className="section-key">
        {TITLES[list[0].group]}
      </div>
      {list.map((group, gi) => (
        <div className="equip-group" key={group.group} style={{ '--reveal-delay': `${60 + gi * 40}ms` }}>
          <div className="t">{group.group}</div>
          {group.items.map((item, ii) => (
            <div className="eq-line" key={item}>
              <span>{item}</span>
              <span className="note">{ii === 0 && !offset ? NOTE[group.group] : '·'}</span>
            </div>
          ))}
        </div>
      ))}
    </section>
  );
}
