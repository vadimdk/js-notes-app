import { editNote } from "../formHandlers/updateNote.js";
import { handleArchiveNote, handleDeleteNote, handleUnArchiveNote } from "./apiHandlers.js";

const modal = document.querySelector(".modal");
const closeButton = document.querySelector(".modal-close");
const closeIcon = document.getElementById("close-icon");
const createNoteBtn = document.getElementById("btn-create");

const openModal = () => {
  modal.style.display = "block";
};

const closeModal = () => {
  modal.style.display = "none";
};


closeButton.addEventListener("click", closeModal);

function updateNotes(event) {
  if (event.target.classList.contains("fi-ss-pencil")) {
    editNote(event);
  } else if (event.target.classList.contains("fi-ss-trash")) {
    handleDeleteNote(event.target.dataset.key);
  } else if (event.target.classList.contains("fi-ss-folder-download")) {
    handleArchiveNote(event.target.dataset.key);
  }
}

export {
  closeButton,
  openModal,
  closeModal,
  createNoteBtn,
  closeIcon,
  updateNotes,
};
