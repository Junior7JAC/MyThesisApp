import React from "react";
import AppShell from "../../components/layout/AppShell";
import { CATEGORIES, TEACHERS } from "../../data/mockData";
import FilterChips from "../../components/molecules/FilterChips";
import TeacherCard from "../../components/molecules/TeacherCard";

export default function StudentDashboard() {
  const [category, setCategory] = React.useState("Toate");

  const filtered = TEACHERS.map((t) => {
    const topics = t.topics.filter((x) => category === "Toate" || x.category === category);
    return { ...t, topicsFiltered: topics };
  }).filter((t) => (category === "Toate" ? true : t.topicsFiltered.length > 0));

  return (
    <AppShell role="student" title="Dashboard student">
      <div className="stack">
        <FilterChips options={CATEGORIES} value={category} onChange={setCategory} />

        <div className="grid">
          {filtered.map((t) => (
            <TeacherCard key={t.id} teacher={t} topics={t.topicsFiltered ?? t.topics} />
          ))}
        </div>
      </div>
    </AppShell>
  );
}
