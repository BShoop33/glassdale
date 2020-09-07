console.log("CriminalList.js");

import { CriminalsHTML } from './Criminal.js'
import { getCriminals, useCriminals } from './CriminalProvider.js'

const eventHub = document.querySelector(".container")

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
})
//////////////////////////////////////////////////////////////////////////////////
eventHub.addEventListener("officerSelect", event => {
    // How can you access the officer name that was selected by the user?
    const officerName = event.detail.officer

    // How can you get the criminals that were arrested by that officer?
    const criminals = useCriminals()
    criminals.map(
        criminalObject => {
            if (criminalObject.arrestingOfficer === officerName) {
                return true
            }
        }
    )
})
//////////////////////////////////////////////////////////////////////////////////

export const CriminalList = () => {
    getCriminals()
        .then(() => {
            const appStateCriminals = useCriminals()
            render(appStateCriminals)
        })
}

const render = (taco) => {

    const domElement = document.querySelector(".criminalsContainer")
    let criminalsHTMLArray = taco.map(singleCriminal => {
        return CriminalsHTML(singleCriminal);
    })
    domElement.innerHTML = criminalsHTMLArray.join("");
}

