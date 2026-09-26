const loginScreen = document.getElementById("loginScreen");
const toolsScreen = document.getElementById("toolsScreen");
const pwField = document.getElementById("pw");
const toggle = document.getElementById("toggle");

toggle.addEventListener("click", function () {
  if (pwField.type === "password") {
    pwField.type = "text";
    toggle.textContent = "🙈";
  } else {
    pwField.type = "password";
    toggle.textContent = "👁️";
  }
});

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  loginScreen.classList.add("hidden");
  toolsScreen.classList.remove("hidden");
  renderTools("2025");
});

const tools = [
  { category: "General AI Assistant", "2025": "ChatGPT", "2026": "Kimi K3" },
  { category: "Documents", "2025": "Word", "2026": "WPS AI" },
  { category: "Data Analysis", "2025": "Julius AI", "2026": "ChatExcel" },
  { category: "Presentations", "2025": "Gamma", "2026": "Kimi Slides" },
  { category: "Knowledge", "2025": "NotebookLM", "2026": "Notion AI" },
  { category: "Coding", "2025": "Cursor", "2026": "Codex" },
  { category: "Image", "2025": "Canva", "2026": "PixPix" },
  { category: "Video", "2025": "Runway", "2026": "Seedance" }
];

const toolList = document.getElementById("toolList");

function renderTools(year) {
  toolList.innerHTML = "";
  tools.forEach(function (t) {
    const div = document.createElement("div");
    div.className = "tool-row";
    div.innerHTML = `
      <div>
        <div class="label">${t.category}</div>
        <div class="name">${t[year]}</div>
      </div>
      <span>➔</span>
    `;
    toolList.appendChild(div);
  });
}

const chipRow = document.getElementById("chipRow");
chipRow.querySelectorAll(".chip").forEach(function (chip) {
  chip.addEventListener("click", function () {
    chipRow.querySelectorAll(".chip").forEach(function (c) { c.classList.remove("active"); });
    chip.classList.add("active");
    renderTools(chip.dataset.year);
  });
});
