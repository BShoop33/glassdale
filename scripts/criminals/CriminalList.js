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
})

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