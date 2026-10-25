import { profile } from '../content.js';

export default function Masthead() {
  return (
    <section className="masthead" aria-label="Operative file header">
      <div className="kicker">OPERATIVE FILE — {profile.role.toUpperCase()}</div>
      <h1>Abdullah Mohamed</h1>
      <p className="meta">
        <b>@{profile.codename}</b> — {profile.employer.toUpperCase()} — {profile.education.toUpperCase()}
      </p>
    </section>
  );
}
