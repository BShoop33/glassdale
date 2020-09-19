console.log("NoteForm.js");

import { getCriminals, useCriminals } from '../criminals/CriminalProvider.js'
import { saveNote } from './NoteProvider.js'

const eventHub = document.querySelector(".container");
const contentTarget = document.querySelector("#noteFormContainer");

//H1
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {
        const noteContent = document.querySelector("#noteForm--text")
        const noteCriminal = document.querySelector("#noteForm--criminal")

        if (noteCriminal.value !== "0") {
            const newNote = {
                noteText: noteContent.value,
                suspect: noteCriminal.value,
                date: Date.now()
            }

            saveNote(newNote);

        } else {
            window.alert("Choose a Suspect");
        }
    }
});

//H2
const render = (criminalArray) => {
    contentTarget.innerHTML = `
        <textarea id="noteForm--text" placeholder="Put a note here"></textarea>
        <select class="dropdown" id="noteForm--criminal">
            <option value="0">Please select a criminal...</option>
            ${criminalArray.map(criminalObject => {
        return `<option value="${criminalObject.name}">${criminalObject.name}</option>`
    }).join("")
        }
        </select >
        <button id="saveNote">Save Note</button>
    `
};

//H3
export const NoteForm = () => {
    getCriminals()
        .then(() => {
            render(useCriminals())
        })
};