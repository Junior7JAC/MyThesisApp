import AppShell from "../../components/layout/AppShell";
import Badge from "../../components/atoms/Badge";
import Button from "../../components/atoms/Button";
import { APPLICATIONS, TEACHERS } from "../../data/mockData";

export default function TeacherDashboard() {
  const teacherId = "t-1";
  const teacher = TEACHERS.find((t) => t.id === teacherId);

  const topicById = Object.fromEntries(
    (teacher?.topics ?? []).map((t) => [t.id, t])
  );

  const myTopics = teacher?.topics ?? [];
  const myApps = APPLICATIONS.filter((a) => a.teacherId === teacherId);

  const pendingApps = myApps.filter((a) => a.status === "pending");
  const acceptedApps = myApps.filter((a) => a.status === "accepted");

  const freeSlotsByTopic = myTopics.map((t) => ({
    ...t,
    free: Math.max(0, t.slotsTotal - t.slotsTaken),
  }));

  const totalFree = freeSlotsByTopic.reduce((acc, t) => acc + t.free, 0);

  const pendingPreview = pendingApps.slice(0, 3);
  const acceptedPreview = acceptedApps.slice(0, 4);

  return (
    <AppShell role="teacher" title="Dashboard profesor">
      <div className="stack">
        {/* Overview row */}
        <div className="grid2">
          <div className="panel">
            <div className="cardTop">
              <div>
                <div className="muted small">Teme active</div>
                <div style={{ fontSize: 30, fontWeight: 900 }}>{myTopics.length}</div>
              </div>
              <Badge tone="ok">teme</Badge>
            </div>

            <div className="muted" style={{ marginTop: 10 }}>
              Sloturi (free / total) pe teme:
            </div>

            <div style={{ marginTop: 10 }} className="miniList">
              {freeSlotsByTopic.slice(0, 3).map((t) => (
                <div key={t.id} className="miniRow">
                  <div style={{ minWidth: 0 }}>
                    <div className="miniTitle">{t.title}</div>
                    <div className="muted tiny">{t.category}</div>
                  </div>
                  <Badge tone={t.free > 0 ? "ok" : "warn"}>
                    {t.free} / {t.slotsTotal}
                  </Badge>
                </div>
              ))}
              {myTopics.length > 3 && (
                <div className="muted tiny">+ {myTopics.length - 3} teme</div>
              )}
            </div>

            <div className="cardActions">
              <a className="btn" href="/teacher/topics">Vezi temele</a>
            </div>
          </div>

          <div className="panel">
            <div className="cardTop">
              <div>
                <div className="muted small">Aplicări</div>
                <div style={{ fontSize: 30, fontWeight: 900 }}>{myApps.length}</div>
              </div>
              <div className="row">
                <Badge tone="warn">{pendingApps.length} pending</Badge>
                <Badge tone="ok">{acceptedApps.length} acceptate</Badge>
              </div>
            </div>

            <div className="muted" style={{ marginTop: 10 }}>
              Ultimele în așteptare:
            </div>

            <div style={{ marginTop: 10 }} className="miniList">
              {pendingPreview.length === 0 ? (
                <div className="muted">Nu ai aplicări în așteptare.</div>
              ) : (
                pendingPreview.map((a) => {
                  const topic = topicById[a.topicId];
                  return (
                    <div key={a.id} className="miniRow">
                      <div style={{ minWidth: 0 }}>
                        <div className="miniTitle">{a.studentName}</div>
                        <div className="muted tiny">
                          {topic?.title ?? a.topicId} • {topic?.category ?? "—"}
                        </div>
                      </div>
                      <Badge tone="warn">pending</Badge>
                    </div>
                  );
                })
              )}
            </div>

            <div className="cardActions">
              <a className="btn" href="/teacher/applications">Deschide aplicările</a>
            </div>
          </div>
        </div>

        {/* Accepted students (not only 0 + random badges) */}
        <div className="panel">
          <div className="cardTop">
            <div>
              <h2 style={{ margin: 0 }}>Studenți acceptați</h2>
              <div className="muted small">
                {acceptedApps.length === 0
                  ? "Nu ai încă studenți acceptați. Acceptă unul din „Aplicări”."
                  : "Preview list (chat disponibil pentru acceptați)."}
              </div>
            </div>
            <Badge tone="ok">{acceptedApps.length} acceptați</Badge>
          </div>

          <div style={{ marginTop: 12 }} className="miniTable">
            <div className="miniHead">
              <div>Student</div>
              <div>Temă</div>
              <div>Status</div>
              <div style={{ textAlign: "right" }}>Acțiune</div>
            </div>

            {acceptedPreview.length === 0 ? (
              <div className="muted" style={{ padding: "10px 0" }}>
                Sugestie: acceptă studentul din aplicări ca să apară aici.
              </div>
            ) : (
              acceptedPreview.map((a) => {
                const topic = topicById[a.topicId];
                return (
                  <div key={a.id} className="miniLine">
                    <div className="miniTitle">{a.studentName}</div>
                    <div className="muted small">{topic?.title ?? a.topicId}</div>
                    <div><Badge tone="ok">accepted</Badge></div>
                    <div style={{ textAlign: "right" }}>
                      <a className="btn ghost" href={`/teacher/chat/${a.studentId}`}>Chat</a>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {acceptedApps.length > acceptedPreview.length && (
            <div className="muted tiny" style={{ marginTop: 10 }}>
              + {acceptedApps.length - acceptedPreview.length} studenți
            </div>
          )}
        </div>

        {/* Slots summary */}
        <div className="panel">
          <div className="cardTop">
            <div>
              <h2 style={{ margin: 0 }}>Locuri libere</h2>
              <div className="muted small">Total locuri libere: <b>{totalFree}</b></div>
            </div>
            <Badge tone={totalFree > 0 ? "ok" : "warn"}>
              {totalFree > 0 ? "available" : "full"}
            </Badge>
          </div>

          <div style={{ marginTop: 12 }} className="miniList">
            {freeSlotsByTopic.map((t) => (
              <div key={t.id} className="miniRow">
                <div style={{ minWidth: 0 }}>
                  <div className="miniTitle">{t.title}</div>
                  <div className="muted tiny">{t.category}</div>
                </div>
                <Badge tone={t.free > 0 ? "ok" : "warn"}>
                  {t.free} free
                </Badge>
              </div>
            ))}
          </div>

          <div className="cardActions">
            <Button variant="ghost" disabled>
              Export raport
            </Button>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
