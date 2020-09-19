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

const addWitnessToDOM = (witnessCollection) => {
    const domElement = document.querySelector(".witnessContainer");
    let HTMLArray = witnessCollection.map(singleWitness => {
        return Witness(singleWitness)
    }).join("")
    domElement.innerHTML += HTMLArray
}