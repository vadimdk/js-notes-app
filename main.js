import { renderNotesTable, fetchData } from "./tables/notesTable.js";
import { renderSummaryTable } from "./tables/summaryTable.js";
import {
  closeButton,
  openModal,
  closeModal,
  createNoteBtn,
  closeIcon
} from "./helpers/buttonsHandlers.js";

closeButton.addEventListener("click", closeModal);
closeIcon.addEventListener("click", closeModal);
createNoteBtn.addEventListener("click", openModal);

const nameField = document.getElementById("name");
const categoryField = document.getElementById("category");
const contentField = document.getElementById("content");

let dataObj = {
  name: "",
  category: "",
  content: ""
};
const inputHandler = (e) => {
  dataObj = { ...dataObj, [e.target.name]: e.target.value}
};

nameField.addEventListener("change", inputHandler);
categoryField.addEventListener("change", inputHandler);
contentField.addEventListener("change", inputHandler);

const submit = document.querySelector(".btn-submit");

const sendData = async () => {
  const timeElapsed = Date.now();
  const currentTime = new Date(timeElapsed)
  let data = {
    ...dataObj,
    archived: false,
    createdAt: currentTime
  }
  
  try {
    const post = await fetch("http://localhost:4001/notesData", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    // const result = await post.json()
  } catch (error) {
    console.log('error', error)
  }
}
submit.addEventListener("click", sendData);


let notesData = [
  // {
  //   id: 1,
  //   name: "Shopping list",
  //   createdAt: new Date("2023-07-20"),
  //   category: "Task",
  //   content: "Remember to buy groceries.",
  // },
  // {
  //   id: 2,
  //   name: "Todo list",
  //   createdAt: new Date("2023-07-21"),
  //   category: "Random Thought",
  //   content: "I had a random thought today. ",
  // }
];

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
  renderSummaryTable(notesData);
  bindEventListeners();
}

// Call the main function to initialize the app

const myh1Tag = document.getElementById("notes-table");

// Check the value of isConnected
if (myh1Tag.isConnected) {
  console.log("conected");

  initApp();
}
