import React from "react";
import AppShell from "../../components/layout/AppShell";
import { APPLICATIONS, TEACHERS } from "../../data/mockData";
import Badge from "../../components/atoms/Badge";
import { useAuth } from "../../app/auth.jsx";


export default function Applications() {
  const { user } = useAuth();
  const teacherId = user?.id; // "t-1"

  const myApps = APPLICATIONS.filter((a) => a.teacherId === teacherId);
  const pending = myApps.filter((a) => a.status === "pending");
  const accepted = myApps.filter((a) => a.status === "accepted");


  const topicTitle = (topicId) => {
    for (const t of TEACHERS) {
      const found = t.topics.find((x) => x.id === topicId);
      if (found) return found.title;
    }
    return "Unknown topic";
  };

  return (
    <AppShell role="teacher" title="Aplicări">
      <div className="twoCols">
        <section className="panel">
          <h2>Pending</h2>
          <div className="list">
            {pending.map((a) => (
              <div key={a.id} className="rowCard">
                <div className="rowCardTop">
                  <div>
                    <b>{a.studentName}</b>
                    <div className="muted small">{topicTitle(a.topicId)}</div>
                  </div>
                  <Badge tone="warn">pending</Badge>
                </div>
                <div className="muted">{a.message}</div>

                <div className="rowActions">
                  {/**/}
                  <button className="btn ghost" disabled>Reject</button>
                  <button className="btn" disabled>Accept</button>
                </div>
              </div>
            ))}
            {pending.length === 0 && <div className="muted">Nicio aplicație pending.</div>}
          </div>
        </section>

        <section className="panel">
          <h2>Accepted</h2>
          <div className="list">
            {accepted.map((a) => (
              <div key={a.id} className="rowCard">
                <div className="rowCardTop">
                  <div>
                    <b>{a.studentName}</b>
                    <div className="muted small">{topicTitle(a.topicId)}</div>
                  </div>
                  <Badge tone="ok">accepted</Badge>
                </div>

                <div className="rowActions">
                  <a className="btn" href={`/teacher/chat/${a.studentId}`}>Open chat</a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </AppShell>
  );
}
