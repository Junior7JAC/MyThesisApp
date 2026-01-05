import { useParams } from "react-router-dom";
import AppShell from "../../components/layout/AppShell";
import ChatBox from "../../components/molecules/ChatBox";
import { CHATS } from "../../data/mockData";

export default function TeacherChat() {
  const { studentId } = useParams();
  const teacherId = "t-1"; // mock logged-in teacher

  const key = `${teacherId}:${studentId}`;
  const messages = CHATS[key] || [];

  return (
    <AppShell role="teacher" title="Chat">
      <ChatBox
        header={`Chat with student ${studentId}`}
        messages={messages}
        meId={teacherId}
      />
    </AppShell>
  );
}
