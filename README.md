# MyThesisApp (Frontend Prototype)

Frontend-only prototype for the **MyThesis Platform** (university project).
Built with **React + Vite**, using **mocked data** and role-based UI.

## Roles (mock login)
- **Student**: `student / student123`
- **Teacher**: `teacher / teacher123`

## Main features (prototype)
### Student
- Browse teachers & available thesis topics
- Filter topics by category (AI, Bioinformatics, Cybersecurity, etc.)
- View topic slots availability
- Mock chat UI with teachers

### Teacher
- View own topics (mock “create topic” form)
- Review applications (pending / accepted)
- Chat available only for accepted students (mock UI)

## Tech
- React
- Vite
- react-router-dom
- No backend (mock data only)

## Run locally
```bash
npm install
npm run dev
