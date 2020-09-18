console.log("OfficerList.js");

import { OfficerHTML } from './Officer.js';
import { getOfficers, useOfficers } from './OfficerProvider.js';

//const eventHub = document.querySelector(".container")

export const OfficerList = () => {
    getOfficers()
        .then(() => {
            const officerArray = useOfficers();
            addOfficersToDOM(officerArray);
        })
};

const addOfficersToDOM = (anOfficerArray) => {
    const domElement = document.querySelector(".officersContainer");
    let HTMLArray = anOfficerArray.map(singleOfficer => {
        return OfficerHTML(singleOfficer);
    })
    domElement.innerHTML = HTMLArray.join("");
};

// eventHub.addEventListener("change", changeEvent => {
//     if (changeEvent.target.id === "officerSelect") {
//         const selectedOfficer = changeEvent.target.value
//         const customEvent = new CustomEvent("officerSelected", {
//             detail: {
//                 officer: selectedOfficer
//             }
//         })
//         eventHub.dispatchEvent(customEvent)
//     }
// });