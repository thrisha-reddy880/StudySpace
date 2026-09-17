/* =========================================================
   StudySpace - Task Manager
   Add / Complete / Delete / LocalStorage
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const taskForm = document.querySelector("#task-form");
    const taskTitle = document.querySelector("#task-title");
    const taskDate = document.querySelector("#task-date");
    const taskPriority = document.querySelector("#task-priority");

    const taskList = document.querySelector("#task-list");
    const emptyState = document.querySelector("#empty-state");

    const titleError = document.querySelector("#task-title-error");
    const dateError = document.querySelector("#task-date-error");

    const formStatus = document.querySelector("#task-form-status");


    /* ---------- Load saved tasks ---------- */

    let tasks = loadTasks();


    /* ---------- Display tasks ---------- */

    renderTasks();


    /* =====================================================
       Form Submission
       ===================================================== */

    taskForm.addEventListener("submit", (event) => {

        event.preventDefault();

        clearErrors();

        const title = taskTitle.value.trim();
        const date = taskDate.value;
        const priority = taskPriority.value;

        let isValid = true;


        /* ---------- Title validation ---------- */

        if (title === "") {

            titleError.textContent =
                "Please enter a task title.";

            isValid = false;

        } else if (title.length < 3) {

            titleError.textContent =
                "Task title must contain at least 3 characters.";

            isValid = false;
        }


        /* ---------- Date validation ---------- */

        if (date === "") {

            dateError.textContent =
                "Please select a due date.";

            isValid = false;
        }


        /* ---------- Priority validation ---------- */

        if (priority === "") {

            taskPriority.setAttribute(
                "aria-invalid",
                "true"
            );

            isValid = false;

        } else {

            taskPriority.removeAttribute(
                "aria-invalid"
            );
        }


        if (!isValid) {

            if (title === "") {
                taskTitle.focus();
            } else if (date === "") {
                taskDate.focus();
            } else {
                taskPriority.focus();
            }

            return;
        }


        /* ---------- Create task ---------- */

        const newTask = {
            id: Date.now(),
            title: title,
            date: date,
            priority: priority,
            completed: false
        };


        tasks.push(newTask);

        saveTasks();

        renderTasks();


        /* ---------- Success message ---------- */

        formStatus.textContent =
            "Task added successfully.";


        /* ---------- Reset form ---------- */

        taskForm.reset();

        taskPriority.removeAttribute(
            "aria-invalid"
        );

        taskTitle.focus();


        /* Clear success message */

        setTimeout(() => {
            formStatus.textContent = "";
        }, 3000);

    });


    /* =====================================================
       Task Actions
       ===================================================== */

    taskList.addEventListener("click", (event) => {

        const button = event.target.closest("button");

        if (!button) {
            return;
        }

        const taskId = Number(
            button.dataset.id
        );

        const action = button.dataset.action;


        /* ---------- Complete task ---------- */

        if (action === "complete") {

            tasks = tasks.map((task) => {

                if (task.id === taskId) {

                    return {
                        ...task,
                        completed: !task.completed
                    };

                }

                return task;

            });

            saveTasks();
            renderTasks();
        }


        /* ---------- Delete task ---------- */

        if (action === "delete") {

            const task = tasks.find(
                (item) => item.id === taskId
            );

            if (!task) {
                return;
            }


            const confirmed = window.confirm(
                `Delete "${task.title}"?`
            );


            if (!confirmed) {
                return;
            }


            tasks = tasks.filter(
                (item) => item.id !== taskId
            );

            saveTasks();
            renderTasks();

            formStatus.textContent =
                "Task deleted successfully.";

            setTimeout(() => {
                formStatus.textContent = "";
            }, 3000);
        }

    });


    /* =====================================================
       Render Tasks
       ===================================================== */

    function renderTasks() {

        taskList.innerHTML = "";


        if (tasks.length === 0) {

            emptyState.hidden = false;

            return;
        }


        emptyState.hidden = true;


        /* Sort incomplete tasks first */

        const sortedTasks = [...tasks].sort(
            (a, b) => {

                if (
                    a.completed !==
                    b.completed
                ) {
                    return a.completed ? 1 : -1;
                }

                return new Date(a.date) -
                    new Date(b.date);
            }
        );


        sortedTasks.forEach((task) => {

            const taskItem =
                document.createElement("article");

            taskItem.className = "task-item";


            if (task.completed) {
                taskItem.classList.add("completed");
            }


            /* ---------- Task content ---------- */

            const taskContent =
                document.createElement("div");

            taskContent.className =
                "task-content";


            const title =
                document.createElement("h3");

            title.textContent =
                task.title;


            const details =
                document.createElement("p");

            details.textContent =
                `Due: ${formatDate(task.date)} • Priority: ${task.priority}`;


            taskContent.appendChild(title);
            taskContent.appendChild(details);


            /* ---------- Task actions ---------- */

            const taskActions =
                document.createElement("div");

            taskActions.className =
                "task-actions";


            const completeButton =
                document.createElement("button");

            completeButton.type = "button";

            completeButton.className =
                "icon-btn";

            completeButton.dataset.action =
                "complete";

            completeButton.dataset.id =
                task.id;


            completeButton.textContent =
                task.completed
                    ? "Undo"
                    : "Complete";


            completeButton.setAttribute(
                "aria-label",
                task.completed
                    ? `Mark ${task.title} as incomplete`
                    : `Mark ${task.title} as complete`
            );


            const deleteButton =
                document.createElement("button");

            deleteButton.type = "button";

            deleteButton.className =
                "icon-btn delete-btn";

            deleteButton.dataset.action =
                "delete";

            deleteButton.dataset.id =
                task.id;

            deleteButton.textContent =
                "Delete";

            deleteButton.setAttribute(
                "aria-label",
                `Delete ${task.title}`
            );


            taskActions.appendChild(
                completeButton
            );

            taskActions.appendChild(
                deleteButton
            );


            taskItem.appendChild(
                taskContent
            );

            taskItem.appendChild(
                taskActions
            );


            taskList.appendChild(
                taskItem
            );

        });

    }


    /* =====================================================
       LocalStorage
       ===================================================== */

    function loadTasks() {

        try {

            const savedTasks =
                localStorage.getItem(
                    "studyspace_tasks"
                );


            if (!savedTasks) {
                return [];
            }


            const parsedTasks =
                JSON.parse(savedTasks);


            return Array.isArray(parsedTasks)
                ? parsedTasks
                : [];

        } catch (error) {

            console.error(
                "Could not load tasks:",
                error
            );

            return [];
        }
    }


    function saveTasks() {

        try {

            localStorage.setItem(
                "studyspace_tasks",
                JSON.stringify(tasks)
            );

        } catch (error) {

            console.error(
                "Could not save tasks:",
                error
            );
        }
    }


    /* =====================================================
       Date Formatting
       ===================================================== */

    function formatDate(dateString) {

        const date =
            new Date(
                `${dateString}T00:00:00`
            );


        if (Number.isNaN(date.getTime())) {
            return dateString;
        }


        return date.toLocaleDateString(
            "en-IN",
            {
                day: "2-digit",
                month: "short",
                year: "numeric"
            }
        );
    }


    /* =====================================================
       Clear Validation Errors
       ===================================================== */

    function clearErrors() {

        titleError.textContent = "";
        dateError.textContent = "";

        taskPriority.removeAttribute(
            "aria-invalid"
        );
    }

});