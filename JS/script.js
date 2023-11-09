
function show_hide() {
    document.getElementById('sidemenu').classList.toggle('active');
}


document.getElementById("search-icon").addEventListener("click", function() {
    document.getElementById("search-overlay").style.display = "block";
});

document.getElementById("search-overlay").addEventListener("click", function(e) {
    if (e.target.id === "search-overlay") {
        document.getElementById("search-overlay").style.display = "none";
    }
});