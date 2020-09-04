console.log("Criminal.js");

export const CriminalsHTML = (criminalObj) => {
    return `
        <section id="criminal-${criminalObj.id}" class="card-criminal">
            <ul>
                <li><h2>${criminalObj.name}</h2></li>
                <br>
                <li><strong><p>Age: ${criminalObj.age}<p></strong></li>
                <li><strong><p>Crime: ${criminalObj.conviction}</p></strong></li>
                <li><strong><p>Term start: ${new Date(criminalObj.incarceration.start).toLocaleDateString('en-US')}</p></strong></li>
                <li><strong><p>Term end: ${new Date(criminalObj.incarceration.end).toLocaleDateString('en-US')}</p></strong></li>
            </ul>
        </section>
    `
}