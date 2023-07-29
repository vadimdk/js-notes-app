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


export { closeButton, openModal, closeModal, createNoteBtn, closeIcon };
