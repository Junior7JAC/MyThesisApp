import Badge from "../atoms/Badge";

export default function TeacherCard({ teacher, topics }) {
  const totalFree = topics.reduce((acc, t) => acc + Math.max(0, t.slotsTotal - t.slotsTaken), 0);

  return (
    <div className="panel">
      <div className="cardTop">
        <div>
          <div style={{ fontWeight: 800 }}>{teacher.name}</div>
          <div className="muted small">{teacher.department}</div>
        </div>
        <Badge tone={totalFree > 0 ? "ok" : "warn"}>{totalFree > 0 ? `${totalFree} locuri` : "Full"}</Badge>
      </div>

      <div className="tags">
        {teacher.tags.map((t) => (
          <span className="tag" key={t}>{t}</span>
        ))}
      </div>

      <div className="muted small">Office hours: {teacher.officeHours}</div>

      <div className="cardActions">
        <a className="btn" href={`/student/teachers/${teacher.id}`}>View topics</a>
        <a className="btn ghost" href={`/student/chat/${teacher.id}`}>Open chat</a>
      </div>
    </div>
  );
}
