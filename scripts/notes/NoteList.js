console.log("NoteList.js")


import { getNotes, useNotes, deleteNote } from './NoteProvider.js'

import { noteHTML } from './Note.js'
import { getCriminals, useCriminals } from '../criminals/CriminalProvider.js'

const contentTarget = document.querySelector("#noteListContainer")
const eventHub = document.querySelector(".container")

const render = (notes, suspects) => {
    contentTarget.innerHTML = notes.map((noteObj) => {
        noteObj.suspectObj = suspects.find(suspect => {
            return suspect.id === parseInt(noteObj.suspectId)
        })
        return noteHTML(noteObj)
    }).join("")
}

export const NoteList = () => {
    getNotes()
        .then(getCriminals)
        .then(() => {

            const suspects = useCriminals()
            const notes = useNotes()
            render(notes, suspects)

        })
}

eventHub.addEventListener("noteStateChanged", () => {
    const newNotes = useNotes()
    render(newNotes, useCriminals())
})

eventHub.addEventListener("click", event => {
    event.preventDefault()
    if (event.target.id.startsWith("deleteNote--")) {
        const [prefix, id] = event.target.id.split("--")
        deleteNote(id)
    }
})
