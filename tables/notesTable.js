function extractDates(content) {
  const dateRegex = /\d{1,2}\/\d{1,2}\/\d{4}/g;
  return content.match(dateRegex) || [];
}

const fetchData = async () => {
  let data = [];
  try {
    const res = await fetch("http://localhost:4001/notesData");
    const result = await res.json();
    console.log("result", result);
    data = [...result];
    renderNotesTable(data);
  } catch (error) {
    console.log("error", error);
  }
};

function renderNotesTable(notes) {
  const notesTable = document.getElementById("notes-table");
  notesTable.innerHTML = ""; // Clear existing table content

  const table = document.createElement("div");
  table.innerHTML = `
      <div class="table-row">
        <div class="th">Name</div>
        <div class="th">Created</div>
        <div class="th">Category</div>
        <div class="th">Content</div>
        <div class="th">Dates</div>
      </div>
    `;

  notes.forEach((note) => {
    const datesMentioned = extractDates(note.content);

    const row = document.createElement("div");
    row.classList.add("table-row");
    row.innerHTML = `
      <div class="th">${note.name}</div>
       <div class="th">${note.createdAt.slice(0, 10)}</div>
      <div class="th">${note.content}</div>
      <div class="th">${note.category}</div>
      <div class="th">${datesMentioned.join(", ")}</div>
      <div class="icons-block">
      <span>!</span>
      <span>A</span>
      <span>D</span>
      </div>
      
      `;
      
    // <div class="th">${note.createdAt.toDateString()}</div>
    table.appendChild(row);
  });

  notesTable.appendChild(table);
}

export { renderNotesTable, fetchData };