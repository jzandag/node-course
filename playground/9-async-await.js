const add = (a,b) => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(a+b)
        }, 3000)
    })
}

const doWork = async () => {
    const sum = await add(2,2)
    const sum2 = await add(sum,2)
    
    return sum2
}

doWork().then((res) => {
    console.log('result', res);
}).catch((err) => {
    console.log(err);
})