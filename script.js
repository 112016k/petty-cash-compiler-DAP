<button onclick="toggleDarkMode()" style="
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 10px 15px;
    border-radius: 6px;
    border: none;
    background: #3498db;
    color: white;
    cursor: pointer;
    z-index: 1000;
">Toggle Dark Mode</button>

<script>
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
}

// Load preference on start
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
}
</script>
