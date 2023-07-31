const nameField = document.getElementById("name");
const categoryField = document.getElementById("category");
const contentField = document.getElementById("content");

let dataObj = {
  name: "",
  category: "Task",
  content: ""
};

const inputHandler = (e) => {
  dataObj = { ...dataObj, [e.target.name]: e.target.value}
};

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
     await fetch("http://localhost:4001/notesData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  } catch (error) {
    console.log('error', error)
  }
}

export { nameField, categoryField, contentField, inputHandler, submit, sendData}