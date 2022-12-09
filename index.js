console.log("テスト");

//jsでFizz Buzzを書いてみましょう

    // for (let i = 1; i <= 30; i++) {

    //     if(i % 15 === 0){
    //         console.log('FizzBuzz');
    //         } else if(i % 3 === 0){
    //         console.log('Fizz');
    //         } else if(i % 5 === 0){
    //         console.log('Buzz');
    //         } else {
    //         console.log(i);
    //         }
    // }
    
//     console.log(1)
//     let test = setTimeout(function(){
//         console.log(2)
//         ,1000})
//     console.log(3)

// new Promise(function(resolve){
//     setTimeout(function(){
//         console.log(11)
//         resolve()        
//     },2000)
// })
// .then(function(){
//     return new Promise(function(resolve){
//         setTimeout(function(){
//             console.log(22)
//             resolve()
//         },2000)
//     })
// })

// const timer = (time,text)=>{
//     const promise = new Promise(resolve=>{
//         setTimeout(()=>{
//             console.log(text)
//             resolve()
//         },time)
//     })
//     return promise;
// }

// timer(500,'あああ')
// .then(()=>timer(1000,'いいい'))
// .then(()=>timer(500,'ううう'))

// const func = async function(){
//     await timer(500,"あああ")
//     await timer(500,"いいい")
//     await timer(500,"ううう")
// }
// func()

// const timer = (time,text)=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             if(time > 500){
//                 resolve(`${time}解決`)
//             }
//             if (time <= 500){
//                 reject(`${time}拒否`)
//             }
//             }, time);
//         })
//     }

    // const func = async function(){
    //     try{
    //         const response1 = await timer(600,"あああ")
    //         console.log(response1)
    //         const response2 = await timer(700,"いいい")
    //         console.log(response2)
    //         const response3 = await timer(300,"いいい")
    //         console.log(response3)
    //     }catch(e){
    //         console.log(e)
    //     }finally{
    //         console.log(1000,"終わり")
    //     }
    //     }
    
    //     func()
    
        // const func = async function(){
        //     try{
        //         const response1 = await timer(600,"あああ")
        //         console.log(response1)
        //         const response2 = await timer(700,"いいい")
        //         console.log(response2)
        //         const response3 = await timer(300,"いいい")
        //         console.log(response3)
        //         const response4 = await timer(400,"えええ")
        //         console.log(response4)
        //     }catch(e){
        //         console.log(e)
        //     }finally{
        //         console.log(1000,"終わり")
        //     }
        // }
        
        //     func()

// (async function(){
//     const array = [
//         timer(600,"あああ"),
//         timer(700,"いいい"),
//         timer(700,"ううう"),
//     ]
//     const res = await Promise.all(array)
//         console.log(res)
// }
// )();

// (async function(){
//     const array = [
//         timer(600,"あああ"),
//         timer(700,"いいい"),
//         timer(700,"ううう"),
//     ]
//     try{
//         const res = await Promise.all(array)
//         console.log(res)
//     }catch(e){
//         console.log(e);
//     }
// })();


async function getFetch(){
    const res = await fetch('https://www.googleapis.com/books/v1/volumes?q=%E5%A4%8F%E7%9B%AE%E6%BC%B1%E7%9F%B3');
    console.log(res);
    const date = await res.json();
    console.log(date);
}
