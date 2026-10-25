import { useState } from 'react';
import { profile, CV_PATH, API_URL } from '../content.js';

function MessageForm() {
  const [state, setState] = useState('idle');
  const [error, setError] = useState('');

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setState('sending');
    setError('');
    try {
      const res = await fetch(`${API_URL}/api/messages`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || `Request failed (${res.status})`);
      }
      setState('sent');
      form.reset();
    } catch (err) {
      setState('idle');
      setError(err.message || 'Could not send. Use email instead.');
    }
  }

  return (
    <form className="message-form" onSubmit={onSubmit}>
      <div className="field">
        <label htmlFor="mf-name">NAME</label>
        <input id="mf-name" name="name" required maxLength={120} autoComplete="name" />
      </div>
      <div className="field">
        <label htmlFor="mf-email">EMAIL</label>
        <input id="mf-email" name="email" type="email" required maxLength={200} autoComplete="email" />
      </div>
      <div className="field">
        <label htmlFor="mf-body">THE JOB, IN TWO LINES OR MORE</label>
        <textarea id="mf-body" name="body" required minLength={10} maxLength={4000} rows={4} />
      </div>
      <button type="submit" disabled={state === 'sending'}>
        {state === 'sending' ? 'TRANSMITTING…' : 'FILE THE MESSAGE →'}
      </button>
      <p className={`form-note${error ? ' err' : ''}`}>
        {state === 'sent'
          ? 'RECEIVED — ON FILE. EXPECT A REPLY WITHIN TWO WORKING DAYS.'
          : error || 'PERSISTS TO THE CASE FILE — READ ONLY BY THE OPERATIVE.'}
      </p>
    </form>
  );
}

export function Contact() {
  return (
    <section aria-label="Debrief contact">
      <div className="section-key" data-reveal>04 — DEBRIEF</div>
      <h2 data-reveal style={{ '--reveal-delay': '40ms' }}>Open a channel</h2>
      <div className="debrief-photo" data-reveal style={{ '--reveal-delay': '80ms' }}>
        <img src="/avatar.jpg" alt="Abdullah Mohamed" width="132" height="132" />
        <span className="stamp">ACTIVE</span>
      </div>
      <div className="channels" data-reveal style={{ '--reveal-delay': '120ms' }}>
        {profile.socials.map((s) => (
          <div className="channel" key={s.id}>
            <span className="k">{s.label.toUpperCase()}</span>
            <a className="v" href={s.url} target={s.id === 'email' ? undefined : '_blank'} rel="noreferrer noopener">
              {s.handle}
            </a>
          </div>
        ))}
      </div>
      <a className="cv-cta" href={CV_PATH} download data-reveal style={{ '--reveal-delay': '160ms' }}>
        DOWNLOAD CV.PDF ↓
      </a>
      {API_URL && <MessageForm />}
      {!API_URL && (
        <p className="status-line" data-reveal style={{ '--reveal-delay': '200ms' }}>
          <span className="dot">■</span> DIRECT LINES PREFERRED — NO FORMS IN THE WAY
        </p>
      )}
    </section>
  );
}

export function Closing() {
  return (
    <section aria-label="Closing statement">
      <div className="section-key" data-reveal>04·B — CLOSING ENTRY</div>
      <h2 data-reveal style={{ '--reveal-delay': '40ms' }}>Problems have solutions</h2>
      <p className="prose" data-reveal style={{ '--reveal-delay': '80ms' }}>
        <span className="lead">Enjoy the process.</span> That is the operating principle on
        file: a problem that can be stated can be shipped against, and the work between the
        two is where this engineer lives.
      </p>
      <p className="prose" data-reveal style={{ '--reveal-delay': '120ms' }}>
        Retainers open with a short call, a written scope, and a fixed delivery window. The
        record above is the reference — quote the contract numbers.
      </p>
      <div className="status-line" data-reveal style={{ '--reveal-delay': '160ms' }}>
        <span className="dot">■</span> STATUS: ACCEPTING PROJECTS — Q4 2026
      </div>
      <div className="margin-inline" data-reveal style={{ '--reveal-delay': '200ms' }}>
        <b>DEBRIEF KIT</b>
        cv.pdf — one page, evidence-backed. Print it or forward it.
      </div>
    </section>
  );
}
