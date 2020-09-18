console.log("AlibiDialog.js");

import { useCriminals } from './CriminalProvider.js'

const eventHub = document.querySelector(".container");

//F1
eventHub.addEventListener("associatesClicked", event => {
    const targetCriminal = useCriminals().find(criminal => {
        return criminal.id === parseInt(event.detail.chosenCriminal)
    })
    const alibiTarget = document.querySelector(`.alibiDialog--${targetCriminal.id}`);
    const hTarget = document.querySelector("h4");
    if (alibiTarget.contains(hTarget)) {
        alibiTarget.innerHTML = ""
    } else {
        alibiTarget.innerHTML = `${targetCriminal.known_associates.map(associate => {
            return `
            <h4>${associate.name}</h4>
            <div>${associate.alibi}</div>
            `
        }).join("")
            }`
    }
});

//F2
export const AlibiDialog = (id) => {
    return `
    <span class="alibiDialog--${id}"></span>
    `
};