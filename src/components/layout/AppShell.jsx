import React from "react";
import { useAuth } from "../../app/auth.jsx";

const MENU = {
  student: [
    { label: "Dashboard", href: "/student" },
    { label: "Profesori", href: "/student/teachers" },
  ],
  teacher: [
    { label: "Dashboard", href: "/teacher" },
    { label: "Temele mele", href: "/teacher/topics" },
    { label: "Aplicări", href: "/teacher/applications" },
  ],
};

export default function AppShell({ role, title, children }) {
  const { user, logout } = useAuth();
  const items = MENU[role];

  return (
    <div className="appShell">
      <aside className="sidebar">
        <div className="brand">MyThesis</div>
        <nav className="nav">
          {items.map((x) => (
            <a key={x.href} className="navItem" href={x.href}>
              {x.label}
            </a>
          ))}
        </nav>
        <div className="sidebarFooter">
          <div className="muted small">{user?.name}</div>
          <button className="btn ghost" onClick={logout}>Logout</button>
        </div>
      </aside>

      <main className="main">
        <header className="topbar">
          <h1>{title}</h1>
        </header>
        <div className="content">{children}</div>
      </main>
    </div>
  );
}
