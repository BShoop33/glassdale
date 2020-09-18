console.log("CriminalProvider.js");

let criminals = [];

//A1
export const useCriminals = () => {
    return criminals.slice();
}

//A2
export const getCriminals = () => {
    return fetch("https://criminals.glassdale.us/criminals")
        .then(response => response.json())
        .then(parsedResponse => {
            criminals = parsedResponse
        })
};