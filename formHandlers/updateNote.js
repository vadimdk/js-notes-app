const modalUpdate = document.querySelector(".update-modal");
const content = document.getElementById("edit-content");
const name = document.getElementById("edit-name");
const categorySelect = document.getElementById("edit-category");
const createdField = document.getElementById("edit-created");
const closeEditBtn = document.getElementById("edit-btn-cancel");

const openUpdateModal = () => {
  modalUpdate.style.display = "block";
};

const closeEditModal = () => {
    modalUpdate.style.display = "none";
  };

closeEditBtn.addEventListener("click", closeEditModal);

let noteId = null;

let updateNotesObj = {
  name: "",
  content: "",
  createdAt: "",
  category: "",
  archived: false
};

const inputUpdateHandler = (e) => {
  updateNotesObj = { ...updateNotesObj, [e.target.name]: e.target.value };
};

name.addEventListener("change", inputUpdateHandler);
categorySelect.addEventListener("change", inputUpdateHandler);
content.addEventListener("change", inputUpdateHandler);

const submitUpdateBtn = document.querySelector(".btn-update");

const updateNote = async () => {
  try {
    await fetch(`http://localhost:4001/notesData/${noteId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updateNotesObj)
    });
  } catch (error) {
    console.log("error", error);
  }
};

submitUpdateBtn.addEventListener("click", updateNote);

function editNote(e) {
  const { dataset } = e.target;
  const notesArr = dataset.fields.split("^");

  noteId = dataset.key;
  updateNotesObj.name = notesArr[0];
  updateNotesObj.content = notesArr[3];
  updateNotesObj.createdAt = notesArr[1];
  updateNotesObj.category = notesArr[2];

  openUpdateModal();
  name.value = updateNotesObj.name;
  content.value = updateNotesObj.content;
  createdField.value = updateNotesObj.createdAt;
  categorySelect.value = updateNotesObj.category;
}

export { editNote, closeEditModal };
