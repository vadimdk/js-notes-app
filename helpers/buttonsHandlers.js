import { handleArchiveNote, handleDeleteNote } from "./apiHandlers.js";

const modal = document.querySelector(".modal");
const closeButton = document.querySelector(".modal-close");
const closeIcon = document.getElementById("close-icon")
const createNoteBtn = document.getElementById("btn-create");

const openModal = () => {
  modal.style.display = "block";
};

const closeModal = () => {
  modal.style.display = "none";
};

closeButton.addEventListener("click", closeModal);

function updateNotes(event) {
  console.log('event', event.target)
  if (event.target.classList.contains("fi-ss-pencil")) {
    console.log('event.target.dataset.key', event.target.dataset.key)
  } else if (event.target.classList.contains("fi-ss-trash")) {
    handleDeleteNote(event.target.dataset.key);
  } else if (event.target.classList.contains("fi-ss-folder-download")) {
    handleArchiveNote(event.target.dataset.key)
  } else if (event.target.classList.contains("unarchive-btn")) {
    // Handle unarchive button click
  }
}


export { closeButton, openModal, closeModal, createNoteBtn, closeIcon, updateNotes };
