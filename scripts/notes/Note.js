console.log("Note.js")

const eventHub = document.querySelector(".container")

export const noteHTML = (noteObj) => {
    return `
        <section class="note">
            <br>
            <div class="note--timestamp"><strong>Date:</strong>  ${new Date(noteObj.date).toLocaleDateString('en-US')}</div>
            <div class="note--title"><strong>Suspect:</strong> ${noteObj.suspectObj.name}</div>
            <div class="note--content"><strong>Note:</strong> ${noteObj.noteText}</div>
            <button id="deleteNote--${noteObj.id}">Delete</button>
            <br>
       </section>
    `
};