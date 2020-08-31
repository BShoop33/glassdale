console.log("Criminal.js");


export const CriminalsHTML = (criminalObj) => {
    return `
        <section id="criminal-${criminalObj.id}" class="card-criminal">
            <h2>${criminalObj.name}</h2>
            <p>Age: ${criminalObj.age}<p>
            <p>Crime: ${criminalObj.conviction}</p>
            <p>Start: ${new Date(criminalObj.incarceration.start).toLocaleDateString('en-US')}</p>
            <p>End: ${new Date(criminalObj.incarceration.end).toLocaleDateString('en-US')}</p>
        </section>
    `
};