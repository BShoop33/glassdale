// import { OfficerHTML } from './Officer.js';
// import { getOfficers, useOfficers } from './OfficerProvider.js';

// export const OfficerList = () => {
//     getOfficers()
//         .then(() => {
//             const officerArray = useOfficers();
//             addOfficersToDOM(officerArray);
//         })
// }

// const addOfficersToDOM = (anOfficerArray) => {
//     const domElement = document.querySelector(".officersContainer");

//     let HTMLArray = anOfficerArray.map(singleOfficer => {
//         return OfficerHTML(singleOfficer);
//     })
//     domElement.innerHTML = HTMLArray.join("");
// }

// //////////////////////////////////////////////////////////////
// eventHub.addEventListener("change", changeEvent => {
//     if (changeEvent.target.id === "officerSelect") {
//         // Get the name of the selected officer
//         const selectedOfficer = changeEvent.target.value

//         // Define a custom event
//         const customEvent = new CustomEvent("officerSelected", {
//             detail: {
//                 officer: selectedOfficer
//             }
//         })

//         // Dispatch event to event hub
//         eventHub.dispatchEvent(customEvent)
//     }
// })