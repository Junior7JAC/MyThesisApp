import React from "react";
import { USERS } from "../data/mockData";

const AuthContext = React.createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = React.useState(() => {
    const raw = localStorage.getItem("mythesis_user");
    return raw ? JSON.parse(raw) : null;
  });

  const login = (username, password) => {
    const match =
      (username === USERS.student.username && password === USERS.student.password && USERS.student) ||
      (username === USERS.teacher.username && password === USERS.teacher.password && USERS.teacher);

    if (!match) return { ok: false, error: "Credențiale invalide." };

    setUser(match);
    localStorage.setItem("mythesis_user", JSON.stringify(match));
    return { ok: true, role: match.role };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("mythesis_user");
  };

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return React.useContext(AuthContext);
}
