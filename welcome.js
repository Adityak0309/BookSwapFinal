document.addEventListener("DOMContentLoaded", async function() {
    // Initialize Firebase
    const firebaseConfig = {
        apiKey: "AIzaSyB-4HmbvQ1HQKqDV9tOUPHsC47PbT5wWIo",
        authDomain: "bookswapfinal-3022d.firebaseapp.com",
        projectId: "bookswapfinal-3022d",
        storageBucket: "bookswapfinal-3022d.appspot.com",
        messagingSenderId: "453383890946",
        appId: "1:453383890946:web:2395c5ca11b4298a2bdf1b"
    };

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
    const db = firebase.firestore();

    // Fetch and display books
    async function loadBooks() {
        try {
            const querySnapshot = await db.collection("books").orderBy("timestamp", "desc").get();
            const booksContainer = document.querySelector(".available-books .books-container");
            
            booksContainer.innerHTML = ""; // Clear existing content

            querySnapshot.forEach(doc => {
                const book = doc.data();
                booksContainer.innerHTML += `
                    <div class="book-card">
                        <img src="${book.image || 'placeholder.jpg'}" alt="${book.title}">
                        <h3>${book.title}</h3>
                        <p>by ${book.author}</p>
                        <div class="book-details">
                            <p><strong>Genre:</strong> ${book.genre}</p>
                            <p><strong>Description:</strong> ${book.description}</p>
                        </div>
                    </div>`;
            });
        } catch (error) {
            console.error("Error loading books:", error);
        }
    }

    await loadBooks();
});