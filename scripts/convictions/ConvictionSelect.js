console.log("ConvictionSelect.js");

import { useConvictions, getConvictions } from "./ConvictionProvider.js"


export const ConvictionSelect = () => {
    getConvictions()
        .then(() => {
            const convictions = useConvictions()
            render(convictions)
        })
}

const contentTarget = document.querySelector(".convictionsContainer")


const render = convictionsCollection => {
    /*
        Use interpolation here to invoke the map() method on
        the convictionsCollection to generate the option elements.
        Look back at the example provided above.
    */
    contentTarget.innerHTML = `
        <select class="dropdown" id="crimeSelect">
            <option value="0">Please select a crime . . . </option>
            ${
        convictionsCollection.map(crimeObj => {
            const crime = crimeObj.name
            return `<option>${crime}</option>`
        })
        }
        </select >
    `
}


















// const render = convictionsCollection => {
//     contentTarget.innerHTML = `
//          <select class="dropdown" id="crimeSelect">
//          <option value="0">Please enter the crime . . . </option>
//              ${
//         useConvictions.map(
//             crimeObj => {
//                 const crime = crimeObj.name
//                 return crime
//             }
//         )
//         }
//          </select >
//      `
// }


























//import { getCriminals, useCriminals } from './criminals/CriminalProvider.js'

// console.log("ConvictionSelect.js");

// import { getCriminals, useCriminals } from '/scripts/criminals/CriminalProvider.js'

// export const convictionList = useCriminals().map(
//     crimeObject => {
//         const pulledCrime = crimeObject.name
//         return pulledCrime
//     }
// )

// console.log("ConvictionSelect.js");

// import { ConvictionHTML } from './Convictions.js'
// import { useConvictions, getConvictions } from './ConvictionProvider.js'

// export const ConvictionsList = () => {
//     getConvictions()
//         .then(() => {
//             const convictionsArray = useConvictions();
//             addConvictionsToDom(convictionsArray);
//         });
// };

// // //embeds the criminals array data into HTML with the formatting provided by the CriminalsHTML function in the Criminal.js sheet
// const addConvictionsToDom = (taco) => {
//     const domElement = document.querySelector(".convictionsContainer");
//     let convictionsHTMLArray = taco.map(singleConviction => {
//         return ConvictionHTML(singleConviction);
//     })

//     domElement.innerHTML = convictionsHTMLArray.join("");