// Endpoint geeft de dataset TIJDVAK: https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-TIJDVAK/ixf8-gtwq
// Endpoint returned de dagen 
const endpoint = 'https://opendata.rdw.nl/resource/ixf8-gtwq.json'
const selectedColumn = 'daytimeframe'

getData(endpoint)
    // wachten op json is geladen
    .then(result => {
        return result.json()
    })

    // .then wacht totdat de data is geladen
    .then(RDWData => {
        console.log("alle data van tijdvak", RDWData)

        //de eerste selecteren van de data
        console.log("one datum", RDWData[0])

        // data ophalen van een geselecteerde kolom
        const dayTimeFrameArray = filterData(RDWData, selectedColumn)
        console.log(dayTimeFrameArray)

        //een andere kolom ophalen want filterdata is een herbruikbare functie
        // const maxDurationArray = filterData(RDWData, 'maxdurationright')
        // console.log(maxDurationArray)

        // laat zien welke unieke waardes er zijn
        const uniqueDays = listUnique(dayTimeFrameArray)
        console.log("unieke waardes",uniqueDays)

        // laat zien hoevaak ZATERDAG voorkomt
        const emptyStrings = countValuesInArray(dayTimeFrameArray, "ZATERDAG")
        console.log(emptyStrings)
    })


// // function getdata (async function)
// async function getData (url){
//     // url fetchen/meegegeven
//     const response = await fetch(url)
//     // van die data omgezet in json
//     const data = await response.json()
//     return data
// }

//PROMISE fetch data van een url
function getData(url) {
    return fetch(url)
}


// Geeft alles waardes van een specifieke kolom van de data in een array
function filterData(dataArray, column) {
    // door alle data heen gaan en alleen de geselecteerde kolom geven
    return dataArray.map(item => item[column])
}

// unieke waardes van een kolom returnen in een array
function listUnique(dataArray) {
    // logica wat unieke waardes zoekt
    let uniqueArray = []
    dataArray.map(item => {
        if(uniqueArray.indexOf(item) == -1){
            uniqueArray.push(item)
        }
    })
    return uniqueArray
}

//vergelijk twee arrays en return de waardes dat in array 1 zit maar niet in array 2
function compareArray(array1, array2){
    return valuesOnlyPresentInArray1
}

//return hoevaak een waarde voorkomt in de array
function countValuesInArray(valueArray, specificValue){
    let count = 0
    valueArray.forEach(item => {
        if(item == specificValue){
            count ++
        }
    })
    return count
}