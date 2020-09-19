console.log("OfficerSelect.js");

import { useOfficers, getOfficers } from "./OfficerProvider.js"


const eventHub = document.querySelector(".container");

eventHub.addEventListener("change", changeEvent => {
    if (changeEvent.target.id === "officerSelect") {
        const customEvent = new CustomEvent("officerSelected", {
            detail: {
                officerThatWasChosen: event.target.value
            }

        })
        eventHub.dispatchEvent(customEvent)
    }
});

const contentTarget = document.querySelector(".filters__officer");

export const OfficerSelect = () => {
    getOfficers()
        .then(() => {
            const officers = useOfficers()
            render(officers)
        })
};

const render = (officerCollection) => {
    contentTarget.innerHTML = `
        <select class="dropdown" id="officerSelect">
            <option value="0">Please select an officer...</option>
            ${officerCollection.map(officerObj => {
        const officer = officerObj.name
        return `<option>${officer}</option>`
    }).join("")
        }
        </select >
    `
};
