
function maxValue(x)
{
//let pro = new Promise((resolve, reject) =>{
    return new Promise((l, m) =>{
    if(x>10){
        l(`${x} is greater than 10`)
    }
    else{
        m("X is smaller than 10")
    }
})
}

//pro.then(value=>console.log(`Success: ${value}`)).catch(error=>console.log(`Error: ${error}`))

//pro.then(success).catch(failure)

// maxValue(31).then(success).catch(failure)

function success(val)
{
    console.log(`Success: ${val}`)
}

function failure(fai)
{
    console.log(`Error: ${fai}`)
}


/*let pro1 = new Promise((resolve, reject)=>{
    console.log("Promise 1")
    resolve("Promise1 is Success")
})

let pro2 = new Promise((resolve, reject)=>{
    console.log("Promise 2")
    resolve("Promise2 is Success")
})

let pro3 = new Promise((resolve, reject)=>{
    console.log("Promise 3")
    //resolve("Promise3 is Success")
    reject("Promise3 is Failure")
})*/

//Promise.all([pro1, pro2, pro3]).then(value=>console.log(`Success: ${value}`)).catch(error=>console.log(`Error: ${error}`))

let pro1 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        console.log("Promise 1")
        resolve("Promise1 is Success")
        //reject("Promise1 is Failure")
    }, 1000)
})

let pro2 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        console.log("Promise 2")
        //resolve("Promise2 is Success")
        reject("Promise2 is Failure")
    }, 100);
})

let pro3 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        console.log("Promise 3")
        //resolve("Promise3 is Success")
        reject("Promise3 is Failure")
    },300)
})

//Promise.any([pro1, pro2, pro3]).then(value=>console.log(`Success: ${value}`))
//.catch(error=>console.log(`Error: ${error}`))
//.finally(()=>console.log("completed"));

//Promise.race([pro1, pro2, pro3]).then(value=>console.log(`Success: ${value}`))
//.catch(error=>console.log(`Error: ${error}`))

Promise.allSettled([pro1, pro2, pro3]).then(value=>console.log(value))
.catch(error=>console.log(error))