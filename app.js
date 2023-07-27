
function renderNotesTable(notes) {
    const notesTable = document.getElementById("notes-table");
    notesTable.innerHTML = ""; // Clear existing table content
  
    const table = document.createElement("table");
    table.innerHTML = `
      <tr>
        <th>Time of Creation</th>
        <th>Note Content</th>
        <th>Note Category</th>
        <th>Dates Mentioned</th>
      </tr>
    `;
  
    notes.forEach((note) => {
      const datesMentioned = extractDates(note.content);
  
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${note.createdAt.toDateString()}</td>
        <td>${note.content}</td>
        <td>${note.category}</td>
        <td>${datesMentioned.join(", ")}</td>
      `;
  
      table.appendChild(row);
    });
  
    notesTable.appendChild(table);
  }


