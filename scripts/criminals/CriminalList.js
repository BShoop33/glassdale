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

eventHub.addEventListener("officerSelected", event => {
    // How can you access the officer name that was selected by the user?
    if (event.detail.officer !== "0") {
        const matchedCriminals = useCriminals().filter(criminal => {
            return criminal.arrestingOfficer === event.detail.officer
        })
        render(matchedCriminals)
    }
    else {
        render(useCriminals())
    }

})

export const CriminalList = () => {
    getCriminals()
        .then(() => {
            const appStateCriminals = useCriminals()
            render(appStateCriminals)
        })
}

export const OfficerSelect = () => {
    getOfficer()
        .then(() => {
            const appStateOfficers = useOfficers()
            render(appStateOfficers)
        })
}
//////////////////////////////////////////////////////////
const render = (taco) => {

    const domElement = document.querySelector(".criminalsContainer")
    let criminalsHTMLArray = taco.map(singleCriminal => {
        return CriminalsHTML(singleCriminal);
    })
    domElement.innerHTML = criminalsHTMLArray.join("");
}