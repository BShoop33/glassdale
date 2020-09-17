console.log("ConvictionProvider.js");

let convictions = [];

//D1
export const useConvictions = () => convictions.slice();

//D2
export const getConvictions = () => {
    return fetch("https://criminals.glassdale.us/crimes")
        .then(response => response.json())
        .then(parsedResponse => {
            convictions = parsedResponse
        })
};