document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.createElement('button');
    toggleButton.textContent = 'Toggle Dark Mode';
    toggleButton.classList.add('fixed', 'bottom-4', 'right-4', 'bg-light-accent', 'dark:bg-dark-accent', 'text-light-background', 'dark:text-dark-background', 'px-4', 'py-2', 'rounded', 'focus:outline-none', 'focus-visible:ring-2', 'focus-visible:ring-offset-2', 'focus-visible:ring-light-primary', 'dark:focus-visible:ring-dark-primary');
    document.body.appendChild(toggleButton);

    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark');
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    document.getElementById('contact-form').addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        window.location.href = `mailto:your-email@example.com?subject=Message from ${name}&body=${encodeURIComponent(message)}%0D%0AFrom: ${email}`;
    });
});