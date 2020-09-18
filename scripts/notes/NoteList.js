


console.log("NoteList.js")


import { getNotes, useNotes } from './NoteProvider.js'
import { noteHTML } from './Note.js'
import { useCriminals } from '../criminals/CriminalProvider.js'

const contentTarget = document.querySelector("#noteListContainer")
const eventHub = document.querySelector(".container")

const render = (notes) => {
    const criminals = useCriminals()
    contentTarget.innerHTML = notes.map((noteObj) => {
        return noteHTML(noteObj)
    }).join("")
}

export const NoteList = () => {
    getNotes()
        .then(useNotes)
        .then(render)
}

eventHub.addEventListener("noteStateChanged", () => {
    const newNotes = useNotes()
    render(newNotes)
})