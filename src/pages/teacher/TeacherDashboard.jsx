import AppShell from "../../components/layout/AppShell";
import { APPLICATIONS, TEACHERS } from "../../data/mockData";
import Badge from "../../components/atoms/Badge";

export default function TeacherDashboard() {
  // mock teacher is t-1 (same ca login)
  const teacherId = "t-1";
  const teacher = TEACHERS.find((t) => t.id === teacherId);

  const myTopics = teacher?.topics ?? [];
  const pending = APPLICATIONS.filter((a) => a.teacherId === teacherId && a.status === "pending").length;
  const accepted = APPLICATIONS.filter((a) => a.teacherId === teacherId && a.status === "accepted").length;

  const freeSlots = myTopics.reduce((acc, t) => acc + Math.max(0, t.slotsTotal - t.slotsTaken), 0);

  return (
    <AppShell role="teacher" title="Dashboard profesor">
      <div className="grid2">
        <div className="panel">
          <div className="metric">
            <div className="muted small">Teme active</div>
            <div className="big">{myTopics.length}</div>
          </div>
        </div>

        <div className="panel">
          <div className="metric">
            <div className="muted small">Locuri libere total</div>
            <div className="big">{freeSlots}</div>
          </div>
        </div>

        <div className="panel">
          <div className="metric">
            <div className="muted small">Aplicații pending</div>
            <div className="big">{pending}</div>
          </div>
          <div style={{ marginTop: 10 }}>
            <a className="btn" href="/teacher/applications">Open applications</a>
          </div>
        </div>

        <div className="panel">
          <div className="metric">
            <div className="muted small">Studenți acceptați</div>
            <div className="big">{accepted}</div>
          </div>
          <div className="row" style={{ marginTop: 10 }}>
            <Badge tone="ok">accepted</Badge>
            <Badge tone="warn">pending</Badge>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
