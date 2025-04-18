import { createContext, useState } from 'react';

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [activate1, setActivate1] = useState(0);

  return (
    <UserContext.Provider value={{ activate1, setActivate1 }}>
      {children}
    </UserContext.Provider>
  );
}