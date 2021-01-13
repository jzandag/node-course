// setTimeout(() =>{
//     console.log('2 seconds is up');
// }, 2000)

// const name = ['Zid', 'Dess', 'Amarish', 'Tom']
// const shortNames = name.filter(t => {
//     return name.length <= 4;
// });

// const geocode = (address, callback) => {
    
//     setTimeout(() => {
//         const data = {
//             longitude: 0,
//             latitude: 0
//         }
//         callback(data) 
//     }, 2000);

// }
// geocode('Antipolo Philippines', (data) =>{
//     console.log(data);
// });


//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!
const add = (x, y , callback) => {
    setTimeout(() =>{
        callback(x+y)
    }, 2000);
}

add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})

const doWorkCallback = (callback) => {
    
    setTimeout(() => {
        callback(undefined, 'eyy')
    }, 2000 )
}

doWorkCallback( (error, result) => {
    if(error)
        return console.log(error);
    console.log(result);
})

