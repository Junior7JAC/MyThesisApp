import { useParams } from "react-router-dom";
import AppShell from "../../components/layout/AppShell";
import { TEACHERS } from "../../data/mockData";
import Badge from "../../components/atoms/Badge";

export default function TeacherDetails() {
  const { id } = useParams();
  const teacher = TEACHERS.find((t) => t.id === id);

  if (!teacher) {
    return (
      <AppShell role="student" title="Teacher not found">
        <div className="muted">Invalid teacher id.</div>
      </AppShell>
    );
  }

  return (
    <AppShell role="student" title={teacher.name}>
      <div className="stack">
        <div className="panel">
          <div className="cardTop">
            <div>
              <div className="muted small">{teacher.department}</div>
              <div className="muted small">Office hours: {teacher.officeHours}</div>
            </div>
            <div className="tags">
              {teacher.tags.map((t) => (
                <span className="tag" key={t}>{t}</span>
              ))}
            </div>
          </div>

          <div className="cardActions">
            <a className="btn ghost" href="/student/teachers">Back</a>
            <a className="btn" href={`/student/chat/${teacher.id}`}>Chat</a>
          </div>
        </div>

        <div className="panel">
          <h2>Teme disponibile</h2>

          <div className="list">
            {teacher.topics.map((top) => {
              const free = Math.max(0, top.slotsTotal - top.slotsTaken);
              const full = free === 0;
              return (
                <div key={top.id} className="rowCard">
                  <div className="rowCardTop">
                    <div>
                      <b>{top.title}</b>
                      <div className="muted small">{top.category}</div>
                    </div>
                    <Badge tone={full ? "warn" : "ok"}>{full ? "full" : `${free} free`}</Badge>
                  </div>

                  <div className="muted">{top.description}</div>

                  <div className="rowActions">
                    <button className="btn ghost" disabled>
                      View details
                    </button>
                    <button className="btn" disabled>
                      Apply 
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </AppShell>
  );
}
