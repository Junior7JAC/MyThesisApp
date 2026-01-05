import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./auth.jsx";

import Login from "../pages/Login";
import StudentDashboard from "../pages/student/StudentDashboard.jsx";
import TeachersList from "../pages/student/TeacherList.jsx";
import TeacherDetails from "../pages/student/TeacherDetails.jsx";
import StudentChat from "../pages/student/StudentChat.jsx";

import TeacherDashboard from "../pages/teacher/TeacherDashboard.jsx";
import MyTopics from "../pages/teacher/MyTopics.jsx";
import Applications from "../pages/teacher/Applications.jsx";
import TeacherChat from "../pages/teacher/TeacherChat.jsx";

function RequireAuth({ children }) {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" replace />;
  return children;
}

function RequireRole({ role, children }) {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" replace />;
  if (user.role !== role) return <Navigate to={user.role === "student" ? "/student" : "/teacher"} replace />;
  return children;
}

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route
        path="/student"
        element={
          <RequireRole role="student">
            <StudentDashboard />
          </RequireRole>
        }
      />
      <Route
        path="/student/teachers"
        element={
          <RequireRole role="student">
            <TeachersList />
          </RequireRole>
        }
      />
      <Route
        path="/student/teachers/:id"
        element={
          <RequireRole role="student">
            <TeacherDetails />
          </RequireRole>
        }
      />
      <Route
        path="/student/chat/:teacherId"
        element={
          <RequireRole role="student">
            <StudentChat />
          </RequireRole>
        }
      />

      <Route
        path="/teacher"
        element={
          <RequireRole role="teacher">
            <TeacherDashboard />
          </RequireRole>
        }
      />
      <Route
        path="/teacher/topics"
        element={
          <RequireRole role="teacher">
            <MyTopics />
          </RequireRole>
        }
      />
      <Route
        path="/teacher/applications"
        element={
          <RequireRole role="teacher">
            <Applications />
          </RequireRole>
        }
      />
      <Route
        path="/teacher/chat/:studentId"
        element={
          <RequireRole role="teacher">
            <TeacherChat />
          </RequireRole>
        }
      />

      <Route path="/" element={<RootRedirect />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

function RootRedirect() {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" replace />;
  return <Navigate to={user.role === "student" ? "/student" : "/teacher"} replace />;
}
