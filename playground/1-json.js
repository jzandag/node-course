const fs = require('fs')

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday'
// }

// const bookJson = JSON.stringify(book)

// fs.writeFileSync('1-json.json', bookJson);

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJson = dataBuffer.toString();
// const data = JSON.parse(dataJson)

// console.log(data.title);


const data = fs.readFileSync('1-json.json').toString()
const dataObj = JSON.parse(data)
dataObj.name = 'Zidrex'
dataObj.age = 21

fs.writeFileSync('1-json.json', JSON.stringify(dataObj))

console.log(dataObj);