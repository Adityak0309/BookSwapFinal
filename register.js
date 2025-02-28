// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyB-4HmbvQ1HQKqDV9tOUPHsC47PbT5wWIo",
    authDomain: "bookswapfinal-3022d.firebaseapp.com",
    projectId: "bookswapfinal-3022d",
    storageBucket: "bookswapfinal-3022d.appspot.com",
    messagingSenderId: "453383890946",
    appId: "1:453383890946:web:2395c5ca11b4298a2bdf1b"
};

const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Flip functions
function flip() {
    document.querySelector('.flip-card-inner').style.transform = "rotateY(180deg)";
}

function flipAgain() {
    document.querySelector('.flip-card-inner').style.transform = "rotateY(0deg)";
}

// Password visibility toggle
document.getElementById("eye-login").onclick = function() {
    togglePasswordVisibility('password-login', 'eye-login');
};

document.getElementById("eye-signup").onclick = function() {
    togglePasswordVisibility('password-signup', 'eye-signup');
};

function togglePasswordVisibility(passwordId, eyeId) {
    const password = document.getElementById(passwordId);
    const eye = document.getElementById(eyeId);
    
    if (password.type === "password") {
        password.type = "text";
        eye.className = "fa fa-eye";
        eye.style.color = "cyan";
    } else {
        password.type = "password";
        eye.className = "fa fa-eye-slash";
        eye.style.color = "white";
    }
}

// Login form handler
document.querySelector('.box-login form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email-login').value;
    const password = document.getElementById('password-login').value;
    const rememberMe = document.getElementById('checkbox').checked;

    const persistence = rememberMe ? 
        firebase.auth.Auth.Persistence.LOCAL : 
        firebase.auth.Auth.Persistence.SESSION;

    auth.setPersistence(persistence)
        .then(() => auth.signInWithEmailAndPassword(email, password))
        .then(() => {
            window.location.href = "welcome.html";
        })
        .catch((error) => {
            if (error.code === 'auth/invalid-credential') {
                alert('Invalid email or password.');
            } else {
                alert(error.message);
            }
        });
});

// Signup form handler
document.querySelector('.box-signup form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email-signup').value;
    const password = document.getElementById('password-signup').value;
    const username = document.getElementById('username').value;
    const rememberMe = document.getElementById('checkbox1').checked;

    const persistence = rememberMe ? 
        firebase.auth.Auth.Persistence.LOCAL : 
        firebase.auth.Auth.Persistence.SESSION;

    auth.setPersistence(persistence)
        .then(() => auth.createUserWithEmailAndPassword(email, password))
        .then((userCredential) => {
            return userCredential.user.updateProfile({
                displayName: username
            });
        })
        .then(() => {
            alert('Signup successful! Please login.');
            flipAgain();
        })
        .catch((error) => alert(error.message));
});