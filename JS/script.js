
function show_hide() {
    document.getElementById('sidemenu').classList.toggle('active');
}


document.getElementById("search_function").addEventListener("click", function() {
    document.getElementById("search_background").style.display = "block";
});

document.getElementById("search_background").addEventListener("click", function(e) {
    if (e.target.id === "search_background") {
        document.getElementById("search_background").style.display = "none";
    }
});

document.getElementById("search_mobile").addEventListener("click", function() {
    document.getElementById("search_background").style.display = "block";
    document.getElementById('sidemenu').classList.remove('active');
});


