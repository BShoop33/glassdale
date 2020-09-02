console.log("ConvictionProvider.js");

let convictions = []

//creates a copy of the crime objects stored in the convictions array and exports that copied array in the useConvictions function
export const useConvictions = () => convictions.slice()

//fetches the list of crimes objects from the json server and stores them in the convictions array
export const getConvictions = () => {
    return fetch("https://criminals.glassdale.us/crimes")
        .then(response => response.json())
        .then(parsedResponse => {
            convictions = parsedResponse
        });
};







































// console.log("ConvictionProvider.js");

// let convictions = []

// export const useConvictions = () => convictions.slice()

// export const getConvictions = () => {

//     // Load database state into application state with a fetch().
//     // Make sure the last`then()` sets the local`convictions`
//     // variable to what is in the response from the API.

// }

// console.log("ConvictionProvider.js");

// let convictions = [];

// export const useConvictions = () => {
//     return convictions.slice();
// };

// //returns the criminals data from the json server and stores them in an array
// export const getConvictions = () => {
//     return fetch("https://criminals.glassdale.us/crimes")
//         .then(response => response.json())
//         .then(parsedResponse => {
//             convictions = parsedResponse
//         });}
