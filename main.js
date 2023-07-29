import { renderNotesTable, fetchData } from "./tables/notesTable.js";
import { renderSummaryTable } from "./tables/summaryTable.js";
import {
  closeButton,
  openModal,
  closeModal,
  createNoteBtn,
  closeIcon
} from "./helpers/buttonsHandlers.js";

import { nameField, categoryField, contentField, inputHandler, submit, sendData} from "./formHandlers/createNote.js"

closeButton.addEventListener("click", closeModal);
closeIcon.addEventListener("click", closeModal);
createNoteBtn.addEventListener("click", openModal);

nameField.addEventListener("change", inputHandler);
categoryField.addEventListener("change", inputHandler);
contentField.addEventListener("change", inputHandler);


submit.addEventListener("click", sendData);

// Event listener for archiving a note
function archiveNoteHandler(event) {
  const noteId = event.target.dataset.noteId;
  const noteIndex = notesData.findIndex((note) => note.id === parseInt(noteId));

  if (noteIndex !== -1) {
    notesData[noteIndex].archived = true;
    renderNotesTable(notesData);
    renderSummaryTable(notesData);
  }
}

// Event listener for unarchiving a note
function unarchiveNoteHandler(event) {
  const noteId = event.target.dataset.noteId;
  const noteIndex = notesData.findIndex((note) => note.id === parseInt(noteId));

  if (noteIndex !== -1) {
    notesData[noteIndex].archived = false;
    renderNotesTable(notesData);
    renderSummaryTable(notesData);
  }
}

// Function to bind event listeners to archive/unarchive buttons
function bindEventListeners() {
  const archiveButtons = document.querySelectorAll(".archive-button");
  const unarchiveButtons = document.querySelectorAll(".unarchive-button");

  archiveButtons.forEach((button) => {
    button.addEventListener("click", archiveNoteHandler);
  });

  unarchiveButtons.forEach((button) => {
    button.addEventListener("click", unarchiveNoteHandler);
  });
}

function initApp() {
  fetchData();
  // renderSummaryTable(notesData);
  bindEventListeners();
}

// Call the main function to initialize the app

const myh1Tag = document.getElementById("notes-table");

// Check the value of isConnected
if (myh1Tag.isConnected) {
  console.log("conected");

  initApp();
}
