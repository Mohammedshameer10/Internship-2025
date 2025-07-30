document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); 

        const username = document.getElementById("Username").value.trim();
        const email = document.getElementById("Email").value.trim();
        const password = document.getElementById("Password").value;
        const confirmpassword = document.getElementById("confirmPassword").value;

        if (!username || !email || !password) {
            showToast("⚠ Please fill in all fields.", "warning");
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            showToast("⚠ Please enter a valid email address.", "warning");
            return;
        }

        if (password !== confirmpassword) {
            showToast("❌ Passwords don't match.", "danger");
            return;
        }

        const userData = {
            username: username,
            email: email,
            password: password,
        };

        localStorage.setItem("user", JSON.stringify(userData));

        showToast("✅ Signup successful! Redirecting to login...", "success");

        setTimeout(() => {
            window.location.href = "chatbot.html";
        }, 1500);
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
