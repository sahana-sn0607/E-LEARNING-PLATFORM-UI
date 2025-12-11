const courses = [
  { id:1, title: "Modern HTML & CSS", progress: 45 },
  { id:2, title: "JavaScript ES2025", progress: 65 },
  { id:3, title: "React + Tailwind", progress: 30 },
  { id:4, title: "Node.js & Express", progress: 55 },
  { id:5, title: "Python Automation", progress: 70 }
];

const courseList = document.getElementById("courseList");
const pages = document.querySelectorAll(".page");

// Render cards
courses.forEach(c => {
  const card = document.createElement("div");
  card.className = "course-card";

  card.innerHTML = `
    <div class="progress-circle" style="background: conic-gradient(#4f46e5 ${c.progress}%, #ddd 0%);">
      ${c.progress}%
    </div>
    <h3>${c.title}</h3>
    <button>View Details</button>
  `;

  courseList.appendChild(card);
});

// Navigation
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const pageId = link.getAttribute("data-page");

    pages.forEach(p => p.classList.remove("active"));
    document.getElementById(pageId).classList.add("active");
  });
});

// Dark mode
document.getElementById("darkToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    document.getElementById("darkToggle").textContent = "Light Mode";
  } else {
    document.getElementById("darkToggle").textContent = "Dark Mode";
  }
});

