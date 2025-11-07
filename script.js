/* Default light mode */
body {
  background-color: #e7ecef;
  color: #24292f;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  margin: 0;
  padding: 20px;
}

.btn-group {
  margin-top: 10px;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

button {
  padding: 8px 16px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  background-color: #274c77;
  color: white;
}

button:hover {
  background-color: #6096ba;
}

nav {
  background-color: #6096ba;
  padding: 10px 20px;
  border-radius: 6px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#home,
nav button {
  color: white;
  font-weight: bolder;
  text-decoration: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px 12px;
  border-radius: 4px;
  font-size: 14px;
}

#home:hover,
nav button:hover {
  background-color: #a3cef1;
}

.container {
  max-width: 800px;
  margin: 0 auto;
}

h1 {
  color: #1f2f16;
  text-align: center;
}

.form-label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: black;
}

textarea {
  width: 100%;
  height: 200px;
  padding: 12px;
  border: 1px solid #30363d;
  border-radius: 6px;
  background-color: #a3cef1;
  color: black;
  font-size: 14px;
  resize: vertical;
  box-sizing: border-box;
}

textarea::placeholder {
  color: whitesmoke;
}

.summary {
  margin-top: 20px;
  padding: 15px;
  background-color: #a3cef1;
  border-radius: 6px;
  border-left: 4px solid #58a6ff;
}

.summary h2 {
  margin: 0 0 10px 0;
  color: white;
}

.summary p {
  margin: 5px 0;
  color: black;
}

.preview {
  margin-top: 20px;
  padding: 15px;
  background-color: #a3cef1;
  border: 1px solid #30363d;
  border-radius: 6px;
  min-height: 100px;
  color: black;
}

.preview h2 {
  margin: 0 0 10px 0;
  color: white;
}

/* Feedback Section */
.feedback-section {
  margin-top: 30px;
  padding: 20px;
  background-color: #a3cef1;
  border-radius: 6px;
  border-left: 4px solid #58a6ff;
}

.feedback-section h2 {
  color: white;
  margin: 0 0 15px 0;
}

.feedback-section input,
.feedback-section textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #30363d;
  border-radius: 4px;
  background-color: white;
  color: black;
  box-sizing: border-box;
  font-size: 14px;
}

.feedback-section input::placeholder,
.feedback-section textarea::placeholder {
  color: #999;
}

/* Dark Mode Overrides */
body.dark {
  background-color: #0d1117;
  color: #c9d1d9;
}

body.dark nav {
  background-color: #21262d;
}

body.dark #home,
body.dark nav button {
  color: white;
}

body.dark #home:hover,
body.dark nav button:hover {
  background-color: #a3cef1;
}

body.dark h1 {
  color: #f0f6fc;
}

body.dark .form-label {
  color: #f0f6fc;
}

body.dark textarea {
  background-color: #161b22;
  border-color: #30363d;
  color: #c9d1d9;
}

body.dark textarea::placeholder {
  color: #8b949e;
}

body.dark .summary {
  background-color: #21262d;
  border-left-color: #58a6ff;
}

body.dark .summary h2 {
  color: #f0f6fc;
}

body.dark .summary p {
  color: #8b949e;
}

body.dark .preview {
  background-color: #161b22;
  border-color: #30363d;
  color: #c9d1d9;
}

body.dark .preview h2 {
  color: #f0f6fc;
}

body.dark button {
  background-color: #58a6ff;
}

body.dark button:hover {
  background-color: #a3cef1;
}

/* Dark overrides for feedback */
body.dark .feedback-section {
  background-color: #21262d;
  border-left-color: #58a6ff;
}

body.dark .feedback-section h2 {
  color: #f0f6fc;
}

body.dark .feedback-section input,
body.dark .feedback-section textarea {
  background-color: #161b22;
  border-color: #30363d;
  color: #c9d1d9;
}

body.dark .feedback-section input::placeholder,
body.dark .feedback-section textarea::placeholder {
  color: #8b949e;
}
