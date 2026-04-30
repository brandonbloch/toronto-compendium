import "./index.css";
import { Compendium } from '@/components/Compendium.tsx';

import { CompendiumView } from '@/views/CompendiumView.tsx';
import { EntryView } from '@/views/EntryView.tsx';
import { BrowserRouter, Route, Routes } from 'react-router';

export function App() {
  return (
    <BrowserRouter>
      <Compendium>
        <Routes>
          <Route path="/" element={<CompendiumView />} />
          <Route path="/:entryId" element={<EntryView />} />
        </Routes>
      </Compendium>
    </BrowserRouter>
  );
}

export default App;
