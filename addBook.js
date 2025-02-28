// Handle genre selection
function selectGenre(button) {
    document.querySelectorAll(".genre-btn").forEach(btn => btn.classList.remove("selected"));
    button.classList.add("selected");
    document.getElementById("selectedGenre").value = button.textContent;
}

// Handle form submission
document.getElementById("addBookForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission for now

    // Collect form data
    let bookName = document.getElementById("bookName").value;
    let genre = document.getElementById("selectedGenre").value;
    let authorName = document.getElementById("authorName").value;
    let description = document.getElementById("description").value;

    if (!genre) {
        alert("Please select a genre.");
        return;
    }

    alert(`📖 Book Added Successfully!\n\nBook Name: ${bookName}\nGenre: ${genre}\nAuthor: ${authorName}\nDescription: ${description}`);
    
    // Redirect to welcome page
    window.location.href = "welcome.html";
});

// Back to Welcome Page
function goBack() {
    window.location.href = "welcome.html";
}