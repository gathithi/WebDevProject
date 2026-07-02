document.addEventListener('DOMContentLoaded', () => {
    // Feature 1: Dark/Light Mode Toggle
    const themeToggleBtn = document.getElementById('theme-toggle');

    // Apply saved theme (or default to light) as soon as the page loads,
    // and make sure the <html> tag actually has the attribute set.
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-bs-theme', savedTheme);

    if (themeToggleBtn) {
        // Sync button text with whatever theme is active on load
        themeToggleBtn.textContent = savedTheme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode';

        themeToggleBtn.addEventListener('click', () => {
            // Get current theme, default to 'light' if null
            const currentTheme = document.documentElement.getAttribute('data-bs-theme') || 'light';
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

            // Apply the new theme to the HTML tag
            document.documentElement.setAttribute('data-bs-theme', newTheme);

            // Remember the choice across page reloads
            localStorage.setItem('theme', newTheme);

            // Update button text
            themeToggleBtn.textContent = newTheme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode';
        });
    }

    // Feature 2: Bootstrap Form Validation
    const forms = document.querySelectorAll('.needs-validation');
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            } else {
                event.preventDefault(); // Prevent actual submission for demo
                alert("Thank you! Your message has been sent to Brewnest Cafe.");
                form.reset();
                form.classList.remove('was-validated');
                return;
            }
            form.classList.add('was-validated');
        }, false);
    });
});