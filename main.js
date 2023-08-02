import { fetchData, renderNotesTable } from "./tables/notesTable.js";
import {renderSummaryTable} from "./tables/summaryTable.js"

import {
  closeButton,
  openModal,
  closeModal,
  createNoteBtn,
  closeIcon,
  updateNotes
} from "./helpers/buttonsHandlers.js";

import { submit, sendData } from "./formHandlers/createNote.js";
import {
  closeArchiveModal,
  openArchiveModal,
  archiveClose,
  renderArchive,
  unarchiveNote
} from "./formHandlers/unArchiveNoteModal.js";


//open,close create note modal

closeButton.addEventListener("click", closeModal);
closeIcon.addEventListener("click", closeModal);
createNoteBtn.addEventListener("click", openModal);

//submit form
submit.addEventListener("click", sendData);

async function initApp() {
  const notes = await fetchData();
  renderNotesTable(notes);
  renderSummaryTable(notes);
  renderArchive(notes)
}

const tableDiv = document.getElementById("notes-table");
const summaryTable = document.getElementById("summary-table");
summaryTable.addEventListener("click", (event) => {
  if (event.target.id === "archive-open") {
    openArchiveModal();
  }
});
archiveClose.addEventListener("click", closeArchiveModal);

// Event listeners for various actions ( edit, remove, archive, unarchive)
tableDiv.addEventListener("click", (event) => updateNotes(event));
const archiveTable = document.getElementById("archive-table");
archiveTable.addEventListener("click", (event) => unarchiveNote(event));


document.addEventListener("DOMContentLoaded", (event) => {
  initApp();
});
