console.log("CriminalList.js");

import { CriminalsHTML } from './Criminal.js'
import { getCriminals, useCriminals } from './CriminalProvider.js';

// //feeds the copy of the array of criminals to the addCriminalsToDom fucntion below
// export const CriminalsList = () => {
//     getCriminals()
//         .then(() => {
//             const criminalsArray = useCriminals();
//             addCriminalsToDom(criminalsArray);
//         });
// };

// //embeds the criminals array data into HTML with the formatting provided by the CriminalsHTML function in the Criminal.js sheet
// const addCriminalsToDom = (taco) => {
//     const domElement = document.querySelector(".criminalsContainer");
//     let criminalsHTMLArray = taco.map(singleCriminal => {
//         return CriminalsHTML(singleCriminal);
//     })

//     domElement.innerHTML = criminalsHTMLArray.join("");
// };


////////////////////////////////////////////////////////////////////////////////////////////////
const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".criminalsContainer")
// Listen for the custom event you dispatched in ConvictionSelect
let CriminalList = "";
eventHub.addEventListener('customEvent', event => {
    // Use the property you added to the event detail.
    if (event.detail.crimeThatWasChosen !== "0") {
        /*
            Filter the criminals application state down to the people that committed the crime
        */
        const matchingCriminals = CriminalList.filter(criminal => {
            return criminal.crime === event.detail.crimeThatWasChosen
        }
        )

        render(matchingCriminals)
        /*
            Then invoke render() and pass the filtered collection as
            an argument
        */
    }
})


const render = criminalCollection => {
    contentTarget.innerHTML = `
    <select class="dropdown" id="crimeSelect">
        <option value="0">Please select a crime...</option>
        ${
        criminalCollection.map(crimeObj => {
            const crime = CriminalList(crimeObj.name)
            return `<option class="filters_crime">${crime}</option>`
        })
        }
    </select >
`
}


// Render ALL criminals initally
const CriminalList = () => {
    getCriminals()
        .then(() => {
            const appStateCriminals = useCriminals()
            render(appStateCriminals)
        })
}

