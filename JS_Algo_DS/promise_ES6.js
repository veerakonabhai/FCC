/*
* you use it to make a promise to do something, usually asynchronously. 
* when the task completes, you either fulfill your promise or fail to do so.
* Promise is a constructor function, so you need to use the new keyword to create one.
* It takes a function, as its argument, with two parameters - resolve and reject
*/
const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer is set to false to represent an unsuccessful response from a server
    let responseFromServer = false;
      
    if(responseFromServer) {
      resolve("We got the data");
    } else {  
      reject("Data not received");
    }
  });
  //The then method is executed immediately after your promise is fulfilled with resolve.
  //result comes from the argument given to the resolve method.
  makeServerRequest.then(result => {
    console.log(result);
  });
  //catch is the method used when your promise has been rejected.
  //error is the argument passed in to the reject method.
  makeServerRequest.catch(error =>{
    console.log(error);
  });