import './index.css';
import { Compendium } from '@/components/Compendium.tsx';
import { NotFoundView } from '@/views/NotFoundView.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { CompendiumView } from '@/views/CompendiumView.tsx';
import { EntryView } from '@/views/EntryView.tsx';
import { BrowserRouter, Route, Routes } from 'react-router';

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Compendium>
          <Routes>
            <Route path='/' element={<CompendiumView />} />
            <Route path='/entries/:entryId' element={<EntryView />} />
            <Route path='*' element={<NotFoundView />} />
          </Routes>
        </Compendium>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
