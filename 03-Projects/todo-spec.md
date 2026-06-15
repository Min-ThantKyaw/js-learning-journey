# Interactive ToDoList App — Specification & Architecture

**Version:** 1.0  
**Date:** 2026-05-23

---

## 1. Feature Scope

### 1.1 Core Features

#### Task Management
- **Create** a task with a title (required), optional description, due date, and priority level
- **Read** tasks in a list view, with support for filtering and sorting
- **Update** any field of an existing task inline
- **Delete** a task (soft delete with undo support; hard delete on confirmation)
- **Complete/Uncomplete** a task by toggling its status

#### Organization
- **Lists / Projects** — group tasks into named collections (e.g., Work, Personal)
- **Tags** — attach multiple free-form labels to a task for cross-list filtering
- **Priority Levels** — None, Low, Medium, High (affects sort order and visual indicator)
- **Due Dates** — optional date (and optional time); overdue tasks are visually flagged

#### Filtering & Sorting
- Filter by: status (active / completed / all), priority, tag, due date range, list
- Sort by: due date, priority, creation date, alphabetical title
- Persist last-used filter/sort preference per list

#### Search
- Full-text search across task titles and descriptions
- Results highlight matched terms

#### Bulk Actions
- Select multiple tasks → mark complete, change priority, move to list, delete

### 1.2 Quality-of-Life Features

| Feature | Description |
|---|---|
| Drag-and-drop reorder | Manual ordering within a list |
| Keyboard shortcuts | Full keyboard navigation and action triggers |
| Undo / Redo | Single-level undo for destructive actions (delete, bulk delete) |
| Recurring tasks | Daily / weekly / monthly / custom recurrence rules |
| Subtasks | Nested checklist items under a parent task |
| Notes / Attachments | Rich-text notes and file attachment references per task |
| Notifications / Reminders | In-app and optional browser/OS notifications before due date |
| Dark / Light theme | User-selectable UI theme, persisted in preferences |

### 1.3 Out of Scope (v1.0)
- Multi-user collaboration / shared lists
- Real-time sync across devices (offline-first; sync deferred to v2)
- Calendar view
- Third-party integrations (Google Calendar, Slack, etc.)

---

## 2. Data Design

### 2.1 Entity Overview

```
User
 └── Lists (1:N)
       └── Tasks (1:N)
             ├── Subtasks (1:N, self-referential)
             ├── Tags (M:N via TaskTag)
             └── Attachments (1:N)
```

### 2.2 Entity Definitions

#### `User`
| Field | Type | Constraints | Notes |
|---|---|---|---|
| `id` | UUID | PK | |
| `email` | string | unique, not null | |
| `display_name` | string | not null | |
| `preferences` | JSON | default `{}` | theme, default sort, etc. |
| `created_at` | timestamp | not null | |

#### `List`
| Field | Type | Constraints | Notes |
|---|---|---|---|
| `id` | UUID | PK | |
| `user_id` | UUID | FK → User, not null | |
| `name` | string | not null | |
| `color` | string | nullable | hex color for UI accent |
| `icon` | string | nullable | icon identifier |
| `position` | integer | not null | manual sort order |
| `is_default` | boolean | default `false` | one default list per user |
| `created_at` | timestamp | not null | |
| `updated_at` | timestamp | not null | |

#### `Task`
| Field | Type | Constraints | Notes |
|---|---|---|---|
| `id` | UUID | PK | |
| `list_id` | UUID | FK → List, not null | |
| `parent_task_id` | UUID | FK → Task, nullable | null = top-level task |
| `title` | string | not null, max 500 | |
| `description` | text | nullable | rich text (markdown) |
| `status` | enum | `active` \| `completed` | default `active` |
| `priority` | enum | `none` \| `low` \| `medium` \| `high` | default `none` |
| `due_date` | date | nullable | |
| `due_time` | time | nullable | requires `due_date` |
| `reminder_at` | timestamp | nullable | absolute datetime for notification |
| `recurrence_rule` | string | nullable | iCal RRULE string |
| `position` | integer | not null | manual sort order within list |
| `completed_at` | timestamp | nullable | set when status → completed |
| `deleted_at` | timestamp | nullable | soft delete |
| `created_at` | timestamp | not null | |
| `updated_at` | timestamp | not null | |

#### `Tag`
| Field | Type | Constraints | Notes |
|---|---|---|---|
| `id` | UUID | PK | |
| `user_id` | UUID | FK → User, not null | tags are user-scoped |
| `name` | string | not null, unique per user | |
| `color` | string | nullable | |

#### `TaskTag` (join table)
| Field | Type | Constraints |
|---|---|---|
| `task_id` | UUID | FK → Task |
| `tag_id` | UUID | FK → Tag |
| PK | composite | (`task_id`, `tag_id`) |

#### `Attachment`
| Field | Type | Constraints | Notes |
|---|---|---|---|
| `id` | UUID | PK | |
| `task_id` | UUID | FK → Task, not null | |
| `file_name` | string | not null | |
| `file_url` | string | not null | storage path or URL |
| `mime_type` | string | nullable | |
| `size_bytes` | integer | nullable | |
| `created_at` | timestamp | not null | |

### 2.3 Key Indexes

| Table | Index | Purpose |
|---|---|---|
| `Task` | `(list_id, deleted_at, position)` | Default list view query |
| `Task` | `(list_id, status, due_date)` | Filtered/sorted queries |
| `Task` | `(parent_task_id)` | Subtask lookup |
| `Task` | `(due_date, reminder_at)` | Reminder scheduler scan |
| `Task` | Full-text on `(title, description)` | Search |
| `Tag` | `(user_id, name)` | Tag autocomplete |
| `TaskTag` | `(tag_id)` | Filter tasks by tag |

### 2.4 Client-Side State Shape (Frontend)

```ts
interface AppState {
  lists: List[];
  activListId: string | null;
  tasks: Record<string, Task>;   // keyed by task id
  tags: Tag[];
  ui: {
    filter: FilterState;
    sort: SortState;
    searchQuery: string;
    selectedTaskIds: string[];
    theme: 'light' | 'dark';
  };
}

interface FilterState {
  status: 'all' | 'active' | 'completed';
  priority: Priority | null;
  tagIds: string[];
  dueDateRange: { from: string | null; to: string | null };
}

interface SortState {
  field: 'due_date' | 'priority' | 'created_at' | 'title' | 'position';
  direction: 'asc' | 'desc';
}
```

### 2.5 Recurrence Handling

- Stored as an iCal **RRULE** string on the task (e.g., `FREQ=WEEKLY;BYDAY=MO,WE,FR`)
- On completion of a recurring task, a **new task instance** is generated with the next due date; the completed instance is retained in history
- Recurrence expansion is computed on the client for display; the server stores only the rule

---

*End of document*
