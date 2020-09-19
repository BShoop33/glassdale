console.log("Witness.js")

export const Witness = (witnessObj) => {
    return `
    <section id="witness==${witnessObj.id}" class="card-witness">
    <p id="witnessName"><strong> ${witnessObj.name}</strong></p>
    <p id="witnessStatement"><strong>Statement:</strong> ${witnessObj.statements}</p>
</section>
`
}