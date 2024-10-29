import React, { createContext, useContext, useState,useEffect } from "react";

export const AuthContext = createContext();
export default function AuthProvider({ children }) {
  const initialAuthUser = localStorage.getItem("Users");
  const [authUser, setAuthUser] = useState(
    initialAuthUser ? JSON.parse(initialAuthUser) : undefined
  );
  const changeLoginLogout = (user = null) => {
    setAuthUser(user);
    localStorage.setItem("Users", user ? JSON.stringify(user) : null);
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("Users");
    setAuthUser(storedUser ? JSON.parse(storedUser) : null);
  }, []);

  return (
    <AuthContext.Provider value={[authUser, setAuthUser, changeLoginLogout]}>
      {children}
    </AuthContext.Provider>
  );
}
export const useAuth = () => useContext(AuthContext);
