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

    } else {

        render(useCriminals())
    }
})

// Render ALL criminals initally
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


        // })


    // //embeds the criminals array data into HTML with the formatting provided by the CriminalsHTML function in the Criminal.js sheet
    //     export const addCriminalsToDom = (taco) => {
    //         const domElement = document.querySelector(".criminalsContainer");
    //         let criminalsHTMLArray = taco.map(singleCriminal => {
    //             return CriminalsHTML(singleCriminal);
    //         })

    //         domElement.innerHTML = criminalsHTMLArray.join("");
    //     }
    // })



    // const render = criminalCollection => {
    //     const domElement = = document.querySelector(".criminalsContainer");
    //     contentTarget.innerHTML = `
    // ${CriminalsHTML}
    // `
    // }