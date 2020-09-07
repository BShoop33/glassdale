import { useOfficers, getOfficers } from "./OfficerProvider.js"

//creates a variable named eventHub and attaches it to the "container" class in the main portion of index.html
const eventHub = document.querySelector(".container")

//creates a variable named contentTarget and attaches it to the "filters_crime" class in index.html
const contentTarget = document.querySelector(".filters__officer")
///////////////////////////////////////////////////////////////////
eventHub.addEventListener("change", changeEvent => {
    if (changeEvent.target.id === "officerSelect") {
        const selectedOfficer = changeEvent.target.value
        const customEvent = new CustomEvent("officerSelected", {
            detail: {
                officer: selectedOfficer
            }
        })
        eventHub.dispatchEvent(customEvent)
    }
})
///////////////////////////////////////////////////////////////////
const render = (officerCollection) => {
    contentTarget.innerHTML = `
        <select class="dropdown" id="officerSelect">
            <option value="0">Please select an officer...</option>
            ${
        officerCollection.map(
            officerObj => {
                const officer = officerObj.name
                return `<option>${officer}</option>`
            })
        }
        </select >
    `
}

//exports and renders the copy of the array containing the crime names that were brought over in the useConvictions function from the ConvictionsProvider.js sheet
export const OfficerSelect = () => {
    getOfficers()
        .then(() => {
            const police = useOfficers()
            render(police)
        })
}