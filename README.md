
# 📚 StudySpace — Responsive & Accessible Student Dashboard

StudySpace is a responsive and accessible student productivity dashboard designed to help students organize tasks, plan their study schedules, access useful learning resources, and send messages through a simple contact form.

This project was built as part of a **Responsive & Accessible Interface** task, with a strong focus on mobile responsiveness, keyboard navigation, accessibility, and clean user experience.

---

## 🎯 Project Objective

The main goal of StudySpace is to create a student-focused web interface that:

- Works smoothly on mobile, tablet, and desktop screens
- Is usable starting from a **360px mobile viewport**
- Supports keyboard navigation
- Provides visible focus states
- Uses meaningful labels and accessible controls
- Provides client-side form validation
- Maintains tasks using browser LocalStorage
- Follows semantic HTML and accessibility best practices

---

## ✨ Features

### 🏠 Dashboard
- Clean student-friendly landing page
- Quick navigation to Tasks, Planner, Resources, and Contact
- Study progress section
- Feature overview
- Responsive layout

### ✅ Task Manager
- Add new tasks
- Set due dates
- Select task priority
- Mark tasks as completed
- Undo completed tasks
- Delete tasks
- Automatic task sorting
- Tasks persist using LocalStorage
- Form validation

### 📅 Study Planner
- Weekly study schedule
- Monday–Sunday planning
- Subject-wise study blocks
- Study tips section
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
- Keyboard-friendly form controls

---

## ♿ Accessibility Features

Accessibility is one of the main focuses of this project.

The interface includes:

- Semantic HTML5 elements
- Skip-to-content link
- Proper heading hierarchy
- Meaningful form labels
- Accessible navigation
- Keyboard-accessible buttons and links
- Visible `:focus-visible` indicators
- ARIA labels where required
- `aria-expanded` for the mobile navigation
- `aria-live` status messages
- `aria-invalid` for invalid form fields
- Descriptive link names
- Minimum 48px button/control height
- Responsive layouts
- Reduced-motion support
- No unnecessary horizontal scrolling on small screens

---

## 📱 Responsive Design

StudySpace follows a **mobile-first approach**.

The interface is designed to work across:

- 📱 360px mobile screens
- 📱 Larger smartphones
- 📲 Tablets
- 💻 Laptops
- 🖥️ Desktop screens

Special attention was given to avoiding horizontal scrolling and keeping interactive elements usable on smaller screens.

---

## ⌨️ Keyboard Navigation

The application is designed to be usable without a mouse.

Users can navigate using:

- `Tab` — Move between interactive elements
- `Shift + Tab` — Move backwards
- `Enter` — Activate links and buttons
- `Escape` — Close the mobile navigation menu

All interactive elements have visible focus indicators.

---

## 🛠️ Tech Stack

### Frontend
- HTML5
- CSS3
- JavaScript

### Browser Storage
- LocalStorage

### Tools
- GitHub
- VS Code
- Chrome DevTools
- Lighthouse

No backend or external database is required for this Task 3 interface.

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

> The screenshots and lighthouse evidence will be added after deployment and actual testing.




---

🚀 How to Run

Option 1 — Open Locally

1. Download or clone the repository.


2. Open the project folder.


3. Open index.html in a browser.



Option 2 — Use a Local Development Server

If using VS Code:

1. Install the Live Server extension.


2. Open the StudySpace folder.


3. Right-click index.html.


4. Select Open with Live Server.




---

💾 Task Persistence

The Task Manager uses browser LocalStorage.

This allows tasks to remain available after refreshing the page in the same browser.

Example stored data:

studyspace_tasks

No external database is used because this project focuses on frontend responsiveness and accessibility.


---

🔍 Accessibility Testing

The project is intended to achieve an Accessibility score of 90+ in Google Lighthouse.

Testing will include:

Accessibility

Performance

Best Practices

SEO


Lighthouse Evidence

The actual Lighthouse report will be added after testing the deployed website.

Target Accessibility Score: 90+
Status: Testing after deployment


---

📸 Screenshots

Screenshots demonstrating the responsive interface will be added after deployment.

Planned screenshots:

Mobile — 360px

Mobile — 390px

Tablet

Desktop

Task Manager

Study Planner

Contact Form

Lighthouse Accessibility Report



---

🌐 Deployment

The project can be deployed as a static website because it uses HTML, CSS, and JavaScript.

A public deployment URL will be added here after deployment.

Live Demo: To be added


---

🎓 Task Mapping

Requirement	Implementation

Responsive interface	Mobile-first CSS
360px support	Dedicated small-screen rules
No horizontal scrolling	Responsive containers and layouts
Keyboard navigation	Tab, Enter and Escape support
Visible focus	:focus-visible styles
Accessible forms	Labels, errors and ARIA attributes
Meaningful content structure	Semantic HTML5
Responsive navigation	Mobile hamburger menu
Task functionality	JavaScript + LocalStorage
Accessibility testing	Lighthouse
GitHub repository	StudySpace



---

📌 Future Improvements

Possible future enhancements:

User authentication

Cloud-based task storage

Calendar integration

Study reminders

Dark mode

Subject progress analytics

AI study assistant

Cloud synchronization across devices



---

👩‍💻 Author

Thrisha Reddy

B.Tech CSE — Data Science Student

GitHub: https://github.com/thrisha-reddy880


---

⭐ Project

If you find this project useful, consider giving the repository a ⭐ on GitHub.

StudySpace — Learn. Plan. Focus. Grow.