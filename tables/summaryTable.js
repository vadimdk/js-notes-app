function renderSummaryTable(notes) {
  const summaryTable = document.getElementById("summary-table");
  // summaryTable.innerHTML = ""; 

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

  const divEl = document.createElement("div");
  divEl.innerHTML = `
  <div class="table-row head">
  <div id="category-cell" class="t-cell head-cell ">Category</div>
  <div class="t-cell head-cell ">Active Notes Count</div>
  <div class="t-cell head-cell flex-container">
  <div>Archived Notes Count</div>
  <i id="archive-open" class="fi fi-rs-folder-open"></i>
  </div>
  </div>
  `;
  
  
  const categories = ["Task", "Random Thought", "Idea", "Qute"];

  categories.forEach((category) => {
    const row = document.createElement("div");
    row.classList.add("table-row");

    row.innerHTML = `
        <div class="t-cell name-col">${category}</div>
        <div class="t-cell summary">${activeNotesCountByCategory[category] || 0}</div>
        <div class="t-cell summary">${archivedNotesCountByCategory[category] || 0}</div>
      `;

      divEl.appendChild(row);
  });

  summaryTable.appendChild(divEl);
}

export { renderSummaryTable };
