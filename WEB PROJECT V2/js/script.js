// Retrieve the necessary DOM elements
const themeSwitch = document.getElementById('themeSwitch');
const content = document.getElementById('content');

// Check if a preferred theme is already set (using localStorage)
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.body.classList.add(currentTheme);
}

// Add an event listener to the theme switch button
themeSwitch.addEventListener('click', () => {
    // Toggle the 'dark' class on the body element
    document.body.classList.toggle('dark');

    // Save the current theme preference in localStorage
    const theme = document.body.classList.contains('dark') ? 'dark' : '';
    localStorage.setItem('theme', theme);
});
