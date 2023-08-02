import { checkInput } from "../helpers/helperFunc.js";

const nameField = document.getElementById("name");
const categoryField = document.getElementById("category");
const contentField = document.getElementById("content");

let errorName = false;

let dataObj = {
  name: "",
  category: "Task",
  content: ""
};



const submit = document.querySelector(".btn-submit");
const inputHandler = (e) => {
  dataObj = { ...dataObj, [e.target.name]: e.target.value };
};

nameField.addEventListener("change", inputHandler);
categoryField.addEventListener("change", inputHandler);
contentField.addEventListener("change", inputHandler);

const errorText = document.getElementById("name-input-error");

nameField.addEventListener("blur", (event) => {
  errorName = checkInput(dataObj, "name");
  if (errorName) {
    submit.setAttribute("disabled", "");
    errorText.style.display = "block";
  } else {
    submit.removeAttribute("disabled");
    errorText.style.display = "none";
  }
});

nameField.addEventListener("focus", (event) => {
  submit.removeAttribute("disabled");
  errorText.style.display = "none";
});

const sendData = async (event) => {
  errorName = checkInput(dataObj, "name");
  event.preventDefault();
  if (errorName) {
    errorText.style.display = "block";
    submit.setAttribute("disabled", "");
  } else {
    const timeElapsed = Date.now();
    const currentTime = new Date(timeElapsed);
    let data = {
      ...dataObj,
      archived: false,
      createdAt: currentTime
    };

    try {
      await fetch("http://localhost:4001/notesData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
    } catch (error) {
      console.log("error", error);
    }
  }
};

export {
  nameField,
  categoryField,
  contentField,
  inputHandler,
  submit,
  sendData
};
 

