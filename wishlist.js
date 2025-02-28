
document.addEventListener("DOMContentLoaded", function() {
    const removeButtons = document.querySelectorAll(".remove-btn");

    removeButtons.forEach(button => {
        button.addEventListener("click", function() {
            this.parentElement.remove();
        });
    });
});
