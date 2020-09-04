console.log("ConvictionSelect.js");

//imports the useConvictions and getConvictions function into this sheet from the ConvictionProvider.js sheet
import { useConvictions, getConvictions } from "./ConvictionProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".filters__crime")

eventHub.addEventListener("change", event => {

    if (event.target.id === "crimeSelect") {

        const customEvent = new CustomEvent("crimeChosen", {
            detail: {
                crimeThatWasChosen: event.target.value
            }
        })
        eventHub.dispatchEvent(customEvent)
    }
})

// Sets the innerHTML with the select dropdown code 
const render = (convictionsCollection) => {
    contentTarget.innerHTML = `
        <select class="dropdown" id="crimeSelect">
            <option value="0">Please select a crime...</option>
            ${
        convictionsCollection.map(
            crimeObj => {
                const crime = crimeObj.name
                return `<option value=${crime}>${crime}</option>`
            })
        }
        </select >
    `
}

//renders the useConvictions array of crimes
export const ConvictionSelect = () => {
    getConvictions()
        .then(() => {
            const convictions = useConvictions()
            render(convictions)
        })
}
