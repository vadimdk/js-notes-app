import { fetchData } from "./tables/notesTable.js";

import {
  closeButton,
  openModal,
  closeModal,
  createNoteBtn,
  closeIcon,
  updateNotes
} from "./helpers/buttonsHandlers.js";

import {
  nameField,
  categoryField,
  contentField,
  inputHandler,
  submit,
  sendData
} from "./formHandlers/createNote.js";

//open,close create note modal

closeButton.addEventListener("click", closeModal);
closeIcon.addEventListener("click", closeModal);
createNoteBtn.addEventListener("click", openModal);

//input change handlers
nameField.addEventListener("change", inputHandler);
categoryField.addEventListener("change", inputHandler);
contentField.addEventListener("change", inputHandler);

//submit form
submit.addEventListener("click", sendData);

function initApp() {
  fetchData();
}

const tableDiv = document.getElementById("notes-table");

// Check the value of isConnected
if (tableDiv.isConnected) {
  initApp();
}

// Event listeners for various actions ( edit, remove, archive, unarchive)
tableDiv.addEventListener("click", (event) => updateNotes(event));
