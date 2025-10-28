// import React, { createContext, useState, useContext, ReactNode } from 'react'

// interface AuthState { user: string | null }
// interface AuthContextValue { state: AuthState; login: (name: string)=>void; logout: ()=>void }

// const AuthContext = createContext<AuthContextValue | undefined>(undefined)

// export const AuthProvider = ({ children }: { children: ReactNode }) => {
//   const [state, setState] = useState<AuthState>({ user: null })

//   const login = (name: string) => {
//     setState({ user: name })
//   }
//   const logout = () => setState({ user: null })

//   return <AuthContext.Provider value={{ state, login, logout }}>{children}</AuthContext.Provider>
// }

// export const useAuthContext = () => {
//   const ctx = useContext(AuthContext)
//   if (!ctx) throw new Error('useAuthContext must be used within AuthProvider')
//   return ctx
// }

import React, { createContext, useContext, useState, ReactNode } from "react";

export interface AuthContextValue {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextValue => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};

export { AuthContext };