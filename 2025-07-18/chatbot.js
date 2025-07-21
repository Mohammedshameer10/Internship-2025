const chatBox = document.getElementById("chatBox");
const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");
const logoutBtn = document.getElementById("logoutBtn");

const dataURL = "https://raw.githubusercontent.com/Mohammedshameer10/Internship-2025/main/chatbot-data.json";
let questionsAndAnswers = [];

fetch(dataURL)
  .then((response) => response.json())
  .then((data) => {
    questionsAndAnswers = data.questions;
  })
  .catch((error) => {
    console.error("Failed to load chatbot data:", error);
    showMessage("bot", "❌ Oops! Couldn't load questions right now.");
  });

function showMessage(sender, text) {
  const bubble = document.createElement("div");
  bubble.classList.add("chat-bubble", sender);
  bubble.textContent = text;
  chatBox.appendChild(bubble);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function sendMessage() {
  const userText = userInput.value.trim().toLowerCase(); // ✅ Convert to lowercase
  if (!userText) return;

  showMessage("user", userInput.value.trim()); // Show original user text
  userInput.value = "";

  const match = questionsAndAnswers.find(
    (item) => item.question.toLowerCase() === userText // ✅ Compare in lowercase
  );

  if (match) {
    showMessage("bot", match.answer);
  } else {
    const suggestions = questionsAndAnswers
      .map((item) => `• ${item.question}`)
      .join("\n");
    showMessage("bot", `❌ Sorry, I don't know that.\nTry asking:\n${suggestions}`);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
if (loggedInUser) {
    const userName = loggedInUser.username;
    document.getElementById("welcomeMessage").innerHTML =
      `Hello <strong>${userName}</strong>!<br>What shall we explore today?`;
  }
});

function logout() {
  localStorage.removeItem("loggedInUser");
  alert("You have been logged out!");
  window.location.href = "signin.html";
}

sendBtn.addEventListener("click", sendMessage);
userInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") sendMessage();
});
logoutBtn.addEventListener("click", logout);
