console.log("ConvictionProvider.js");

let convictions = [];

//exports a copy of the criminals objects fetched by getConvictions
export const useConvictions = () => convictions.slice()

//exports the fetched criminals from the json server
export const getConvictions = () => {
    return fetch("https://criminals.glassdale.us/crimes")
        .then(response => response.json())
        .then(parsedResponse => {
            convictions = parsedResponse
        })
}