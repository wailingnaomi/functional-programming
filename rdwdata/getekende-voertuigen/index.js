// Endpoint geeft de dataset TIJDVAK: https://opendata.rdw.nl/Voertuigen/Open-Data-RDW-Gekentekende_voertuigen/m9d7-ebf2
// Endpoint returned de dagen 
const endpoint = 'https://opendata.rdw.nl/resource/m9d7-ebf2.json'
const selectedColumn = 'voertuigsoort'

getData(endpoint)
    // wachten op json is geladen
    .then(result => {
        return result.json()
    })

    // .then wacht totdat de data is geladen
    .then(RDWData => {
        console.log("all data of getekende voertuigen", RDWData)

        //de eerste selecteren van de data
        console.log("one datum", RDWData[0])

        // data ophalen van een geselecteerde kolom
        const columnArray = filterData(RDWData, selectedColumn)
        console.log("all data of one column", columnArray)

        // laat zien welke unieke waardes er zijn
        const uniqueColumnValues = listUnique(columnArray)
        console.log("unique values",uniqueColumnValues)

        //laat zien hoeveel van elke unieke waarde er is
        const test = countUnique(columnArray)
        console.log("count unique values", test)

        const specifiekeAuto = autos(RDWData, "Personenauto")
        console.log(specifiekeAuto)
    })


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
    // zoek de unieke waarde
    let uniqueArray = [];

    dataArray.map(item => {
        if(uniqueArray.indexOf(item) == -1){
            uniqueArray.push(item)
        }
    })
    return uniqueArray
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

// unieke waardes van een kolom returnen in een array
function countUnique(arr) {
    // zoek de unieke waarde
    let uniqueArray = [];

    for(var i = 0; i < arr.length; i++){
        //https://stackoverflow.com/questions/15052702/count-unique-elements-in-array-without-sorting/15052738#15052738
        uniqueArray[arr[i]] = 1 + (uniqueArray[arr[i]] || 0)
        
    }

    return uniqueArray

}


function autos(dataArr, specificValue){
    return dataArr.filter((item) => item["voertuigsoort"] == specificValue)
}

