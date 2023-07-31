async function handleDeleteNote(id) {
  try {
    await fetch(`http://localhost:4001/notesData/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch (error) {
    console.log("error", error);
  }
}



async function handleArchiveNote(id) {
  console.log("id", id);
  try {
    await fetch(`http://localhost:4001/notesData/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        archived: true
      })
    });
  } catch (error) {
    console.log("error", error);
  }
}

export { handleDeleteNote, handleArchiveNote };
