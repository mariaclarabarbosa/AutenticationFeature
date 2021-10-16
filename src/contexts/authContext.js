import React from 'react';

const initialState = {
  user: null,
  logout: () => null,
};

export const AuthContext = React.createContext(initialState);

export const AuthProvider = ({children}) => {
  const [user, setUser] = React.useState(initialState.user);
  const logout = () => setUser(null);
  return (
    <AuthContext.Provider value={{user, setUser, logout}}>
      {children}
    </AuthContext.Provider>
  );
};
