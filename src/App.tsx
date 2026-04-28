import "./index.css";

import { CompendiumView } from '@/views/CompendiumView.tsx';
import { EntryView } from '@/views/EntryView.tsx';
import { BrowserRouter, Route, Routes } from 'react-router';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CompendiumView />} />
        <Route path="/:entryId" element={<EntryView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
