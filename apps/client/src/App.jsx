import FileBar from './components/FileBar.jsx';
import Masthead from './components/Masthead.jsx';
import KeyRail from './components/KeyRail.jsx';
import RuledCanvas from './components/RuledCanvas.jsx';
import MarginNotes from './components/MarginNotes.jsx';
import { Opening, Facts } from './components/Dossier.jsx';
import Equipment from './components/Equipment.jsx';
import Contracts from './components/Contracts.jsx';
import { Contact, Closing } from './components/Debrief.jsx';
import FooterBar from './components/FooterBar.jsx';

export default function App() {
  return (
    <>
      <FileBar />
      <Masthead />
      <main className="folios" id="folios">
        <div className="folios-inner" id="folios-inner">
          <RuledCanvas />
          <KeyRail />
          <MarginNotes />

          <div className="spread" id="dossier">
            <div className="col col-left">
              <Opening />
            </div>
            <div className="col col-right">
              <Facts />
            </div>
          </div>

          <div className="spread" id="equipment">
            <div className="col col-left">
              <Equipment groups={[0, 1]} />
            </div>
            <div className="col col-right">
              <Equipment groups={[2, 3]} offset />
            </div>
          </div>

          <Contracts />

          <div className="spread" id="debrief">
            <div className="col col-left">
              <Contact />
            </div>
            <div className="col col-right">
              <Closing />
            </div>
          </div>
        </div>
      </main>
      <FooterBar />
    </>
  );
}
