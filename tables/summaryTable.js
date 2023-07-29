function renderSummaryTable(notes) {
    const summaryTable = document.getElementById("summary-table");
    summaryTable.innerHTML = ""; // Clear existing table content
  
    const activeNotesCountByCategory = notes.reduce((acc, note) => {
      if (!note.archived) {
        acc[note.category] = (acc[note.category] || 0) + 1;
      }
      return acc;
    }, {});
  
    const archivedNotesCountByCategory = notes.reduce((acc, note) => {
      if (note.archived) {
        acc[note.category] = (acc[note.category] || 0) + 1;
      }
      return acc;
    }, {});
  
    const table = document.createElement("table");
    table.innerHTML = `
      <tr>
        <th>Category</th>
        <th>Active Notes Count</th>
        <th>Archived Notes Count</th>
      </tr>
    `;
  
    const categories = ["Task", "Random Thought", "Idea"];
  
    categories.forEach((category) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${category}</td>
        <td>${activeNotesCountByCategory[category] || 0}</td>
        <td>${archivedNotesCountByCategory[category] || 0}</td>
      `;
  
      table.appendChild(row);
    });
  
    summaryTable.appendChild(table);
  }

  export {renderSummaryTable}