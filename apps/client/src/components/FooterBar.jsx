import { profile } from '../content.js';

/** Barcode drawn from the file number itself — one bar per digit, width and
 *  gap derived from the digit's value. Authored geometry, deterministic. */
function Barcode({ code }) {
  const digits = code.replace(/\D/g, '').split('').map(Number);
  const bars = [];
  let x = 0;
  digits.forEach((d, i) => {
    const w = 1 + (d % 3);
    bars.push(<rect key={i} x={x} y={0} width={w} height={26} />);
    x += w + 1 + (d % 2);
  });
  return (
    <svg
      className="barcode"
      viewBox={`0 0 ${x} 26`}
      width={x}
      height="26"
      role="img"
      aria-label={`Barcode ${code}`}
      fill="var(--ink)"
    >
      {bars}
    </svg>
  );
}

export default function FooterBar() {
  return (
    <footer className="footerbar">
      <div className="footerbar-inner">
        <div className="file-end">
          <Barcode code={profile.fileNo} />
          <span>FILE NO. {profile.fileNo} — END OF FILE</span>
        </div>
        <nav className="keys" aria-label="Section keys">
          <a href="#dossier"><b>01</b> DOSSIER</a>
          <a href="#equipment"><b>02</b> EQUIP</a>
          <a href="#contracts"><b>03</b> CONTRACTS</a>
          <a href="#debrief"><b>04</b> DEBRIEF</a>
        </nav>
        <span>© 2026 {profile.name.toUpperCase()} — {profile.location.toUpperCase()}</span>
      </div>
    </footer>
  );
}
