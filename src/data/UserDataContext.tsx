import { defaultUserData } from '@/db/default.ts';
import type { UserData } from '@/db/schema.ts';
import { createContext, useContext } from 'react';

export const UserDataContext = createContext<UserData>(defaultUserData);

export const useUserDataContext = () => useContext(UserDataContext);
