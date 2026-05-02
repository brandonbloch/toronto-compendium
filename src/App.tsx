import './index.css';
import { Compendium } from '@/components/Compendium.tsx';
import { defaultUserData } from '@/db/default.ts';
import { NotFoundView } from '@/views/NotFoundView.tsx';
import { useEffect, useState } from 'react';
import { UserDataContext } from './data/UserDataContext.tsx';

import { CompendiumView } from '@/views/CompendiumView.tsx';
import { EntryView } from '@/views/EntryView.tsx';
import { BrowserRouter, Route, Routes } from 'react-router';

export function App() {
  const [userData, setUserData] = useState(defaultUserData);
  const [loadingUserData, setLoadingUserData] = useState(false);
  const [loadedUserData, setLoadedUserData] = useState(false);

  useEffect(() => {
    if (!loadedUserData && !loadingUserData) {
      setLoadingUserData(true);
      const fetchData = async () => {
        const response = await fetch('/api/data');
        const data = await response.json();
        setUserData(data);
        setLoadedUserData(true);
      };
      fetchData();
    }
  }, [loadedUserData, loadingUserData, setLoadedUserData, setLoadingUserData]);

  return (
    <UserDataContext.Provider value={userData}>
      <BrowserRouter>
        <Compendium>
          <Routes>
            <Route path='/' element={<CompendiumView />} />
            <Route path='/entries/:entryId' element={<EntryView />} />
            <Route path='*' element={<NotFoundView />} />
          </Routes>
        </Compendium>
      </BrowserRouter>
    </UserDataContext.Provider>
  );
}

export default App;
