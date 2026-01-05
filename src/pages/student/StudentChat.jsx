import { useParams } from "react-router-dom";
import AppShell from "../../components/layout/AppShell";
import ChatBox from "../../components/molecules/ChatBox";
import { CHATS, TEACHERS, USERS } from "../../data/mockData";

export default function StudentChat() {
  const { teacherId } = useParams();
  const teacher = TEACHERS.find((t) => t.id === teacherId);

  const me = USERS.student; // mock identity
  const key = `${teacherId}:${me.id}`;
  const messages = CHATS[key] || [];

  return (
    <AppShell role="student" title="Chat">
      <ChatBox
        header={teacher ? `Chat with ${teacher.name}` : "Chat"}
        messages={messages}
        meId={me.id}
      />
    </AppShell>
  );
}
