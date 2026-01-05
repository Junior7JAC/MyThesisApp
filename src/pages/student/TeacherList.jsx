import AppShell from "../../components/layout/AppShell";
import { TEACHERS } from "../../data/mockData";
import TeacherCard from "../../components/molecules/TeacherCard";

export default function TeachersList() {
  return (
    <AppShell role="student" title="Profesori">
      <div className="grid">
        {TEACHERS.map((t) => (
          <TeacherCard key={t.id} teacher={t} topics={t.topics} />
        ))}
      </div>
    </AppShell>
  );
}
