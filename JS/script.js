function show_hide() {
    document.getElementById('sidemenu').classList.toggle('active');
}

// Add an event listener to hide the sidemenu when clicking outside
document.addEventListener('click', function (event) {
    const sidemenu = document.getElementById('sidemenu');
    if (!sidemenu.contains(event.target)) {
        sidemenu.classList.remove('active');
    }
});