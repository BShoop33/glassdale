console.log("CriminalList.js");

import { CriminalsHTML } from './Criminal.js'
import { getCriminals, useCriminals } from './CriminalProvider.js';

//feeds the copy of the array of criminals to the addCriminalsToDom fucntion below
export const CriminalsList = () => {
    getCriminals()
        .then(() => {
            const criminalsArray = useCriminals();
            addCriminalsToDom(criminalsArray);
        });
};

//embeds the criminals array data into HTML with the formatting provided by the CriminalsHTML function in the Criminal.js sheet
const addCriminalsToDom = (taco) => {
    const domElement = document.querySelector(".criminalsContainer");
    let criminalsHTMLArray = taco.map(singleCriminal => {
        return CriminalsHTML(singleCriminal);
    })

    domElement.innerHTML = criminalsHTMLArray.join("");
};