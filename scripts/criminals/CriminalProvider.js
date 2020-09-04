console.log("CriminalProvider.js");

let criminals = [];

//creates a copy of the array returned from the json server by the getCriminals function below
export const useCriminals = () => {
    return criminals.slice();
};

//returns the criminals data from the json server and stores them in an array
export const getCriminals = () => {
    return fetch("https://criminals.glassdale.us/criminals")
        .then(response => response.json())
        .then(parsedResponse => {
            criminals = parsedResponse
        }
        );
};
