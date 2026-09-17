/* =========================================================
   StudySpace - Contact Form
   Accessible Client-Side Validation
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const contactForm =
        document.querySelector("#contact-form");

    if (!contactForm) {
        return;
    }


    const nameInput =
        document.querySelector("#name");

    const emailInput =
        document.querySelector("#email");

    const subjectInput =
        document.querySelector("#subject");

    const messageInput =
        document.querySelector("#message");


    const nameError =
        document.querySelector("#name-error");

    const emailError =
        document.querySelector("#email-error");

    const subjectError =
        document.querySelector("#subject-error");

    const messageError =
        document.querySelector("#message-error");

    const contactStatus =
        document.querySelector("#contact-status");


    /* =====================================================
       Submit Form
       ===================================================== */

    contactForm.addEventListener("submit", (event) => {

        event.preventDefault();

        clearErrors();

        let isValid = true;


        /* ---------- Name validation ---------- */

        const name =
            nameInput.value.trim();

        if (name === "") {

            showError(
                nameInput,
                nameError,
                "Please enter your name."
            );

            isValid = false;

        } else if (name.length < 2) {

            showError(
                nameInput,
                nameError,
                "Name must contain at least 2 characters."
            );

            isValid = false;
        }


        /* ---------- Email validation ---------- */

        const email =
            emailInput.value.trim();

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (email === "") {

            showError(
                emailInput,
                emailError,
                "Please enter your email address."
            );

            isValid = false;

        } else if (!emailPattern.test(email)) {

            showError(
                emailInput,
                emailError,
                "Please enter a valid email address."
            );

            isValid = false;
        }


        /* ---------- Subject validation ---------- */

        if (subjectInput.value === "") {

            showError(
                subjectInput,
                subjectError,
                "Please select a subject."
            );

            isValid = false;
        }


        /* ---------- Message validation ---------- */

        const message =
            messageInput.value.trim();


        if (message === "") {

            showError(
                messageInput,
                messageError,
                "Please enter your message."
            );

            isValid = false;

        } else if (message.length < 10) {

            showError(
                messageInput,
                messageError,
                "Message must contain at least 10 characters."
            );

            isValid = false;
        }


        /* ---------- Focus first invalid field ---------- */

        if (!isValid) {

            const firstInvalid =
                contactForm.querySelector(
                    '[aria-invalid="true"]'
                );

            if (firstInvalid) {
                firstInvalid.focus();
            }

            return;
        }


        /* =================================================
           Successful submission
           ================================================= */

        contactStatus.textContent =
            "Thank you! Your message has been submitted successfully.";

        contactStatus.setAttribute(
            "role",
            "status"
        );


        contactForm.reset();


        /*
           Keep focus accessible after submission.
           The heading receives focus so keyboard users
           know that the form action completed.
        */

        contactStatus.setAttribute(
            "tabindex",
            "-1"
        );

        contactStatus.focus();


        /* Clear success message after a few seconds */

        setTimeout(() => {

            contactStatus.textContent = "";

            contactStatus.removeAttribute(
                "tabindex"
            );

        }, 5000);

    });


    /* =====================================================
       Clear errors while user corrects fields
       ===================================================== */

    nameInput.addEventListener("input", () => {
        clearFieldError(nameInput, nameError);
    });


    emailInput.addEventListener("input", () => {
        clearFieldError(emailInput, emailError);
    });


    subjectInput.addEventListener("change", () => {
        clearFieldError(
            subjectInput,
            subjectError
        );
    });


    messageInput.addEventListener("input", () => {
        clearFieldError(
            messageInput,
            messageError
        );
    });


    /* =====================================================
       Helper Functions
       ===================================================== */

    function showError(
        input,
        errorElement,
        message
    ) {

        errorElement.textContent = message;

        input.setAttribute(
            "aria-invalid",
            "true"
        );
    }


    function clearFieldError(
        input,
        errorElement
    ) {

        errorElement.textContent = "";

        input.removeAttribute(
            "aria-invalid"
        );
    }


    function clearErrors() {

        clearFieldError(
            nameInput,
            nameError
        );

        clearFieldError(
            emailInput,
            emailError
        );

        clearFieldError(
            subjectInput,
            subjectError
        );

        clearFieldError(
            messageInput,
            messageError
        );

        contactStatus.textContent = "";
    }

});