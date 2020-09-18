console.log("Witness.js")

export const Witness = (witnessObj) => {
    return `
    <section id="witness==${witnessObj.id}" class="card-witness">
    <p><strong>Name:</stron> ${witnessObj.name}</p>
    <p>Statement: ${witnessObj.statements}</p>
</section>
`
}