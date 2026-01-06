import AppShell from "../../components/layout/AppShell";
import Badge from "../../components/atoms/Badge";
import { TEACHERS } from "../../data/mockData";

export default function MyTopics() {
  const teacherId = "t-1";
  const teacher = TEACHERS.find((t) => t.id === teacherId);
  const topics = teacher?.topics ?? [];

  return (
    <AppShell role="teacher" title="Temele mele">
      <div className="stack">
        <div className="panel">
          <h2>Propune o temă </h2>
          <div className="muted">
          </div>

          <div className="formGrid" style={{ marginTop: 12 }}>
            <label className="field">
              <span className="label">Titlu</span>
              <input className="input" disabled placeholder="e.g. Sistem de recomandare..." />
            </label>
            <label className="field">
              <span className="label">Categorie</span>
              <input className="input" disabled placeholder="AI / Bioinformatică / ..." />
            </label>
            <label className="field">
              <span className="label">Locuri</span>
              <input className="input" disabled placeholder="e.g. 3" />
            </label>
            <label className="field" style={{ gridColumn: "1 / -1" }}>
              <span className="label">Descriere</span>
              <input className="input" disabled placeholder="Descriere scurtă..." />
            </label>

            <div style={{ gridColumn: "1 / -1", display: "flex", justifyContent: "flex-end", gap: 10 }}>
              <button className="btn ghost" disabled>Reset</button>
              <button className="btn" disabled>Creare topic</button>
            </div>
          </div>
        </div>

        <div className="panel">
          <h2>Lista temelor</h2>
          <div className="list">
            {topics.map((t) => {
              const free = Math.max(0, t.slotsTotal - t.slotsTaken);
              return (
                <div key={t.id} className="rowCard">
                  <div className="rowCardTop">
                    <div>
                      <b>{t.title}</b>
                      <div className="muted small">{t.category}</div>
                    </div>
                    <Badge tone={free > 0 ? "ok" : "warn"}>{free > 0 ? `${free} liber` : "full"}</Badge>
                  </div>
                  <div className="muted">{t.description}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </AppShell>
  );
}
