# QURTUBIKS LMS Dashboard

A modern Learning Management System (LMS) dashboard built with React, Vite, Tailwind CSS, and Zustand.

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

### Windows: If `npm install` fails with EPERM

The error often comes from a locked or symlinked folder under `node_modules` (e.g. `resolve`). Try in order:

1. **Clean reinstall**
   - Close Cursor/VS Code and any terminal using this folder.
   - Open **Command Prompt** or **PowerShell as Administrator** (right‑click → Run as administrator).
   - Go to the project folder:
     ```bash
     cd "C:\Users\gniru\Temp MP"
     ```
   - Remove install artifacts and reinstall:
     ```bash
     rmdir /s /q node_modules
     del package-lock.json
     npm install
     ```
   - If `rmdir` fails with "access denied", restart the PC and run the same commands again, or move the project to a folder **without spaces** (e.g. `C:\Users\gniru\TempMP`) and run `npm install` there.

2. **Install without optional deps** (can avoid some symlinks):
   ```bash
   npm install --no-optional
   ```

3. **Use npx to clean** (from a normal terminal, after closing the IDE):
   ```bash
   npx rimraf node_modules package-lock.json
   npm install
   ``` Sign in with any email/password and choose **Student**, **Instructor**, or **Admin** in "Login as (demo)" to test role-based access. **Learners** page is only available to Admin and Instructor.

## Features

- **Login** – VEDRA-style sign-in with role selection (Admin / Instructor / Student)
- **Dashboard** – Stats cards (Meetings today, Pending tasks, Done tasks) linking to Calendar and My Tasks; My Tasks list; Today’s schedule
- **My Tasks** – Filter (All / Pending / Done), Start Task, Mark as Done with real-time state
- **Courses** – Card grid; click a course → Course Details with tabs (Overview, Modules, Assignments, Recorded Sessions)
- **Learners** – Table with search (Admin & Instructor only)
- **Calendar** – FullCalendar with month/week/day views; live classes, recordings, assignment deadlines; click event → modal with Join / View Recording
- **Plans** – Free, Pro, Enterprise with feature comparison and Upgrade CTA
- **News** – Announcement feed with timestamp and category tags
- **Activity Templates** – Quiz, Assignment, Live Class, AI-Generated Test; click → creation modal (mock)
- **Dark/Light mode** – Toggle in top bar (persisted)
- **Collapsible sidebar** – Icons and labels; responsive layout

## Tech Stack

- React 18 + Vite
- Tailwind CSS (dark mode via `class`)
- React Router v6
- Zustand (auth, theme, tasks state; persist for theme/role)
- FullCalendar (dayGrid, timeGrid, interaction)
- Recharts (available for future charts)

## Project Structure

```
src/
  components/   Layout, Sidebar, TopBar, ThemeToggle, ProtectedRoute
  data/        mockData.js (meetings, tasks, courses, learners, news, plans, templates)
  pages/       Login, Dashboard, MyTasks, Courses, CourseDetails, Learners, Calendar, Plans, News, ActivityTemplates
  store/       useStore.js (auth, theme, sidebar, tasks)
```
