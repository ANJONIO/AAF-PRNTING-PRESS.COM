works.forEach((w, i) => {
  const li = document.createElement("li");
  li.textContent = `${i + 1}. ${w}`;
  list.appendChild(li);
});
works.forEach((w, i) => {
  const li = document.createElement("li");
  li.innerHTML = `
    ${i + 1}. ${w}<br>
    <button onclick="acceptWork(${i})">✅ Accept</button>
    <button onclick="deleteWork(${i})">❌ Delete</button>
  `;
  list.appendChild(li);
});
function acceptWork(index) {
  let works = JSON.parse(localStorage.getItem("works")) || [];
  alert("Work accepted:\n" + works[index]);
  // Optional: Move to "acceptedWorks" or just mark as done
}

function deleteWork(index) {
  let works = JSON.parse(localStorage.getItem("works")) || [];
  if (confirm("Are you sure you want to delete this work?")) {
    works.splice(index, 1); // remove 1 item at index
    localStorage.setItem("works", JSON.stringify(works));
    location.reload(); // refresh to update list
  }
}
