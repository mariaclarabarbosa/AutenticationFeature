import React from 'react';

const initialState = null;

export const AuthContext = React.createContext(initialState);

export const AuthProvider = ({children}) => {
  const [user, setUser] = React.useState(initialState);
  return (
    <AuthContext.Provider value={{user, setUser}}>
      {children}
    </AuthContext.Provider>
  );
};
