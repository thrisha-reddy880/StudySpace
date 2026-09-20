# 📚 StudySpace — Responsive & Accessible Student Dashboard

StudySpace is a responsive and accessible student productivity dashboard designed to help students organize tasks, plan study schedules, access useful learning resources, and submit messages through a simple contact form.

The project was built as part of a **Responsive & Accessible Interface** task, with a strong focus on mobile responsiveness, keyboard navigation, accessibility, semantic HTML, and clean user experience.

---

## 🎯 Project Objective

The main goal of StudySpace is to create a student-focused web interface that:

- Works across mobile, tablet, and desktop screens
- Supports a 360px mobile viewport
- Avoids unnecessary horizontal scrolling
- Supports keyboard navigation
- Provides visible keyboard focus indicators
- Uses meaningful labels and accessible controls
- Provides accessible form validation
- Maintains tasks using browser LocalStorage
- Follows semantic HTML5 and accessibility best practices

---

## ✨ Features

### 🏠 Home

- Clean student-focused landing page
- Quick navigation to Tasks, Planner, Resources, and Contact
- Feature overview
- Responsive layout
- Clear calls to action

### ✅ Task Manager

- Add new tasks
- Set due dates
- Select task priority
- Mark tasks as completed
- Undo completed tasks
- Delete tasks
- Automatic task sorting
- Form validation
- Tasks persist using LocalStorage

### 📅 Study Planner

- Weekly study schedule
- Monday–Sunday planning
- Subject-wise study blocks
- Study planning tips
- Responsive schedule layout

### 📖 Learning Resources

Useful learning resources including:

- GeeksforGeeks
- MDN Web Docs
- PostgreSQL Documentation
- W3C Web Accessibility Initiative
- Python Documentation
- GitHub Skills

### 📩 Contact Form

- Full name validation
- Email validation
- Subject selection
- Message validation
- Accessible error messages
- Success notification
- Keyboard-friendly controls

---

## ♿ Accessibility

Accessibility was a major focus of StudySpace.

The interface includes:

- Semantic HTML5 elements
- Skip-to-content link
- Proper heading hierarchy
- Meaningful form labels
- Accessible navigation
- Keyboard-accessible links and buttons
- Visible `:focus-visible` indicators
- ARIA labels where required
- `aria-expanded` for mobile navigation
- `aria-live` status messages
- `aria-invalid` for invalid form fields
- Descriptive link names
- Responsive layouts
- Reduced-motion support
- Mobile-friendly controls
- No unnecessary horizontal scrolling on small screens

---

## ⌨️ Keyboard Navigation

StudySpace is designed to support keyboard-based navigation.

Users can use:

- `Tab` — Move forward between interactive elements
- `Shift + Tab` — Move backward
- `Enter` — Activate links and buttons
- `Escape` — Close the mobile navigation menu

Interactive elements include visible focus indicators to make keyboard navigation easier to follow.

---

## 📱 Responsive Design

StudySpace follows a responsive, mobile-first approach.

The interface was designed to work across:

- 📱 360px mobile screens
- 📱 Larger smartphones
- 📲 Tablets
- 💻 Laptops
- 🖥️ Desktop screens

The layout adapts navigation, cards, forms, and the weekly planner to smaller screen sizes.

The weekly planner changes from a multi-column layout on larger screens to a stacked layout on smaller screens to avoid horizontal scrolling.

---

## 🧪 Lighthouse Testing

The deployed StudySpace website was tested using **Google PageSpeed Insights / Lighthouse** with mobile emulation.

### Lighthouse Results

| Category | Score |
|---|---:|
| ⚡ Performance | **100/100** |
| ♿ Accessibility | **100/100** |
| 🔒 Best Practices | **100/100** |
| 🔎 SEO | **100/100** |

### Mobile Performance Metrics

| Metric | Result |
|---|---:|
| First Contentful Paint | **0.8 s** |
| Largest Contentful Paint | **0.8 s** |
| Total Blocking Time | **0 ms** |
| Cumulative Layout Shift | **0** |
| Speed Index | **2.1 s** |

The Lighthouse report was generated for the deployed website using mobile device emulation.

---

## 📸 Responsive Testing

Mobile screenshots were captured from the deployed website to verify the responsive interface.

Tested pages include:

- Home
- Tasks
- Planner
- Resources

The screenshots demonstrate that the interface adapts to a mobile viewport without unnecessary horizontal scrolling.

---

## 🛠️ Tech Stack

### Frontend

- HTML5
- CSS3
- JavaScript

### Browser Storage

- LocalStorage

### Development & Testing Tools

- GitHub
- VS Code
- Chrome
- Chrome DevTools
- Google PageSpeed Insights
- Lighthouse

No backend or external database is required for this frontend-focused interface.

---

## 📂 Project Structure

```text
StudySpace/
│
├── index.html
├── tasks.html
├── planner.html
├── resources.html
├── contact.html
│
├── css/
│   └── style.css
│
├── js/
│   ├── main.js
│   ├── tasks.js
│   └── contact.js
│
├── assets/
│   └── images/
│
├── screenshots/
│
└── lighthouse/
    └── accessibility-report.html
```

> The `screenshots` and `lighthouse` folders can contain the final evidence files used for project documentation.

---

## 💾 Task Persistence

The Task Manager uses browser **LocalStorage**.

Tasks remain available after refreshing the page in the same browser.

The application stores task data using the LocalStorage key:

```text
studyspace_tasks
```

No external database is used because this project focuses on frontend responsiveness, usability, and accessibility.

---

## 🚀 How to Run

### Option 1 — Open Locally

1. Clone or download the repository.
2. Open the project folder.
3. Open `index.html` in a browser.

### Option 2 — Use a Local Development Server

Using VS Code:

1. Open the StudySpace folder.
2. Install the Live Server extension if required.
3. Right-click `index.html`.
4. Select **Open with Live Server**.

---

## 🌐 Live Demo

**StudySpace Live Website:**

https://studyspace-4qt8.onrender.com

---

## 💻 GitHub Repository

https://github.com/thrisha-reddy880/StudySpace

---

## 🎓 Task Requirement Mapping

| Requirement | Implementation |
|---|---|
| Responsive interface | Responsive CSS layouts |
| 360px mobile support | Small-screen responsive rules |
| No horizontal scrolling | Responsive containers and stacked layouts |
| Keyboard navigation | Tab, Shift + Tab, Enter and Escape support |
| Visible focus | `:focus-visible` styles |
| Accessible forms | Labels, validation messages and ARIA attributes |
| Meaningful content structure | Semantic HTML5 |
| Responsive navigation | Mobile navigation menu |
| Task functionality | JavaScript + LocalStorage |
| Mobile-friendly planner | Responsive weekly schedule |
| Accessible controls | ARIA labels and descriptive names |
| Lighthouse testing | Google Lighthouse / PageSpeed Insights |
| Public deployment | Render |
| Source code | GitHub |

---

## 🔮 Future Improvements

Possible future enhancements include:

- User authentication
- Cloud-based task storage
- Calendar integration
- Study reminders
- Dark mode
- Subject progress analytics
- AI study assistant
- Cloud synchronization across devices

---

## 👩‍💻 Author

**Thrisha Reddy**

B.Tech CSE — Data Science Student

GitHub:  
https://github.com/thrisha-reddy880

---

## ⭐ Project

If you find StudySpace useful, consider giving the repository a ⭐ on GitHub.

**StudySpace — Learn. Plan. Focus. Grow.**
