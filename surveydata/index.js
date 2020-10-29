// stop alle data in een string variabele

// load that file in html BEFORE you load this file so it's available
const surveyAnswers = data
console.log("dit is alle data:", surveyAnswers)

//lets see whats inside one of these objects
console.log("dit is data van 1 student:", surveyAnswers[0])

//get something specific (select the index and then the property
// the brackets and string are important (spaties)
console.log("dit is data hoeveel ooms en tantes van 1 student:", surveyAnswers[3]['hoeveelheidOomsEnTantes'])

//let's list important subjects
// let belangrijksteOnderwerpen = []

//loops through all the answers
// for (answer in surveyAnswers){
//     belangrijksteOnderwerpen.push(surveyAnswers[answer].belangrijksteOnderwerpVanDezeTijd)
// }

// for (answer of surveyAnswers){
//     belangrijksteOnderwerpen.push(answer.belangrijksteOnderwerpVanDezeTijd)
// }

let column = "leuksteCMDVak"
let classesData = surveyAnswers.map(answers => answers[column].toLowerCase())


const deleteTrash = ["x", "kan niet kiezen", "idk",  ". daar waren geen losse vakken", "(jaar 1)", ":"]
deleteTrash.forEach(trash => {
    classesData = classesData.map(answers => answers.replace(trash, ""))
})

const deleteVID = [/vid\b/g];
deleteVID.forEach(woord => {
    classesData = classesData.map(answers => answers.replace(woord, "visual interface design"))
})

const deleteFE = [/front\Dend\b/g];
deleteFE.forEach(woord => {
    classesData = classesData.map(answers => answers.replace(woord, "frontend development"))
})

const deletePV = [/visual\b/g,  "profileren (visual design)"];
deletePV.forEach(woord => {
    classesData = classesData.map(answers => answers.replace(woord, "project visual"))
})


const replaceWordsList = {
    "npd": "new product development",
    "hci": "human computer interaction",
    "m&i": "maatschappij en interactie",
    "project (web)": "project web",
    "&": "en",
    "of": ",",
    "/": ",",
  }

  classesData = classesData.map(answers => replaceWords(answers))

  function replaceWords(answer) {
    let newAnswer = answer;
    // Loop over alle keys (bijv "npd") in vakCodes
    for (word of Object.keys(replaceWordsList)) {
      // Replace het woord met de bijbehorende waarde van het woord in het vervangWoordenLijst object
      // Dus bijv "npd" wordt "new product development"
      newAnswer = newAnswer.replace(word, replaceWordsList[word])
    }
    return newAnswer;
}


console.log("leukste cmd vak antwoorden:", classesData)

// const andSign = ["of", "/"]
// andSign.forEach(sign =>{
//     classesData = classesData.map(answers => answers.replace(sign, ","))
// })

// const deleteNPD = ["npd"]
// deleteNPD.forEach(woord => {
//     classesData = classesData.map(answers => answers.replace(woord, "new product development"))
// })

// const deleteHCI = ["hci"]
// deleteHCI.forEach(woord => {
//     classesData = classesData.map(answers => answers.replace(woord, "human computer interaction"))
// })

// const deleteMI = ["m&i"]
// deleteMI.forEach(woord => {
//     classesData = classesData.map(answers => answers.replace(woord, "maatschappij en interactie"))
// })