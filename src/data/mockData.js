export const USERS = {
  student: { username: "student", password: "student123", role: "student", id: "stu-1", name: "Andreea Student" },
  teacher: { username: "teacher", password: "teacher123", role: "teacher", id: "t-1", name: "Prof. Dr. Popescu" },
};

export const CATEGORIES = ["Toate", "AI", "Bioinformatică", "Cybersecurity", "Sisteme Distribuite", "UX/UI"];

export const TEACHERS = [
  {
    id: "t-1",
    name: "Prof. Dr. Popescu",
    department: "Informatica",
    tags: ["AI", "Sisteme Distribuite"],
    officeHours: "Marți 14:00–16:00",
    topics: [
      { id: "top-1", title: "RAG pentru recomandări academice", category: "AI", slotsTotal: 3, slotsTaken: 2, description: "Student portal + RAG + evaluare." },
      { id: "top-2", title: "Pipeline Spark pentru detectarea plagiatului", category: "Sisteme Distribuite", slotsTotal: 2, slotsTaken: 2, description: "Feature extraction + similarity." },
    ],
  },
  {
    id: "t-2",
    name: "Conf. Dr. Ionescu",
    department: "Matematică & Info",
    tags: ["Cybersecurity", "UX/UI"],
    officeHours: "Joi 10:00–12:00",
    topics: [
      { id: "top-3", title: "Threat modeling pentru aplicații web", category: "Cybersecurity", slotsTotal: 4, slotsTaken: 1, description: "STRIDE + mitigări." },
      { id: "top-4", title: "Design system pentru platformă educațională", category: "UX/UI", slotsTotal: 2, slotsTaken: 0, description: "Atomic design + prototyping." },
    ],
  },
];

export const APPLICATIONS = [
  // t-1 (Popescu): 1 pending + 2 accepted
  {
    id: "app-1",
    topicId: "top-1",
    teacherId: "t-1",
    studentId: "stu-1",
    studentName: "Andreea Student",
    status: "pending",
    message: "Aș dori această temă, am experiență cu React și Qdrant.",
  },
  {
    id: "app-3",
    topicId: "top-1",
    teacherId: "t-1",
    studentId: "stu-3",
    studentName: "Ioana Student",
    status: "accepted",
    message: "Am lucrat cu embeddings și evaluare (MRR/NDCG).",
  },
  {
    id: "app-4",
    topicId: "top-2",
    teacherId: "t-1",
    studentId: "stu-4",
    studentName: "Radu Student",
    status: "accepted",
    message: "Am făcut Spark în Colab, pot implementa pipeline + similarity.",
  },

  // t-2 (Ionescu): accepted (poate rămâne)
  {
    id: "app-2",
    topicId: "top-3",
    teacherId: "t-2",
    studentId: "stu-2",
    studentName: "Mihai Student",
    status: "accepted",
    message: "Interesat de securitate + STRIDE.",
  },
];


export const CHATS = {
  "t-1:stu-1": [
    { from: "stu-1", text: "Bună ziua! Mă interesează tema RAG.", at: "2026-01-03 11:20" },
    { from: "t-1", text: "Salut! Spune-mi ce stack vrei să folosești.", at: "2026-01-03 11:22" },
  ],

  "t-1:stu-3": [
    { from: "stu-3", text: "Bună! Pot începe cu dataset + baseline.", at: "2026-01-04 10:10" },
    { from: "t-1", text: "Perfect. Definim metricile și evaluarea.", at: "2026-01-04 10:12" },
  ],

  "t-1:stu-4": [
    { from: "stu-4", text: "Salut! Am făcut Spark și similarity cu MinHash.", at: "2026-01-04 16:05" },
    { from: "t-1", text: "Super. Facem un pipeline cu feature extraction.", at: "2026-01-04 16:07" },
  ],

  "t-2:stu-2": [
    { from: "stu-2", text: "Aș vrea detalii despre cerințe.", at: "2026-01-02 09:10" },
    { from: "t-2", text: "Sigur, începem cu threat model + backlog.", at: "2026-01-02 09:13" },
  ],
};

