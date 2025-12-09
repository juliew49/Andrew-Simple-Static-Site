// Basic JS for navigation toggle and simple contact form validation
document.addEventListener("DOMContentLoaded", () => {
  // Year in footer
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav toggle
  const navToggle = document.getElementById("nav-toggle");
  const mainNav = document.getElementById("main-nav");
  if (navToggle && mainNav) {
    navToggle.addEventListener("click", () => {
      mainNav.classList.toggle("open");
      const expanded = mainNav.classList.contains("open");
      navToggle.setAttribute("aria-expanded", expanded ? "true" : "false");
    });
  }

  // Simple form handling
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");

  if (form && status) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();

      // Basic validation
      if (!name || !email || !message) {
        status.textContent = "Please complete all fields.";
        status.style.color = "#b91c1c";
        return;
      }

      // email simple pattern
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        status.textContent = "Please enter a valid email address.";
        status.style.color = "#b91c1c";
        return;
      }

      // Simulate sending
      status.textContent = "Sending...";
      status.style.color = "#374151";
      setTimeout(() => {
        // For demo we store the message in localStorage (not sent)
        const messages = JSON.parse(localStorage.getItem("andrew_messages") || "[]");
        messages.push({ name, email, message, date: new Date().toISOString() });
        localStorage.setItem("andrew_messages", JSON.stringify(messages));

        status.textContent = "Thanks! Your message has been saved locally.";
        status.style.color = "#065f46";
        form.reset();
      }, 800);
    });
  }
});