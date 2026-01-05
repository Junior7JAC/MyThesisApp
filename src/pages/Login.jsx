import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../app/auth.jsx";
import Input from "../components/atoms/Input";
import Button from "../components/atoms/Button";

export default function Login() {
  const { login } = useAuth();
  const nav = useNavigate();

  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const res = login(username.trim(), password);
    if (!res.ok) return setError(res.error);
    nav(res.role === "student" ? "/student" : "/teacher");
  };

  return (
    <div className="authPage">
      <div className="authCard">
        <h1>MyThesis Platform</h1>
        <p className="muted">Login mock (fără backend)</p>

        <form onSubmit={onSubmit} className="stack">
          <Input label="Username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="student / teacher" />
          <Input label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="student123 / teacher123" />

          {error && <div className="error">{error}</div>}

          <Button type="submit">Login</Button>

          <div className="hint">
            <div><b>Student:</b> student / student123</div>
            <div><b>Profesor:</b> teacher / teacher123</div>
          </div>
        </form>
      </div>
    </div>
  );
}
