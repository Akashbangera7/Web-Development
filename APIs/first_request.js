// var request = require("request");
// request('https://jsonplaceholder.typicode.com/users/2', (error, response, body) => { //arrow function 
//     // eval(require('locus'));
//     if(!error && response.statusCode == 200){
//         var parsedData = JSON.parse(body);//as the json which we get is string, we need to parse it to make an object
//         // console.log(parsedData.name + " lives in " +parsedData.address.city);
//         //OR
//         console.log(`${parsedData.name} lives in ${parsedData.address.city}`);//es6 TEMPLATE LITERAL
//     }
// });





//using promise

const rp = require('request-promise');
rp('https://jsonplaceholder.typicode.com/users/2').then((body) => {
   const parsedData = JSON.parse(body);
   console.log(`${parsedData.name} lives in ${parsedData.address.city}`);
}).catch((err) => {
   console.log("error", err); 
});
