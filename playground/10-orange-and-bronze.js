// const fixage = (arrInt) => {
//     let newArr = []
//     const notValid = arrInt.every(i => {
//         return i < 18 || i > 60 
//     })
//     newArr = arrInt.filter(i => {
//         return i >= 18 && i <= 60
//     })

//     if(notValid){
//         return 'NA'
//     }
//     else{
//         return newArr.join(',')
//     }
// } 

// console.log(fixage([5,15,25,78,59,45]))
// console.log(fixage([1,3,3,2,11,6]))

// function optionalPow (x, y){
//     const choice = confirm('Do you wish to continue?')
//     if(choice){
//         return Math.pow(x,y)
//     }
//     return Math.pow(y,x)
// }
// optionalPow(2,3)

// const power = (a,b)=>{
//     let prod = 1
//     while(b != 0){
//       prod *= a
//       --b
//     }
//     return prod
// }

function transform(strArray){
    strArray = strArray.map(str => {
      	//encode special characters
        return encodeURIComponent(str)
    })
    return strArray
}

const arr = transform(['test.asp', 'My Love', 'From=the stars'])
console.log(arr)