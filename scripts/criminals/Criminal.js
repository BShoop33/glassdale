console.log("Criminal.js");

import { AlibiDialog } from './AlibiDialog.js'

const eventHub = document.querySelector(".container");

//C1
export const CriminalsHTML = (criminalObj) => {
    return `
    <section id="criminal-${criminalObj.id}" class="card-criminal">
            <ul>
                <li><h2 id="criminalCardName">${criminalObj.name}</h2></li>
                <br>
                <li id="criminalAge"><strong><p>Age: ${criminalObj.age}<p></strong></li>
                <li "criminalCrime"><strong><p>Crime: ${criminalObj.conviction}</p></strong></li>
                <li "criminalStart"><strong><p>Term start: ${new Date(criminalObj.incarceration.start).toLocaleDateString('en-US')}</p></strong></li>
                <li "criminalEnd"><strong><p>Term end: ${new Date(criminalObj.incarceration.end).toLocaleDateString('en-US')}</p></strong></li>
                <button id="associates--${criminalObj.id}">Alibis</button>
                ${AlibiDialog(criminalObj.id)}
            </ul>
        </section>
    `
};

//C2
eventHub.addEventListener("click", event => {
    if (event.target.id.startsWith("associates--")) {
        const [prefix, criminalID] = event.target.id.split("--")
        const alibiEvent = new CustomEvent("associatesClicked", {
            detail: {
                chosenCriminal: criminalID
            }
        })
        eventHub.dispatchEvent(alibiEvent);
    }
});