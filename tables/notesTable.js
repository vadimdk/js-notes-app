import {renderSummaryTable} from "./summaryTable.js"
import {cutLongString, extractDates, handleIconToShow} from "./../helpers/helperFunc.js"

const fetchData = async () => {
  let data = [];
  try {
    const res = await fetch("http://localhost:4001/notesData");
    const result = await res.json();
    console.log("result", result);
    data = [...result];
    renderNotesTable(data);
    renderSummaryTable(data)
  } catch (error) {
    console.log("error", error);
  }
};

function renderNotesTable(notes) {
  const notesTable = document.getElementById("notes-table");
  notesTable.innerHTML = ""; // Clear existing table content

  const table = document.createElement("div");
  table.innerHTML = `
      <div class="table-row head">
        <div id="name-cell" class="t-cell head-cell">Name</div>
        <div class="t-cell head-cell t-cell_short">Created</div>
        <div class="t-cell head-cell t-cell_short">Category</div>
        <div class="t-cell head-cell">Content</div>
        <div class="t-cell head-cell t-cell_short">Dates</div>
        <div class="icons-block head-icons">
        <span class="archive-icon"><i class="fi fi-rs-folder-download"></i></span>
        <span class="edit-icon" ><i class="fi fi-rs-trash"></i></span>
        </div>
      </div>
    `;

  notes.forEach((note) => {
    if (note.archived) {
      return
    }
    const taskIcon = handleIconToShow(note.category)
    const datesMentioned = extractDates(note.content);
    const transformedStr = cutLongString(note.content)

    const row = document.createElement("div");
    row.classList.add("table-row");
    row.id = note.id
    row.innerHTML = `
      <div class="t-cell name-col"><span>${taskIcon}</span><span>${note.name}</span></div>
      <div class="t-cell t-cell_short">${note.createdAt.slice(0, 10)}</div>
      <div class="t-cell t-cell_short">${note.category}</div>
      <div class="t-cell">${transformedStr}</div>
      <div class="t-cell t-cell_short">${datesMentioned.join(", ")}</div>
      <div class="icons-block">
      <span class="edit-icon" ><i class="fi fi-ss-pencil" data-key=${note.id}></i></span>
      <span class="archive-icon"><i class="fi fi-ss-folder-download" data-key=${note.id}></i></span>
      <span class="del-icon" ><i class="fi fi-ss-trash" data-key=${note.id}></i></span>
      </div>
      `;
      
    table.appendChild(row);
  });

  notesTable.appendChild(table);
}

export { renderNotesTable, fetchData };
