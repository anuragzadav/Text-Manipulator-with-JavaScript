const textInput = document.getElementById("textInput");
const wordCount = document.getElementById("wordCount");
const readTime = document.getElementById("readTime");
const previewText = document.getElementById("previewText");
const themeToggle = document.getElementById("themeToggle");

// Load theme from localStorage
const savedTheme = localStorage.getItem("theme") || "dark";
document.body.classList.toggle("light", savedTheme === "light");
themeToggle.textContent =
  savedTheme === "dark" ? "Disable Dark Mode" : "Enable Dark Mode";

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  const isLight = document.body.classList.contains("light");
  localStorage.setItem("theme", isLight ? "light" : "dark");
  themeToggle.textContent = isLight ? "Enable Dark Mode" : "Disable Dark Mode";
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
