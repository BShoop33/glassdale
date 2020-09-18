console.log("Note.js")

const eventHub = document.querySelector(".container")

export const noteHTML = (noteObj) => {
    return `
        <section class="note">
            <div class="note--timestamp">Date:  ${new Date(noteObj.date).toLocaleDateString('en-US')}</div>
            <div class="note--title">Suspect: ${noteObj.suspect}</div>
            <div class="note--content">Note: ${noteObj.noteText}</div>
       </section>
    `
};