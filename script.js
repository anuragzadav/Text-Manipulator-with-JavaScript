const textInput = document.getElementById("textInput");
const wordCount = document.getElementById("wordCount");
const readTime = document.getElementById("readTime");
const previewText = document.getElementById("previewText");
const themeToggle = document.getElementById("themeToggle");

// Load theme from localStorage
const savedTheme = localStorage.getItem("theme") || "light";
if (savedTheme === "dark") {
  document.body.classList.add("dark");
} else {
  document.body.classList.remove("dark");
}
themeToggle.textContent =
  savedTheme === "light" ? "Enable Dark Mode" : "Disable Dark Mode";

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  themeToggle.textContent = isDark ? "Disable Dark Mode" : "Enable Dark Mode";
});

function updateSummary() {
  const text = textInput.value;
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const chars = text.length;
  const minutes = Math.floor(words / 200) || 0;

  wordCount.textContent = `${words} words and ${chars} characters`;
  readTime.textContent = `${minutes} minutes read`;
  previewText.textContent =
    text || "Enter something in the textbox above to preview it here";
}

textInput.addEventListener("input", updateSummary);

function convertToUpper() {
  textInput.value = textInput.value.toUpperCase();
  updateSummary();
}

function convertToLower() {
  textInput.value = textInput.value.toLowerCase();
  updateSummary();
}

function clearText() {
  textInput.value = "";
  updateSummary();
}

function copyText() {
  navigator.clipboard.writeText(textInput.value).then(() => {
    alert("Text copied to clipboard!");
  });
}

function removeExtraSpaces() {
  textInput.value = textInput.value.replace(/\s+/g, " ").trim();
  updateSummary();
}

// Initial update
updateSummary();

// Cookie helper for feedback email
function setCookie(name, value, days) {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${encodeURIComponent(
    value
  )};expires=${expires.toUTCString()};path=/`;
}

// Simple feedback submission
function submitFeedback(event) {
  event.preventDefault(); // No page reload
  const email = document.getElementById("feedbackEmail").value.trim();
  const feedback = document.getElementById("feedbackText").value.trim();
  let message = "";

  // Email validation
  const emailRegex = /^\S+@\S+\.\S+$/;
  if (!emailRegex.test(email)) {
    message = "Please enter a valid email (e.g., user@example.com).";
    alert(message);
    return false;
  }

  if (!feedback) {
    message = "Feedback cannot be empty.";
    alert(message);
    return false;
  }

  // Success: Store email in cookie for 2 days, alert, clear form
  setCookie("feedbackEmail", email, 2);
  alert("Feedback submitted successfully! Thank you.");
  document.getElementById("feedbackEmail").value = "";
  document.getElementById("feedbackText").value = "";
  return true;
}
