console.log("ConvictionSelect.js");


//imports the useConvictions and getConvictions function into this sheet from the COnvictionProvider.js sheet
import { useConvictions, getConvictions } from "./ConvictionProvider.js"

const eventHub = document.querySelector(".container")

const contentTarget = document.querySelector(".filters_crime")


// places a listening device on the eventhub to detect any change events and evaluates that if an event does change at the crimeSelect location in HTML, then a new custom event
// object named "detail" is created with the key for the value of that event being "crimeThatWasChosen". That custom event is then dispatched to the event hub
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


// sets .filters_crime as the place in the HTML where this code will go. Then sets the innerHTML with the select dropdown code 

const render = convictionsCollection => {
    contentTarget.innerHTML = `
        <select class="dropdown" id="crimeSelect">
            <option value="0">Please select a crime...</option>
            ${
        convictionsCollection.map(crimeObj => {
            const crime = crimeObj.name
            return `<option class="filters_crime">${crime}</option>`
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