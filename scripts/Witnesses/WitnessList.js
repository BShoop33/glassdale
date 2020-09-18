console.log("WitnessList.js")

import { getWitness, useWitness } from "./WitnessProvider.js"
import { Witness } from "./Witness.js";

export const WitnessList = () => {
    getWitness()
        .then(() => {
            const witnessArray = useWitness();
            addWitnessToDOM(witnessArray);
        })
}
const domElement = document.querySelector(".witnessContainer");
const addWitnessToDOM = (witnessCollection) => {

    let HTMLArray = witnessCollection.map(singleWitness => {
        return Witness(singleWitness)
    }).join("")
    domElement.innerHTML += HTMLArray
}