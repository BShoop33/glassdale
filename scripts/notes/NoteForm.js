console.log("NoteForm.js")

const contentTarget = document.querySelector(".noteFormContainer")

const render = () => {
    contentTarget.innerHTML = `
        <input type="date" id="note-date">
        <input type="text" id="note-text">
        <input type="text" id="note-suspect">
        <button id="saveNote">Save Note</button>
    `
}

