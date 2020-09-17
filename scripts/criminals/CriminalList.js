console.log("CriminalList.js");

import { CriminalsHTML } from './Criminal.js'
import { getCriminals, useCriminals } from './CriminalProvider.js'

const eventHub = document.querySelector(".container");

//B1
eventHub.addEventListener("crimeChosen", event => {
    if (event.detail.crimeThatWasChosen !== "0") {
        const matchingCriminals = useCriminals().filter(criminal => {
            return criminal.conviction === event.detail.crimeThatWasChosen
        })
        render(matchingCriminals)
    }
    else {
        render(useCriminals())
    }
});

//B2
export const CriminalList = () => {
    getCriminals()
        .then(() => {
            const appStateCriminals = useCriminals()
            render(appStateCriminals)
        })
};

//B3
const render = (taco) => {
    const domElement = document.querySelector(".criminalsContainer")
    let criminalsHTMLArray = taco.map(singleCriminal => {
        return CriminalsHTML(singleCriminal);
    })
    domElement.innerHTML = criminalsHTMLArray.join("");
};

// eventHub.addEventListener("officerSelected", event => {
//     if (event.detail.officer !== "0") {
//         const matchedCriminals = useCriminals().filter(criminal => {
//             return criminal.arrestingOfficer === event.detail.officer
//         })
//         render(matchedCriminals)
//     }
//     else {
//         render(useCriminals())
//     }
// });

// export const OfficerSelect = () => {
//     getOfficer()
//         .then(() => {
//             const appStateOfficers = useOfficers()
//             render(appStateOfficers)
//         })
// };