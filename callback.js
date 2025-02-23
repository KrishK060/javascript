
// function getdata(dataId,getNextdata ){
// setTimeout(()=>{
//     console.log("data",dataId)
//     if(getNextdata){
//         getNextdata();
//     }
// },2000);
// }
// getdata(1,()=>{
//     getdata(2);
// });

// const getPromise=()=>{
//     return new Promise((resolve,reject)=>{
//         console.log("i am");
//         resolve("sucess")
//     })
// };

// let promise = getPromise();
// promise.then((res)=>{
//     console.log("promise fullfilled",res);
// });
// promise.catch((err)=>{
//     console.log("rejected",err);
// });
function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
  }
  
  function myCalculator(num1, num2) {
    let sum = num1 + num2;
    return sum;
  }
  
  let result = myCalculator(5, 5);
  myDisplayer(result);