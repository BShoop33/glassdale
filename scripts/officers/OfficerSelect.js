console.log("OfficerSelect.js");

import { useOfficers, getOfficers } from "./OfficerProvider.js"

const contentTarget = document.querySelector(".filters__officer");
const eventHub = document.querySelector(".container");

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
});

const render = (officerCollection) => {
    contentTarget.innerHTML = `
        <select class="dropdown" id="officerSelect">
            <option value="0">Please select an officer...</option>
            ${officerCollection.map(
        officerObj => {
            const officer = officerObj.name
            return `<option>${officer}</option>`
        }).join("")
        }
        </select >
    `
};

export const OfficerSelect = () => {
    getOfficers()
        .then(() => {
            const officers = useOfficers()
            render(officers)
        })
};