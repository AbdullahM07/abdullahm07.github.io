import { profile } from '../content.js';

export default function FileBar() {
  return (
    <header className="filebar">
      <span className="fileno">FILE NO. {profile.fileNo}</span>
      <span className="edition">
        <span className="dot">■</span> FIELD REFERENCE — EDITION 2026-10 — {profile.location.toUpperCase()}
      </span>
    </header>
  );
}
