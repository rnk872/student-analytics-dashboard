const students = [];

for (let i = 1; i <= 120; i++) {
  students.push({
    name: "Student " + i,
    class: i % 2 === 0 ? "11" : "12",
    marks: Math.floor(60 + Math.random() * 40)
  });
}

const cardsContainer = document.getElementById("cards");
const searchInput = document.getElementById("search");

function render(data) {
  cardsContainer.innerHTML = "";
  data.forEach(s => {
    cardsContainer.innerHTML += `
      <div class="card">
        <h3>${s.name}</h3>
        <p>Class: ${s.class}</p>
        <p>Marks: ${s.marks}</p>
      </div>
    `;
  });
}

searchInput.addEventListener("input", () => {
  const value = searchInput.value.toLowerCase();
  const filtered = students.filter(s =>
    s.name.toLowerCase().includes(value)
  );
  render(filtered);
});

// Analytics
document.getElementById("total").innerHTML =
  "<h3>Total</h3><h2>" + students.length + "</h2>";

document.getElementById("class11").innerHTML =
  "<h3>Class 11</h3><h2>" + students.filter(s => s.class === "11").length + "</h2>";

document.getElementById("class12").innerHTML =
  "<h3>Class 12</h3><h2>" + students.filter(s => s.class === "12").length + "</h2>";

document.getElementById("topper").innerHTML =
  "<h3>Top Marks</h3><h2>" + Math.max(...students.map(s => s.marks)) + "</h2>";

render(students);
