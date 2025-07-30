document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const email = document.getElementById("Email").value.trim();
        const password = document.getElementById("Password").value;

        if (!email || !password) {
            showToast("⚠ Please fill in all fields.", "warning");
            return;
        }

        const storedUser = JSON.parse(localStorage.getItem("user"));

        if (!storedUser) {
            showToast("❌ No account found. Please sign up first.", "danger");
            return;
        }

     if (email === storedUser.email && password === storedUser.password) {
    showToast("✅ Login successful!", "success");
localStorage.setItem("loggedInUser", JSON.stringify(storedUser)); 
    setTimeout(() => {
        window.location.href = "chatbot.html";
    }, 1500);
        } else {
            showToast("❌ Invalid email or password.", "danger");
        }
    });
});

function showToast(message, type = "primary") {
    const toastEl = document.getElementById("liveToast");
    const toastMessage = document.getElementById("toastMessage");

    toastEl.className = `toast align-items-center text-bg-${type} border-0`;
    toastMessage.textContent = message;

    const toast = new bootstrap.Toast(toastEl);
    toast.show();
}
