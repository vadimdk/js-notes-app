import { handleUnArchiveNote } from "../helpers/apiHandlers.js";
import { cutLongString, handleIconToShow } from "../helpers/helperFunc.js";

const archiveModal = document.querySelector(".archive-modal");
const archiveClose = document.getElementById("close-archive-btn");
const openArchiveBtn = document.getElementById("archive-open");

function openArchiveModal() {
  archiveModal.style.display = "block";
}

function closeArchiveModal() {
  archiveModal.style.display = "none";
}

function renderArchive(notes) {
  const archiveTable = document.getElementById("archive-table");
  archiveTable.innerHTML = ""; // Clear existing table content

  const tableDiv = document.createElement("div");
  tableDiv.innerHTML = `
      <div class="table-row head">
      <div class="table-head-wrapper">
        <div id="name-cell" class="t-cell head-cell">Name</div>
        <div class="t-cell head-cell">Created</div>
        <div class="t-cell head-cell ">Category</div>
        <div class="t-cell head-cell">Content</div>
        
        </div>
      </div>
    `;

  notes.forEach((note) => {
    if (!note.archived) {
      return;
    }
    const taskIcon = handleIconToShow(note.category);
    const transContentStr = cutLongString(note.content);
    const transNameStr = cutLongString(note.name);

    const row = document.createElement("div");
    row.classList.add("table-row");
    row.id = note.id;
    row.innerHTML = `
      <div class="t-cell name-col"><span class="task-icon">${taskIcon}</span><span>${transNameStr}</span></div>
      <div class="t-cell ">${note.createdAt.slice(0, 10)}</div>
      <div class="t-cell">${note.category}</div>
      <div class="t-cell">${transContentStr}</div>
  
      <div class="icons-block">
      <span class="restore-icon"><i id="unarchive-btn" class="fi fi-ss-folder-upload" data-key=${
        note.id
      }></i></span>
      </div>
      `;

    tableDiv.appendChild(row);
  });

  archiveTable.appendChild(tableDiv);
}

function unarchiveNote(event) {
 if (event.target.id === "unarchive-btn") {
  console.log('click')
  handleUnArchiveNote(event.target.dataset.key);
}
}

export { openArchiveModal, closeArchiveModal, archiveClose, openArchiveBtn, renderArchive, unarchiveNote };
