let criminals = [];

export const useCriminals = () => criminals.slice()

export const getCriminals = () => {
    return fetch("https://criminals.glassdale.us/criminals")
        .then(response => response.json())
        .then(parsedResponse => {
            criminals = parsedResponse
        })
};