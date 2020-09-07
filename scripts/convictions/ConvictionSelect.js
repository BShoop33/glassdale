import { useConvictions, getConvictions } from "./ConvictionProvider.js"

//creates a variable named eventHub and attaches it to the "container" class in the main portion of index.html
const eventHub = document.querySelector(".container")

//creates a variable named contentTarget and attaches it to the "filters_crime" class in index.html
const contentTarget = document.querySelector(".filters__crime")

//Attaches an eventlistener to the eventhub. The eventlistener listens for a change in the crimeSelect element, which is the conviction dropdown menu, and then dispatches the 
//value that the user selected to the eventhub
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

//Receives the convictions names from the useConvictions function and passes them individually as html dropdown options
const render = (convictionsCollection) => {
    contentTarget.innerHTML = `
        <select class="dropdown" id="crimeSelect">
            <option value="0">Please select a crime...</option>
            ${
        convictionsCollection.map(
            crimeObj => {
                const crime = crimeObj.name
                return `<option>${crime}</option>`
            })
        }
        </select >
    `
}

//exports and renders the copy of the array containing the crime names that were brought over in the useConvictions function from the ConvictionsProvider.js sheet
export const ConvictionSelect = () => {
    getConvictions()
        .then(() => {
            const convictions = useConvictions()
            render(convictions)
        })
}